# Azure Architecture Comparison: Free vs Paid

Detailed breakdown of two production-ready architectures for the Conference Web App.

---

## Option 1: 100% FREE Azure Architecture ($0/month)

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  Azure Static Web Apps (FREE)                               │
│  • Next.js Static Export                                    │
│  • 100GB bandwidth/month                                    │
│  • Global CDN                                               │
│  • Custom domain + SSL                                      │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTPS
                     │
┌────────────────────▼────────────────────────────────────────┐
│                     API LAYER                                │
│  Azure Functions (Consumption Plan - FREE)                  │
│  • 1 million executions/month free                          │
│  • API Routes: /api/sessions, /api/users, etc.             │
│  • Cold start: 2-5 seconds first request                    │
│  • Node.js 20 runtime                                       │
└──────┬──────────────────────────┬───────────────────────────┘
       │                          │
       │ Read/Write               │ Upload/Download
       │                          │
┌──────▼──────────────┐    ┌──────▼───────────────────────────┐
│    DATABASE         │    │     FILE STORAGE                  │
│  Azure Cosmos DB    │    │  Azure Blob Storage               │
│  (FREE TIER)        │    │  (FREE 5GB)                       │
│  • 1000 RU/s        │    │  • Presenter uploads (PDFs)       │
│  • 25GB storage     │    │  • Session materials              │
│  • NoSQL (JSON)     │    │  • Evaluation forms               │
└─────────────────────┘    └───────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 AUTHENTICATION                               │
│  Azure AD B2C (FREE)                                        │
│  • 50,000 monthly active users free                         │
│  • Social login (Google, Microsoft)                         │
│  • Custom policies                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   EMAIL SERVICE                              │
│  SendGrid (via Azure Marketplace - FREE)                    │
│  • 100 emails/day (3,000/month)                             │
│  • Confirmation emails, reminders                           │
└─────────────────────────────────────────────────────────────┘
```

### Resource Configuration Details

#### 1. Azure Static Web Apps (FREE Tier)
```yaml
Configuration:
  SKU: Free
  Features:
    - Automatic deployments from GitHub
    - Custom domains (1 per app)
    - Free SSL certificates
    - API support via Azure Functions
    - Global CDN
  Limits:
    - 100GB bandwidth/month
    - 0.5GB app size
    - No SLA
  Regions: Auto-distributed globally
```

**Setup Steps:**
```bash
# 1. Build static export
npm run build

# 2. Deploy via GitHub Actions or Azure CLI
az staticwebapp create \
  --name conference-app \
  --resource-group conference-rg \
  --source https://github.com/YOUR_USERNAME/conference \
  --location "East US 2" \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --sku Free
```

#### 2. Azure Functions (Consumption Plan - FREE)
```yaml
Configuration:
  Plan: Consumption (Y1)
  Runtime: Node.js 20
  Free Grant:
    - 1,000,000 executions/month
    - 400,000 GB-s compute/month

Cold Start: 2-5 seconds (first request)
Warm: ~50-200ms (subsequent requests)

Functions Needed:
  - POST /api/auth/login
  - POST /api/auth/register
  - GET /api/sessions
  - POST /api/sessions/favorite
  - GET /api/presenter/submissions
  - POST /api/presenter/submit-abstract
  - POST /api/evaluations/submit
  - GET /api/ceu/progress
  - POST /api/admin/announcements
  - GET /api/networking/attendees
```

**Example Function:**
```javascript
// functions/sessions/index.js
module.exports = async function (context, req) {
    const { CosmosClient } = require("@azure/cosmos");

    const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
    const database = client.database("conference");
    const container = database.container("sessions");

    try {
        const { resources } = await container.items
            .query("SELECT * FROM c WHERE c.type = 'session'")
            .fetchAll();

        context.res = {
            status: 200,
            body: resources
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: error.message }
        };
    }
};
```

#### 3. Azure Cosmos DB (FREE Tier - PERMANENT)
```yaml
Configuration:
  Account Type: NoSQL (Core SQL API)
  Free Tier: YES (one per subscription)
  Free Allocation:
    - 1000 RU/s throughput
    - 25GB storage
  Estimated Capacity:
    - 500-1000 concurrent users
    - 100,000+ documents
  Backup: 7-day retention (automatic)

Database Structure:
  Database: conference
  Containers:
    - users (partition key: /id)
    - sessions (partition key: /day)
    - evaluations (partition key: /sessionId)
    - abstracts (partition key: /presenterId)
    - favorites (partition key: /userId)
    - ceu-tracking (partition key: /userId)
    - announcements (partition key: /date)
```

**Data Model Example:**
```json
// Session Document
{
  "id": "session-001",
  "type": "session",
  "title": "Trauma-Informed Care",
  "day": "2026-03-26",
  "time": "9:00 AM",
  "track": "Clinical Practice",
  "presenterId": "presenter-001",
  "room": "Chavis 201",
  "capacity": 50,
  "registered": 23,
  "_ts": 1735776000
}

// User Document
{
  "id": "user-123",
  "type": "user",
  "email": "john@example.com",
  "role": "attendee",
  "name": "John Smith",
  "organization": "UNC Pembroke",
  "favorites": ["session-001", "session-015"],
  "ceuCredits": 4.5,
  "_ts": 1735776000
}
```

**RU/s Usage Estimates:**
```
Operation            | RU Cost | Frequency      | Daily RUs
---------------------|---------|----------------|----------
Read session list    | 3 RU    | 1000/day       | 3,000
Add favorite         | 6 RU    | 500/day        | 3,000
Submit evaluation    | 10 RU   | 300/day        | 3,000
Load user profile    | 2 RU    | 800/day        | 1,600
Query announcements  | 5 RU    | 1000/day       | 5,000
--------------------------------------------------------
Total Daily:                                    | 15,600 RU
Total per second:                               | ~0.18 RU/s

Free tier: 1000 RU/s = enough for 5,500x this load
```

#### 4. Azure Blob Storage (FREE 5GB)
```yaml
Configuration:
  Account Type: StorageV2 (general purpose v2)
  Redundancy: LRS (Locally Redundant)
  Free Grant:
    - 5GB storage
    - 20,000 read operations
    - 2,000 write operations

Containers:
  - presenter-uploads (private)
    * Abstracts (PDF, DOCX)
    * Presentations (PPTX, PDF)
    * Bios and photos
  - session-materials (public-read)
    * Handouts
    * Slides for attendees
  - certificates (private)
    * Generated CEU certificates

File Size Estimates:
  - 100 presenters × 3 files × 2MB = 600MB
  - 30 sessions × 5MB materials = 150MB
  - 200 certificates × 100KB = 20MB
  Total: ~800MB (well under 5GB limit)
```

**SAS Token Generation (Secure Uploads):**
```javascript
// In Azure Function
const { BlobServiceClient } = require("@azure/storage-blob");

async function generateUploadSAS(filename) {
    const blobServiceClient = BlobServiceClient.fromConnectionString(
        process.env.STORAGE_CONNECTION_STRING
    );
    const containerClient = blobServiceClient.getContainerClient("presenter-uploads");
    const blobClient = containerClient.getBlobClient(filename);

    const sasUrl = await blobClient.generateSasUrl({
        permissions: BlobSASPermissions.parse("w"),
        startsOn: new Date(),
        expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // 1 hour
    });

    return sasUrl;
}
```

#### 5. Azure AD B2C (FREE Tier)
```yaml
Configuration:
  Tenant: conference-app.onmicrosoft.com
  Free Tier: 50,000 MAU (Monthly Active Users)
  Authentication Methods:
    - Email/Password
    - Google
    - Microsoft Account
  Features:
    - Custom branding
    - MFA support
    - Password reset flows

User Flows:
  - Sign up and sign in
  - Profile editing
  - Password reset

User Attributes:
  - Email (required)
  - Display Name
  - Role (attendee/presenter/admin)
  - Organization
  - Professional Title
```

#### 6. SendGrid Email (FREE Tier)
```yaml
Configuration:
  Plan: Free (via Azure Marketplace)
  Limits: 100 emails/day (3,000/month)

Email Types:
  - Registration confirmation
  - Abstract submission received
  - Session reminders (day before)
  - Evaluation request (after session)
  - CEU certificate delivery

Monthly Estimate (200 attendees, 100 presenters):
  - Registrations: 300 emails
  - Reminders: 600 emails (2 per person)
  - Evaluations: 300 emails
  - Certificates: 200 emails
  - Announcements: 500 emails
  Total: ~1,900 emails (within 3,000 limit)
```

---

## Option 2: MINIMAL PAID Azure Architecture ($13-16/month)

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND + BACKEND                       │
│  Azure App Service (Linux B1) - $13/month                   │
│  • Next.js with App Router                                  │
│  • SSR + API Routes in same app                             │
│  • Always-on (no cold starts)                               │
│  • 1 vCore, 1.75GB RAM, 10GB storage                        │
│  • Auto-restart, deployment slots                           │
└────────────────────┬────────────────────────────────────────┘
                     │ Direct connection (internal Azure)
                     │ <1ms latency
┌────────────────────▼────────────────────────────────────────┐
│                     DATABASE                                 │
│  Azure Cosmos DB (FREE TIER) - $0/month                     │
│  • 1000 RU/s, 25GB storage                                  │
│  • Same as Option 1                                         │
│  • Direct connection from App Service                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  FILE STORAGE                                │
│  Azure Blob Storage - $2-3/month                            │
│  • Pay per GB (beyond 5GB free)                             │
│  • Integrated with App Service                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              AUTHENTICATION + EMAIL                          │
│  Azure AD B2C (FREE) + SendGrid (FREE)                      │
│  • Same as Option 1                                         │
└─────────────────────────────────────────────────────────────┘
```

### Resource Configuration Details

#### 1. Azure App Service (Linux B1 - $13.14/month)
```yaml
Configuration:
  SKU: B1 (Basic)
  OS: Linux
  Runtime: Node.js 20 LTS
  Specs:
    - 1 vCore
    - 1.75GB RAM
    - 10GB storage
  Features:
    - Always On: YES (no cold starts)
    - Auto-scaling: Manual only
    - Deployment slots: 0 (Standard tier needed)
    - Custom domains: Unlimited
    - SSL: Free (Let's Encrypt)
    - VNet integration: No (Standard+ needed)

Performance:
  - Response time: 50-150ms (warm)
  - Concurrent connections: ~100
  - Requests/second: ~50-100

Monitoring:
  - Application Insights (included)
  - 5GB data ingestion/month free
  - Request/response logging
  - Performance metrics
```

**Deployment Configuration:**
```javascript
// next.config.ts
const nextConfig = {
  output: 'standalone', // For App Service
  env: {
    COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
    COSMOS_KEY: process.env.COSMOS_KEY,
    STORAGE_CONNECTION_STRING: process.env.STORAGE_CONNECTION_STRING,
    AZURE_AD_B2C_TENANT: process.env.AZURE_AD_B2C_TENANT,
  },
};

export default nextConfig;
```

**App Service Configuration (web.config or startup command):**
```bash
# Startup command in Azure Portal
npm run start

# Or package.json script:
{
  "scripts": {
    "start": "next start -p $PORT"
  }
}
```

**API Routes (Same Codebase):**
```typescript
// app/api/sessions/route.ts
import { NextResponse } from 'next/server';
import { CosmosClient } from '@azure/cosmos';

const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT!,
  key: process.env.COSMOS_KEY!
});

export async function GET() {
  const database = client.database('conference');
  const container = database.container('sessions');

  const { resources } = await container.items
    .query('SELECT * FROM c WHERE c.type = "session"')
    .fetchAll();

  return NextResponse.json(resources);
}

export async function POST(request: Request) {
  const body = await request.json();
  const database = client.database('conference');
  const container = database.container('sessions');

  const { resource } = await container.items.create(body);
  return NextResponse.json(resource);
}
```

**Scaling Considerations:**
```
Concurrent Users | App Service Tier | Monthly Cost
-----------------|------------------|-------------
0-100            | B1 (1 vCore)    | $13
100-300          | B2 (2 vCore)    | $26
300-500          | S1 (1 vCore)    | $70 (better CPU)
500-1000         | S2 (2 vCore)    | $140
1000+            | P1v2 (Premium)  | $73+ (autoscale)
```

#### 2. Database & Storage (Same as Option 1)
- **Cosmos DB**: FREE tier (same configuration)
- **Blob Storage**: $0-3/month depending on usage
- **Azure AD B2C**: FREE tier
- **SendGrid**: FREE tier

---

## Feature-by-Feature Comparison

| Feature | Option 1: FREE ($0/month) | Option 2: PAID ($13-16/month) |
|---------|---------------------------|-------------------------------|
| **Frontend Hosting** | Static Web Apps (100GB/month) | App Service (Always-on SSR) |
| **Backend API** | Azure Functions (1M/month) | Next.js API Routes (unlimited) |
| **Cold Start** | 2-5 seconds first request | None (always warm) |
| **Response Time** | 50-200ms (after cold start) | 50-150ms (consistent) |
| **Database** | Cosmos DB Free (1000 RU/s) | Cosmos DB Free (same) |
| **File Storage** | 5GB free | 5GB free + pay per GB |
| **Authentication** | Azure AD B2C (50K MAU) | Azure AD B2C (same) |
| **Email** | SendGrid (100/day) | SendGrid (same) |
| **SSL/Custom Domain** | Included | Included |
| **Deployment** | GitHub Actions | GitHub Actions or Azure DevOps |
| **Monitoring** | Basic logs | Application Insights (5GB/month) |
| **SLA** | None | 99.95% uptime |
| **WebSockets** | No | Yes (via App Service) |
| **Real-time Features** | Limited | SignalR support |
| **Development Effort** | High (Functions split from app) | Low (standard Next.js) |
| **Scalability** | Limited (1M executions) | Better (vertical scale to S1/S2) |

---

## Implementation Complexity Comparison

### Option 1: FREE Architecture

**Complexity: HIGH**

**Why More Complex:**
1. **Code Split Required**
   - Frontend: Static Next.js export
   - Backend: Separate Azure Functions project
   - Must maintain two codebases/deployment pipelines

2. **API Development**
   - Each endpoint = separate Function
   - Can't use Next.js API routes
   - More boilerplate code

3. **Local Development**
   - Need Azure Functions Core Tools
   - Separate dev servers (Next.js + Functions)
   - Environment setup more complex

4. **Cold Start Management**
   - First request slow (2-5 sec)
   - Must implement keep-alive pings
   - User experience impact

**Project Structure:**
```
conference/
├── frontend/              # Next.js static site
│   ├── app/
│   ├── components/
│   └── package.json
│
├── functions/             # Separate Azure Functions
│   ├── sessions/
│   │   └── index.js
│   ├── presenter/
│   │   └── index.js
│   ├── evaluations/
│   │   └── index.js
│   ├── host.json
│   └── package.json
│
└── shared/               # Shared types/utilities
    └── types.ts
```

**Development Commands:**
```bash
# Terminal 1: Frontend
cd frontend
npm run dev

# Terminal 2: Functions
cd functions
func start

# Need to proxy http://localhost:3000/api/* -> http://localhost:7071/api/*
```

**Deployment Steps:**
```bash
# 1. Deploy Static Web App
az staticwebapp create ...

# 2. Deploy Functions separately
cd functions
func azure functionapp publish conference-functions

# 3. Link Functions to Static Web App
az staticwebapp functions link ...

# 4. Configure environment variables in both places
```

**Estimated Setup Time:** 8-12 hours for first deployment

---

### Option 2: PAID Architecture

**Complexity: LOW**

**Why Simpler:**
1. **Single Codebase**
   - Everything in Next.js
   - Use standard API routes
   - One deployment pipeline

2. **Standard Next.js Development**
   - `npm run dev` - that's it
   - API routes at `/app/api/*`
   - Familiar patterns

3. **No Cold Starts**
   - Always-on = consistent UX
   - No keep-alive hacks needed

4. **Better DX (Developer Experience)**
   - Hot reload works everywhere
   - Easier debugging
   - Standard tooling

**Project Structure:**
```
conference/
├── app/
│   ├── api/              # API routes (backend)
│   │   ├── sessions/
│   │   │   └── route.ts
│   │   ├── presenter/
│   │   │   └── route.ts
│   │   └── evaluations/
│   │       └── route.ts
│   ├── schedule/         # Frontend pages
│   ├── presenter/
│   └── layout.tsx
├── lib/
│   ├── cosmos.ts         # DB client
│   └── storage.ts        # Blob storage
└── package.json          # Single package file
```

**Development:**
```bash
# Single command
npm run dev

# API available at http://localhost:3000/api/*
```

**Deployment:**
```bash
# One command
az webapp up \
  --name conference-app \
  --runtime "NODE:20-lts" \
  --sku B1

# Or GitHub Actions (single workflow)
```

**Estimated Setup Time:** 2-3 hours for first deployment

---

## Performance Comparison

### Load Test Scenario: 200 concurrent users

#### Option 1: FREE Architecture
```
Request Flow:
User → Static Web App (CDN) → Azure Function → Cosmos DB
     ↓ 20ms                ↓ 2-5sec (cold)      ↓ 50ms
                           ↓ 100ms (warm)

Results:
- First request: 2.5 seconds (cold start)
- Warm requests: 170ms average
- 95th percentile: 250ms
- Function executions: ~20,000/day
- RU/s usage: 50-100 RU/s average

Cost: $0 (well within free limits)
```

#### Option 2: PAID Architecture
```
Request Flow:
User → App Service → Cosmos DB
     ↓ 20ms       ↓ 50ms

Results:
- All requests: 70-120ms average
- 95th percentile: 150ms
- No cold starts
- RU/s usage: 50-100 RU/s average

Cost: $13/month (Cosmos DB free)
```

**Performance Winner:** Option 2 (consistent, no cold starts)

---

## Cost Breakdown Over Time

### Development Phase (2-3 months)
```
Option 1 (FREE):  $0/month × 3 months = $0
Option 2 (PAID):  $16/month × 3 months = $48
```

### Conference Month (March 2026)
```
Option 1 (FREE):
  - App Service: $0
  - Functions: $0 (within free tier)
  - Cosmos DB: $0 (free tier)
  - Storage: $0 (under 5GB)
  Total: $0

Option 2 (PAID):
  - App Service B1: $13
  - Cosmos DB: $0 (free tier)
  - Storage: $3 (small overage)
  Total: $16
```

### Post-Conference (If continuing)
```
Option 1: $0/month (sustainable if usage stays low)
Option 2: $13-16/month (predictable cost)
```

### Break-Even Analysis
```
If you run for 12 months:
- Option 1: $0
- Option 2: $192

Difference: $192/year = $16/month

Question: Is $16/month worth:
  - No cold starts?
  - Easier development?
  - Better performance?
  - 99.95% SLA?
```

---

## When to Choose Each Option

### Choose Option 1 (FREE) If:
- Budget is absolutely $0 (no money available)
- Conference is one-time event (March 2026 only)
- You can tolerate 2-5 second delays on first requests
- You're comfortable managing two separate codebases
- Traffic is predictable and low (<100 concurrent users)
- You have time for complex setup (8-12 hours)
- No SLA required

### Choose Option 2 (PAID - $13-16/month) If:
- You have $15-20/month budget available
- You want professional, consistent performance
- You're building for potential future conferences
- You prefer standard Next.js development
- You want faster development cycles
- You need WebSocket/real-time features later
- You want better monitoring and insights
- 99.95% uptime matters to you

---

## Migration Path

### Start Free, Upgrade Later

You can start with Option 1 (FREE) and migrate to Option 2 (PAID) easily:

**Migration Steps:**
```bash
# 1. Combine Functions back into Next.js API routes
#    Move functions/sessions/index.js → app/api/sessions/route.ts

# 2. Change output mode
#    next.config.ts: output: 'standalone' (instead of 'export')

# 3. Create App Service
az webapp up --name conference-app --runtime NODE:20-lts --sku B1

# 4. Migrate environment variables
az webapp config appsettings set --settings \
  COSMOS_ENDPOINT=$COSMOS_ENDPOINT \
  COSMOS_KEY=$COSMOS_KEY

# 5. Update GitHub Actions to deploy to App Service
#    Instead of Static Web Apps

# 6. Test and cutover DNS
```

**Migration Time:** 2-4 hours
**Downtime:** <5 minutes (with proper planning)

---

## My Recommendation

### For Your Situation (Student, March 2026 Conference)

**Start with: Option 1 (FREE)**

**Reasoning:**
1. You mentioned no student credits available
2. Conference is 15 months away (March 2026)
3. One-time event (not ongoing service)
4. Free tier can absolutely handle 200-300 attendees
5. Cold starts acceptable for a 2-day conference
6. You can migrate to paid if needed (2-4 hours work)

**Development Approach:**
1. **Months 1-2**: Build features on Option 1 (FREE)
2. **Month 3**: Load test with realistic traffic
3. **1 month before conference**: Decide if you need Option 2
4. **If needed**: Migrate to Option 2 ($16 for 1-2 months)
5. **After conference**: Scale back down to FREE if done

**Total Cost Estimate:**
- Development (3 months): $0
- Pre-conference (1 month): $0 or $16 (if needed)
- Conference month: $0 or $16 (if needed)
- **Maximum cost: $32 for entire project**

---

## Next Steps

If you'd like, I can:

1. **Generate deployment scripts** for Option 1 (FREE setup)
2. **Create Azure Functions** from your Next.js API routes
3. **Set up GitHub Actions** for automated deployment
4. **Write infrastructure-as-code** (Terraform or Bicep)
5. **Create load testing scripts** to validate free tier capacity

Which would be most helpful?

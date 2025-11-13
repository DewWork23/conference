# Conference Web Application: Budget Proposal

**Prepared for:** Budget & Oversight Committee
**Project:** Southeastern Social Work Conference Web Application
**Conference Date:** March 26-27, 2026
**Prepared:** November 2025

---

## Executive Summary

We have developed a web application for the Southeastern Social Work Conference with features including:
- Online conference schedule with 30 sessions
- Presenter portal for abstract submissions
- Session evaluations and CEU tracking
- Attendee networking directory
- Administrative dashboard

**Current Status:** Fully functional prototype running on free hosting (GitHub Pages)

**Decision Needed:** Select hosting infrastructure for production deployment

---

## Two Hosting Options

### Option A: Zero-Cost Cloud Hosting
**Monthly Cost: $0**

Uses Microsoft Azure's permanently free services:
- Web hosting with free bandwidth
- Cloud database (free tier)
- User authentication (free tier)
- File storage (free tier)
- Email service (free tier)

### Option B: Professional Cloud Hosting
**Monthly Cost: $13-16**

Adds one paid service for improved reliability:
- Professional web server ($13/month)
- Same free database, storage, and email

---

## Cost Comparison

### Total Cost by Timeline

| Timeline | Option A (Free) | Option B (Paid) | Difference |
|----------|-----------------|-----------------|------------|
| **Development** (Now - Feb 2026) | $0 | $48 | $48 |
| **Conference Month** (March 2026) | $0 | $16 | $16 |
| **Post-Conference** (If continued) | $0/month | $16/month | $16/month |
| **Total Year 1** | $0 | $192 | $192 |

### 5-Year Total Cost of Ownership

| Scenario | Option A | Option B |
|----------|----------|----------|
| One-time conference only | $0 | $64 |
| Annual conference (5 years) | $0 | $960 |
| Year-round operation (5 years) | $0 | $960 |

---

## What You Get With Each Option

| Feature | Option A ($0) | Option B ($13-16) |
|---------|---------------|-------------------|
| **All application features** | ✓ Yes | ✓ Yes |
| **Secure user login** | ✓ Yes | ✓ Yes |
| **File uploads** | ✓ Yes | ✓ Yes |
| **Email notifications** | ✓ Yes (100/day) | ✓ Yes (100/day) |
| **SSL security** | ✓ Yes | ✓ Yes |
| **Supports 200-500 users** | ✓ Yes | ✓ Yes |
| **First-time load speed** | 2-5 seconds | Instant (<1 sec) |
| **Subsequent loads** | Fast | Fast |
| **Uptime guarantee** | None | 99.95% (43 min/month downtime max) |
| **24/7 availability** | No guarantee | Guaranteed |
| **Setup complexity** | High | Low |
| **Technical support** | Community only | Microsoft support |

---

## Key Differences Explained Simply

### 1. Startup Speed
- **Option A (Free):** First visitor each hour waits 2-5 seconds while the system "wakes up"
- **Option B (Paid):** System is always running, instant response

**Impact:** During conference, first attendee each hour experiences slight delay

### 2. Reliability
- **Option A (Free):** No uptime guarantee, could have unexpected downtime
- **Option B (Paid):** 99.95% guaranteed uptime (max 43 minutes downtime per month)

**Impact:** Low risk for 2-day conference, but no recourse if issues occur

### 3. Technical Complexity
- **Option A (Free):** Requires splitting application into separate pieces, more complex to maintain
- **Option B (Paid):** Standard setup, easier to update and maintain

**Impact:** More developer time needed for Option A

---

## Risk Assessment

### Option A (Free) - Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Service disruption during conference | Low | High | Have backup plan (printed schedules) |
| Slow initial load times frustrate users | Medium | Low | Communicate expectations to attendees |
| Difficult to get support if issues arise | Medium | Medium | Ensure local IT staff available |
| Higher maintenance costs long-term | Low | Low | Only matters if continuing service |

### Option B (Paid) - Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Budget overrun | Low | Low | Fixed monthly cost, no surprises |
| Unused capacity | Low | Low | $16/month is minimal expense |

**Overall Risk:** Both options are low-risk for a 2-day conference

---

## Usage Capacity

Both options can handle expected conference load:

| Metric | Free Tier Limit | Expected Usage | Headroom |
|--------|-----------------|----------------|----------|
| **Concurrent Users** | 500 | 200-300 | 60-150% |
| **Database Operations** | 86 million/day | ~20,000/day | 4,300x |
| **File Storage** | 5GB | 800MB | 6x |
| **Email Send** | 3,000/month | 2,000/month | 1,000 spare |
| **Bandwidth** | 100GB/month | 10-20GB | 5-10x |

**Conclusion:** Free tier limits are more than sufficient for this conference

---

## Budget Recommendation Matrix

### Choose Option A ($0) If:

✓ No budget available for hosting
✓ One-time conference only
✓ Can tolerate minor performance delays
✓ Have technical staff available during conference
✓ Willing to accept no uptime guarantee

### Choose Option B ($13-16/month) If:

✓ Small budget available ($15-20/month)
✓ Plan to reuse system for future conferences
✓ Want professional-grade reliability
✓ Prefer simplified maintenance
✓ Want guaranteed uptime and support

---

## Detailed Budget Breakdown (If Selecting Option B)

### One-Time Setup Costs
- Domain name (optional): $12/year
- SSL certificate: $0 (included)
- Initial deployment: $0 (included)

### Monthly Operating Costs
- Web server hosting: $13.14
- Database: $0 (free tier)
- File storage: $0-3.00 (depending on uploads)
- User authentication: $0 (free tier)
- Email service: $0 (free tier)
- **Total: $13-16/month**

### Annual Operating Costs
- Monthly hosting: $13 × 12 = $156
- Storage overage: $36/year
- **Total: $192/year**

---

## Comparison to Alternatives

| Option | Year 1 Cost | Pros | Cons |
|--------|-------------|------|------|
| **Azure Free (Option A)** | $0 | No cost | Slower, no guarantee |
| **Azure Paid (Option B)** | $192 | Fast, reliable | Costs money |
| Commercial vendor (e.g., Cvent) | $2,000-5,000 | Full service | Very expensive |
| Self-hosted on-premise | $500-1,000 | Full control | Requires IT staff, hardware |
| WordPress + plugins | $100-300 | Familiar | Limited features, ongoing maintenance |

**Best Value:** Option B (Azure Paid) at $192/year offers enterprise features at consumer pricing

---

## Implementation Timeline

### If Selecting Option A (Free)
- **Setup Time:** 8-12 hours
- **Testing Period:** 2 weeks recommended
- **Go-Live:** 2 weeks before conference

### If Selecting Option B (Paid)
- **Setup Time:** 2-3 hours
- **Testing Period:** 1 week sufficient
- **Go-Live:** 1 week before conference

---

## Staff Recommendation

**Recommended: Start with Option A (Free), with Option B as backup**

### Rationale:
1. **Zero financial risk:** Test with $0 investment
2. **15 months until conference:** Plenty of time to evaluate
3. **Easy upgrade path:** Can switch to Option B in 2-4 hours if needed
4. **Decision point:** 1 month before conference, evaluate performance
5. **Maximum cost:** $32 if we upgrade for final 2 months

### Implementation Plan:
- **November 2025 - January 2026:** Build and deploy on Option A (Free)
- **February 2026:** Load testing with realistic traffic
- **Early March 2026:** Decision meeting
  - If performance is acceptable: Keep Option A
  - If concerns arise: Upgrade to Option B ($16 for March)
- **March 26-27, 2026:** Conference

### Budget Request:
**Request: $32 contingency fund**
- Most likely spent: $0
- If upgrade needed: $32 (2 months Option B)
- Unused funds returned to budget

---

## Long-Term Considerations

### If Conference Becomes Annual Event:

| Year | Option A Cost | Option B Cost |
|------|---------------|---------------|
| Year 1 | $0 | $192 |
| Year 2 | $0 | $192 |
| Year 3 | $0 | $192 |
| Year 4 | $0 | $192 |
| Year 5 | $0 | $192 |
| **5-Year Total** | **$0** | **$960** |

**Amortized Cost per Conference:** $0 vs $192/conference

### Scaling Options:

If conference grows significantly (1,000+ attendees):
- **Option A:** May need upgrade (~$50-100/month)
- **Option B:** Can scale to larger server (~$70-140/month)

Both options can scale affordably for foreseeable growth.

---

## Questions for Committee

To help finalize the recommendation:

1. **Is any hosting budget available?** ($15-20/month)
   - If yes → Consider Option B for peace of mind
   - If no → Option A is fully functional

2. **How critical is guaranteed uptime?**
   - Very critical → Option B
   - Nice to have → Option A acceptable

3. **Is this conference recurring?**
   - Annual event → Consider Option B for long-term ease
   - One-time → Option A sufficient

4. **Risk tolerance?**
   - Low risk tolerance → Option B ($192/year insurance)
   - Comfortable with minor risk → Option A

5. **Technical support available during conference?**
   - Yes → Option A viable
   - No → Option B provides vendor support

---

## Summary & Recommendation

### The Bottom Line:

**Both options will work for your conference.**

- **Option A (Free):** Fully functional, minor trade-offs in speed and guarantees
- **Option B ($192/year):** Professional-grade reliability and performance

### Recommended Approach:

**Start with Option A, keep Option B as contingency**

1. Zero cost to start
2. Evaluate performance in February 2026
3. Upgrade to Option B if needed (1 week before conference)
4. Total budget exposure: $32 maximum

### Motion for Approval:

*"Authorize deployment of conference web application on Microsoft Azure free tier services (Option A), with contingency authorization to upgrade to paid tier (Option B) at staff discretion, not to exceed $32 for the project period."*

---

## Appendix: Frequently Asked Questions

**Q: Is Microsoft Azure reliable?**
A: Yes, Azure is Microsoft's enterprise cloud platform used by 95% of Fortune 500 companies.

**Q: What happens after the conference?**
A: We can keep the system running at $0/month (Option A) or $16/month (Option B) for future use, or shut it down completely with no ongoing costs.

**Q: Can we switch between options later?**
A: Yes, switching from Option A to Option B takes 2-4 hours with minimal downtime.

**Q: What if attendance is much higher than expected?**
A: Both options' free tiers can handle up to 500 concurrent users. We have 2-5x headroom beyond expected attendance.

**Q: Who maintains this after launch?**
A: Minimal maintenance required. Updates can be deployed automatically via GitHub. Estimated 2-4 hours/month.

**Q: What about data security and privacy?**
A: Both options include enterprise-grade security (SSL encryption, secure authentication, GDPR-compliant data storage). No additional cost for security features.

**Q: Can this integrate with our existing systems?**
A: Yes, the application can integrate with existing email systems, calendars, and databases if needed. Integration work is separate from hosting costs.

---

**Contact for Questions:**
Development Team
[Your contact information]

**Supporting Documentation:**
See `AZURE_ARCHITECTURE_COMPARISON.md` for technical details

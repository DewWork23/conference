export interface Presenter {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  email: string;
  bio: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  presenterId: string;
  date: string;
  startTime: string;
  endTime: string;
  room: string;
  track: string;
  topic: string;
  ceuCredits: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  priority: 'high' | 'normal' | 'low';
}

export const presenters: Presenter[] = [
  {
    id: 'p1',
    name: 'Dr. Sarah Martinez',
    title: 'Professor of Social Work',
    affiliation: 'UNC Pembroke',
    email: 'sarah.martinez@uncp.edu',
    bio: 'Specializes in trauma-informed care and community resilience'
  },
  {
    id: 'p2',
    name: 'James Thompson, LCSW',
    title: 'Clinical Director',
    affiliation: 'Rural Health Network of North Carolina',
    email: 'jthompson@rhn.org',
    bio: '15 years experience in rural healthcare advocacy'
  },
  {
    id: 'p3',
    name: 'Dr. Aisha Patel',
    title: 'Associate Professor',
    affiliation: 'East Carolina University',
    email: 'patela@ecu.edu',
    bio: 'Expert in cultural competency and diversity in social work practice'
  },
  {
    id: 'p4',
    name: 'Michael Chen, MSW',
    title: 'Policy Analyst',
    affiliation: 'NC Department of Health and Human Services',
    email: 'mchen@ncdhhs.gov',
    bio: 'Focuses on child welfare policy and legislative advocacy'
  },
  {
    id: 'p5',
    name: 'Dr. LaKeisha Williams',
    title: 'Department Chair',
    affiliation: 'Fayetteville State University',
    email: 'lwilliams@uncfsu.edu',
    bio: 'Research focus on racial equity and social justice'
  },
  {
    id: 'p6',
    name: 'Robert Jackson, PhD',
    title: 'Professor Emeritus',
    affiliation: 'UNC Chapel Hill',
    email: 'rjackson@unc.edu',
    bio: 'Pioneer in community organizing and grassroots advocacy'
  },
  {
    id: 'p7',
    name: 'Maria Gonzalez, LCSW',
    title: 'Clinical Supervisor',
    affiliation: 'Robeson County Department of Social Services',
    email: 'mgonzalez@robeson.gov',
    bio: 'Specializes in bilingual services and immigrant communities'
  },
  {
    id: 'p8',
    name: 'Dr. David Kim',
    title: 'Assistant Professor',
    affiliation: 'NC State University',
    email: 'dkim@ncsu.edu',
    bio: 'Expert in substance abuse treatment and harm reduction'
  },
  {
    id: 'p9',
    name: 'Jennifer Brown, MSW',
    title: 'Executive Director',
    affiliation: 'Lumbee Tribal Social Services',
    email: 'jbrown@lumbeetribe.com',
    bio: 'Advocate for indigenous communities and cultural preservation'
  },
  {
    id: 'p10',
    name: 'Dr. Thomas Reed',
    title: 'Professor',
    affiliation: 'University of South Carolina',
    email: 'treed@sc.edu',
    bio: 'Research in elder care and aging populations'
  },
  {
    id: 'p11',
    name: 'Amanda Foster, LCSW',
    title: 'School Social Worker',
    affiliation: 'Robeson County Schools',
    email: 'afoster@robeson.k12.nc.us',
    bio: 'Specializes in educational equity and student mental health'
  },
  {
    id: 'p12',
    name: 'Dr. Marcus Johnson',
    title: 'Associate Professor',
    affiliation: 'North Carolina Central University',
    email: 'mjohnson@nccu.edu',
    bio: 'Expert in criminal justice reform and reentry programs'
  },
  {
    id: 'p13',
    name: 'Lisa White, MSW',
    title: 'Program Director',
    affiliation: 'Family Crisis Center of Robeson County',
    email: 'lwhite@fccrc.org',
    bio: 'Domestic violence intervention and survivor advocacy'
  },
  {
    id: 'p14',
    name: 'Dr. Carlos Rodriguez',
    title: 'Department Head',
    affiliation: 'Western Carolina University',
    email: 'crodriguez@wcu.edu',
    bio: 'Rural mental health access and telehealth innovations'
  },
  {
    id: 'p15',
    name: 'Patricia Lee, LCSW',
    title: 'Clinical Therapist',
    affiliation: 'Southeastern Health',
    email: 'plee@srmc.org',
    bio: 'Hospital-based social work and medical crisis intervention'
  },
  {
    id: 'p16',
    name: 'Dr. Angela Harris',
    title: 'Research Director',
    affiliation: 'Duke University',
    email: 'aharris@duke.edu',
    bio: 'Health disparities and social determinants of health'
  },
  {
    id: 'p17',
    name: 'Kevin O\'Brien, MSW',
    title: 'Veterans Services Coordinator',
    affiliation: 'VA Healthcare System',
    email: 'kobrien@va.gov',
    bio: 'Military social work and PTSD treatment'
  },
  {
    id: 'p18',
    name: 'Dr. Priya Shah',
    title: 'Assistant Professor',
    affiliation: 'UNC Wilmington',
    email: 'shahp@uncw.edu',
    bio: 'International social work and refugee resettlement'
  },
  {
    id: 'p19',
    name: 'Diane Mitchell, LCSW',
    title: 'Private Practitioner',
    affiliation: 'Mitchell & Associates Counseling',
    email: 'dmitchell@macounseling.com',
    bio: 'Trauma therapy and EMDR specialist'
  },
  {
    id: 'p20',
    name: 'Dr. Samuel Green',
    title: 'Professor',
    affiliation: 'Appalachian State University',
    email: 'sgreen@appstate.edu',
    bio: 'Environmental justice and climate change impacts on vulnerable populations'
  }
];

export const sessions: Session[] = [
  // Day 1 - March 26, 2026 - Morning Sessions (9:00-10:15 AM)
  {
    id: 's1',
    title: 'Trauma-Informed Care in Rural Settings',
    description: 'Explore evidence-based approaches to implementing trauma-informed care in under-resourced rural communities. Learn practical strategies for assessing trauma, building safety, and fostering resilience when resources are limited.',
    presenterId: 'p1',
    date: '2026-03-26',
    startTime: '09:00',
    endTime: '10:15',
    room: 'Chavis University Center - Room 201',
    track: 'Clinical Practice',
    topic: 'Trauma-Informed Care',
    ceuCredits: 1.25
  },
  {
    id: 's2',
    title: 'Legislative Advocacy: Child Welfare Policy Updates',
    description: 'A comprehensive review of recent changes to North Carolina child welfare legislation and federal Family First Prevention Services Act implementation. Discuss advocacy strategies for social workers to influence policy at state and local levels.',
    presenterId: 'p4',
    date: '2026-03-26',
    startTime: '09:00',
    endTime: '10:15',
    room: 'Chavis University Center - Room 205',
    track: 'Policy & Advocacy',
    topic: 'Policy',
    ceuCredits: 1.25
  },
  {
    id: 's3',
    title: 'Cultural Competency in Indigenous Communities',
    description: 'Learn about the unique cultural considerations when working with the Lumbee Tribe and other Native American communities in the Southeast. Examine historical trauma, tribal sovereignty, and culturally-responsive interventions.',
    presenterId: 'p9',
    date: '2026-03-26',
    startTime: '09:00',
    endTime: '10:15',
    room: 'Moore Hall - Auditorium',
    track: 'Diversity & Inclusion',
    topic: 'Cultural Competency',
    ceuCredits: 1.25
  },
  {
    id: 's4',
    title: 'School-Based Mental Health Interventions',
    description: 'Explore effective school-based mental health programs and early intervention strategies for students experiencing anxiety, depression, and behavioral challenges. Case studies from Robeson County Schools.',
    presenterId: 'p11',
    date: '2026-03-26',
    startTime: '09:00',
    endTime: '10:15',
    room: 'Sampson Hall - Room 101',
    track: 'Education',
    topic: 'Mental Health',
    ceuCredits: 1.25
  },

  // Day 1 - Morning Sessions (10:30-11:45 AM)
  {
    id: 's5',
    title: 'Telehealth Innovations in Rural Mental Health',
    description: 'Examine the rapid expansion of telehealth services in rural areas, including ethical considerations, technology platforms, and strategies to overcome barriers to access. Discussion of reimbursement policies and licensure requirements.',
    presenterId: 'p14',
    date: '2026-03-26',
    startTime: '10:30',
    endTime: '11:45',
    room: 'Chavis University Center - Room 201',
    track: 'Clinical Practice',
    topic: 'Healthcare Access',
    ceuCredits: 1.25
  },
  {
    id: 's6',
    title: 'Racial Equity and Anti-Racism in Social Work',
    description: 'Critical examination of systemic racism in social work education and practice. Participants will engage in dialogue about dismantling oppressive structures and centering racial justice in their work.',
    presenterId: 'p5',
    date: '2026-03-26',
    startTime: '10:30',
    endTime: '11:45',
    room: 'Chavis University Center - Room 205',
    track: 'Diversity & Inclusion',
    topic: 'Social Justice',
    ceuCredits: 1.25
  },
  {
    id: 's7',
    title: 'Substance Use and Harm Reduction Strategies',
    description: 'Overview of harm reduction approaches to substance use disorders, including syringe service programs, medication-assisted treatment, and overdose prevention. Addressing stigma and moral frameworks in treatment.',
    presenterId: 'p8',
    date: '2026-03-26',
    startTime: '10:30',
    endTime: '11:45',
    room: 'Moore Hall - Auditorium',
    track: 'Clinical Practice',
    topic: 'Substance Use',
    ceuCredits: 1.25
  },
  {
    id: 's8',
    title: 'Community Organizing: Building Power from the Grassroots',
    description: 'Learn practical strategies for community organizing and mobilizing residents to address local issues. Case examples from successful campaigns in rural North Carolina.',
    presenterId: 'p6',
    date: '2026-03-26',
    startTime: '10:30',
    endTime: '11:45',
    room: 'Sampson Hall - Room 101',
    track: 'Policy & Advocacy',
    topic: 'Community Development',
    ceuCredits: 1.25
  },

  // Day 1 - Afternoon Sessions (1:30-2:45 PM)
  {
    id: 's9',
    title: 'Elder Care and Aging in Place',
    description: 'Examine challenges facing aging adults in rural communities, including social isolation, healthcare access, and caregiver support. Explore programs that enable seniors to age in place with dignity.',
    presenterId: 'p10',
    date: '2026-03-26',
    startTime: '13:30',
    endTime: '14:45',
    room: 'Chavis University Center - Room 201',
    track: 'Clinical Practice',
    topic: 'Aging',
    ceuCredits: 1.25
  },
  {
    id: 's10',
    title: 'Serving Immigrant and Refugee Populations',
    description: 'Explore the unique challenges facing immigrant and refugee families in the Southeast, including legal barriers, language access, cultural adjustment, and trauma histories. Best practices for bilingual service delivery.',
    presenterId: 'p7',
    date: '2026-03-26',
    startTime: '13:30',
    endTime: '14:45',
    room: 'Chavis University Center - Room 205',
    track: 'Diversity & Inclusion',
    topic: 'Immigration',
    ceuCredits: 1.25
  },
  {
    id: 's11',
    title: 'Ethics in Dual Relationships and Small Communities',
    description: 'Navigate complex ethical dilemmas that arise when practicing in small, rural communities where dual relationships are often unavoidable. Case-based discussion of boundary management and professional standards.',
    presenterId: 'p2',
    date: '2026-03-26',
    startTime: '13:30',
    endTime: '14:45',
    room: 'Moore Hall - Auditorium',
    track: 'Ethics',
    topic: 'Ethics',
    ceuCredits: 1.25
  },
  {
    id: 's12',
    title: 'Criminal Justice Reform and Reentry Programs',
    description: 'Examine the role of social workers in criminal justice reform, including diversion programs, reentry support, and addressing the school-to-prison pipeline. Focus on racial disparities in incarceration.',
    presenterId: 'p12',
    date: '2026-03-26',
    startTime: '13:30',
    endTime: '14:45',
    room: 'Sampson Hall - Room 101',
    track: 'Policy & Advocacy',
    topic: 'Justice',
    ceuCredits: 1.25
  },

  // Day 1 - Afternoon Sessions (3:00-4:15 PM)
  {
    id: 's13',
    title: 'Domestic Violence Intervention and Safety Planning',
    description: 'Evidence-based practices for identifying and supporting survivors of domestic violence. Learn danger assessment tools, safety planning strategies, and trauma-informed advocacy approaches.',
    presenterId: 'p13',
    date: '2026-03-26',
    startTime: '15:00',
    endTime: '16:15',
    room: 'Chavis University Center - Room 201',
    track: 'Clinical Practice',
    topic: 'Domestic Violence',
    ceuCredits: 1.25
  },
  {
    id: 's14',
    title: 'Social Determinants of Health in Rural Areas',
    description: 'Explore how poverty, food insecurity, transportation barriers, and lack of healthcare access impact health outcomes in rural communities. Cross-sector collaboration strategies to address root causes.',
    presenterId: 'p16',
    date: '2026-03-26',
    startTime: '15:00',
    endTime: '16:15',
    room: 'Chavis University Center - Room 205',
    track: 'Policy & Advocacy',
    topic: 'Healthcare Access',
    ceuCredits: 1.25
  },
  {
    id: 's15',
    title: 'EMDR and Evidence-Based Trauma Therapy',
    description: 'Introduction to Eye Movement Desensitization and Reprocessing (EMDR) therapy for treating PTSD and complex trauma. Review research evidence and clinical protocols for implementation.',
    presenterId: 'p19',
    date: '2026-03-26',
    startTime: '15:00',
    endTime: '16:15',
    room: 'Moore Hall - Auditorium',
    track: 'Clinical Practice',
    topic: 'Trauma-Informed Care',
    ceuCredits: 1.25
  },
  {
    id: 's16',
    title: 'Military Social Work and Veteran Services',
    description: 'Understanding the unique needs of veterans and military families, including PTSD, moral injury, transition challenges, and accessing VA benefits. Culturally competent practice with military populations.',
    presenterId: 'p17',
    date: '2026-03-26',
    startTime: '15:00',
    endTime: '16:15',
    room: 'Sampson Hall - Room 101',
    track: 'Clinical Practice',
    topic: 'Military/Veterans',
    ceuCredits: 1.25
  },

  // Day 2 - March 27, 2026 - Morning Sessions (9:00-10:15 AM)
  {
    id: 's17',
    title: 'Hospital-Based Social Work and Discharge Planning',
    description: 'Explore the critical role of medical social workers in acute care settings, including discharge planning, advance directives, palliative care, and navigating complex healthcare systems for vulnerable patients.',
    presenterId: 'p15',
    date: '2026-03-27',
    startTime: '09:00',
    endTime: '10:15',
    room: 'Chavis University Center - Room 201',
    track: 'Clinical Practice',
    topic: 'Healthcare',
    ceuCredits: 1.25
  },
  {
    id: 's18',
    title: 'Environmental Justice and Climate Displacement',
    description: 'Examine how climate change disproportionately impacts low-income and marginalized communities. Social work responses to natural disasters, climate migration, and environmental racism.',
    presenterId: 'p20',
    date: '2026-03-27',
    startTime: '09:00',
    endTime: '10:15',
    room: 'Chavis University Center - Room 205',
    track: 'Policy & Advocacy',
    topic: 'Environmental Justice',
    ceuCredits: 1.25
  },
  {
    id: 's19',
    title: 'International Social Work and Global Perspectives',
    description: 'Explore international social work practice, refugee resettlement programs, and global approaches to addressing poverty, human rights, and humanitarian crises. Cross-cultural practice considerations.',
    presenterId: 'p18',
    date: '2026-03-27',
    startTime: '09:00',
    endTime: '10:15',
    room: 'Moore Hall - Auditorium',
    track: 'Diversity & Inclusion',
    topic: 'International',
    ceuCredits: 1.25
  },
  {
    id: 's20',
    title: 'Diversity and Inclusion in Social Work Education',
    description: 'Strategies for integrating DEI principles throughout social work curricula, addressing microaggressions in the classroom, and preparing culturally competent practitioners.',
    presenterId: 'p3',
    date: '2026-03-27',
    startTime: '09:00',
    endTime: '10:15',
    room: 'Sampson Hall - Room 101',
    track: 'Education',
    topic: 'DEI',
    ceuCredits: 1.25
  },

  // Day 2 - Morning Sessions (10:30-11:45 AM)
  {
    id: 's21',
    title: 'Supervision and Clinical Leadership',
    description: 'Best practices for clinical supervision, including models of supervision, ethical considerations, evaluation methods, and supporting supervisee professional development.',
    presenterId: 'p1',
    date: '2026-03-27',
    startTime: '10:30',
    endTime: '11:45',
    room: 'Chavis University Center - Room 201',
    track: 'Education',
    topic: 'Professional Development',
    ceuCredits: 1.25
  },
  {
    id: 's22',
    title: 'Addressing the Opioid Crisis in Rural Communities',
    description: 'Multi-faceted approach to addressing opioid use disorder in rural areas, including prevention, treatment access, naloxone distribution, and supporting families affected by addiction.',
    presenterId: 'p8',
    date: '2026-03-27',
    startTime: '10:30',
    endTime: '11:45',
    room: 'Chavis University Center - Room 205',
    track: 'Clinical Practice',
    topic: 'Substance Use',
    ceuCredits: 1.25
  },
  {
    id: 's23',
    title: 'Self-Care and Preventing Burnout',
    description: 'Explore compassion fatigue, vicarious trauma, and burnout in social work. Practical strategies for self-care, organizational support systems, and sustaining long-term practice.',
    presenterId: 'p19',
    date: '2026-03-27',
    startTime: '10:30',
    endTime: '11:45',
    room: 'Moore Hall - Auditorium',
    track: 'Clinical Practice',
    topic: 'Professional Development',
    ceuCredits: 1.25
  },
  {
    id: 's24',
    title: 'Housing Insecurity and Homelessness Prevention',
    description: 'Address root causes of housing instability, eviction prevention programs, rapid rehousing models, and coordinated entry systems for homeless services.',
    presenterId: 'p6',
    date: '2026-03-27',
    startTime: '10:30',
    endTime: '11:45',
    room: 'Sampson Hall - Room 101',
    track: 'Policy & Advocacy',
    topic: 'Housing',
    ceuCredits: 1.25
  },

  // Day 2 - Afternoon Sessions (1:30-2:45 PM)
  {
    id: 's25',
    title: 'Working with LGBTQ+ Youth in Schools',
    description: 'Creating affirming and safe school environments for LGBTQ+ students. Address bullying, family acceptance, mental health disparities, and advocacy for inclusive policies.',
    presenterId: 'p11',
    date: '2026-03-27',
    startTime: '13:30',
    endTime: '14:45',
    room: 'Chavis University Center - Room 201',
    track: 'Education',
    topic: 'LGBTQ+ Issues',
    ceuCredits: 1.25
  },
  {
    id: 's26',
    title: 'Ethical Decision-Making in Challenging Cases',
    description: 'Interactive case-based workshop exploring complex ethical dilemmas in social work practice. Apply ethical frameworks and the NASW Code of Ethics to real-world scenarios.',
    presenterId: 'p4',
    date: '2026-03-27',
    startTime: '13:30',
    endTime: '14:45',
    room: 'Chavis University Center - Room 205',
    track: 'Ethics',
    topic: 'Ethics',
    ceuCredits: 1.25
  },
  {
    id: 's27',
    title: 'Collaborative Care Models in Integrated Health',
    description: 'Explore integrated behavioral health models that embed social workers in primary care settings. Evidence for collaborative care and strategies for implementation.',
    presenterId: 'p14',
    date: '2026-03-27',
    startTime: '13:30',
    endTime: '14:45',
    room: 'Moore Hall - Auditorium',
    track: 'Clinical Practice',
    topic: 'Healthcare',
    ceuCredits: 1.25
  },
  {
    id: 's28',
    title: 'Child Welfare Practice in Rural Counties',
    description: 'Unique challenges in child protective services in rural areas, including limited resources, staff retention, kinship care, and engaging families with multiple barriers.',
    presenterId: 'p7',
    date: '2026-03-27',
    startTime: '13:30',
    endTime: '14:45',
    room: 'Sampson Hall - Room 101',
    track: 'Policy & Advocacy',
    topic: 'Child Welfare',
    ceuCredits: 1.25
  },

  // Day 2 - Afternoon Sessions (3:00-4:15 PM)
  {
    id: 's29',
    title: 'Research to Practice: Implementing Evidence-Based Interventions',
    description: 'Bridging the gap between research and practice. Learn strategies for identifying, evaluating, and implementing evidence-based interventions in community settings.',
    presenterId: 'p16',
    date: '2026-03-27',
    startTime: '15:00',
    endTime: '16:15',
    room: 'Chavis University Center - Room 201',
    track: 'Education',
    topic: 'Research',
    ceuCredits: 1.25
  },
  {
    id: 's30',
    title: 'Voices from the Field: Panel Discussion',
    description: 'A panel of experienced social workers from diverse practice settings share stories, lessons learned, and advice for emerging professionals. Q&A session to follow.',
    presenterId: 'p5',
    date: '2026-03-27',
    startTime: '15:00',
    endTime: '16:15',
    room: 'Moore Hall - Auditorium',
    track: 'Professional Development',
    topic: 'Career Development',
    ceuCredits: 1.25
  }
];

export const announcements: Announcement[] = [
  {
    id: 'a1',
    title: 'Welcome to the 2026 Southeastern Social Work Conference!',
    content: 'We\'re thrilled to welcome you to UNC Pembroke for "Voices from the Field." Check-in begins at 8:00 AM on March 26 at the Chavis University Center lobby. Don\'t forget to pick up your conference materials and name badge!',
    timestamp: '2026-03-25T14:00:00',
    priority: 'high'
  },
  {
    id: 'a2',
    title: 'Parking Information',
    content: 'Free parking is available in Lots A, B, and C (near Chavis University Center). Overflow parking is available at the Lumbee Guaranty Bank Center with shuttle service running every 15 minutes. Accessible parking spaces are available in all lots.',
    timestamp: '2026-03-25T15:30:00',
    priority: 'normal'
  },
  {
    id: 'a3',
    title: 'CEU Certificates',
    content: 'To receive your CEU certificate, you must: 1) Complete session evaluations for each attended session, 2) Sign in at each session, and 3) Complete the conference survey. Certificates will be emailed within 2 weeks after the conference.',
    timestamp: '2026-03-26T08:00:00',
    priority: 'high'
  },
  {
    id: 'a4',
    title: 'Lunch Options',
    content: 'Lunch is on your own both days. The Brave Dining Hall offers buffet-style dining ($12), or explore local restaurants within walking distance. Food trucks will be stationed near Moore Hall from 12:00-2:00 PM.',
    timestamp: '2026-03-26T09:00:00',
    priority: 'normal'
  },
  {
    id: 'a5',
    title: 'Room Change: Session S14',
    content: 'Please note: "Social Determinants of Health in Rural Areas" (Session S14) has been moved from Room 205 to Moore Hall Auditorium due to high registration. Updated room location is reflected in the schedule.',
    timestamp: '2026-03-26T10:00:00',
    priority: 'high'
  },
  {
    id: 'a6',
    title: 'Evening Networking Reception',
    content: 'Join us tonight at 5:30 PM for a networking reception in the Chavis University Center Ballroom. Light refreshments will be served. Great opportunity to connect with colleagues from across the region!',
    timestamp: '2026-03-26T12:30:00',
    priority: 'normal'
  },
  {
    id: 'a7',
    title: 'Book Sale and Resource Fair',
    content: 'Visit our Book Sale and Resource Fair on the 2nd floor of Chavis University Center. Browse latest social work publications, connect with graduate programs, and learn about local organizations.',
    timestamp: '2026-03-26T14:00:00',
    priority: 'low'
  },
  {
    id: 'a8',
    title: 'Day 2 Continental Breakfast',
    content: 'Continental breakfast will be available from 8:00-9:00 AM in the Chavis University Center lobby on Thursday, March 27. Coffee and tea will be available throughout the day.',
    timestamp: '2026-03-26T16:00:00',
    priority: 'normal'
  },
  {
    id: 'a9',
    title: 'Session Evaluations Reminder',
    content: 'Please remember to complete evaluations for each session you attend! Scan the QR code displayed in each room or access evaluations through the conference app. Your feedback helps us improve future conferences.',
    timestamp: '2026-03-27T09:30:00',
    priority: 'normal'
  },
  {
    id: 'a10',
    title: 'Closing Keynote at 4:30 PM',
    content: 'Don\'t miss our closing keynote address at 4:30 PM in Moore Hall Auditorium featuring Dr. Marcus Johnson discussing "The Future of Social Work in the Southeast." All attendees welcome!',
    timestamp: '2026-03-27T13:00:00',
    priority: 'high'
  }
];

export const attendees = [
  { id: 'att1', name: 'Emily Rodriguez', affiliation: 'UNC Pembroke', role: 'MSW Student' },
  { id: 'att2', name: 'Michael Davis', affiliation: 'Robeson County DSS', role: 'Social Worker' },
  { id: 'att3', name: 'Sarah Johnson', affiliation: 'Duke University', role: 'PhD Candidate' },
  { id: 'att4', name: 'James Williams', affiliation: 'Southeastern Health', role: 'Clinical Social Worker' },
  { id: 'att5', name: 'Maria Garcia', affiliation: 'NC DHHS', role: 'Policy Specialist' },
  { id: 'att6', name: 'David Brown', affiliation: 'Fayetteville VA', role: 'Veterans Counselor' },
  { id: 'att7', name: 'Jennifer Lee', affiliation: 'East Carolina University', role: 'Professor' },
  { id: 'att8', name: 'Robert Taylor', affiliation: 'Private Practice', role: 'LCSW' },
  { id: 'att9', name: 'Lisa Anderson', affiliation: 'Robeson County Schools', role: 'School Social Worker' },
  { id: 'att10', name: 'Carlos Martinez', affiliation: 'UNC Chapel Hill', role: 'Research Associate' },
  { id: 'att11', name: 'Angela White', affiliation: 'Community Health Center', role: 'Program Director' },
  { id: 'att12', name: 'Thomas Moore', affiliation: 'Appalachian State University', role: 'Associate Professor' },
  { id: 'att13', name: 'Patricia Jackson', affiliation: 'Family Services', role: 'Clinical Supervisor' },
  { id: 'att14', name: 'Kevin Patel', affiliation: 'NC State University', role: 'BSW Student' },
  { id: 'att15', name: 'Michelle Thompson', affiliation: 'Lutheran Services Carolinas', role: 'Case Manager' },
  { id: 'att16', name: 'Daniel Kim', affiliation: 'Wake Forest University', role: 'Assistant Professor' },
  { id: 'att17', name: 'Rebecca Harris', affiliation: 'Cumberland County DSS', role: 'Child Welfare Specialist' },
  { id: 'att18', name: 'Christopher Lee', affiliation: 'UNC Wilmington', role: 'Field Instructor' },
  { id: 'att19', name: 'Amanda Foster', affiliation: 'Mental Health Association', role: 'Therapist' },
  { id: 'att20', name: 'Brandon Scott', affiliation: 'Western Carolina University', role: 'MSW Student' }
];

export const tracks = [
  'Clinical Practice',
  'Policy & Advocacy',
  'Diversity & Inclusion',
  'Education',
  'Ethics',
  'Professional Development'
];

export const topics = [
  'Trauma-Informed Care',
  'Policy',
  'Cultural Competency',
  'Mental Health',
  'Healthcare Access',
  'Social Justice',
  'Substance Use',
  'Community Development',
  'Aging',
  'Immigration',
  'Ethics',
  'Justice',
  'Domestic Violence',
  'Military/Veterans',
  'Healthcare',
  'Environmental Justice',
  'International',
  'DEI',
  'Professional Development',
  'Housing',
  'LGBTQ+ Issues',
  'Child Welfare',
  'Research',
  'Career Development'
];

export const rooms = [
  'Chavis University Center - Room 201',
  'Chavis University Center - Room 205',
  'Moore Hall - Auditorium',
  'Sampson Hall - Room 101'
];

// G-Assist AI Service powered by Google Gemini API & Greens Technologys Knowledge Base

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  ctas?: ActionCTA[];
  isError?: boolean;
}

export interface ActionCTA {
  label: string;
  type: 'navigate' | 'whatsapp' | 'call' | 'demo';
  target: string; // URL path, phone, or custom command
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'accent';
  icon?: string;
}

export interface FAQItem {
  id: string;
  category: 'courses' | 'certifications' | 'placements' | 'hostel' | 'branches';
  question: string;
  shortAnswer: string;
  suggestedPrompt: string;
  ctas: ActionCTA[];
}

// Master Standard FAQs for G-Assist
export const STANDARD_FAQS: FAQItem[] = [
  {
    id: 'faq-java-genai',
    category: 'courses',
    question: 'Tell me about Java Full Stack with Gen AI course',
    shortAnswer: 'Our #1 Flagship course covering Java 21, Spring Boot 3, Microservices, React 19, LangChain4j, and AWS Cloud deployment with 100% placement assurance.',
    suggestedPrompt: 'Tell me about the Java Full Stack with Gen AI curriculum, duration, and placement support.',
    ctas: [
      { label: 'View Java Full Stack', type: 'navigate', target: '/courses/java-full-stack-development', variant: 'primary' },
      { label: 'Chat on WhatsApp', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' },
      { label: 'Book Free Demo', type: 'demo', target: 'Java Full Stack with Gen AI', variant: 'accent' }
    ]
  },
  {
    id: 'faq-python-ai',
    category: 'courses',
    question: 'What is covered in Python Full Stack & AI?',
    shortAnswer: 'Comprehensive track covering Python 3.12, Django/FastAPI, React, PostgreSQL, Docker, and AI Agent development with prompt engineering and LangChain.',
    suggestedPrompt: 'What is covered in the Python Full Stack & AI course and what are the job opportunities?',
    ctas: [
      { label: 'View Python Full Stack', type: 'navigate', target: '/courses/python-full-stack-development', variant: 'primary' },
      { label: 'WhatsApp Advisor', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' }
    ]
  },
  {
    id: 'faq-devops-cloud',
    category: 'courses',
    question: 'DevOps & Multi-Cloud Master program details',
    shortAnswer: 'Hands-on live production labs covering AWS, Azure, Docker, Kubernetes, Terraform, CI/CD with Jenkins & GitHub Actions, Prometheus & Grafana.',
    suggestedPrompt: 'What are the tools and certifications included in DevOps and Multi-Cloud training?',
    ctas: [
      { label: 'Explore DevOps Course', type: 'navigate', target: '/courses/devops-cloud-architect-master-program', variant: 'primary' },
      { label: 'Azure Certifications', type: 'navigate', target: '/certifications/azure', variant: 'secondary' }
    ]
  },
  {
    id: 'faq-sdet-testing',
    category: 'courses',
    question: 'Software Testing & SDET Automation syllabus',
    shortAnswer: 'Industry-leading test automation track: Selenium 4, Playwright, Java/Python, TestNG, Cucumber BDD, RestAssured API testing, and CI/CD integration.',
    suggestedPrompt: 'Tell me about Software Testing, Selenium, and SDET automation course and certifications.',
    ctas: [
      { label: 'View SDET Program', type: 'navigate', target: '/courses/sdet-fullstack-testing-mastery', variant: 'primary' },
      { label: 'ISTQB Certification', type: 'navigate', target: '/certifications/istqb', variant: 'secondary' }
    ]
  },
  {
    id: 'faq-aws-cert',
    category: 'certifications',
    question: 'How to prepare for AWS Solutions Architect certification?',
    shortAnswer: 'Comprehensive AWS SAA-C03 preparation covering VPC, EC2, S3, IAM, Serverless (Lambda), RDS, and multi-region high availability architectures.',
    suggestedPrompt: 'How does Greens Technologys prepare students for AWS Certified Solutions Architect Associate?',
    ctas: [
      { label: 'AWS Cert Details', type: 'navigate', target: '/certifications/azure', variant: 'primary' },
      { label: 'Schedule Counselor Call', type: 'call', target: '+918939915577', variant: 'secondary' }
    ]
  },
  {
    id: 'faq-oracle-cert',
    category: 'certifications',
    question: 'Oracle Database & SQL Certified Associate (1Z0-071)',
    shortAnswer: 'Master Oracle 19c multitenant architecture, advanced PL/SQL programming, analytic window functions, query tuning, and pass the official 1Z0-071 exam.',
    suggestedPrompt: 'Tell me about Oracle Database & SQL Certified Associate certification track.',
    ctas: [
      { label: 'View Oracle Certification', type: 'navigate', target: '/certifications/oracle', variant: 'primary' },
      { label: 'WhatsApp Inquiry', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' }
    ]
  },
  {
    id: 'faq-istqb-cert',
    category: 'certifications',
    question: 'ISTQB Foundation & Advanced Tester Certification',
    shortAnswer: 'Official ISTQB exam syllabus preparation with 100% pass guarantee, dumps analysis, mock exams, and real-time defect reporting tools.',
    suggestedPrompt: 'What is the syllabus and fee structure for ISTQB Certification training?',
    ctas: [
      { label: 'ISTQB Certification Details', type: 'navigate', target: '/certifications/istqb', variant: 'primary' },
      { label: 'Book Demo Session', type: 'demo', target: 'ISTQB Certification', variant: 'accent' }
    ]
  },
  {
    id: 'faq-placement-guarantee',
    category: 'placements',
    question: 'How does the 100% Placement Guarantee work?',
    shortAnswer: 'We guarantee unlimited interview calls until placed with top tier IT companies. Includes technical mock interviews, resume branding, and aptitude coaching.',
    suggestedPrompt: 'How does Greens Technologys guarantee placements and what is the average salary package?',
    ctas: [
      { label: 'View Placement Records', type: 'navigate', target: '/placements', variant: 'primary' },
      { label: 'Speak with Placement Cell', type: 'call', target: '+918939982288', variant: 'secondary' }
    ]
  },
  {
    id: 'faq-hostel-facilities',
    category: 'hostel',
    question: 'Do you provide Free Hostel for outstation students?',
    shortAnswer: 'Yes! Free clean and safe accommodation near our OMR, Velachery, Tambaram, and Adyar branches with high-speed Wi-Fi, 3 hygienic meals, and 24/7 security.',
    suggestedPrompt: 'Tell me about Greens Technologys hostel facilities, food, location, and rules for outstation students.',
    ctas: [
      { label: 'Hostel Facilities & Photos', type: 'navigate', target: '/hostel-facilities', variant: 'primary' },
      { label: 'Hostel WhatsApp Desk', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' }
    ]
  },
  {
    id: 'faq-branches-contact',
    category: 'branches',
    question: 'Where are Greens Tech branches located in Chennai?',
    shortAnswer: '22+ state-of-the-art campus hubs across Chennai including OMR Thoraipakkam (HQ), Adyar, Velachery, Tambaram, Anna Nagar, Porur, and Navalur.',
    suggestedPrompt: 'Where is Greens Technologys headquarters located and what are the contact numbers?',
    ctas: [
      { label: 'Find Nearest Branch', type: 'navigate', target: '/contact-us', variant: 'primary' },
      { label: 'Call Head Office', type: 'call', target: '+918939982288', variant: 'secondary' }
    ]
  }
];

// Helper to retrieve the active Gemini API Key
export function getGeminiApiKey(): string | null {
  const localKey = localStorage.getItem('greens_gemini_api_key');
  if (localKey && localKey.trim()) return localKey.trim();

  const envKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
  if (envKey && envKey.trim()) return envKey.trim();

  return null;
}

export function setGeminiApiKey(key: string): void {
  if (key && key.trim()) {
    localStorage.setItem('greens_gemini_api_key', key.trim());
  } else {
    localStorage.removeItem('greens_gemini_api_key');
  }
}

// Master System Prompt for Greens Technologys
const GREENS_SYSTEM_PROMPT = `You are "G-Assist", the cheerful, highly knowledgeable, and proactive AI Academic & Career Counselor for Greens Technologys (greentechnologys.com).
Greens Technologys is Chennai's No. 1 Software Training & 100% Placement Institution with 22+ state-of-the-art campuses across Chennai (OMR Thoraipakkam Head Office, Adyar, Velachery, Tambaram, Anna Nagar, Navalur, etc.).

KEY HIGHLIGHTS & TRUTHS ABOUT GREENS TECHNOLOGYS:
1. 180+ Courses across 18 Domains:
   - Full Stack Development: Java Full Stack with GenAI (Spring Boot 3, Microservices, React 19, LangChain4j), Python Full Stack (Django, FastAPI, AI Agents), .NET Core Full Stack, MERN Stack.
   - AI & Data Science: Generative AI Masterclass, Deep Learning, NLP, Data Analytics (Power BI, Tableau, Advanced Excel), Snowflake & Databricks.
   - Cloud & DevOps: AWS Solutions Architect, Microsoft Azure, Google Cloud (GCP), DevOps (Kubernetes, Docker, Terraform, CI/CD).
   - Software Testing / QA: SDET Automation Testing, Selenium 4, Playwright, RestAssured API Testing, Mobile Testing (Appium), Manual Testing.
   - Enterprise: Salesforce (Admin, Dev, LWC), Oracle 19c SQL & PL/SQL, SAP, RPA (UiPath, Automation Anywhere), Cybersecurity SOC Analyst.
2. 53 Industry Recognized Certifications:
   - Oracle (1Z0-071), Microsoft Azure (AZ-104, AZ-305, AZ-900), AWS (SAA-C03), ISTQB Foundation & Advanced, PMP, Scrum Master (CSM/PSM), Cisco CCNA, Red Hat Linux (RHCSA).
3. 100% Placement Guarantee:
   - 1,400+ hiring partners (Cognizant, TCS, Infosys, Capgemini, Wipro, Amazon, Cisco, PayPal, Zoho).
   - Average package ranges from ₹6.5 LPA to ₹28 LPA.
   - Dedicated placement team arranges unlimited interviews until the candidate is successfully placed.
   - Comprehensive mock interviews, resume building, and GitHub project portfolio reviews.
4. Free Hostel & Accommodation for Outstation Students:
   - Free safe accommodation near OMR Thoraipakkam, Velachery, Tambaram, and Adyar branches.
   - Includes 3 nutritious meals daily, high-speed Wi-Fi, 24/7 power backup, and CCTV security.
5. Flexible Batches:
   - Regular Weekday Batches (Morning/Evening) & Weekend Batches (Saturday & Sunday).
   - Modes: Classroom Instructor-Led in Chennai & Live Interactive Online with recorded backup sessions.
6. Contact & Locations:
   - Head Office: 19, Balamurugan Garden, Rajiv Gandhi Salai, Thoraipakkam, OMR, Chennai - 600097 (Opposite Geetham Restaurant).
   - Official Phone Numbers: +91 89399 15577 / +91 89399 82288.
   - Official Email: contact@greenstechnologys.com.

STYLE & BEHAVIOR:
- Warm, encouraging, professional, and concise.
- Always recommend the most relevant course or certification based on the user's educational background, goal, or experience level.
- Format responses cleanly with bold keywords and bullet points.
- ALWAYS guide the user toward clear next steps (e.g. Booking a Free Demo Session, Chatting on WhatsApp +91 89399 15577, or visiting a nearby branch).
- When mentioning courses or certifications, provide accurate details.`;

/**
 * Intelligent Local Knowledge Engine (Zero-Failure Fallback)
 * Works instantly even when no Gemini API key is configured.
 */
function queryLocalKnowledgeBase(query: string): { text: string; ctas: ActionCTA[] } {
  const q = query.toLowerCase().trim();

  // 1. JAVA / FULLSTACK
  if (q.includes('java') || q.includes('spring') || q.includes('j2ee')) {
    return {
      text: `### ☕ Java Full Stack Development with Generative AI\n\nGreens Technologys is renowned as India's premier Java Training hub, having placed over 18,500+ Java Engineers!\n\n**Curriculum Highlights:**\n* **Core & Advanced Java 21:** OOPs, Collections, Multi-threading, Streams & Lambdas\n* **Backend Frameworks:** Spring Boot 3, Spring Security, Hibernate ORM, Microservices architecture\n* **Next-Gen AI Integration:** LangChain4j, OpenAI API, Building autonomous AI Agents\n* **Frontend Stack:** React 19, TypeScript, Tailwind CSS, Redux Toolkit\n* **Cloud & DevOps:** Docker, Kubernetes, AWS Deployment & CI/CD Pipelines\n\n**Batch Options:** Weekday (Mon-Fri) & Weekend (Sat-Sun) | Classroom & Live Online\n**Placement:** 100% Placement Assurance with ₹7.5 LPA - ₹18 LPA packages.`,
      ctas: [
        { label: 'View Course Syllabus', type: 'navigate', target: '/courses/java-full-stack-development', variant: 'primary' },
        { label: 'WhatsApp Counselor', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' },
        { label: 'Book Free Demo', type: 'demo', target: 'Java Full Stack with Gen AI', variant: 'accent' }
      ]
    };
  }

  // 2. PYTHON / AI / DATA SCIENCE
  if (q.includes('python') || q.includes('data science') || q.includes('machine learning') || q.includes('ai') || q.includes('genai')) {
    return {
      text: `### 🐍 Python Full Stack & Artificial Intelligence Mastery\n\nMaster end-to-end Python engineering and state-of-the-art Generative AI systems directly from industry architects.\n\n**What You Will Learn:**\n* **Core Python 3.12:** Advanced OOPs, Asynchronous programming, Data Structures\n* **Web Development:** FastAPI & Django REST Framework, PostgreSQL, Redis caching\n* **GenAI & LLMs:** Prompt engineering, Retrieval Augmented Generation (RAG), LangChain, Vector DBs (Chroma/Pinecone)\n* **Data & Machine Learning:** NumPy, Pandas, Scikit-learn, Model deployment on Cloud\n\n**Target Roles:** Python Full Stack Developer, AI/ML Engineer, Data Scientist\n**Average Salary:** ₹8.5 LPA - ₹24 LPA across top product and consulting firms.`,
      ctas: [
        { label: 'Explore Python Full Stack', type: 'navigate', target: '/courses/python-full-stack-development', variant: 'primary' },
        { label: 'WhatsApp Inquiry', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' },
        { label: 'Book Free Demo', type: 'demo', target: 'Python & AI Mastery', variant: 'accent' }
      ]
    };
  }

  // 3. CLOUD / DEVOPS / AWS / AZURE
  if (q.includes('cloud') || q.includes('devops') || q.includes('aws') || q.includes('azure') || q.includes('docker') || q.includes('kubernetes')) {
    return {
      text: `### ☁️ DevOps & Multi-Cloud Master Certification (AWS & Azure)\n\nEquip yourself with hands-on infrastructure-as-code and cloud containerization skills demanded by Fortune 500 enterprises.\n\n**Key Competencies:**\n* **Cloud Platforms:** Amazon Web Services (AWS SAA-C03) & Microsoft Azure (AZ-104 / AZ-305)\n* **Containers & Orchestration:** Docker engine, Kubernetes (EKS/AKS), Helm charts\n* **Infrastructure as Code:** Terraform, Ansible configuration management\n* **CI/CD Pipelines:** Jenkins, GitHub Actions, GitLab CI, ArgoCD GitOps\n* **Observability:** Prometheus, Grafana, ELK Stack\n\n**Exam Support:** Guaranteed preparation for official AWS and Azure Certifications!`,
      ctas: [
        { label: 'View DevOps Program', type: 'navigate', target: '/courses/devops-cloud-architect-master-program', variant: 'primary' },
        { label: 'Azure Certification', type: 'navigate', target: '/certifications/azure', variant: 'secondary' },
        { label: 'WhatsApp Cloud Team', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' }
      ]
    };
  }

  // 4. TESTING / SDET / SELENIUM / PLAYWRIGHT / QA / ISTQB
  if (q.includes('test') || q.includes('qa') || q.includes('selenium') || q.includes('playwright') || q.includes('sdet') || q.includes('istqb')) {
    return {
      text: `### 🛡️ SDET Full Stack Software Testing & Automation Mastery\n\nTransform from manual testing to a high-earning Software Development Engineer in Test (SDET).\n\n**Program Modules:**\n* **Manual QA & ISTQB:** Agile Testing, Test Plan design, JIRA, Bug lifecycle, ISTQB exam prep\n* **Web Automation:** Selenium WebDriver 4 (Java & Python), Playwright, Cypress\n* **Frameworks:** TestNG, Cucumber BDD, Page Object Model (POM), Extent Reports\n* **API & Performance:** RestAssured, Postman, JMeter load testing\n* **Mobile & DevOps:** Appium mobile testing, Jenkins CI/CD pipeline triggers\n\n**100% Placement Record:** Over 12,000+ QA professionals successfully placed!`,
      ctas: [
        { label: 'Explore SDET Program', type: 'navigate', target: '/courses/sdet-fullstack-testing-mastery', variant: 'primary' },
        { label: 'ISTQB Certification', type: 'navigate', target: '/certifications/istqb', variant: 'secondary' },
        { label: 'Book QA Demo', type: 'demo', target: 'SDET & Software Testing', variant: 'accent' }
      ]
    };
  }

  // 5. ORACLE / SQL / DATABASE
  if (q.includes('oracle') || q.includes('sql') || q.includes('database') || q.includes('dba') || q.includes('pl/sql')) {
    return {
      text: `### 🗄️ ORACLE Database & SQL Certified Associate (1Z0-071)\n\nGreens Technologys is the pioneer in Oracle & SQL training in Chennai with certified Oracle Corporate Mentors.\n\n**Curriculum Focus:**\n* Oracle 19c Multi-Tenant Architecture & CDB/PDB structures\n* Advanced Relational Queries, Window Functions & Hierarchical queries\n* Stored Procedures, Functions, Triggers, and Package Development\n* Query Performance Tuning, Execution Plans, and Indexing\n* Official Exam 1Z0-071 & 1Z0-082 simulation with practical test dumps`,
      ctas: [
        { label: 'View Oracle Track', type: 'navigate', target: '/certifications/oracle', variant: 'primary' },
        { label: 'Inquire on WhatsApp', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' }
      ]
    };
  }

  // 6. CERTIFICATIONS GENERAL
  if (q.includes('certif') || q.includes('exam') || q.includes('pmp') || q.includes('scrum') || q.includes('rhcsa') || q.includes('ccna')) {
    return {
      text: `### 🏆 53 Global Certifications at Greens Technologys\n\nWe provide accredited training and official exam voucher preparation for top industry certifications:\n\n* **Cloud & Infra:** AWS Solutions Architect, Azure (AZ-104/305), Google Cloud, Red Hat Linux RHCSA, Cisco CCNA\n* **Testing:** ISTQB Foundation & Advanced, Selenium SDET Certification\n* **Database & ERP:** Oracle 19c SQL Associate, Salesforce Certified Administrator (ADM-201), SAP\n* **Management:** PMP® (Project Management Professional), Scrum Master (CSM/PSM), ITIL 4\n\nWe provide official practice simulations, authorized mentors, and mock exams with a **98.4% first-attempt pass rate**!`,
      ctas: [
        { label: 'View All 53 Certifications', type: 'navigate', target: '/certifications', variant: 'primary' },
        { label: 'WhatsApp Certification Desk', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' }
      ]
    };
  }

  // 7. PLACEMENTS / SALARY / JOBS
  if (q.includes('placement') || q.includes('salary') || q.includes('package') || q.includes('job') || q.includes('interview') || q.includes('fresher') || q.includes('guarantee')) {
    return {
      text: `### 💼 100% Placement Assistance Program\n\nAt Greens Technologys, your training is only complete once you receive your official job offer letter!\n\n**Placement Process:**\n1. **Unlimited Interview Calls:** Direct recruitment drives with 1,400+ hiring partners until you get placed.\n2. **Resume & Portfolio Crafting:** ATS-friendly resume creation with live capstone GitHub projects.\n3. **1-on-1 Mock Interviews:** Conducted by technical leads and HR managers from tier-1 MNCs.\n4. **Salary Packages:**\n   * **Freshers:** ₹4.5 LPA to ₹9.5 LPA\n   * **Experienced / Career Switchers:** ₹8.5 LPA to ₹28 LPA\n\n**Top Hiring Partners:** Cognizant, TCS, Infosys, Capgemini, Wipro, Cisco, Amazon, PayPal, Rakuten, Mindtree.`,
      ctas: [
        { label: 'View Placements & Testimonials', type: 'navigate', target: '/placements', variant: 'primary' },
        { label: 'Call Placement Cell', type: 'call', target: '+918939982288', variant: 'secondary' },
        { label: 'WhatsApp Placement Desk', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' }
      ]
    };
  }

  // 8. HOSTEL / ACCOMMODATION / FOOD / OUTSTATION
  if (q.includes('hostel') || q.includes('stay') || q.includes('room') || q.includes('food') || q.includes('accommodation') || q.includes('outstation')) {
    return {
      text: `### 🏠 Free Hostel & Accommodation for Students\n\nAre you travelling from outside Chennai or other districts? We offer safe, comfortable accommodation right next to our training hubs!\n\n**Facilities Provided:**\n* **Safe Accommodation:** Located walking distance to our OMR Thoraipakkam, Velachery, Tambaram, and Adyar branches.\n* **Nutritious Food:** 3 home-style meals daily (South Indian & North Indian vegetarian/non-veg menu).\n* **High-Speed Wi-Fi:** 24/7 dedicated fiber optic internet for uninterrupted project and lab practice.\n* **Security & Comfort:** 24/7 CCTV surveillance, biometric access, uninterrupted power backup, and warden care.\n* **Lab Access:** Extended access to classroom practice labs.`,
      ctas: [
        { label: 'View Hostel Gallery & Rules', type: 'navigate', target: '/hostel-facilities', variant: 'primary' },
        { label: 'Reserve Hostel Bed on WhatsApp', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' }
      ]
    };
  }

  // 9. BRANCHES / LOCATIONS / TIMINGS / FEES
  if (q.includes('branch') || q.includes('location') || q.includes('where') || q.includes('address') || q.includes('omr') || q.includes('adyar') || q.includes('velachery') || q.includes('tambaram') || q.includes('fee') || q.includes('cost') || q.includes('batch') || q.includes('timing')) {
    return {
      text: `### 📍 Greens Technologys Campuses & Batch Timings\n\nWe operate 22+ premium training campuses across Chennai:\n\n* **Headquarters & Corporate Hub:** 19, Balamurugan Garden, OMR Thoraipakkam, Chennai - 600097 (Opposite Geetham Restaurant).\n* **Major Hubs:** Adyar, Velachery, Tambaram, Anna Nagar, Porur, Navalur, Chromepet, and Siruseri.\n\n**Batch Schedules:**\n* **Regular Weekday:** Morning (7:30 AM - 9:30 AM), Day (10:00 AM - 1:00 PM), Evening (6:30 PM - 8:30 PM)\n* **Weekend Batches:** Saturday & Sunday (Flexible 3 to 4 hours per day for working professionals)\n* **Fees & Payment:** Highly competitive and value-packed, with no-cost EMI options available.\n\nWould you like to book a 100% Free Demo Session to evaluate the trainer and syllabus before enrolling?`,
      ctas: [
        { label: 'View All 22 Branches', type: 'navigate', target: '/contact-us', variant: 'primary' },
        { label: 'Book Free Demo Session', type: 'demo', target: 'General Demo Session', variant: 'accent' },
        { label: 'Call Head Office', type: 'call', target: '+918939982288', variant: 'secondary' }
      ]
    };
  }

  // DEFAULT / GENERAL ASSISTANCE
  return {
    text: `### Hello! I am G-Assist, your Greens Technologys Advisor 🤖\n\nI can assist you with comprehensive details regarding:\n\n* **180+ Courses:** Java & Python Full Stack with Gen AI, DevOps & AWS Cloud, SDET Automation Testing, Data Science, Salesforce, Cyber Security.\n* **53 Certifications:** Oracle, AWS SAA-C03, Azure, ISTQB, PMP, Scrum Master, CCNA.\n* **Career Support:** 100% Placement assistance, interview preparation, average salary packages (₹6.5L - ₹28L).\n* **Free Hostel Facilities:** Safe accommodation with Wi-Fi & 3 meals for outstation candidates.\n* **Branch Locations:** 22+ branches in Chennai (OMR HQ, Adyar, Velachery, Tambaram, Anna Nagar).\n\nFeel free to choose an option below or type your specific question!`,
    ctas: [
      { label: 'Explore All Courses', type: 'navigate', target: '/courses', variant: 'primary' },
      { label: 'Explore Certifications', type: 'navigate', target: '/certifications', variant: 'secondary' },
      { label: 'Chat on WhatsApp', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' },
      { label: 'Book Free Demo', type: 'demo', target: 'General Counseling', variant: 'accent' }
    ]
  };
}

/**
 * Extracts action CTAs from Gemini AI response text
 */
function extractDynamicCTAs(aiResponse: string, userQuery: string): ActionCTA[] {
  const ctas: ActionCTA[] = [];
  const text = (aiResponse + ' ' + userQuery).toLowerCase();

  if (text.includes('java')) {
    ctas.push({ label: 'View Java Full Stack', type: 'navigate', target: '/courses/java-full-stack-development', variant: 'primary' });
  } else if (text.includes('python')) {
    ctas.push({ label: 'View Python Full Stack', type: 'navigate', target: '/courses/python-full-stack-development', variant: 'primary' });
  } else if (text.includes('devops') || text.includes('kubernetes') || text.includes('docker')) {
    ctas.push({ label: 'View DevOps Track', type: 'navigate', target: '/courses/devops-cloud-architect-master-program', variant: 'primary' });
  } else if (text.includes('testing') || text.includes('selenium') || text.includes('sdet')) {
    ctas.push({ label: 'View SDET Program', type: 'navigate', target: '/courses/sdet-fullstack-testing-mastery', variant: 'primary' });
  } else if (text.includes('course') || text.includes('syllabus')) {
    ctas.push({ label: 'Browse 180+ Courses', type: 'navigate', target: '/courses', variant: 'primary' });
  }

  if (text.includes('oracle')) {
    ctas.push({ label: 'Oracle Certification', type: 'navigate', target: '/certifications/oracle', variant: 'secondary' });
  } else if (text.includes('azure') || text.includes('aws')) {
    ctas.push({ label: 'Cloud Certifications', type: 'navigate', target: '/certifications/azure', variant: 'secondary' });
  } else if (text.includes('istqb')) {
    ctas.push({ label: 'ISTQB Certification', type: 'navigate', target: '/certifications/istqb', variant: 'secondary' });
  } else if (text.includes('certification') || text.includes('exam')) {
    ctas.push({ label: 'View 53 Certifications', type: 'navigate', target: '/certifications', variant: 'secondary' });
  }

  if (text.includes('hostel') || text.includes('accommodation') || text.includes('stay')) {
    ctas.push({ label: 'Hostel Facilities', type: 'navigate', target: '/hostel-facilities', variant: 'secondary' });
  }

  if (text.includes('placement') || text.includes('salary') || text.includes('hiring')) {
    ctas.push({ label: 'Placement Records', type: 'navigate', target: '/placements', variant: 'secondary' });
  }

  if (text.includes('branch') || text.includes('contact') || text.includes('address') || text.includes('omr')) {
    ctas.push({ label: 'Branch Addresses', type: 'navigate', target: '/contact-us', variant: 'secondary' });
  }

  // Always offer WhatsApp & Demo
  ctas.push({ label: 'WhatsApp Advisor', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' });
  ctas.push({ label: 'Book Free Demo', type: 'demo', target: userQuery.slice(0, 40), variant: 'accent' });

  // Deduplicate target/type
  const uniqueCTAs: ActionCTA[] = [];
  const seen = new Set<string>();
  for (const cta of ctas) {
    const key = `${cta.type}:${cta.target}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueCTAs.push(cta);
    }
  }

  return uniqueCTAs.slice(0, 3);
}

/**
 * Sends a conversation message to Gemini API or local knowledge engine
 */
export async function sendMessageToGAssist(
  userText: string,
  history: ChatMessage[] = []
): Promise<{ text: string; ctas: ActionCTA[]; isLiveGemini: boolean }> {
  const apiKey = getGeminiApiKey();

  // If no Gemini API key is configured, instantly reply with rich local knowledge engine
  if (!apiKey) {
    const fallback = queryLocalKnowledgeBase(userText);
    return {
      text: fallback.text,
      ctas: fallback.ctas,
      isLiveGemini: false
    };
  }

  try {
    // Convert previous chat history into Gemini format (last 6 turns for context efficiency)
    const recentHistory = history.slice(-6);
    const contents: any[] = [];

    // System instruction is supported on gemini-1.5-flash / gemini-2.0-flash
    for (const msg of recentHistory) {
      contents.push({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    }

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: userText }]
    });

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: GREENS_SYSTEM_PROMPT }]
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1000
        }
      })
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      console.warn('Gemini API call returned non-200, falling back to knowledge base:', errJson);
      const fallback = queryLocalKnowledgeBase(userText);
      return {
        text: fallback.text,
        ctas: fallback.ctas,
        isLiveGemini: false
      };
    }

    const data = await response.json();
    const generatedText =
      data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!generatedText) {
      const fallback = queryLocalKnowledgeBase(userText);
      return {
        text: fallback.text,
        ctas: fallback.ctas,
        isLiveGemini: false
      };
    }

    // Extract dynamic CTAs
    const ctas = extractDynamicCTAs(generatedText, userText);

    return {
      text: generatedText,
      ctas,
      isLiveGemini: true
    };
  } catch (error) {
    console.error('Error invoking Gemini API:', error);
    const fallback = queryLocalKnowledgeBase(userText);
    return {
      text: fallback.text,
      ctas: fallback.ctas,
      isLiveGemini: false
    };
  }
}


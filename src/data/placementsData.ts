// Placement Data and Student Testimonials for Greens Technologys
// Includes both Regular (Written) Testimonials and Video Testimonials

import capgeminiLogo from '../assets/hiringpartners/Capgemini_logo.svg';
import ciscoLogo from '../assets/hiringpartners/Cisco_logo.svg';
import cognizantLogo from '../assets/hiringpartners/Cognizant_logo.svg';
import ibmLogo from '../assets/hiringpartners/IBM_logo.svg';
import infosysLogo from '../assets/hiringpartners/Infosys_logo.svg';
import rakutenLogo from '../assets/hiringpartners/Rakuten_logo.svg';
import tcsLogo from '../assets/hiringpartners/TCS_logo.svg';
import visaLogo from '../assets/hiringpartners/Visa_logo.svg';
import wiproLogo from '../assets/hiringpartners/Wipro_logo.svg';

import thumbJavaFullstack from '../assets/courses/course_fullstack_java.jpg';
import thumbPythonAi from '../assets/courses/course_python_genai.jpg';
import thumbDevops from '../assets/courses/course_devops_master.jpg';
import thumbSdet from '../assets/courses/course_sdet_expert.jpg';
import thumbDataAnalytics from '../assets/courses/course_data_analytics.jpg';
import thumbGenAi from '../assets/courses/course_genai_master.jpg';
import thumbClassroom from '../assets/whyus/classroom_mentorship.jpg';
import thumbAutomation from '../assets/whyus/n8n_automation_lab.jpg';

export interface PlacementStat {
  label: string;
  value: number;
  prefix?: string;
  suffix: string;
  description: string;
  iconName: string;
}

export interface VideoTestimonial {
  id: string;
  studentName: string;
  avatar: string;
  courseTaken: string;
  domain: 'programming' | 'ai-datascience' | 'cloud-devops' | 'testing-qa' | 'data-bi';
  company: string;
  companyLogo?: string;
  designation: string;
  previousRole: string;
  packageBefore: string;
  packageAfter: string;
  hike: string;
  duration: string;
  videoThumbnail: string;
  videoDuration: string;
  videoHighlightQuote: string;
  detailedStory: string;
  campusBranch: string;
  interviewRounds: number;
  batchYear: string;
  keyProjects: string[];
}

export interface RegularTestimonial {
  id: string;
  studentName: string;
  avatar: string;
  courseTaken: string;
  domain: 'programming' | 'ai-datascience' | 'cloud-devops' | 'testing-qa' | 'data-bi' | 'enterprise-erp-crm';
  company: string;
  companyLogo?: string;
  designation: string;
  previousRole: string;
  packageBefore: string;
  packageAfter: string;
  hike: string;
  rating: number;
  verifiedOffer: boolean;
  campusBranch: string;
  date: string;
  headline: string;
  reviewText: string;
  mentorsFeedback: string;
  tags: string[];
}

export interface HiringPartnerStats {
  name: string;
  logo: string;
  hiresLastYear: string;
  avgPackage: string;
  topRoles: string[];
}

export const PLACEMENT_STATS: PlacementStat[] = [
  {
    label: 'Alumni Placed Across Tech Majors',
    value: 24500,
    suffix: '+',
    description: 'Freshers & working professionals successfully placed across Chennai, Bengaluru & Global Hubs',
    iconName: 'Users'
  },
  {
    label: 'Corporate Hiring Partners',
    value: 1400,
    suffix: '+',
    description: 'Active recruiting enterprises including MNCs, Tier-1 Product Companies & Tech Unicorns',
    iconName: 'Building2'
  },
  {
    label: 'Highest Annual Compensation',
    value: 42,
    prefix: '₹',
    suffix: ' LPA',
    description: 'Achieved by AWS DevOps & Gen AI Architecture Master graduates',
    iconName: 'Award'
  },
  {
    label: 'Average Placement Package',
    value: 8.8,
    prefix: '₹',
    suffix: ' LPA',
    description: 'Consistent across Full Stack, Data Science, SDET & Cloud specializations',
    iconName: 'TrendingUp'
  }
];

export const HIRING_PARTNERS: HiringPartnerStats[] = [
  {
    name: 'TCS',
    logo: tcsLogo,
    hiresLastYear: '680+ Hires',
    avgPackage: '₹4.5 - 12.5 LPA',
    topRoles: ['Full Stack Java Dev', 'Data Analyst', 'Cloud Engineer']
  },
  {
    name: 'Cognizant',
    logo: cognizantLogo,
    hiresLastYear: '520+ Hires',
    avgPackage: '₹5.0 - 14.0 LPA',
    topRoles: ['SDET Test Automation Lead', 'Python Dev', 'DevOps Specialist']
  },
  {
    name: 'Infosys',
    logo: infosysLogo,
    hiresLastYear: '490+ Hires',
    avgPackage: '₹4.8 - 13.5 LPA',
    topRoles: ['React/Angular Dev', 'Big Data Engineer', 'API Automation']
  },
  {
    name: 'Capgemini',
    logo: capgeminiLogo,
    hiresLastYear: '380+ Hires',
    avgPackage: '₹6.0 - 16.0 LPA',
    topRoles: ['Spring Boot Microservices Dev', 'Azure Cloud Architect']
  },
  {
    name: 'IBM',
    logo: ibmLogo,
    hiresLastYear: '240+ Hires',
    avgPackage: '₹8.5 - 22.0 LPA',
    topRoles: ['Generative AI Engineer', 'Data Scientist', 'Site Reliability Engineer']
  },
  {
    name: 'Cisco',
    logo: ciscoLogo,
    hiresLastYear: '110+ Hires',
    avgPackage: '₹14.0 - 28.0 LPA',
    topRoles: ['Network Automation Dev', 'Kubernetes Cloud Eng', 'DevSecOps']
  },
  {
    name: 'Rakuten',
    logo: rakutenLogo,
    hiresLastYear: '95+ Hires',
    avgPackage: '₹12.0 - 26.0 LPA',
    topRoles: ['Backend Java Engineer', 'Distributed Systems Eng']
  },
  {
    name: 'Visa',
    logo: visaLogo,
    hiresLastYear: '80+ Hires',
    avgPackage: '₹15.0 - 32.0 LPA',
    topRoles: ['Fintech SDET Lead', 'Security Specialist', 'Full Stack React']
  },
  {
    name: 'Wipro',
    logo: wiproLogo,
    hiresLastYear: '410+ Hires',
    avgPackage: '₹4.5 - 11.5 LPA',
    topRoles: ['Python Data Analyst', 'QA Automation Engineer']
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'vid-karthik-rajan',
    studentName: 'Karthik Rajan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'Java Full Stack & GenAI Master Program',
    domain: 'programming',
    company: 'Visa Technology Center',
    companyLogo: visaLogo,
    designation: 'Senior Backend Systems Engineer',
    previousRole: 'BPO Support Executive (Non-Tech)',
    packageBefore: '₹3.2 LPA',
    packageAfter: '₹18.4 LPA',
    hike: '+475% Hike',
    duration: '4 Months Training',
    videoThumbnail: thumbJavaFullstack,
    videoDuration: '3m 45s',
    videoHighlightQuote: 'Coming from a non-coding BPO role, I never imagined landing an 18.4 LPA offer at Visa. The live capstone projects and mentor-led mock interviews at Greens OMR branch made it possible.',
    detailedStory: 'Karthik transitioned from non-technical telephone support to a high-concurrency payment systems engineer at Visa. He mastered Java 21, Spring Boot microservices, Kafka streaming, and React, clearing 5 intense technical rounds with flying colors.',
    campusBranch: 'OMR Thoraipakkam (HQ)',
    interviewRounds: 5,
    batchYear: '2025 Batch',
    keyProjects: ['High-throughput Ledger Microservice', 'Resilient Kafka Transaction Stream']
  },
  {
    id: 'vid-ananya-iyer',
    studentName: 'Ananya Iyer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'Generative AI & Data Science Master Program',
    domain: 'ai-datascience',
    company: 'IBM Software Labs',
    companyLogo: ibmLogo,
    designation: 'Generative AI Research Associate',
    previousRole: 'College Fresher (B.E ECE Graduate)',
    packageBefore: 'Fresher (₹0 LPA)',
    packageAfter: '₹21.0 LPA',
    hike: 'First Career Offer',
    duration: '4.5 Months Training',
    videoThumbnail: thumbGenAi,
    videoDuration: '4m 12s',
    videoHighlightQuote: 'The LangChain and RAG vector search pipelines we built from scratch at Greens Adyar branch directly mirrored IBM technical assignment. That was my differentiator.',
    detailedStory: 'Ananya graduated with zero campus placement in 2024. Within 4 months at Greens Technologys, she developed 4 production LLM applications, participated in weekend hackathons, and was recruited by IBM Labs with an elite 21 LPA compensation package.',
    campusBranch: 'Adyar Main Hub',
    interviewRounds: 4,
    batchYear: '2025 Batch',
    keyProjects: ['Enterprise RAG Agent with Pinecone & Hybrid Search', 'Fine-Tuned LLaMA-3 Legal Document Parser']
  },
  {
    id: 'vid-suresh-kumar',
    studentName: 'Suresh Kumar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'AWS Cloud, DevOps & SRE Program',
    domain: 'cloud-devops',
    company: 'Cisco Systems',
    companyLogo: ciscoLogo,
    designation: 'Lead DevOps Cloud Architect',
    previousRole: 'Legacy System Administrator',
    packageBefore: '₹5.5 LPA',
    packageAfter: '₹24.0 LPA',
    hike: '+336% Hike',
    duration: '3.5 Months Training',
    videoThumbnail: thumbDevops,
    videoDuration: '3m 20s',
    videoHighlightQuote: 'I was stuck managing on-premise Windows servers for 5 years. Greens practical multi-cloud labs with Terraform and Kubernetes unlocked my transition to Cisco.',
    detailedStory: 'Suresh revamped his technical foundation by operating multi-region Kubernetes clusters on AWS, authoring infrastructure as code with Terraform, and configuring automated GitHub Actions DevSecOps pipelines under mentor guidance.',
    campusBranch: 'Tambaram Sanatorium',
    interviewRounds: 4,
    batchYear: '2024 Batch',
    keyProjects: ['Zero-Downtime EKS Cluster Deployment', 'Terraform Automated AWS Infrastructure']
  },
  {
    id: 'vid-priya-dharshini',
    studentName: 'Priya Dharshini',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'SDET Playwright & Selenium Master Course',
    domain: 'testing-qa',
    company: 'Rakuten Symphony',
    companyLogo: rakutenLogo,
    designation: 'Staff SDET Automation Specialist',
    previousRole: 'Manual QA Tester',
    packageBefore: '₹4.2 LPA',
    packageAfter: '₹16.5 LPA',
    hike: '+292% Hike',
    duration: '3 Months Training',
    videoThumbnail: thumbSdet,
    videoDuration: '4m 05s',
    videoHighlightQuote: 'From manual test case spreadsheets to building an asynchronous Playwright TypeScript CI/CD framework from scratch—Greens mock interviews gave me immense confidence.',
    detailedStory: 'Priya eliminated manual testing repetition by mastering Playwright with TypeScript, RestAssured API testing, and parallel Dockerized test execution. Rakuten shortlisted her immediately during Greens dedicated hiring week.',
    campusBranch: 'Velachery Junction',
    interviewRounds: 3,
    batchYear: '2025 Batch',
    keyProjects: ['Hybrid Playwright Cucumber Framework', 'RestAssured Microservice API Test Harness']
  },
  {
    id: 'vid-vijay-anand',
    studentName: 'Vijay Anand',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'Power BI & Snowflake Data Engineering',
    domain: 'data-bi',
    company: 'Cognizant Digital',
    companyLogo: cognizantLogo,
    designation: 'Senior BI Analytics Consultant',
    previousRole: 'Financial Operations Associate',
    packageBefore: '₹3.8 LPA',
    packageAfter: '₹14.2 LPA',
    hike: '+273% Hike',
    duration: '3.5 Months Training',
    videoThumbnail: thumbDataAnalytics,
    videoDuration: '3m 15s',
    videoHighlightQuote: 'Greens real-world Snowflake data pipelines and complex DAX business case studies enabled me to crack Cognizant analytics client interview on my first attempt.',
    detailedStory: 'Vijay learned enterprise data modeling, SQL performance tuning, and created high-impact executive dashboards. His portfolio of 5 real-time client case studies impressed the technical panel.',
    campusBranch: 'Porur (Opp DLF)',
    interviewRounds: 3,
    batchYear: '2024 Batch',
    keyProjects: ['Healthcare Operations Executive Dashboard', 'Snowflake Multi-Cluster Warehouse ETL']
  },
  {
    id: 'vid-mohammed-irfan',
    studentName: 'Mohammed Irfan',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'Python Full Stack & AI Backend',
    domain: 'programming',
    company: 'Capgemini Invent',
    companyLogo: capgeminiLogo,
    designation: 'Full Stack Cloud Engineer',
    previousRole: 'Mechanical Engineering Fresher (2023)',
    packageBefore: 'Fresher (1-Year Career Gap)',
    packageAfter: '₹12.8 LPA',
    hike: 'Dream Tech Launch',
    duration: '4 Months Training',
    videoThumbnail: thumbPythonAi,
    videoDuration: '3m 50s',
    videoHighlightQuote: 'A 1-year career gap after Mechanical engineering made me lose hope. Greens Placement cell lined up 7 back-to-back MNC interviews until I locked down Capgemini.',
    detailedStory: 'Irfan built full stack web applications using FastAPI, Next.js, and PostgreSQL. The dedicated placement team guided his resume positioning and coordinated company drives.',
    campusBranch: 'Navalur OMR Hub',
    interviewRounds: 4,
    batchYear: '2025 Batch',
    keyProjects: ['Enterprise Inventory Management System', 'AI-Assisted Customer Support Chatbot']
  }
];

export const REGULAR_TESTIMONIALS: RegularTestimonial[] = [
  {
    id: 'reg-meenakshi-sundaram',
    studentName: 'Meenakshi Sundaram',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'Java Full Stack Development Master Certification',
    domain: 'programming',
    company: 'Tata Consultancy Services',
    companyLogo: tcsLogo,
    designation: 'Full Stack Java Technical Lead',
    previousRole: 'Technical Associate at Startup',
    packageBefore: '₹5.2 LPA',
    packageAfter: '₹15.6 LPA',
    hike: '+200% Hike',
    rating: 5,
    verifiedOffer: true,
    campusBranch: 'OMR Thoraipakkam',
    date: 'February 2025',
    headline: 'From ₹5.2 LPA to ₹15.6 LPA at TCS in 3 Months!',
    reviewText: 'The depth of microservices architecture taught by Greens industry trainers is unparalleled. We did not just memorize code; we wrote thread-safe multithreaded services, Dockerized them, and deployed to AWS. The mock interviews simulated actual TCS manager rounds.',
    mentorsFeedback: 'Meenakshi exhibited great dedication in mastering distributed caching with Redis and Spring Cloud Gateway.',
    tags: ['Core Java', 'Spring Boot', 'Microservices', 'Docker', 'TCS']
  },
  {
    id: 'reg-deepak-narayan',
    studentName: 'Deepak Narayan',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'AWS Solutions Architect & DevOps Master Certification',
    domain: 'cloud-devops',
    company: 'Infosys Public Sector',
    companyLogo: infosysLogo,
    designation: 'Senior Cloud Infrastructure Engineer',
    previousRole: 'Network Support Specialist',
    packageBefore: '₹4.0 LPA',
    packageAfter: '₹13.5 LPA',
    hike: '+237% Hike',
    rating: 5,
    verifiedOffer: true,
    campusBranch: 'Adyar Main Hub',
    date: 'January 2025',
    headline: 'Triple Salary Jump into Enterprise Multi-Cloud Architecture',
    reviewText: 'Before joining Greens, I struggled to understand Kubernetes and CI/CD pipelines. The lab faculty at Adyar sat with me late into the evenings to resolve deployment bugs on live AWS accounts. Within 12 weeks, I attended 3 drives and cracked Infosys with 13.5 LPA.',
    mentorsFeedback: 'Deepak demonstrated exceptional mastery of Terraform modules and Kubernetes helm charts.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Infosys']
  },
  {
    id: 'reg-swetha-ramesh',
    studentName: 'Swetha Ramesh',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'SDET Software Test Automation (Selenium & Playwright)',
    domain: 'testing-qa',
    company: 'Cognizant',
    companyLogo: cognizantLogo,
    designation: 'Senior QA Automation Lead',
    previousRole: 'Manual QA (Career Break 2 Years)',
    packageBefore: '₹3.6 LPA',
    packageAfter: '₹12.0 LPA',
    hike: '+233% Hike',
    rating: 5,
    verifiedOffer: true,
    campusBranch: 'Velachery Hub',
    date: 'March 2025',
    headline: 'Restarted My Career After a 2-Year Maternity Gap with 12 LPA',
    reviewText: 'I was hesitant about re-entering tech after a maternity break. Greens faculty created a personalized bridge curriculum for me. We automated real e-commerce workflows using Playwright and RestAssured. Today I am leading an automation team at Cognizant!',
    mentorsFeedback: 'Swethas commitment to writing clean Page Object Model test architecture was inspiring.',
    tags: ['Playwright', 'Selenium', 'RestAssured', 'Cognizant', 'Career Restart']
  },
  {
    id: 'reg-arun-prakash',
    studentName: 'Arun Prakash',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'Generative AI & Python Data Science Master',
    domain: 'ai-datascience',
    company: 'Wipro AI Enterprise',
    companyLogo: wiproLogo,
    designation: 'AI & Machine Learning Specialist',
    previousRole: 'Junior Python Programmer',
    packageBefore: '₹4.5 LPA',
    packageAfter: '₹16.0 LPA',
    hike: '+255% Hike',
    rating: 5,
    verifiedOffer: true,
    campusBranch: 'OMR Thoraipakkam',
    date: 'February 2025',
    headline: 'Transitioned from Basic Scripting to Enterprise LLM Solutions',
    reviewText: 'Most institutes only cover simple scikit-learn models. Greens taught us transformer architectures, tokenization, Vector DB embeddings, and agentic workflows with LangChain. Wipro technical interviewers were surprised by the depth of my practical portfolio.',
    mentorsFeedback: 'Arun built an autonomous research assistant with tool calling that set a benchmark for the batch.',
    tags: ['Generative AI', 'Python', 'LangChain', 'RAG', 'Wipro']
  },
  {
    id: 'reg-keerthana-mohan',
    studentName: 'Keerthana Mohan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'Snowflake & Power BI Data Engineering Master',
    domain: 'data-bi',
    company: 'Capgemini',
    companyLogo: capgeminiLogo,
    designation: 'Snowflake Data Engineer',
    previousRole: 'SQL Developer',
    packageBefore: '₹4.8 LPA',
    packageAfter: '₹14.5 LPA',
    hike: '+202% Hike',
    rating: 5,
    verifiedOffer: true,
    campusBranch: 'Porur (Opp DLF)',
    date: 'January 2025',
    headline: 'Snowflake Cloud Data Warehousing Transformed My Compensation',
    reviewText: 'The combination of complex SQL, Snowflake clustering, and Power BI enterprise DAX modeling gave me an edge. The trainers at Greens Porur branch have 12+ years in corporate data architecture. Within 3 weeks of course completion, I had 2 offers in hand.',
    mentorsFeedback: 'Keerthana excelled in dimensional modeling and automated data pipeline scheduling.',
    tags: ['Snowflake', 'Power BI', 'SQL', 'Data Warehousing', 'Capgemini']
  },
  {
    id: 'reg-balaji-venkatesh',
    studentName: 'Balaji Venkatesh',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    courseTaken: 'Cybersecurity, Ethical Hacking & SOC Analyst Program',
    domain: 'cloud-devops',
    company: 'Cisco Systems',
    companyLogo: ciscoLogo,
    designation: 'SOC Security Analyst (Tier-2)',
    previousRole: 'Desktop Support Tech',
    packageBefore: '₹3.0 LPA',
    packageAfter: '₹11.8 LPA',
    hike: '+293% Hike',
    rating: 5,
    verifiedOffer: true,
    campusBranch: 'Tambaram Sanatorium',
    date: 'March 2025',
    headline: 'Zero Security Knowledge to SOC Level 2 Analyst at Cisco',
    reviewText: 'Greens cybersecurity labs with real SIEM tools, Splunk analysis, and penetration testing sandbox environments were incredible. The trainers walked us through real threat mitigation and incident response scenarios that came up directly in my Cisco interview.',
    mentorsFeedback: 'Balajis hands-on lab discipline during late night red-team simulations made him stand out.',
    tags: ['Cybersecurity', 'Splunk', 'SOC Analyst', 'Ethical Hacking', 'Cisco']
  }
];

export const CAREER_TRANSITION_MATRIX = [
  {
    title: 'Non-IT / BPO ➔ Product Software Engineer',
    from: 'Customer Support / BPO',
    to: 'Backend Software Engineer',
    avgHike: '+350% Average Hike',
    keyTracks: 'Java Full Stack, Python & Microservices',
    timeline: '3 - 4 Months'
  },
  {
    title: 'Manual Tester ➔ High-Paid SDET Lead',
    from: 'Manual Test Case Writing',
    to: 'SDET Automation Architect',
    avgHike: '+280% Average Hike',
    keyTracks: 'Playwright, Selenium & CI/CD Pipelines',
    timeline: '2.5 - 3 Months'
  },
  {
    title: 'System Admin ➔ Cloud DevOps / SRE Architect',
    from: 'Windows / Linux Support',
    to: 'AWS / Azure DevOps & SRE',
    avgHike: '+320% Average Hike',
    keyTracks: 'Kubernetes, Terraform & Cloud Architecture',
    timeline: '3 - 4 Months'
  },
  {
    title: 'College Fresher ➔ Tier-1 Tech Associate',
    from: 'Zero Campus Offer',
    to: 'Full Stack & AI Engineer',
    avgHike: '₹6 - 18 LPA Starting Package',
    keyTracks: 'Full Stack, Data Science & Gen AI',
    timeline: '3 - 4.5 Months'
  }
];

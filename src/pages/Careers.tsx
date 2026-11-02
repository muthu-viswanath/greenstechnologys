import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Award,
  Users,
  Search,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Building2,
  DollarSign,
  Check,
  BrainCircuit,
  Bot,
  Cpu,
  Layers,
  Code2,
  Cloud,
  FileText,
  ShieldCheck,
  Calendar,
  X,
  Compass,
  ArrowUpRight,
  TrendingUp,
  Target,
  Rocket,
  ChevronRight
} from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: 'Technical Training' | 'Business Development' | 'Sales & Counseling' | 'Campus Relations';
  categoryLabel: string;
  location: string;
  type: string;
  salary: string; // "Best in the Industry"
  experience: string; // "More than 1 year of relevant experience. Freshers are welcome"
  aiClusteredSkills?: string[];
  marketOpportunity?: string;
  jobDescription: string;
  keyResponsibilities: string[];
  keyQualifications: string[];
  marketTrendTag: string;
  whyCandidatesLoveThis: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  // 1. Technical Trainers (AI & Modern Tech Clustered)
  {
    id: 'trainer-genai',
    title: 'Technical Trainer – Generative AI, LLMs & Agentic Systems',
    department: 'Technical Training',
    categoryLabel: 'Artificial Intelligence & Agentic Workflows',
    location: 'Chennai (OMR Corporate Campus / Adyar)',
    type: 'Full-Time / Weekend Executive',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'High Growth: +140% YoY Hiring Across Chennai GCCs',
    whyCandidatesLoveThis: [
      'Direct access to enterprise GenAI sandbox environments (OpenAI, Claude, Llama 3)',
      'High-revenue profit share on specialized corporate AI upskilling contracts',
      'Continuous leadership mentorship to shape national tech curricula'
    ],
    aiClusteredSkills: [
      'Large Language Models (LLMs)',
      'LangChain & LlamaIndex',
      'Retrieval-Augmented Generation (RAG)',
      'Vector Databases (Chroma, Pinecone)',
      'Prompt Engineering & Agent Workflows',
      'n8n & Multi-Agent Swarms',
      'Python & FastAPI'
    ],
    marketOpportunity:
      'Chennai IT GCCs and top MNCs (Cognizant, Infosys, TCS, and emerging AI startups) are recruiting entry-level AI Engineers and RAG pipeline builders. In this role, you will train aspiring engineers on autonomous agent architectures.',
    jobDescription:
      'Lead our flagship Generative AI curriculum. Deliver rigorous, practical laboratory workshops covering transformer architectures, fine-tuning, RAG pipelines, and automated multi-agent frameworks for fresh engineering graduates and working professionals.',
    keyResponsibilities: [
      'Deliver interactive practical workshops guiding students to build live LLM-powered applications.',
      'Mentor learners through real-world capstone projects (enterprise search, agentic automations, multimodal assistants).',
      'Keep training repositories up-to-date with emerging open-source models (Llama 3, DeepSeek, Mistral).',
      'Conduct code reviews, mock technical interview evaluations, and portfolio readiness audits.'
    ],
    keyQualifications: [
      'Deep conceptual clarity and enthusiasm for Generative AI, transformer architectures, and Python.',
      'Familiarity with LangChain/LlamaIndex, API integrations, and vector database retrieval.',
      'B.E / B.Tech / M.Tech / MCA or equivalent with demonstrated hands-on coding passion.'
    ]
  },
  {
    id: 'trainer-java-genai',
    title: 'Technical Trainer – Java Full Stack with Spring AI & Microservices',
    department: 'Technical Training',
    categoryLabel: 'Enterprise Full Stack & Cloud Engineering',
    location: 'Chennai (All Major Campuses: OMR, Adyar, Velachery)',
    type: 'Full-Time / Flexible Slabs',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'Volume Hiring: 40,000+ Entry-Level Roles in Chennai',
    whyCandidatesLoveThis: [
      'Teach modernized Java 21, Spring AI, and AI-assisted pair programming',
      'Massive placement momentum with 850+ hiring partners hiring graduates monthly',
      'Supportive faculty culture with dedicated teaching assistants in every lab'
    ],
    aiClusteredSkills: [
      'Java 21 Core & Advanced',
      'Spring Boot 3.x & Spring AI',
      'Microservices & REST APIs',
      'React.js / Next.js Integration',
      'AI-Assisted Pair Programming',
      'Docker & Containerized Services',
      'PostgreSQL & Vector Embeddings'
    ],
    marketOpportunity:
      'Enterprise software leaders in Chennai demand "AI-Augmented" Java Full Stack engineers who can construct resilient microservices connected to intelligent AI endpoints. This remains the premier employment pathway for computer science freshers.',
    jobDescription:
      'Train aspiring developers in modern full-stack web engineering, focusing on core Java fundamentals, Spring Boot microservices, React UI frameworks, and integrating Spring AI endpoints into modern enterprise applications.',
    keyResponsibilities: [
      'Deliver concept-to-code training on object-oriented programming, data structures, and enterprise architecture.',
      'Lead end-to-end full stack development projects mimicking real enterprise delivery pipelines.',
      'Teach AI-augmented coding practices and prompt-driven debugging.',
      'Facilitate mock technical interviews and live coding challenges.'
    ],
    keyQualifications: [
      'Solid command over Java fundamentals, Spring Boot framework, SQL databases, and modern JavaScript/React.',
      'Enthusiasm for guiding beginners from basic syntax to full microservices deployment.',
      'Good interpersonal communication in English and Tamil.'
    ]
  },
  {
    id: 'trainer-python-ds-ai',
    title: 'Technical Trainer – Python, Data Science & Machine Learning',
    department: 'Technical Training',
    categoryLabel: 'Data Science & Predictive Modeling',
    location: 'Chennai (OMR / Velachery / Anna Nagar / Porur)',
    type: 'Full-Time',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'Specialist Demand: Heavy Intake Across Banking & Health GCCs',
    whyCandidatesLoveThis: [
      'GPU-accelerated Jupyter cloud sandboxes for all batch exercises',
      'Mentorship honorarium for supervising student Kaggle competitions',
      'Opportunities to deliver high-profile corporate analytics workshops'
    ],
    aiClusteredSkills: [
      'Python Programming',
      'NumPy, Pandas & Matplotlib',
      'Scikit-Learn & Machine Learning',
      'Deep Learning with PyTorch',
      'Natural Language Processing (NLP)',
      'Computer Vision Basics',
      'Model Deployment with FastAPI'
    ],
    marketOpportunity:
      'Chennai’s growing Global Capability Centers (GCCs) in banking, automotive, and healthcare are seeking fresh graduates with applied ML and predictive modeling chops. Our graduates rely on you to bridge university theory with industrial practice.',
    jobDescription:
      'Inspire learners with practical data exploration, statistical modeling, machine learning algorithms, and deep neural networks. Guide students through building tangible portfolio projects hosted on GitHub.',
    keyResponsibilities: [
      'Deliver interactive workshops on exploratory data analysis, feature engineering, and algorithm optimization.',
      'Supervise hands-on Kaggle-style case studies and machine learning lifecycle deployments.',
      'Conduct 1-on-1 code debugging and math intuition sessions.',
      'Collaborate with our centralized curriculum council to integrate new AI libraries.'
    ],
    keyQualifications: [
      'Proficiency in Python and standard data science libraries (Pandas, Scikit-Learn, PyTorch/TensorFlow).',
      'Clear conceptual understanding of supervised and unsupervised machine learning algorithms.',
      'Ability to inspire, motivate, and mentor fresh talent.'
    ]
  },
  {
    id: 'trainer-devops-cloud-aiops',
    title: 'Technical Trainer – Multi-Cloud (AWS/Azure) & DevOps with AIOps',
    department: 'Technical Training',
    categoryLabel: 'Cloud Infrastructure & Site Reliability',
    location: 'Chennai (OMR HQ / Vadapalani / Tambaram)',
    type: 'Full-Time / Weekend Flexible',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'Standard Infrastructure: 100% Cloud Native Workloads on OMR',
    whyCandidatesLoveThis: [
      'Full sponsorship for official AWS & Azure Solutions Architect certifications',
      'Live enterprise Kubernetes clusters and Terraform infrastructure sandboxes',
      'Evening and weekend schedule flexibility designed around your convenience'
    ],
    aiClusteredSkills: [
      'Amazon Web Services (AWS) & Azure',
      'Docker & Kubernetes (K8s)',
      'Terraform (Infrastructure as Code)',
      'CI/CD (GitHub Actions / Jenkins)',
      'AIOps & Automated Observability',
      'Linux Shell Scripting',
      'Prometheus, Grafana & ELK Stack'
    ],
    marketOpportunity:
      'Cloud infrastructure adoption across OMR tech parks has reached 100%. Tech firms hire junior DevOps engineers who understand container orchestration, cloud security, and AI-powered log analysis.',
    jobDescription:
      'Instruct engineers on architecting, automating, and monitoring enterprise cloud workloads across AWS and Azure. Provide hands-on lab environments for automated zero-downtime CI/CD deployments.',
    keyResponsibilities: [
      'Conduct real-time lab exercises on cloud VPCs, containerization with Docker, and Kubernetes clusters.',
      'Guide students in building Infrastructure as Code (IaC) using Terraform scripts.',
      'Demonstrate AIOps automated healing and alerting with modern observability stacks.',
      'Prepare trainees for official AWS Cloud Practitioner / Solutions Architect exams.'
    ],
    keyQualifications: [
      'Hands-on experience with Linux administration, AWS/Azure core services, Docker, and CI/CD tools.',
      'Clear, articulate presentation skills with focus on hands-on practical demos over theoretical slides.',
      'Relevant cloud certifications are a strong positive.'
    ]
  },
  {
    id: 'trainer-sdet-ai-qa',
    title: 'Technical Trainer – SDET & AI-Driven QA Automation',
    department: 'Technical Training',
    categoryLabel: 'Quality Engineering & Test Automation',
    location: 'Chennai (All Major Branches)',
    type: 'Full-Time / Part-Time',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'Placement Velocity: 95% 60-Day Placement Record',
    whyCandidatesLoveThis: [
      'Teach cutting-edge Playwright & AI-assisted test authoring',
      'Rewarding learner transformation for candidates transitioning into tech',
      'Transparent performance multiplier bonuses on student hiring milestones'
    ],
    aiClusteredSkills: [
      'Selenium WebDriver & Playwright',
      'Java / Python for Automation',
      'API Testing with RestAssured & Postman',
      'AI Test Case Generation & Copilot',
      'Cypress & Mobile Automation',
      'CI/CD Pipeline Integration',
      'LLM Output & Hallucination Testing'
    ],
    marketOpportunity:
      'Software testing has moved decisively into AI-driven test automation and GenAI application verification. Major IT recruiters in Chennai have high intake for SDET freshers who possess both web automation and API testing skills.',
    jobDescription:
      'Train students to build scalable automation test frameworks from scratch. Teach web automation with Playwright and Selenium, API validation, and the emerging discipline of evaluating AI agent outputs.',
    keyResponsibilities: [
      'Instruct on core testing fundamentals, TestNG/JUnit, BDD Cucumber frameworks, and Git workflows.',
      'Lead labs on Playwright and Selenium test automation across cross-browser environments.',
      'Introduce AI-assisted test authoring and automated regression pipelines in Jenkins.',
      'Review student framework repositories and conduct mock QA interview drills.'
    ],
    keyQualifications: [
      'Strong coding knowledge in Java or Python tailored to test automation.',
      'Hands-on familiarity with Selenium/Playwright, API testing, and test automation design patterns.',
      'Passion for teaching and mentoring freshers into confident SDET engineers.'
    ]
  },
  {
    id: 'trainer-data-analytics',
    title: 'Technical Trainer – Data Analytics, Power BI & Snowflake',
    department: 'Technical Training',
    categoryLabel: 'Business Intelligence & Cloud Warehousing',
    location: 'Chennai (Central / West / South)',
    type: 'Full-Time',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'Steady Intake: Strong Corporate Hiring in Analytics Hubs',
    whyCandidatesLoveThis: [
      'Cloud sandbox on Snowflake and modern Power BI Premium environments',
      'Supervise end-to-end visual dashboard case studies for corporate clients',
      'High satisfaction mentoring both engineering and non-engineering graduates'
    ],
    aiClusteredSkills: [
      'Advanced SQL & Query Optimization',
      'Power BI (DAX, Modeling)',
      'Tableau & Visual Storytelling',
      'Python for Analytics (Pandas)',
      'Snowflake Cloud Data Warehouse',
      'AI Predictive Dashboards',
      'Excel Advanced Modeling'
    ],
    marketOpportunity:
      'Data-driven decision making has created massive entry-level vacancies for Business Intelligence and Data Analysts across finance, retail, and tech consultancies in Chennai.',
    jobDescription:
      'Guide students in transforming messy raw business data into actionable enterprise dashboards and automated KPI reports using SQL, Power BI, Tableau, and Snowflake.',
    keyResponsibilities: [
      'Conduct hands-on SQL query training on relational databases and cloud data warehouses.',
      'Mentor learners in crafting executive business dashboards in Power BI and Tableau.',
      'Lead end-to-end analytics case studies covering sales forecasting, churn analysis, and supply chain KPIs.',
      'Help fresh graduates assemble compelling visual portfolios for placement interviews.'
    ],
    keyQualifications: [
      'Strong grasp of SQL queries, data modeling concepts, and Power BI/Tableau visual dashboards.',
      'Energetic, engaging presentation style capable of demystifying analytics for non-CS graduates.',
      'Good communication and patience with learners.'
    ]
  },

  // 2. Business Development Associate (BDA)
  {
    id: 'role-bda',
    title: 'Business Development Associate (BDA)',
    department: 'Business Development',
    categoryLabel: 'Student Counseling & Inbound Admissions',
    location: 'Chennai (OMR HQ / Vadapalani / Velachery / Adyar)',
    type: 'Full-Time',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'Incentive Growth: 100% Inbound Leads & Uncapped Bonuses',
    whyCandidatesLoveThis: [
      'High-intent student inquiries generated through central digital marketing campaigns',
      'Transparent, uncapped monthly performance commissions',
      'Fast-track promotion to Branch Counseling Manager in 12 to 18 months'
    ],
    jobDescription:
      'Drive student admissions and growth for our technical certifications. Connect with aspiring tech graduates, understand their career ambitions, explain Greens industry-leading curriculum and placement records, and guide them into the right training program.',
    keyResponsibilities: [
      'Engage with inbound student leads generated through Greens central digital marketing campaigns.',
      'Conduct professional career counseling sessions in person at the branch and over phone/video calls.',
      'Explain course curricula, lab setups, batch schedules, and placement support to prospective students and parents.',
      'Meet weekly and monthly enrollment milestones with lucrative uncapped incentive rewards.',
      'Maintain diligent lead tracking and follow-up updates in the company CRM.'
    ],
    keyQualifications: [
      'Excellent verbal and written communication in English and Tamil.',
      'Persuasive, empathetic interpersonal presence with high active listening skills.',
      'Goal-driven mindset with eagerness to learn about IT technologies and career pathways.',
      'Any Graduate / Post Graduate degree (B.E, B.Tech, B.Sc, B.Com, BBA, MBA). Freshers with strong communication are warmly encouraged!'
    ]
  },

  // 3. Business Development Executives (BDE)
  {
    id: 'role-bde',
    title: 'Business Development Executives (BDE)',
    department: 'Business Development',
    categoryLabel: 'Territory Growth & Corporate Alliances',
    location: 'Chennai (Multiple Zonal Hubs across 22 Branches)',
    type: 'Full-Time',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'Leadership Track: Direct Multi-Branch Revenue Strategy',
    whyCandidatesLoveThis: [
      'High visibility collaborating directly with senior executive leadership',
      'Revenue share on corporate training and upskilling packages with IT companies',
      'Ownership over local marketing initiatives, branch events, and community demo days'
    ],
    jobDescription:
      'Lead territory growth, student intake strategies, and corporate client connections across designated Greens branch clusters. Act as a strategic growth driver executing outreach campaigns and branch revenue optimization.',
    keyResponsibilities: [
      'Formulate and execute hyper-local student acquisition campaigns across colleges, tech parks, and residential hubs.',
      'Supervise BDA associates, review inquiry pipelines, and enhance conversion ratios across flagship courses.',
      'Liaise with mid-sized IT companies and startups for team upskilling and corporate training packages.',
      'Organize branch open houses, free weekend demo workshops, and alumni networking sessions.',
      'Provide regular revenue reports and expansion forecasts to the zonal leadership.'
    ],
    keyQualifications: [
      'Strong negotiation, consultative sales, and relationship-building abilities.',
      'Understanding of the tech recruitment ecosystem and student psychology.',
      'High ownership, resilience, and collaborative team-leading spirit.',
      'Degree in Business, Marketing, Engineering, or relevant discipline.'
    ]
  },

  // 4. Sales Person / Educational Counselor
  {
    id: 'role-counselor',
    title: 'Sales Person / Senior Educational Counselor',
    department: 'Sales & Counseling',
    categoryLabel: 'Lobby Walk-in Advisory & Career Guidance',
    location: 'Chennai (Walk-in Counseling Desk across 22 Branches)',
    type: 'Full-Time',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'High Trust: Face-to-Face Student Mentorship & Enrollment',
    whyCandidatesLoveThis: [
      'Warm, professional counseling lounge environments at premium Chennai branches',
      'High job fulfillment assisting parents and students in choosing rewarding tech paths',
      'Consistent monthly incentives and structured annual appraisals'
    ],
    jobDescription:
      'Serve as the welcoming face and trusted career advisor for students and working professionals stepping into Greens Technologys branch lobbies. Provide transparent, customized career transition roadmaps that guide students to enroll.',
    keyResponsibilities: [
      'Greet walk-in candidates, conduct personal skill-gap evaluations, and recommend appropriate tech tracks.',
      'Showcase live classroom labs, faculty profiles, syllabus brochures, and verified placement record sheets.',
      'Address candidate concerns regarding course duration, fee installments, prerequisite doubts, and interview support.',
      'Coordinate batch scheduling with technical trainers and ensure smooth student onboarding on Day 1.',
      'Maintain long-term relationships with enrolled learners to foster positive word-of-mouth and student referrals.'
    ],
    keyQualifications: [
      'Warm, friendly, and trustworthy conversational demeanor.',
      'Fluency in Tamil and English; ability to explain tech career trajectories clearly to students and parents.',
      'Organized, prompt in follow-ups, and passionate about helping people build rewarding careers.',
      'Fresh graduates with passion for customer interaction and relationship building are welcome to apply.'
    ]
  },

  // 5. Campus Connect Coordinators
  {
    id: 'role-campus-connect',
    title: 'Campus Connect Coordinators',
    department: 'Campus Relations',
    categoryLabel: 'University Partnerships & College Outreach',
    location: 'Chennai & Tamil Nadu (Extensive College Outreach)',
    type: 'Full-Time',
    salary: 'Best in the Industry',
    experience: 'More than 1 year of relevant experience. Freshers are welcome',
    marketTrendTag: 'Institutional Outreach: 100+ Engineering Colleges & MoUs',
    whyCandidatesLoveThis: [
      'High networking with College Principals, HODs, and Placement Directors across Tamil Nadu',
      'Event management and keynote presentation opportunities at academic hackathons',
      'Lucrative incentive rewards on institutional MoU closures'
    ],
    jobDescription:
      'Build and nurture strong institutional tie-ups between Greens Technologys and engineering colleges, polytechnics, and arts & science universities across Tamil Nadu. Organize on-campus technical bootcamps, faculty development programs, and student placement drives.',
    keyResponsibilities: [
      'Connect with College Principals, Placement Officers (TPOs), and HODs to pitch Greens institutional training programs.',
      'Coordinate and execute on-campus GenAI, Full Stack, and Cloud awareness seminars and hackathons.',
      'Facilitate Memorandums of Understanding (MoUs) for semester-break bootcamps and value-added training courses.',
      'Manage end-to-end logistics for college student delegations visiting Greens high-tech labs for industrial visits.',
      'Act as the primary bridge between college placement cells and Greens corporate hiring partners.'
    ],
    keyQualifications: [
      'Outgoing, confident personality with strong public presentation and institutional pitching skills.',
      'Comfortable traveling to engineering colleges and networking with senior academic dignitaries.',
      'Proactive event management and coordination abilities.',
      'Freshers with prior college club leadership (Rotaract, IEEE, Placement Cell, Student Council) are highly valued.'
    ]
  }
];

const TRAINER_ADVANTAGES = [
  {
    icon: Award,
    title: 'Unmatched Market Stature & Pride',
    desc: 'You represent Tamil Nadu’s #1 software training brand with 15+ years of trust. Being a Greens faculty member commands immediate respect among IT recruiters and students alike.'
  },
  {
    icon: DollarSign,
    title: 'Industry-Best Pay & Performance Multipliers',
    desc: 'Enjoy top-tier compensation ("Best in the Industry") with transparent incentives, student satisfaction bonuses, and opportunities for corporate consulting revenue shares.'
  },
  {
    icon: BrainCircuit,
    title: 'Continuous GenAI & Emerging Tech Upskilling',
    desc: 'Stay ahead of the tech curve. Greens invests in our trainers with sponsored master certifications, enterprise cloud sandboxes, and early access to generative AI and agentic tools.'
  },
  {
    icon: Clock,
    title: 'Work-Life Harmony & Flexible Slabs',
    desc: 'Choose schedules that match your lifestyle: full-time weekday slabs, specialized evening corporate batches, or lucrative weekend-only masterclasses.'
  },
  {
    icon: Users,
    title: 'Immense Impact on 10,000+ Young Lives',
    desc: 'Experience the profound emotional fulfillment of transforming fresh non-IT graduates into self-reliant software engineers placed in top MNCs with life-changing salary packages.'
  },
  {
    icon: Building2,
    title: 'Presence Across 22 State-of-the-Art Campuses',
    desc: 'Teach in modern, air-conditioned smart classrooms equipped with multimedia screens, ultra-fast fiber optics, and dedicated lab assistant mentors to support you.'
  }
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState<string>('All Positions (10)');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeJobId, setActiveJobId] = useState<string>('trainer-genai');

  // Application Modal State
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  const [applyJobTitle, setApplyJobTitle] = useState<string>('');
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('Fresher / Less than 1 year (Welcome!)');
  const [applicantResumeLink, setApplicantResumeLink] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // GSAP animation refs
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.career-badge', {
        y: -25,
        opacity: 0,
        duration: 0.6
      })
      .from(titleRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.8
      }, '-=0.3')
      .from(statsRef.current ? statsRef.current.children : [], {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6
      }, '-=0.4');

      gsap.to('.career-orb', {
        y: '+=15',
        x: '+=10',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS.filter((job) => {
      const matchDept =
        selectedDept === 'All Positions (10)' ||
        (selectedDept === 'Technical Trainers' && job.department === 'Technical Training') ||
        (selectedDept === 'Business Development' && job.department === 'Business Development') ||
        (selectedDept === 'Sales & Counseling' && job.department === 'Sales & Counseling') ||
        (selectedDept === 'Campus Relations' && job.department === 'Campus Relations');

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.aiClusteredSkills?.some((s) => s.toLowerCase().includes(q)) ||
        job.jobDescription.toLowerCase().includes(q);

      return matchDept && matchSearch;
    });
  }, [selectedDept, searchQuery]);

  // Keep active job valid when filters change
  useEffect(() => {
    if (filteredJobs.length > 0 && !filteredJobs.some((j) => j.id === activeJobId)) {
      setActiveJobId(filteredJobs[0].id);
    }
  }, [filteredJobs, activeJobId]);

  const activeJob = useMemo(() => {
    return JOB_OPENINGS.find((j) => j.id === activeJobId) || JOB_OPENINGS[0];
  }, [activeJobId]);

  const handleOpenApply = (job: JobOpening) => {
    setApplyJobTitle(job.title);
    setShowApplyModal(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#fcfdfd] text-[#1b342e] min-h-screen">
      {/* 1. HERO SECTION WITH GSAP ANIMATIONS */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-[#142621] via-[#1a332c] to-[#162d27] text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 border-b border-emerald-950/40"
      >
        <div className="career-orb absolute -top-12 left-10 w-96 h-96 bg-[#86c37c]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="career-orb absolute top-20 right-10 w-96 h-96 bg-[#e9c86a]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="career-orb absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="career-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#e9c86a]" />
            Faculty & Growth Careers • Greens Technologys
          </div>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 max-w-4xl mx-auto"
          >
            Teach, Lead, and Inspire at <br />
            <span className="text-[#86c37c]">South India’s Premier Academy</span>
          </h1>

          <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto mb-12">
            Join an esteemed community of <strong>500+ faculty mentors, counselors, and growth leaders</strong>. 
            We offer <strong>Best in the Industry</strong> compensation, structured faculty sabbaticals, and a welcoming door: 
            <span className="text-white font-medium italic"> "More than 1 year of relevant experience. Freshers are welcome."</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#career-directory"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#142621] font-extrabold text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5 text-[#142621]" />
              Explore Open Positions ({JOB_OPENINGS.length})
            </a>

            <a
              href="#trainer-advantages"
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <Award className="w-5 h-5 text-[#e9c86a]" />
              Faculty Culture & Advantages
            </a>
          </div>

          {/* Elegant Minimalist Metrics */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/15"
          >
            <div>
              <p className="text-3xl font-extrabold text-[#86c37c]">Top 5%</p>
              <p className="text-xs text-emerald-200/80 mt-1 uppercase tracking-wider font-semibold">Industry Best Pay</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#e9c86a]">22 Campuses</p>
              <p className="text-xs text-emerald-200/80 mt-1 uppercase tracking-wider font-semibold">Across Chennai & TN</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#86c37c]">150,000+</p>
              <p className="text-xs text-emerald-200/80 mt-1 uppercase tracking-wider font-semibold">Engineers Trained</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#e9c86a]">Freshers</p>
              <p className="text-xs text-emerald-200/80 mt-1 uppercase tracking-wider font-semibold">Warmly Welcomed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADVANTAGES OF BEING A TRAINER AT GREENS TECHNOLOGYS */}
      <section id="trainer-advantages" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-emerald-700" />
            Why Choose a Career with Greens?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
            The Advantages of Being a Trainer at Greens Technologys
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
            Faculty at Greens enjoy an empowering, highly compensated intellectual journey. 
            You shape the engineers who build India’s technological future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINER_ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-emerald-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="font-extrabold text-lg text-[#1b342e] mb-3">{adv.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{adv.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span>Greens Faculty Advantage</span>
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ELEGANT MASTER-DETAIL CAREER DIRECTORY (REDESIGNED CURRENT OPENINGS) */}
      <section id="career-directory" className="py-20 bg-[#f4f7f5] border-y border-emerald-100/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4 text-emerald-700" />
                Current Career Openings
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
                Explore Our Active Positions
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl">
                Every role features <strong>Best in the Industry</strong> compensation and welcomes candidates with 
                <strong> More than 1 year of relevant experience. Freshers are welcome.</strong>
              </p>
            </div>

            {/* Live Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {[
                'All Positions (10)',
                'Technical Trainers',
                'Business Development',
                'Sales & Counseling',
                'Campus Relations'
              ].map((dept) => {
                const isSelected = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-[#1b342e] text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Toolbar */}
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl shadow-sm border border-gray-200/80 mb-8 flex items-center justify-between gap-4">
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 text-emerald-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role or tech skill (e.g. GenAI, Spring, Sales)..."
                className="w-full pl-10 pr-8 py-2 rounded-xl text-xs sm:text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#86c37c] bg-gray-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <p className="text-xs text-gray-500 hidden sm:block">
              Showing <strong>{filteredJobs.length}</strong> active openings across Chennai
            </p>
          </div>

          {/* SPLIT MASTER-DETAIL EXECUTIVE LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: ELEGANT ROLE NAVIGATION LIST */}
            <div className="lg:col-span-5 space-y-3.5 max-h-[820px] overflow-y-auto pr-1 scrollbar-none">
              {filteredJobs.length === 0 ? (
                <div className="p-8 bg-white rounded-3xl text-center border border-dashed border-gray-300">
                  <Briefcase className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm font-bold text-gray-700">No positions match your search</p>
                  <button
                    onClick={() => {
                      setSelectedDept('All Positions (10)');
                      setSearchQuery('');
                    }}
                    className="mt-3 text-xs font-bold text-emerald-800 underline"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                filteredJobs.map((job) => {
                  const isActive = job.id === activeJob.id;
                  return (
                    <div
                      key={job.id}
                      onClick={() => setActiveJobId(job.id)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left relative ${
                        isActive
                          ? 'bg-white border-[#86c37c] shadow-lg ring-2 ring-[#86c37c]/40 pl-6'
                          : 'bg-white/80 border-gray-200/90 hover:bg-white hover:border-emerald-200 hover:shadow-sm'
                      }`}
                    >
                      {/* Left Accent indicator when active */}
                      {isActive && (
                        <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#86c37c] rounded-r-full" />
                      )}

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                          {job.department}
                        </span>
                        <span className="text-[11px] font-medium text-gray-500">
                          {job.type}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-base text-[#1b342e] mb-1.5 leading-snug">
                        {job.title}
                      </h4>

                      <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{job.location}</span>
                      </p>

                      {/* Salary & Experience Quick Indicators */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-gray-100 text-xs">
                        <span className="font-bold text-emerald-900">
                          {job.salary}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full">
                          🌱 Freshers Welcome
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* RIGHT COLUMN: STICKY EXECUTIVE JOB SPOTLIGHT DOSSIER */}
            <div className="lg:col-span-7 sticky top-24">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200/80 text-left">
                
                {/* Dossier Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gray-100 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider">
                        {activeJob.department}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {activeJob.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1b342e] leading-snug">
                      {activeJob.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenApply(activeJob)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#142621] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    Apply for Position <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Key Employment Snapshot Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#f8faf9] border border-gray-100 mb-6 text-xs">
                  <div>
                    <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px]">Compensation</p>
                    <p className="font-extrabold text-emerald-900 text-sm mt-0.5">{activeJob.salary}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px]">Expected Experience</p>
                    <p className="font-semibold text-gray-800 mt-0.5 leading-tight">{activeJob.experience}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px]">Location & Slabs</p>
                    <p className="font-semibold text-gray-800 mt-0.5">{activeJob.location}</p>
                  </div>
                </div>

                {/* Clustered AI / Tech Skills (for Technical Trainers) */}
                {activeJob.aiClusteredSkills && (
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-emerald-700" />
                      Clustered AI & Technology Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeJob.aiClusteredSkills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200/70 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Job Market Opportunity Insight */}
                {activeJob.marketOpportunity && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100 text-xs text-gray-700 leading-relaxed">
                    <p className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-700" /> Market Opportunity & Placement Context:
                    </p>
                    <p>{activeJob.marketOpportunity}</p>
                  </div>
                )}

                {/* Role Overview */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Role Overview:</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {activeJob.jobDescription}
                  </p>
                </div>

                {/* Responsibilities & Candidate Profile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-4 border-t border-gray-100 text-xs">
                  <div>
                    <p className="font-bold text-gray-900 uppercase tracking-wider mb-2">Key Responsibilities:</p>
                    <ul className="space-y-2 text-gray-600">
                      {activeJob.keyResponsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 uppercase tracking-wider mb-2">Candidate Profile:</p>
                    <ul className="space-y-2 text-gray-600">
                      {activeJob.keyQualifications.map((qual, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-gray-500 text-center sm:text-left">
                    ✨ Immediate response: Our faculty recruitment committee schedules discussions within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleOpenApply(activeJob)}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#1b342e] hover:bg-[#284c42] text-white text-xs sm:text-sm font-bold transition-all shadow"
                  >
                    Apply Now for This Position
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. APPLICATION MODAL */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[11px] font-bold uppercase">
                    Greens Careers Application
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1b342e] mt-1">
                    {applyJobTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1b342e]">Application Received</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong>{applicantName}</strong>. Our Faculty Recruitment Committee will review your profile for <strong>{applyJobTitle}</strong> and contact you on <strong>{applicantPhone}</strong> within 48 hours.
                  </p>
                  <button
                    onClick={() => setShowApplyModal(false)}
                    className="mt-3 px-5 py-2 rounded-xl bg-[#1b342e] text-white text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-emerald-50 text-xs text-emerald-950 font-medium">
                    <p>
                      💰 <strong>Compensation:</strong> Best in the Industry &nbsp;•&nbsp; 🎓 <strong>Experience:</strong> More than 1 year of relevant experience. Freshers are welcome!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Your Full Name"
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Experience Level *</label>
                      <select
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm bg-white"
                      >
                        <option value="Fresher / Less than 1 year (Welcome!)">Fresher / 2024–2026 Batch (Welcome!)</option>
                        <option value="1 to 3 Years">1 to 3 Years Relevant Experience</option>
                        <option value="3 to 5 Years">3 to 5 Years Experience</option>
                        <option value="5+ Years Senior / Lead">5+ Years Senior / Lead</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Resume Link / LinkedIn / GitHub Portfolio *
                    </label>
                    <input
                      type="url"
                      required
                      value={applicantResumeLink}
                      onChange={(e) => setApplicantResumeLink(e.target.value)}
                      placeholder="https://linkedin.com/in/... or Google Drive PDF or GitHub"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm"
                    />
                    <p className="text-[11px] text-gray-500 mt-1">
                      Please ensure link sharing permissions are public.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Brief Note on Your Technical Projects or Passion
                    </label>
                    <textarea
                      rows={2}
                      value={applicantMessage}
                      onChange={(e) => setApplicantMessage(e.target.value)}
                      placeholder="E.g., Built GenAI projects with LangChain, passionate about teaching, available for immediate joining."
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowApplyModal(false)}
                      className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#5ea154] text-[#142621] text-xs font-extrabold shadow hover:shadow-md"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. HR COORDINATION DESK FOOTER */}
      <section className="py-20 bg-gradient-to-b from-[#142621] to-[#1a332c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-[#e9c86a]" />
            Central Talent Acquisition
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a Specific Question for Our Faculty Committee?
          </h2>

          <p className="text-emerald-100/90 text-sm max-w-xl mx-auto leading-relaxed">
            Reach out directly to our Central Talent Acquisition Team at our OMR Corporate Headquarters. 
            We review candidate portfolios daily and schedule discussions within 48 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-sm font-semibold">
            <a
              href="mailto:careers@greenstechnologys.com"
              className="flex items-center gap-2 text-white hover:text-[#86c37c] bg-white/10 px-5 py-3 rounded-xl border border-white/15 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#86c37c]" /> careers@greenstechnologys.com
            </a>
            <a
              href="tel:+918939982288"
              className="flex items-center gap-2 text-white hover:text-[#86c37c] bg-white/10 px-5 py-3 rounded-xl border border-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#86c37c]" /> +91 89399 82288 / +91 89399 15577
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

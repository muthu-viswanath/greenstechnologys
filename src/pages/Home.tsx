import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Users,
  Building2,
  Star,
  GraduationCap,
  Briefcase,
  Play,
  Flame,
  Clock,
  Compass,
  ChevronRight,
  ShieldCheck,
  Send,
  Download,
  Calendar,
  TrendingUp,
  Code2,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import WhyLearnFromUs from '../components/WhyLearnFromUs';
import AnimatedStatsStrip from '../components/AnimatedStatsStrip';
import NextCohortCTA from '../components/NextCohortCTA';

// Course Generated Core Logo Assets (No people, dominant core logos)
import javaGenAiImg from '../assets/courses/course_java_genai.jpg';
import pythonGenAiImg from '../assets/courses/course_python_genai.jpg';
import genaiMasterImg from '../assets/courses/course_genai_master.jpg';
import sdetExpertImg from '../assets/courses/course_sdet_expert.jpg';
import dataAnalyticsImg from '../assets/courses/course_data_analytics.jpg';
import devopsMasterImg from '../assets/courses/course_devops_master.jpg';
import n8nAutomationImg from '../assets/courses/course_n8n_automation.jpg';
import forwardDeployedImg from '../assets/courses/course_forward_deployed.jpg';

// Assets
import capgeminiLogo from '../assets/hiringpartners/Capgemini_logo.svg';
import ciscoLogo from '../assets/hiringpartners/Cisco_logo.svg';
import cognizantLogo from '../assets/hiringpartners/Cognizant_logo.svg';
import ibmLogo from '../assets/hiringpartners/IBM_logo.svg';
import infosysLogo from '../assets/hiringpartners/Infosys_logo.svg';
import rakutenLogo from '../assets/hiringpartners/Rakuten_logo.svg';
import tcsLogo from '../assets/hiringpartners/TCS_logo.svg';
import visaLogo from '../assets/hiringpartners/Visa_logo.svg';
import wiproLogo from '../assets/hiringpartners/Wipro_logo.svg';

import affordableFeesIcon from '../assets/whyus/affordable-fees.png';
import flexibleTimingIcon from '../assets/whyus/flexible-timing.png';
import handsOnTrainingIcon from '../assets/whyus/hands-on-training.png';
import industryTrainersIcon from '../assets/whyus/industry-trainers.png';
import interviewPrepIcon from '../assets/whyus/interview-prep.png';
import labSupportIcon from '../assets/whyus/lab-support.png';
import placementAssistanceIcon from '../assets/whyus/placement-assistance.png';
import studentsPlacedIcon from '../assets/whyus/students-placed.png';

const partnerLogos = [
  { name: 'TCS', src: tcsLogo },
  { name: 'Infosys', src: infosysLogo },
  { name: 'Cognizant', src: cognizantLogo },
  { name: 'Wipro', src: wiproLogo },
  { name: 'IBM', src: ibmLogo },
  { name: 'Capgemini', src: capgeminiLogo },
  { name: 'Cisco', src: ciscoLogo },
  { name: 'Visa', src: visaLogo },
  { name: 'Rakuten', src: rakutenLogo },
];

const featuredTracks = [
  {
    id: 'java-fullstack-genai',
    category: 'fullstack',
    title: 'Java Full Stack with Gen AI',
    subtitle: 'Spring Boot 3, Microservices, React 19 & LangChain4j',
    image: javaGenAiImg,
    badge: 'Most Popular',
    badgeColor: 'bg-emerald-600 text-white',
    rating: '4.96',
    reviews: '3.2k',
    duration: '4.5 Mo',
    hours: '240h Labs',
    projects: '4 Projects',
    salaryRange: '₹8.5 – 19 LPA',
    hiringPartners: ['TCS', 'Cognizant', 'Infosys'],
    skills: ['Java 21', 'Spring Boot 3', 'React', 'LangChain4j', 'Kafka'],
    seatsLeft: 4,
    nextBatch: 'Starts Mon • 7:30 AM / 7 PM',
  },
  {
    id: 'python-fullstack-genai',
    category: 'fullstack',
    title: 'Python Full Stack with Gen AI',
    subtitle: 'FastAPI, Django, Next.js, OpenAI APIs & Multi-Agents',
    image: pythonGenAiImg,
    badge: 'Fastest Growing',
    badgeColor: 'bg-amber-600 text-white',
    rating: '4.94',
    reviews: '2.7k',
    duration: '4 Mo',
    hours: '210h Labs',
    projects: '4 Projects',
    salaryRange: '₹8 – 18 LPA',
    hiringPartners: ['Wipro', 'Tiger Analytics', 'Zoho'],
    skills: ['Python 3.12', 'FastAPI', 'Next.js', 'OpenAI SDK', 'PostgreSQL'],
    seatsLeft: 5,
    nextBatch: 'Starts Tue • Morning & Evening',
  },
  {
    id: 'genai-datascience',
    category: 'ai-data',
    title: 'Generative AI & Data Science',
    subtitle: 'RAG Pipelines, PyTorch, Llama 3, Vector DBs & Agents',
    image: genaiMasterImg,
    badge: 'Highest CTC',
    badgeColor: 'bg-purple-600 text-white',
    rating: '4.98',
    reviews: '2.1k',
    duration: '5 Mo',
    hours: '260h Labs',
    projects: '5 Projects',
    salaryRange: '₹12 – 26 LPA',
    hiringPartners: ['Microsoft', 'PayPal', 'Tiger Analytics'],
    skills: ['PyTorch', 'LangChain', 'Llama 3', 'Pinecone', 'RAG Ops'],
    seatsLeft: 3,
    nextBatch: 'Starts Wed • Fast-track Weekend',
  },
  {
    id: 'automation-sdet',
    category: 'testing',
    title: 'Automation Testing & SDET',
    subtitle: 'Playwright, Selenium 4, Cypress, RestAssured & CI/CD',
    image: sdetExpertImg,
    badge: 'Fast Placement',
    badgeColor: 'bg-emerald-700 text-white',
    rating: '4.90',
    reviews: '2.4k',
    duration: '3.5 Mo',
    hours: '180h Labs',
    projects: '3 Projects',
    salaryRange: '₹7.5 – 16 LPA',
    hiringPartners: ['Capgemini', 'Société Générale', 'Virtusa'],
    skills: ['Playwright', 'Selenium 4', 'API Test', 'Cypress', 'Jenkins'],
    seatsLeft: 6,
    nextBatch: 'Starts Mon • Flexible Batches',
  },
  {
    id: 'data-analytics',
    category: 'ai-data',
    title: 'Data Analytics & Visualization',
    subtitle: 'Power BI, Tableau, Advanced SQL, Python & Modeling',
    image: dataAnalyticsImg,
    badge: 'High Demand',
    badgeColor: 'bg-cyan-600 text-white',
    rating: '4.89',
    reviews: '1.9k',
    duration: '3 Mo',
    hours: '160h Labs',
    projects: '6 Projects',
    salaryRange: '₹6.5 – 14 LPA',
    hiringPartners: ['Deloitte', 'EY', 'Standard Chartered'],
    skills: ['Power BI', 'Tableau', 'SQL', 'Python Pandas', 'DAX'],
    seatsLeft: 7,
    nextBatch: 'Starts Thu • Evening & Weekend',
  },
  {
    id: 'devops-cloud',
    category: 'cloud',
    title: 'DevOps, SRE & Multi-Cloud',
    subtitle: 'Kubernetes, Terraform GitOps, Docker & AWS/Azure',
    image: devopsMasterImg,
    badge: 'Max Openings',
    badgeColor: 'bg-blue-600 text-white',
    rating: '4.93',
    reviews: '2.8k',
    duration: '4 Mo',
    hours: '220h Labs',
    projects: '4 Projects',
    salaryRange: '₹10 – 22 LPA',
    hiringPartners: ['Cisco', 'Wipro Cloud', 'Red Hat'],
    skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS & Azure', 'GitLab'],
    seatsLeft: 4,
    nextBatch: 'Starts Sat • Weekend Intensive',
  },
  {
    id: 'n8n-automation',
    category: 'ai-data',
    title: 'N8N Workflow Automation',
    subtitle: 'Visual Orchestration, AI Webhook Pipelines & Low-Code',
    image: n8nAutomationImg,
    badge: '2026 Trend',
    badgeColor: 'bg-rose-600 text-white',
    rating: '4.95',
    reviews: '1.4k',
    duration: '2.5 Mo',
    hours: '140h Labs',
    projects: '8 Projects',
    salaryRange: '₹8 – 17 LPA',
    hiringPartners: ['Zoho', 'Freshworks', 'Accenture'],
    skills: ['N8N Nodes', 'Webhook APIs', 'LangChain Agents', 'Docker'],
    seatsLeft: 4,
    nextBatch: 'Starts Mon • Evening Batch',
  },
  {
    id: 'forward-deployed-eng',
    category: 'fullstack',
    title: 'Forward Deployed Engineering',
    subtitle: 'Enterprise Architecture, Production Systems & AI Ops',
    image: forwardDeployedImg,
    badge: 'Elite Salary',
    badgeColor: 'bg-indigo-600 text-white',
    rating: '4.99',
    reviews: '1.1k',
    duration: '5 Mo',
    hours: '280h Labs',
    projects: '5 Projects',
    salaryRange: '₹14 – 32 LPA',
    hiringPartners: ['Palantir', 'Thoughtworks', 'Microsoft'],
    skills: ['Distributed Systems', 'Cloud Arch', 'Kubernetes', 'FastAPI'],
    seatsLeft: 3,
    nextBatch: 'Starts Sat • Weekend Intensive',
  },
];

const whyUsPoints = [
  {
    title: '100% Placement Assistance',
    desc: 'Dedicated career incubation cell with guaranteed interviews until you get hired.',
    icon: placementAssistanceIcon,
  },
  {
    title: 'Hands-on Real-time Projects',
    desc: 'Work on production-grade microservices, cloud deployments, and enterprise pipelines.',
    icon: handsOnTrainingIcon,
  },
  {
    title: '15+ Years Tech Veterans',
    desc: 'Trained directly by principal engineers and tech architects from top tier MNCs.',
    icon: industryTrainersIcon,
  },
  {
    title: 'Interview Preparation',
    desc: 'Rigorous mock interviews, DSA drills, system design reviews, and resume polishing.',
    icon: interviewPrepIcon,
  },
  {
    title: '24/7 Dedicated Lab Support',
    desc: 'Modern air-conditioned labs with high-speed cloud infrastructure and personal mentors.',
    icon: labSupportIcon,
  },
  {
    title: 'Flexible Batch Timing',
    desc: 'Weekday morning, evening, and exclusive fast-track weekend batches for working professionals.',
    icon: flexibleTimingIcon,
  },
  {
    title: 'Affordable Fee Structure',
    desc: 'Quality tech education made accessible with zero-cost EMI and installment options.',
    icon: affordableFeesIcon,
  },
  {
    title: '50k+ Placed Alumni Network',
    desc: 'Connect with a massive global community of Greens alumni placed in leading Fortune 500s.',
    icon: studentsPlacedIcon,
  },
];

export default function Home() {
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const floatingOrb1Ref = useRef<HTMLDivElement>(null);
  const floatingOrb2Ref = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fullstack' | 'ai-data' | 'cloud' | 'testing'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: 'Full Stack Java' });

  // GSAP Entrance & Ambient Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating ambient background orbs
      gsap.to(floatingOrb1Ref.current, {
        x: 40,
        y: -30,
        scale: 1.1,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(floatingOrb2Ref.current, {
        x: -50,
        y: 35,
        scale: 0.95,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });

      // Staggered hero entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(heroBadgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
      }).from(
        heroTitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
        },
        '-=0.4',
      );
    });

    return () => ctx.revert();
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#3f6f52', '#86c37c', '#e9c86a', '#243f40'],
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    triggerCelebration();
  };

  return (
    <div className="relative overflow-hidden w-full font-sans text-[#243f40]">
      {/* Background Ambient Glows (GSAP Controlled) */}
      <div
        ref={floatingOrb1Ref}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#86c37c]/25 to-[#e9c86a]/20 blur-3xl"
      />
      <div
        ref={floatingOrb2Ref}
        aria-hidden="true"
        className="pointer-events-none absolute top-96 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#3f6f52]/15 to-[#86c37c]/25 blur-3xl"
      />

      {/* ========================================================= */}
      {/* 1. NARRATIVE HERO STORY CAROUSEL (GSAP + NANOBANANA)      */}
      {/* ========================================================= */}
      <section className="relative w-full overflow-hidden p-0 m-0">
        <HeroCarousel />
      </section>

      {/* ========================================================= */}
      {/* 2. CAREER ACCELERATOR OVERVIEW & DEMO BOOKING             */}
      {/* ========================================================= */}
      <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div
              ref={heroBadgeRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b3829] border border-emerald-900/40 text-white text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Chennai’s #1 Career Transformation & Training Academy</span>
            </div>

            <h1
              ref={heroTitleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#1c3334]"
            >
              Launch Your Career in{' '}
              <span className="bg-gradient-to-r from-[#2a593e] via-[#3f6f52] to-[#86c37c] bg-clip-text text-transparent">
                High-Growth Tech
              </span>{' '}
              with Guaranteed Placement Assistance
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Master Full Stack, Generative AI, Cloud & DevOps, Data Engineering, and Automation Testing through live industry projects guided by seasoned mentors.
            </p>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600 font-medium pt-2">
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Placement Assistance</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Live Real-time Projects</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Weekday & Weekend Batches</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(63, 111, 82, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={triggerCelebration}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#2d523c] to-[#3f6f52] hover:from-[#244331] hover:to-[#335a42] transition-all shadow-md cursor-pointer"
              >
                <span>Explore Top Courses</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#callback-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#243f40] bg-white border border-slate-300 hover:bg-slate-50 transition-all shadow-xs"
              >
                <span>Book Free Demo Class</span>
                <Play className="w-4 h-4 fill-[#243f40] text-[#243f40]" />
              </motion.a>
            </div>
          </div>

          {/* Right Hero Interactive Card / Quick Consultation Form */}
          <div className="lg:col-span-5" id="callback-form">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-100 shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
                    Request a Free Career Demo
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Talk to our senior tech counselors today</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                  Free 1-on-1
                </span>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-3"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Demo Scheduled Successfully!</h4>
                  <p className="text-sm text-slate-600">
                    Thank you {formData.name || 'Learner'}, our senior training advisor will contact you at {formData.phone} within 15 minutes.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-medium text-emerald-700 hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Interested Course Track
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-slate-50/50"
                    >
                      <option>Full Stack Java & Cloud</option>
                      <option>Generative AI & Data Science</option>
                      <option>DevOps & Multi-Cloud</option>
                      <option>Automation Testing (Selenium / Playwright)</option>
                      <option>Python Full Stack Development</option>
                      <option>MERN / MEAN Stack</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Reserve Free Demo Seat</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                  <p className="text-[11px] text-center text-slate-400">
                    🔒 No spam. Your contact details are 100% confidential.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CREATIVE ANIMATED STATS STRIP (GSAP RE-TRIGGER FROM 5) */}
      {/* ========================================================= */}
      <AnimatedStatsStrip />

      {/* ========================================================= */}
      {/* 3. HIRING PARTNERS TICKER MARQUEE                         */}
      {/* ========================================================= */}
      <section className="py-12 bg-white/60 border-y border-slate-200/70 backdrop-blur-sm overflow-hidden mb-20">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-500">
            Trusted By Top Global Enterprises & MNCs Hiring Our Graduates
          </p>
        </div>

        {/* Marquee row */}
        <div className="flex w-full overflow-hidden select-none">
          <motion.div
            className="flex items-center gap-12 sm:gap-16 shrink-0 py-2"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-12 w-28 sm:w-36 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-8 max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WHY LEARN FROM US (PARAPHRASED PHILOSOPHY + AI & N8N)  */}
      {/* ========================================================= */}
      <WhyLearnFromUs />

      {/* ========================================================= */}
      {/* 5. FEATURED CAREER PROGRAMS (STUDENT-CENTRIC REDESIGN)    */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-28">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Job-Oriented Master Curriculums</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Flagship Certification Tracks{' '}
              <span className="text-emerald-700 font-serif italic font-normal block sm:inline">
                Built for 2026 Hiring Needs
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Curated alongside engineering leads from Chennai’s top tech corridors. Build production capstones on GitHub, master modern toolchains, and land high-paying roles with 100% placement assurance.
            </p>
          </div>

          {/* Student Trust & Placement Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 border border-slate-200/80 p-4 rounded-2xl shrink-0">
            <div>
              <span className="text-lg sm:text-xl font-black text-slate-900 block leading-tight">₹8.5 – 24 LPA</span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Salary Range</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black text-emerald-700 block leading-tight">100% Support</span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Placement Drive</span>
            </div>
            <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
              <span className="text-lg sm:text-xl font-black text-blue-700 block leading-tight">500+ MNCs</span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Hiring Partners</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs by Domain */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/80">
          {(
            [
              { id: 'all', label: 'All Flagship Tracks (8)' },
              { id: 'fullstack', label: 'Full Stack with Gen AI' },
              { id: 'ai-data', label: 'AI & Data Science' },
              { id: 'cloud', label: 'DevOps & Multi-Cloud' },
              { id: 'testing', label: 'Automation & SDET' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid - 4 per row compact layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 sm:gap-5">
          {featuredTracks
            .filter((course) => selectedCategory === 'all' || course.category === selectedCategory)
            .map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/50 shadow-xs hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Image Banner with Core 3D Logo */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-950">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    {/* Dark gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-95" />

                    {/* Top Bar on Image: Badge & Rating */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md backdrop-blur-sm ${course.badgeColor}`}>
                        {course.badge}
                      </span>
                      <div className="flex items-center gap-1 bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                        <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-slate-400 text-[8px]">({course.reviews})</span>
                      </div>
                    </div>

                    {/* Bottom Bar on Image: Salary Range & Seats Alert */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                      <div className="inline-flex items-center gap-1 bg-slate-950/85 backdrop-blur-md text-emerald-400 font-extrabold text-[10px] px-2 py-0.5 rounded-md border border-emerald-500/30 shadow-md">
                        <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
                        <span>Avg CTC: {course.salaryRange}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 bg-rose-950/85 backdrop-blur-md text-rose-200 text-[9px] font-semibold px-1.5 py-0.5 rounded border border-rose-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                        <span>{course.seatsLeft} Left</span>
                      </div>
                    </div>
                  </div>

                  {/* Reformatted Compact Card Content */}
                  <div className="p-3.5 sm:p-4 space-y-2.5">
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-1">
                        {course.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                        {course.subtitle}
                      </p>
                    </div>

                    {/* Compact Specs Bar */}
                    <div className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-semibold text-slate-700">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {course.duration}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1">
                        <Code2 className="w-3 h-3 text-blue-600" />
                        {course.hours}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1">
                        <Trophy className="w-3 h-3 text-amber-600" />
                        {course.projects}
                      </span>
                    </div>

                    {/* Tech Toolchain Chips */}
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 4 && (
                        <span className="text-[9px] px-1 py-0.5 rounded bg-slate-50 text-slate-500 font-bold border border-slate-200/50">
                          +{course.skills.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Next Batch Schedule Alert */}
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-800 font-medium bg-emerald-50/80 px-2 py-1 rounded-md border border-emerald-200/60 truncate">
                      <Calendar className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{course.nextBatch}</span>
                    </div>
                  </div>
                </div>

                {/* Practical Dual CTAs - Compact */}
                <div className="p-3.5 sm:p-4 pt-0 border-t border-slate-100 bg-slate-50/40">
                  <div className="grid grid-cols-2 gap-1.5 pt-2.5">
                    {/* Primary CTA: Book Demo */}
                    <a
                      href="#callback-form"
                      className="inline-flex items-center justify-center gap-1 px-2.5 py-2 rounded-lg font-bold text-[11px] text-white bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 transition-all shadow-2xs hover:shadow-xs text-center"
                    >
                      <Play className="w-2.5 h-2.5 fill-white text-white shrink-0" />
                      <span>Book Demo</span>
                    </a>

                    {/* Secondary CTA: Download Syllabus */}
                    <a
                      href={`https://wa.me/918939915577?text=${encodeURIComponent(
                        `Hi Greens Technologys, please send me the complete day-to-day syllabus and fee details for ${course.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={triggerCelebration}
                      className="inline-flex items-center justify-center gap-1 px-2.5 py-2 rounded-lg font-bold text-[11px] text-slate-800 bg-white border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/40 transition-all shadow-2xs text-center"
                    >
                      <Download className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Syllabus</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHY CHOOSE GREENS TECHNOLOGYS (BENTO GRID)              */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-emerald-900/30 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-400">
              The Greens Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why 50,000+ Aspirants Chose Greens Technologys
            </h2>
            <p className="text-sm text-slate-400">
              From day one of your enrollment, our ecosystem is built to ensure you transition smoothly from learning to high-paying engineering roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsPoints.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-white/10 p-2.5 flex items-center justify-center mb-5">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION / ENROLL NOW (GSAP ANIMATED LAUNCHPAD) */}
      {/* ========================================================= */}
      {/* White space before CTA section */}
      <div className="w-full h-8 sm:h-12 bg-white" aria-hidden="true" />

      <NextCohortCTA onEnrollClick={triggerCelebration} />

      {/* White space after CTA section */}
      <div className="w-full h-8 sm:h-12 bg-white" aria-hidden="true" />

    </div>
  );
}

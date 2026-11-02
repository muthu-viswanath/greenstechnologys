import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import {
  Target,
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  Briefcase,
  Compass,
  TrendingUp,
  Code2,
  Laptop,
  Building2,
  Sparkles,
  ArrowRight,
  Quote,
  GraduationCap,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  FileCheck2,
  HeartHandshake,
  Workflow,
  ExternalLink,
  ChevronRight,
  MapPin,
  Check,
  Flame,
  Layers,
  Terminal,
  Cpu,
  BarChart3,
  BadgeCheck,
  Search,
  Play,
  Tv
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import founderImg from '../assets/founder.jpg';

const coreValues = [
  {
    title: 'Technical Excellence',
    desc: 'Practical expertise, continuous engineering improvement, and a deep architectural understanding of modern technology stacks.',
    icon: Code2,
    badge: 'Code & Architecture',
    color: 'emerald',
  },
  {
    title: 'Integrity & Transparency',
    desc: 'Uncompromising trust built through honest communication, responsible objective evaluations, and high professional conduct.',
    icon: ShieldCheck,
    badge: 'Zero-Bias Evaluation',
    color: 'teal',
  },
  {
    title: 'Merit & Potential',
    desc: 'We evaluate real-world problem-solving aptitude and rapid learning capacity rather than relying solely on paper credentials.',
    icon: Target,
    badge: 'Proof Over Paper',
    color: 'indigo',
  },
  {
    title: 'Learning by Doing',
    desc: 'Meaningful engineering capability comes from building production software, breaking monoliths, and deploying live applications.',
    icon: Laptop,
    badge: 'Production Sandboxes',
    color: 'amber',
  },
  {
    title: 'Customer Commitment',
    desc: 'Understanding each enterprise client’s technical needs and each learner’s personal career goals before recommending solutions.',
    icon: HeartHandshake,
    badge: 'Tailored Solutions',
    color: 'teal',
  },
  {
    title: 'Continuous Evolution',
    desc: 'Proactively reinventing our curriculums and assessment tools as AI, cloud automation, and software paradigms shift.',
    icon: Workflow,
    badge: 'Gen AI & Modern Stacks',
    color: 'emerald',
  },
];

const servicePillars = [
  {
    id: 'recruitment',
    number: '01',
    title: 'Talent Acquisition & Technical Recruitment',
    subtitle: 'Pre-Vetted Technical Hiring',
    desc: 'We support fast-growing enterprises, MNCs, and GCCs in identifying, technically evaluating, and hiring software engineers who match their exact architecture and production expectations.',
    keyPoints: [
      'Pre-vetted engineering pipelines across Full Stack, Gen AI, and Cloud DevOps',
      'Technical screening conducted by senior practitioners and consultants',
      'Dramatic reduction in hiring cycle and zero-mismatch onboarding',
    ],
    metric: '500+ MNC Partners',
    icon: Users,
    tag: 'Enterprise Hiring',
  },
  {
    id: 'assessment',
    number: '02',
    title: 'Technical Assessment & Evaluation',
    subtitle: 'Evidence-Based Engineering Benchmarks',
    desc: 'Our technology-based assessments, algorithmic coding exercises, system architecture simulations, and structured technical interviews give hiring teams genuine clarity on candidate ability.',
    keyPoints: [
      'Live problem-solving and coding sandboxes with automated grading',
      'Standardized scoring across code quality, debugging, and efficiency',
      'Replaces superficial resume keyword screening with verified skills',
    ],
    metric: '100% Objective Proof',
    icon: FileCheck2,
    tag: 'Diagnostic Tooling',
  },
  {
    id: 'training',
    number: '03',
    title: 'Technology Training & Career Transition',
    subtitle: 'Outcome-Driven Intensive Programs',
    desc: 'We deliver comprehensive, project-driven learning experiences that turn freshers, non-tech switchers, and service-desk personnel into confident, high-earning software developers.',
    keyPoints: [
      'Hands-on lab training on production tech stacks (Java, Python, Gen AI, DevOps)',
      '1-on-1 mentorship and weekly code reviews from industry practitioners',
      'Dedicated placement assistance with guaranteed interviews until placed',
    ],
    metric: '50,000+ Placed Alumni',
    icon: GraduationCap,
    tag: 'Career Transition',
  },
  {
    id: 'consulting',
    number: '04',
    title: 'Corporate Training & Consulting',
    subtitle: 'Modern Workforce Capability Upgrades',
    desc: 'We collaborate with enterprises to diagnose technical skill gaps, modernize legacy development workflows, and upskill teams in Generative AI, SRE, and Multi-Cloud architectures.',
    keyPoints: [
      'Bespoke enterprise curricula tailored to specific corporate tech stacks',
      'Hands-on sandboxed training with measurable capability assessments',
      'Accelerates digital transformation and modern engineering adoption',
    ],
    metric: '15+ Years Trust',
    icon: Building2,
    tag: 'Workforce Enablement',
  },
];

const companyMilestones = [
  {
    year: '2010',
    title: 'The Founding Vision',
    subtitle: 'Bridging Industry & Classroom',
    desc: 'Dinesh Jaganathan founded Greens Technologys in Chennai with a singular purpose: replacing theoretical rote-learning with practical, production-oriented software training.',
    tag: 'Foundation',
  },
  {
    year: '2014',
    title: 'IT Corridor Expansion',
    subtitle: 'OMR & Velachery Flagships',
    desc: 'Expanded into Chennai’s IT epicenter with major campuses in Thoraipakkam and Velachery, becoming Chennai’s #1 institute for Java Full Stack and SDET Automation.',
    tag: 'Expansion',
  },
  {
    year: '2018',
    title: 'Technical Assessment & Direct Hiring',
    subtitle: 'Beyond Conventional Recruitment',
    desc: 'Launched corporate talent assessment solutions, partnering directly with 200+ IT leaders to pre-evaluate candidates through coding simulations before interviews.',
    tag: 'Scale',
  },
  {
    year: '2021',
    title: 'Enterprise Corporate Consulting',
    subtitle: 'Workforce Transformation',
    desc: 'Inaugurated dedicated corporate upskilling programs for GCCs and MNCs navigating massive cloud migration, DevOps adoption, and Kubernetes orchestration.',
    tag: 'Enterprise',
  },
  {
    year: '2024 - 2026',
    title: 'The AI Era & 22-Campus Network',
    subtitle: 'Generative AI & Agentic Workflows',
    desc: 'Grew into a 22-campus network across Tamil Nadu. Pioneered forward-deployed engineering tracks in Generative AI, LLMs, and N8N workflow automation.',
    tag: 'Innovation',
  },
];

export default function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);

  const statsContainerRef = useRef<HTMLDivElement>(null);
  const founderCardRef = useRef<HTMLDivElement>(null);

  const [activePillarIndex, setActivePillarIndex] = useState(0);

  // Statistics state starting from 5 as requested
  const [yearsCount, setYearsCount] = useState(5);
  const [learnersCount, setLearnersCount] = useState(5);
  const [clientsCount, setClientsCount] = useState(5);
  const [campusesCount, setCampusesCount] = useState(5);
  const [outcomesCount, setOutcomesCount] = useState(5);

  const statsTweenRef = useRef<gsap.core.Timeline | null>(null);

  // Animate stats numbers starting from 5
  const triggerStatsAnimation = useCallback(() => {
    if (statsTweenRef.current) {
      statsTweenRef.current.kill();
    }

    const state = {
      years: 5,
      learners: 5,
      clients: 5,
      campuses: 5,
      outcomes: 5,
    };

    setYearsCount(5);
    setLearnersCount(5);
    setClientsCount(5);
    setCampusesCount(5);
    setOutcomesCount(5);

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.to(state, {
      years: 15,
      learners: 50000,
      clients: 500,
      campuses: 22,
      outcomes: 85,
      duration: 2.2,
      ease: 'power2.out',
      onUpdate: () => {
        setYearsCount(Math.floor(state.years));
        setLearnersCount(Math.floor(state.learners));
        setClientsCount(Math.floor(state.clients));
        setCampusesCount(Math.floor(state.campuses));
        setOutcomesCount(Math.floor(state.outcomes));
      },
    });

    statsTweenRef.current = tl;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Kinetic Entrance Timeline
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (heroBadgeRef.current) {
        heroTl.fromTo(
          heroBadgeRef.current,
          { opacity: 0, y: -16, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 }
        );
      }

      if (heroTitleRef.current) {
        const words = heroTitleRef.current.querySelectorAll('.hero-word');
        if (words.length > 0) {
          heroTl.fromTo(
            words,
            { opacity: 0, y: 28, rotateX: -25 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.05 },
            '-=0.35'
          );
        }
      }

      if (heroSubRef.current) {
        heroTl.fromTo(
          heroSubRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.25'
        );
      }

      // 2. IntersectionObserver for Statistics Counting up starting from 5
      const statsEl = statsContainerRef.current;
      if (statsEl) {
        let hasTriggered = false;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                triggerStatsAnimation();
                hasTriggered = true;
              } else {
                if (hasTriggered && entry.boundingClientRect.top > window.innerHeight) {
                  hasTriggered = false;
                }
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(statsEl);
      }
    }, heroRef);

    return () => {
      ctx.revert();
      if (statsTweenRef.current) {
        statsTweenRef.current.kill();
      }
    };
  }, [triggerStatsAnimation]);

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ========================================================= */}
      {/* 01. HERO BANNER: PURE WHITE THEME WITH RICH DARK GREEN    */}
      {/* ========================================================= */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#f3f9f6] via-[#f9fcfb] to-white border-b border-slate-200/80"
      >
        {/* Subtle Decorative Ambient Accents */}
        <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-emerald-100/50 blur-[90px]" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal-100/40 blur-[90px]" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div
            ref={heroBadgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-300 text-[#0f3d2e] text-xs sm:text-sm font-bold tracking-wide shadow-xs mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span>About Greens Technologys</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-semibold">Building Tech Careers Since 2010</span>
          </div>

          {/* GSAP Split Word Animated Headline in Rich Dark Green & Charcoal */}
          <h1
            ref={heroTitleRef}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.18] mb-6 text-[#0f3d2e] perspective-1000 max-w-5xl"
          >
            <span className="hero-word inline-block mr-2 sm:mr-3">Building</span>
            <span className="hero-word inline-block mr-2 sm:mr-3 text-emerald-600">
              Skills.
            </span>
            <span className="hero-word inline-block mr-2 sm:mr-3">Enabling</span>
            <span className="hero-word inline-block mr-2 sm:mr-3 text-[#1b533f]">
              Careers.
            </span>
            <br className="hidden md:inline" />
            <span className="hero-word inline-block mr-2 sm:mr-3 text-slate-900">Connecting</span>
            <span className="hero-word inline-block mr-2 sm:mr-3 text-emerald-700 font-extrabold">Talent</span>
            <span className="hero-word inline-block mr-2 sm:mr-3 text-slate-900">with</span>
            <span className="hero-word inline-block bg-gradient-to-r from-[#0f3d2e] via-emerald-700 to-[#1b533f] bg-clip-text text-transparent">
              Opportunity.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={heroSubRef}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-8"
          >
            Greens Technologys was established with a singular mission: to bridge the critical gap between academic technology education, corporate expectations, and day-one workforce readiness.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <a
              href="#corporate-services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#0f3d2e] via-[#1b533f] to-[#0f3d2e] hover:from-[#0b2d22] hover:to-[#133d2e] transition-all shadow-md flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer"
            >
              <span>Corporate Talent & Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/courses"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold bg-white hover:bg-emerald-50/70 border border-slate-300 hover:border-emerald-400 transition-all text-[#0f3d2e] shadow-xs flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <span>Explore Learner Programs</span>
              <ChevronRight className="w-4 h-4 text-emerald-600" />
            </Link>
          </div>

          {/* Visual Highlight Pills Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              <span>ISO 9001:2015 Certified Academy</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>NASSCOM Aligned Curriculums</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Placement Assurance</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 02. ANIMATED STATISTICS STRIP (COUNTS UP FROM 5)           */}
      {/* ========================================================= */}
      <section
        ref={statsContainerRef}
        className="w-full py-12 md:py-16 bg-[#f7fbf9] border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
              Verified Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3d2e] mt-1">
              Measurable Impact That Speaks for Itself
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Live verified operational figures reflecting 15+ years of training and corporate placements.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
            
            {/* Stat 1: Years */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f3d2e] mb-1">
                {yearsCount}+
              </div>
              <div className="text-sm font-bold text-slate-800">Years of Experience</div>
              <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Continuous excellence</div>
            </div>

            {/* Stat 2: Learners */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 mb-1">
                {learnersCount.toLocaleString()}+
              </div>
              <div className="text-sm font-bold text-slate-800">Learners Trained</div>
              <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Job-ready engineers</div>
            </div>

            {/* Stat 3: Corporate Clients */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b533f] mb-1">
                {clientsCount}+
              </div>
              <div className="text-sm font-bold text-slate-800">Corporate Clients</div>
              <div className="text-[11px] text-emerald-700 font-medium mt-0.5">MNCs & GCC hiring partners</div>
            </div>

            {/* Stat 4: Campuses */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-700 mb-1">
                {campusesCount}
              </div>
              <div className="text-sm font-bold text-slate-800">Campuses Across TN</div>
              <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Chennai, Trichy, Salem</div>
            </div>

            {/* Stat 5: Outcomes */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f3d2e] mb-1">
                {outcomesCount}%+
              </div>
              <div className="text-sm font-bold text-slate-800">Career Outcomes</div>
              <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Transition success rate</div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 03. WHO WE ARE: VISUAL ECOSYSTEM BENTO                    */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Narrative Overview */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-emerald-700 text-xs uppercase tracking-widest font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] tracking-tight leading-snug">
              Success in technology depends on more than qualifications alone.
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                In a dynamic technology landscape where businesses need capable professionals and individuals aspire to build meaningful careers, we believe success requires <strong className="text-slate-900 font-bold">practical expertise, problem-solving ability, professional confidence, and the capacity to apply knowledge in real-world situations.</strong>
              </p>
              <p>
                At Greens Technologys, we integrate technology training, talent assessment, recruitment support, and industry-oriented consulting to create measurable value for both organisations and individuals.
              </p>
            </div>

            {/* Visual Value Checkpoints */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Practitioner-led technical evaluations beyond conventional screening</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Production-level code reviews & hands-on application development</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Pre-vetted engineering pipelines connecting to 500+ top enterprises</span>
              </div>
            </div>
          </div>

          {/* Visual 4-Pillar Synergy Bento Card */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#f2f9f5] via-white to-[#edf7f2] border border-emerald-200/90 shadow-md relative overflow-hidden">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                The Integrated Engine
              </div>
              <h3 className="text-2xl font-black text-[#0f3d2e] mb-6">
                How We Connect Talent to Industry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3 font-bold">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">Technology Training</div>
                  <p className="text-xs text-slate-500 mt-1">Project-driven mastery in Java, Python, Gen AI & Cloud DevOps.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3 font-bold">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">Technical Assessment</div>
                  <p className="text-xs text-slate-500 mt-1">Algorithmic coding exercises and live architecture simulations.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3 font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">Talent Acquisition</div>
                  <p className="text-xs text-slate-500 mt-1">Pre-screened engineering recruitment for 500+ corporate clients.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3 font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">Corporate Consulting</div>
                  <p className="text-xs text-slate-500 mt-1">Customized enterprise upskilling for modern corporate engineering teams.</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 04. VISION, MISSION, PURPOSE & CORE VALUES                */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-[#f8faf9] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f3d2e] tracking-tight">
              Our Vision, Mission & Purpose
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              The non-negotiable principles that drive our standards, assessments, and client relationships every single day.
            </p>
          </div>

          {/* Tri-Pillar Bento: Vision, Mission, Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* Vision */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5 font-bold">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Future-Ready</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To become a trusted partner in building a future-ready workforce by connecting industry, technology, and talent through continuous learning, objective assessment, and meaningful career opportunities.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-teal-300 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-5 font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">Empowerment</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To empower organisations with better talent decisions and individuals with industry-relevant capabilities through technology-driven recruitment, practical skills assessment, professional training, and consulting services.
                </p>
              </div>
            </div>

            {/* Purpose */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-amber-300 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-5 font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">Our Purpose</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">Value Creation</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To bridge the gap between potential and performance by ensuring that talent is developed, evaluated, and connected to opportunities where it can create real value.
                </p>
              </div>
            </div>

          </div>

          {/* Core Values 6-Grid */}
          <div className="border-t border-slate-200 pt-14">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="text-2xl font-bold text-[#0f3d2e]">Our Core Values</h3>
              <p className="text-xs text-slate-500 mt-1">Guiding our instructors, evaluators, and recruiters.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {val.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">{val.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 05. FOUR SERVICE PILLARS (VISUAL INTERACTIVE EXPLORER)    */}
      {/* ========================================================= */}
      <section id="corporate-services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f3d2e] tracking-tight">
            Our Four Service Pillars
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A complete integration of talent recruitment, technical diagnostics, software training, and enterprise consulting.
          </p>
        </div>

        {/* Tabbed Interactive Pillars in Clean White Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Tab List */}
          <div className="lg:col-span-5 space-y-3">
            {servicePillars.map((p, idx) => {
              const IconComp = p.icon;
              const isSelected = activePillarIndex === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0f3d2e] to-[#18533e] text-white border-transparent shadow-md scale-[1.01]'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-white text-[#0f3d2e] font-black'
                          : 'bg-emerald-50 text-emerald-800'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`text-[10px] font-mono font-bold ${isSelected ? 'text-emerald-300' : 'text-emerald-700'}`}>
                        PILLAR {p.number}
                      </div>
                      <div className="text-sm font-bold">{p.title}</div>
                      <div className={`text-xs ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                        {p.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'rotate-90 text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Active Pillar Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {(() => {
                const current = servicePillars[activePillarIndex];
                const IconComp = current.icon;
                return (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-6"
                  >
                    <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                            Practice Pillar {current.number} • {current.tag}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                            {current.title}
                          </h3>
                        </div>
                      </div>
                      <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                        {current.metric}
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {current.desc}
                    </p>

                    <div className="space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Deliverables & Core Capabilities:
                      </div>
                      {current.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="tel:+918939982288"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Corporate Desk: +91 89399 82288</span>
                      </a>

                      <a
                        href="mailto:contact@greenstechnologys.com?subject=Corporate%20Enquiry"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f3d2e] hover:bg-[#18533e] text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Corporate Inquiry</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 06. OUR PHILOSOPHY: BEYOND RESUMES. BEYOND CERTIFICATES.   */}
      {/* ========================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#f2f8f5] via-white to-[#f4f9f6] border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-300 text-emerald-800 text-xs font-bold tracking-wide shadow-2xs">
            <span>Our Distinctive Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-[#0f3d2e]">
            Beyond Resumes.{' '}
            <span className="text-emerald-600">
              Beyond Certificates.
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              A résumé tells part of a candidate’s story. A certificate demonstrates learning. Neither alone tells the complete story of what a person can accomplish in production.
            </p>
            <p>
              At Greens Technologys, we believe that <strong className="text-slate-900 font-bold">capability becomes clearer when knowledge is applied, problems are solved, and skills are evaluated against real-world expectations.</strong>
            </p>
            <p className="text-emerald-800 font-semibold text-sm sm:text-base">
              That is why we champion practical assessment, industry-relevant learning, and technically informed decision-making.
            </p>
          </div>

          {/* Visual 3-Card Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-amber-700 font-bold text-xs uppercase tracking-wider mb-1">Traditional Model</div>
              <div className="text-base font-bold text-slate-900 mb-1">Keywords on Paper</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Superficial matches based on buzzwords without proof of real code proficiency or problem-solving.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-teal-700 font-bold text-xs uppercase tracking-wider mb-1">Theoretical Institutes</div>
              <div className="text-base font-bold text-slate-900 mb-1">Attendance Certificates</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Passing passive multiple-choice tests without building actual production software or debugging live code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-emerald-500 shadow-sm relative">
              <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider">
                Greens Standard
              </span>
              <div className="text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">Demonstrated Capability</div>
              <div className="text-base font-bold text-[#0f3d2e] mb-1">Verifiable Production Mastery</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live sandbox simulations, deep code reviews, practitioner technical interviews, and working portfolio apps.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 07. WHAT SETS US APART & COMMITMENT MATRIX                 */}
      {/* ========================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
              Our Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f3d2e] tracking-tight leading-snug">
              Technical recruitment informed by people who actually understand technology.
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                We believe technical recruitment should be informed by people who understand technology, not just HR recruiters parsing job descriptions.
              </p>
              <p>
                Our approach brings <strong className="text-slate-900 font-semibold">technical consultants, experienced practitioners, and trainers</strong> into the evaluation process wherever appropriate. This helps us look beyond a candidate’s résumé to assess relevant skills, practical understanding, and role readiness.
              </p>
            </div>
          </div>

          {/* Commitment Tri-Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="flex items-center gap-2.5 text-[#0f3d2e] font-bold text-sm mb-1">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>For Corporate Partners</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A more informed, evidence-based approach to candidate screening, role-specific capability benchmarking, and rapid workforce development.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-sm mb-1">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>For Our Learners</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A learning journey focused on verified code competency, career confidence, and continuous placement interview preparation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-1">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>For Our Candidates</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Objective evaluation based on relevant engineering capabilities and potential, giving real talent a fair platform to be recognized.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 08. MESSAGE FROM THE FOUNDER: EXECUTIVE SPOTLIGHT (LIGHT) */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fbf9] border-y border-slate-200/80">
        <div ref={founderCardRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl p-8 sm:p-12 md:p-14 overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Portrait Card (Left) */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-60 h-68 sm:w-68 sm:h-76 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                    <img
                      src={founderImg}
                      alt="Dinesh Jaganathan - Founder, Greens Technologys"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h4 className="text-2xl font-black text-[#0f3d2e]">Dinesh Jaganathan</h4>
                <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-0.5">
                  Founder & Managing Director
                </div>
                <div className="text-xs text-slate-500">Greens Technologys</div>

                {/* LinkedIn Profile Button */}
                <a
                  href="https://www.linkedin.com/in/dinesh-jaganathan-greens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-bold transition-all shadow-xs group cursor-pointer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Founder Letter Content (Right) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
                    Founder's Perspective
                  </span>
                  <Quote className="w-9 h-9 text-emerald-200" />
                </div>

                <blockquote className="text-lg sm:text-xl font-bold text-[#0f3d2e] leading-snug pl-4 border-l-4 border-emerald-600 italic">
                  “The true value of technology lies not just in what we build, but in the people we empower and the opportunities we create.”
                </blockquote>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  <p>
                    When I envisioned Greens Technologys, I believed there was an opportunity to make a meaningful difference in how technology skills are developed, talent is evaluated, and career opportunities are created.
                  </p>
                  <p>
                    The technology industry needs more than academic qualifications and theoretical knowledge. Organisations need professionals who can apply what they know, solve real problems, adapt to change, and contribute with confidence. At the same time, individuals need access to practical learning, meaningful guidance, and opportunities to demonstrate their abilities.
                  </p>
                  <p>
                    This belief continues to shape our approach at Greens Technologys. By bringing together technology training, technical assessment, recruitment support, and consulting, we aim to create a stronger connection between industry requirements and individual capabilities.
                  </p>
                  <p>
                    We recognise that trust is earned through consistent action. Every engagement is an opportunity to demonstrate our commitment to professionalism, quality, transparency, and long-term relationships.
                  </p>
                  <p className="text-slate-500 pt-1">
                    Thank you to our clients, learners, candidates, partners, and team members for being part of the Greens Technologys journey.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* JAYA TV TELEVISION FEATURE: FOUNDER INTERVIEW          */}
          {/* ===================================================== */}
          <div className="mt-10 rounded-3xl bg-white border border-slate-200 shadow-xl p-6 sm:p-10 lg:p-12 overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Context & Editorial Write-up */}
              <div className="lg:col-span-6 space-y-4">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold tracking-wide">
                  <Tv className="w-3.5 h-3.5 text-red-600" />
                  <span>Jaya TV Special Feature</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-600 font-semibold">Television Broadcast</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0f3d2e] tracking-tight leading-tight">
                  Founder Dinesh Jaganathan in Conversation with Jaya TV
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  In this special feature televised on Tamil Nadu’s premier satellite network <strong className="text-slate-900 font-semibold">Jaya TV Channel</strong>, Greens Technologys Founder & Managing Director <strong className="text-[#0f3d2e] font-bold">Dinesh Jaganathan</strong> discusses the founding mission of Greens Technologys and how to solve the real crisis facing fresh graduates: the industry employability gap.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  He outlines how Greens Technologys broke away from legacy theoretical coaching by establishing rigorous, production-grade sandbox training. By focusing on hands-on code development and system architecture, the institute has successfully guided thousands of graduates, career switchers, and professionals with career gaps into high-earning developer roles in leading IT corporations.
                </p>

                {/* Key Insights Chips */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                    Key Highlights from the Television Feature:
                  </span>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Practical Code Over Theory:</strong> Real-time project implementation that builds authentic workplace confidence.</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Inclusive Career Transition:</strong> Helping non-IT candidates and professionals with career breaks transition into tech.</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Industry Placement Linkages:</strong> Direct placement drives with 500+ MNCs, GCCs, and product enterprises across Chennai.</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.youtube.com/watch?v=ytqbpfoqGSA&t=1s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Full Interview on YouTube</span>
                    <ExternalLink className="w-3 h-3 text-red-200" />
                  </a>

                  <a
                    href="https://wa.me/918939915577?text=Hi%20Greens%20Technologies,%20I%20watched%20the%20Founder's%20Jaya%20TV%20interview%20and%20would%20like%20to%20discuss%20my%20career%20transition."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Talk to Career Advisor</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Embedded Responsive 16:9 YouTube Video */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/ytqbpfoqGSA?rel=0"
                      title="Greens Technologys Founder Dinesh Jaganathan Interview on Jaya TV"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>

                  {/* Caption Strip Under Video */}
                  <div className="p-3 bg-slate-900 text-slate-300 text-[11px] flex items-center justify-between border-t border-slate-800">
                    <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>Jaya TV Channel Special Broadcast</span>
                    </div>
                    <span className="text-slate-400 font-mono">Tamil Nadu Television Network</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 09. OUR JOURNEY (COMPANY TIMELINE)                        */}
      {/* ========================================================= */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
            Our Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f3d2e] tracking-tight">
            Our Journey Through the Years
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From our founding in 2010 to a premier 22-campus technological training network.
          </p>
        </div>

        {/* Clean Connected Timeline on White */}
        <div className="relative border-l-2 border-emerald-300 ml-4 sm:ml-36 space-y-10">
          {companyMilestones.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />

              {/* Year Chip (Desktop float left) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-sm font-black text-[#0f3d2e]">
                {item.year}
              </div>

              {/* Card Container */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-all">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {item.tag}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                </div>
                <div className="text-xs font-semibold text-emerald-700 mb-1">{item.subtitle}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. WHO WE SERVE: TRI-FOCUS ECOSYSTEM                     */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fbf9] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
              Our Stakeholders
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f3d2e] tracking-tight">
              Tailored Value Across the Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              How we partner with corporate clients, aspiring candidates, and career learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Corporate Clients */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Corporate Clients</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Define role-specific technical requirements, evaluate candidate problem-solving through live code tests, and integrate technical expertise into hiring pipelines.
                </p>
                <ul className="space-y-2 pt-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Structured technical evaluations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Bespoke enterprise upskilling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Reduced hiring turnaround</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Candidates */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-teal-300 transition-all flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Candidates</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluated fairly based on demonstrable engineering capability, live coding speed, and problem-solving aptitude alongside qualifications and experience.
                </p>
                <ul className="space-y-2 pt-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Fair, capability-first evaluations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Direct exposure to leading recruiters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Actionable technical test feedback</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Learners */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Learners & Switchers</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Intensive hands-on training, real-world project portfolios, continuous 1-on-1 code reviews from senior developers, and guaranteed placement drives.
                </p>
                <ul className="space-y-2 pt-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Production portfolio development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Mock interviews by MAANG mentors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>100% placement assurance</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. LET'S WORK TOGETHER (DUAL CONVERSION HUB)             */}
      {/* ========================================================= */}
      <section id="collaborate" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">
              Start The Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f3d2e] tracking-tight">
              Let’s Work Together
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Whether you are an enterprise looking to hire pre-vetted engineers or an individual ready to fast-track your tech career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Corporate Card */}
            <div className="p-8 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-800">
                  For Enterprises & GCCs
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Hire or Upskill Your Tech Team
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Partner with Greens Technologys to evaluate candidate pipelines, conduct technical coding simulations, or hire pre-assessed engineering talent.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href="mailto:contact@greenstechnologys.com?subject=Corporate%20Hiring%20Partnership"
                  className="w-full py-3 px-5 rounded-xl font-bold text-white bg-[#0f3d2e] hover:bg-[#18533e] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-xs cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Corporate Relations Desk</span>
                </a>

                <a
                  href="tel:+918939982288"
                  className="w-full py-3 px-5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Head Office: +91 89399 82288</span>
                </a>
              </div>
            </div>

            {/* Learner Card */}
            <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0f3d2e] to-[#18533e] text-white shadow-lg space-y-5 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/15 text-emerald-200 border border-white/20">
                  For Learners & Aspirants
                </span>
                <h3 className="text-xl font-bold text-white">
                  Accelerate Your Career in Tech
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Enroll in our flagship certification tracks with live real-time projects, 1-on-1 mentorship, and 100% placement assistance.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  to="/courses"
                  className="w-full py-3 px-5 rounded-xl font-black text-[#0f3d2e] bg-white hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer"
                >
                  <span>Explore All Certification Tracks</span>
                  <ArrowRight className="w-4 h-4 text-[#0f3d2e]" />
                </Link>

                <a
                  href="https://wa.me/918939915577?text=Hi%20Greens%20Technologies,%20I%20am%20interested%20in%20joining%20a%20course%20and%20want%20to%20talk%20to%20a%20career%20advisor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Chat on WhatsApp (+91 89399 15577)</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

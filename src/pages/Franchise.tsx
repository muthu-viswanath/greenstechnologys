import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  DollarSign,
  Layers,
  PieChart,
  Target,
  Rocket,
  Compass,
  FileCheck2,
  Headphones,
  Check,
  Send,
  HelpCircle,
  MessageCircle,
  Percent,
  Sliders
} from 'lucide-react';

interface ModelOption {
  tier: string;
  badge: string;
  spaceRequired: string;
  labCapacity: string;
  investmentRange: string;
  breakEven: string;
  expectedStudents: string;
  idealLocation: string;
  highlights: string[];
}

const FRANCHISE_MODELS: ModelOption[] = [
  {
    tier: 'Metropolitan Tech Campus (Flagship)',
    badge: 'Highest Revenue Potential',
    spaceRequired: '3,000 – 5,000 Sq.Ft',
    labCapacity: '120 – 180 Workstations',
    investmentRange: '₹35L – ₹50L',
    breakEven: '10 – 14 Months',
    expectedStudents: '150 – 250 / Month',
    idealLocation: 'Tier-1 Metro Cities, Prime Tech Parks & University Corridors',
    highlights: [
      'Full suite of 40+ Tech Courses (GenAI, Cloud, Full Stack, Data Science)',
      'Dedicated Executive Corporate Training Wing',
      'Dual High-Tech Assessment & Placement Interview Suites',
      'Full-time Dedicated Master Trainer Placement by Greens HQ'
    ]
  },
  {
    tier: 'City Center Academy (Standard)',
    badge: 'Most Popular Model',
    spaceRequired: '1,800 – 2,800 Sq.Ft',
    labCapacity: '70 – 100 Workstations',
    investmentRange: '₹22L – ₹32L',
    breakEven: '12 – 16 Months',
    expectedStudents: '80 – 140 / Month',
    idealLocation: 'Tier-2 Cities (Coimbatore, Madurai, Trichy, Mysore, Vizag, etc.)',
    highlights: [
      'Core Flagship Programs (Java GenAI, Python AI, DevOps, SDET)',
      'Air-conditioned modular practical labs & modern smart classrooms',
      'Direct centralized placement cell hookup with 850+ MNCs',
      'Shared territory digital advertising campaign by Greens Digital Team'
    ]
  },
  {
    tier: 'College / Tech Node (Express)',
    badge: 'Low Capex & Fast Launch',
    spaceRequired: '1,000 – 1,500 Sq.Ft',
    labCapacity: '40 – 60 Workstations',
    investmentRange: '₹14L – ₹19L',
    breakEven: '8 – 12 Months',
    expectedStudents: '45 – 75 / Month',
    idealLocation: 'Within or adjacent to Major Engineering College Hubs / Suburbs',
    highlights: [
      'Fast-track student-focused batches & semester break bootcamps',
      'Lean operating overheads with maximum classroom utilization',
      'Direct campus placement & student project guidance center',
      'Full access to Greens cloud LMS, syllabus & verified certifications'
    ]
  }
];

const ADVANTAGES_LIST = [
  {
    icon: Award,
    title: '15+ Years Brand Monopoly & Trust',
    desc: 'Greens Technologys is a household name in South India for IT coaching. You bypass years of brand building and inherit instant trust, inquiries, and student walk-ins from day one.'
  },
  {
    icon: Briefcase,
    title: '100% Centralized Placement Engine',
    desc: 'The #1 reason students choose Greens. Our centralized placement cell drives 850+ top MNCs (TCS, Zoho, Cognizant, Infosys, Amazon, Capgemini) directly to your students without you needing to source HRs.'
  },
  {
    icon: TrendingUp,
    title: 'High Gross Margins & Fast Payback',
    desc: 'With proven 35% – 45% operating margins and a structured multi-batch schedule, successful franchise partners typically recoup their complete capital expenditure within 10 to 16 months.'
  },
  {
    icon: Target,
    title: 'Central Digital Marketing & Lead Flow',
    desc: 'Our central digital marketing powerhouse generates thousands of qualified student leads every month through Google Ads, Meta campaigns, and high-ranking SEO that are routed directly to your center.'
  },
  {
    icon: Rocket,
    title: 'Living GenAI & Cloud Curriculum',
    desc: 'No obsolete syllabi. You get full access to our continuously updated, industry-aligned courseware covering Generative AI, Java/Python Full Stack, Multi-Cloud DevOps, SDET, and Agentic AI.'
  },
  {
    icon: Users,
    title: 'Faculty Recruitment & Master Certification',
    desc: 'Worried about hiring trainers? We screen, interview, evaluate, and provide intense "Train-the-Trainer" certification to your instructional staff before they take a single class.'
  },
  {
    icon: ShieldCheck,
    title: 'Exclusive Territory Protection',
    desc: 'We grant a defined geographical exclusivity zone for each franchise center to ensure your student catchment area remains protected from internal competition.'
  },
  {
    icon: Layers,
    title: 'Turnkey Architectural & Lab Blueprint',
    desc: 'Complete SOPs covering interior lab layouts, workstation ergonomics, hardware configurations, high-speed network topologies, and branded signage kits.'
  }
];

const ONBOARDING_STEPS = [
  {
    step: '01',
    title: 'Application & Territory Feasibility',
    duration: 'Week 1',
    desc: 'Submit your franchise application. Our strategic expansion committee conducts a detailed demographic and tech student potential assessment of your proposed city/zone.'
  },
  {
    step: '02',
    title: 'Discovery Meeting & Agreement',
    duration: 'Week 2',
    desc: 'Direct interaction with Greens Technologys leadership at our OMR Corporate Headquarters, financial modeling alignment, and formal Franchise Agreement sign-off.'
  },
  {
    step: '03',
    title: 'Location Sign-Off & Interior Fit-Out',
    duration: 'Week 3 – 5',
    desc: 'Site inspection, lab architectural blueprints, workstation setups, server networking, and complete Greens visual branding installation.'
  },
  {
    step: '04',
    title: 'Trainer Certification & Staff Training',
    duration: 'Week 5 – 6',
    desc: 'Recruitment assistance and mandatory master-trainer certification for your faculty, along with counselor CRM and operational training.'
  },
  {
    step: '05',
    title: 'Digital Marketing & Pre-Launch Buzz',
    duration: 'Week 7',
    desc: 'Targeted hyper-local social media blitz, search ads, and local college outreach to generate 300+ pre-launch admission inquiries.'
  },
  {
    step: '06',
    title: 'Grand Inauguration & First Batch',
    duration: 'Week 8',
    desc: 'Grand opening ceremony with Greens leadership presence, press releases, free community workshops, and commencement of your inaugural batches.'
  }
];

export default function Franchise() {
  const [selectedModel, setSelectedModel] = useState<number>(1); // Standard default
  
  // Interactive ROI Calculator State
  const [monthlyStudents, setMonthlyStudents] = useState<number>(100);
  const [avgCourseFee, setAvgCourseFee] = useState<number>(30000); // 30k INR average fee

  // Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [proposedCity, setProposedCity] = useState('');
  const [proposedArea, setProposedArea] = useState('');
  const [investmentBracket, setInvestmentBracket] = useState('₹25 Lakhs – ₹40 Lakhs');
  const [propertyStatus, setPropertyStatus] = useState('Rented / Leased Commercial Property');
  const [propertySize, setPropertySize] = useState('2,000 – 3,000 Sq.Ft');
  const [currentProfession, setCurrentProfession] = useState('IT Professional / Tech Executive');
  
  // Dedicated "Why are you interested" section
  const [primaryMotivation, setPrimaryMotivation] = useState('Bridging engineering skill gaps & launching a high-growth tech academy');
  const [whyInterestedDetails, setWhyInterestedDetails] = useState('');
  const [priorEdTechExp, setPriorEdTechExp] = useState('No, but strong business & leadership acumen');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // GSAP animation refs
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.franchise-badge', {
        y: -20,
        opacity: 0,
        duration: 0.6
      })
      .from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, '-=0.3')
      .from(statsRef.current ? statsRef.current.children : [], {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6
      }, '-=0.4');

      // Floating dynamic orbs
      gsap.to('.hero-orb', {
        y: '+=12',
        x: '+=8',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // ROI Calculator Calculations
  const grossMonthlyRevenue = monthlyStudents * avgCourseFee;
  const annualGrossRevenue = grossMonthlyRevenue * 12;
  const estOperatingCosts = annualGrossRevenue * 0.58; // 58% typical operating cost (rent, trainer, utilities, royalty)
  const estNetAnnualProfit = annualGrossRevenue - estOperatingCosts;
  const monthlyNetProfit = estNetAnnualProfit / 12;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#f7faf8] text-[#1b342e] min-h-screen">
      {/* 1. HERO SECTION WITH GSAP ANIMATIONS */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-[#162a25] via-[#1f3a33] to-[#182e28] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40"
      >
        {/* Ambient floating orbs */}
        <div className="hero-orb absolute -top-12 left-12 w-96 h-96 bg-[#86c37c]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb absolute top-24 right-12 w-96 h-96 bg-[#e9c86a]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="hero-orb absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Top Pill */}
          <div className="franchise-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-4 h-4 text-[#e9c86a]" />
            National Franchise Opportunity • Partner with South India’s #1 IT Brand
          </div>

          {/* Headline */}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 max-w-4xl mx-auto"
          >
            Launch a High-Yield Tech Academy with{' '}
            <span className="text-[#86c37c]">Greens Technologys</span>
          </h1>

          <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto mb-10">
            Step into the booming ₹45,000 Cr skill development industry. Leverage our <strong>15-year legacy</strong>, 
            <strong> 22 thriving physical branches</strong>, <strong>150,000+ alumni</strong>, and an unmatched 
            <strong> 850+ corporate placement network</strong> with complete operational support.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#apply-franchise"
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#1b342e] font-extrabold text-base shadow-xl hover:shadow-2xl hover:from-[#92d387] hover:to-[#74b66a] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Rocket className="w-5 h-5 text-[#1b342e]" />
              Apply for Franchise Partnership
            </a>

            <a
              href="#roi-calculator"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <Percent className="w-5 h-5 text-[#e9c86a]" />
              Interactive ROI Calculator
            </a>

            <a
              href="tel:+918939982288"
              className="px-5 py-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-200 text-sm font-medium flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#86c37c]" />
              Direct Expansion Desk: +91 89399 82288
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto pt-6 border-t border-white/15"
          >
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#86c37c]">22</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Proven Centers</p>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#e9c86a]">850+</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Hiring Partners</p>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#86c37c]">150,000+</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Placed Alumni</p>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#e9c86a]">35 – 45%</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Operating Margin</p>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#86c37c]">10 – 16 M</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Typical Payback</p>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#e9c86a]">100%</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Placement Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADVANTAGES OF PARTNERING WITH GREENS TECHNOLOGYS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-emerald-700" />
            The Unfair Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
            Why Our Franchisees Outperform Independent Institutes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base">
            Starting an independent training academy is fraught with faculty shortages, obsolete syllabi, and zero placement pull. 
            Here is why partnering with Greens Technologys is engineered for predictable profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES_LIST.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-emerald-100/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-[#86c37c] text-emerald-700 group-hover:text-[#1b342e] flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-lg text-[#1b342e] mb-2">{adv.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{adv.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <span>Greens HQ Certified</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FRANCHISE FORMATS & INVESTMENT MODELS */}
      <section className="py-20 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4 text-emerald-700" />
              Tailored Investment Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
              Choose Your Center Format
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base">
              Whether you are planning a massive multi-lab flagship in a metro city or an agile academy near top engineering colleges, 
              we have a standardized model designed for your capital and real estate availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {FRANCHISE_MODELS.map((model, idx) => {
              const isSelected = selectedModel === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedModel(idx)}
                  className={`rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between border-2 ${
                    isSelected
                      ? 'bg-gradient-to-b from-emerald-50/70 to-teal-50/40 border-[#86c37c] shadow-2xl ring-2 ring-[#86c37c]/50 scale-[1.02]'
                      : 'bg-[#fbfdfc] border-gray-200/80 hover:border-emerald-300 hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase">
                        {model.badge}
                      </span>
                      {isSelected && (
                        <span className="text-xs font-bold text-emerald-800 bg-[#86c37c]/30 px-2.5 py-0.5 rounded-full">
                          ✓ Selected
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#1b342e] mb-4">{model.tier}</h3>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-emerald-100 mb-6 text-xs">
                      <div>
                        <p className="text-gray-500">Space Required</p>
                        <p className="font-bold text-[#1b342e]">{model.spaceRequired}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Lab Capacity</p>
                        <p className="font-bold text-[#1b342e]">{model.labCapacity}</p>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-500">Initial Outlay</p>
                        <p className="font-extrabold text-emerald-700 text-sm">{model.investmentRange}</p>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-500">Est. Break-Even</p>
                        <p className="font-extrabold text-[#e9c86a] text-sm text-[#1b342e]">{model.breakEven}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2.5 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Model Features:</p>
                      {model.highlights.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-emerald-100">
                    <p className="text-[11px] text-gray-500 mb-3">
                      <strong>Best Suited For:</strong> {model.idealLocation}
                    </p>
                    <a
                      href="#apply-franchise"
                      className={`w-full py-3 rounded-xl text-center text-xs sm:text-sm font-bold block transition-all ${
                        isSelected
                          ? 'bg-[#1b342e] text-white hover:bg-[#284c42] shadow-md'
                          : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                      }`}
                    >
                      Apply for this Model
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ROI & INVESTMENT ESTIMATOR */}
      <section id="roi-calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="bg-gradient-to-br from-[#1b342e] via-[#24423b] to-[#1c3630] rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-emerald-600/30">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs font-bold uppercase tracking-wider mb-2">
              <Percent className="w-4 h-4 text-[#e9c86a]" />
              Interactive Financial Simulation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Simulate Your Center’s ROI & Profitability
            </h2>
            <p className="text-emerald-100/80 text-sm sm:text-base mt-2">
              Adjust the student enrollment and course fee sliders below to visualize conservative annual revenue and net operational profit projections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Console */}
            <div className="lg:col-span-7 space-y-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15">
              
              {/* Slider 1: Students Enrolled Per Month */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-emerald-200">
                    Monthly Student Enrollments
                  </label>
                  <span className="text-lg font-extrabold text-[#86c37c] font-mono">
                    {monthlyStudents} Students / Month
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="300"
                  step="10"
                  value={monthlyStudents}
                  onChange={(e) => setMonthlyStudents(Number(e.target.value))}
                  className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#86c37c]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>30 Students (Express)</span>
                  <span>100 Students (Standard)</span>
                  <span>300 Students (Flagship Metro)</span>
                </div>
              </div>

              {/* Slider 2: Average Course Fee */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-emerald-200">
                    Average Fee per Course / Certification
                  </label>
                  <span className="text-lg font-extrabold text-[#e9c86a] font-mono">
                    ₹{avgCourseFee.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="60000"
                  step="2500"
                  value={avgCourseFee}
                  onChange={(e) => setAvgCourseFee(Number(e.target.value))}
                  className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#e9c86a]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>₹20,000 (Short Certifications)</span>
                  <span>₹35,000 (Full Stack Tech)</span>
                  <span>₹60,000 (GenAI Master)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/20 border border-white/10 text-xs text-emerald-200/90 leading-relaxed">
                ℹ️ <em>Simulation Methodology:</em> Estimates assume an average batch lifecycle of 2 to 3 months, 40% – 45% standard EBITDA margin after factoring local commercial rent, faculty remunerations, marketing, electricity, and central LMS royalties.
              </div>
            </div>

            {/* Live Financial Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white to-emerald-50 text-[#1b342e] p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-[#86c37c]/60 space-y-5">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
                Financial Projection
              </span>

              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">Estimated Annual Gross Turnover</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
                  ₹{(annualGrossRevenue / 10000000).toFixed(2)} Crores
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  (₹{(grossMonthlyRevenue / 100000).toFixed(1)} Lakhs gross revenue / month)
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-semibold uppercase">Projected Net Annual Profit (EBITDA)</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-700">
                  ₹{(estNetAnnualProfit / 100000).toFixed(1)} Lakhs
                </p>
                <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                  ~ ₹{(monthlyNetProfit / 100000).toFixed(1)} Lakhs net take-home / month
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
                <span className="text-gray-500">Est. Capital Payback:</span>
                <span className="font-extrabold text-[#1b342e] bg-emerald-100 px-2.5 py-1 rounded-md">
                  10 to 14 Months
                </span>
              </div>

              <a
                href="#apply-franchise"
                className="w-full py-3.5 rounded-xl bg-[#1b342e] hover:bg-[#284c42] text-white text-xs sm:text-sm font-extrabold text-center block transition-all shadow-md"
              >
                Lock In Your Desired Territory
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 6-STEP ONBOARDING BLUEPRINT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-emerald-700" />
            Execution Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
            Your 60-Day Roadmap From Signing to Day 1 Launch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base">
            We don’t just hand over a brand manual. Our dedicated operations deployment team guides you across every single day of the setup journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ONBOARDING_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-emerald-100/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1b342e] font-extrabold text-base flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[#1b342e] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Greens HQ Guided Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMPREHENSIVE FRANCHISE APPLICATION FORM */}
      <section id="apply-franchise" className="py-20 bg-gradient-to-b from-[#1b342e] to-[#25463f] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Guidance Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs font-bold uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4 text-[#e9c86a]" />
                Direct Application Desk
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Apply for Franchise <br />
                <span className="text-[#86c37c]">Territory Ownership</span>
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                We award franchise licenses on a selective basis to visionary entrepreneurs, tech leaders, and educationists 
                who share our uncompromising passion for student career transformations.
              </p>

              {/* Requirement Checklist */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 space-y-3">
                <h4 className="font-extrabold text-sm text-[#e9c86a] uppercase tracking-wider">
                  Partner Evaluation Criteria
                </h4>
                <div className="flex items-start gap-2.5 text-xs text-emerald-100">
                  <Check className="w-4 h-4 text-[#86c37c] flex-shrink-0 mt-0.5" />
                  <span>Demonstrated passion for technology education & student success</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-emerald-100">
                  <Check className="w-4 h-4 text-[#86c37c] flex-shrink-0 mt-0.5" />
                  <span>Adequate capital readiness for chosen model (₹15L – ₹50L)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-emerald-100">
                  <Check className="w-4 h-4 text-[#86c37c] flex-shrink-0 mt-0.5" />
                  <span>Availability or readiness to secure commercial space (1,000 – 4,000 sq.ft)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-emerald-100">
                  <Check className="w-4 h-4 text-[#86c37c] flex-shrink-0 mt-0.5" />
                  <span>High personal integrity and commitment to operational excellence</span>
                </div>
              </div>

              {/* Direct Leadership Helpline */}
              <div className="p-5 rounded-2xl bg-emerald-950/70 border border-emerald-600/40 text-xs space-y-2">
                <p className="font-bold text-white">Have Preliminary Questions?</p>
                <p className="text-emerald-200">Reach our National Head of Franchise Expansion directly:</p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+918939982288"
                    className="inline-flex items-center gap-2 font-bold text-white hover:text-[#86c37c]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#86c37c]" /> +91 89399 82288
                  </a>
                  <a
                    href="mailto:franchise@greenstechnologys.com"
                    className="inline-flex items-center gap-2 font-bold text-white hover:text-[#86c37c]"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#86c37c]" /> franchise@greenstechnologys.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 text-[#1b342e] shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1b342e]">Application Received Successfully!</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you, <strong>{applicantName}</strong>. Our Strategic Franchise Expansion Committee will review your territory application for <strong>{proposedCity}</strong> and contact you on <strong>{applicantPhone}</strong> within 24 to 48 hours for a discovery call.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#1b342e] text-white text-xs font-bold hover:bg-[#284c42]"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-xl font-extrabold text-[#1b342e] border-b border-gray-100 pb-3">
                      Franchise Partnership Application
                    </h3>

                    {/* Personal & Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="E.g., Rajesh Kumar"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="rajesh@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Current Background / Profession</label>
                        <select
                          value={currentProfession}
                          onChange={(e) => setCurrentProfession(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="IT Professional / Tech Executive">IT Professional / Tech Executive</option>
                          <option value="Education / Coaching Academy Owner">Existing Coaching / Education Academy Owner</option>
                          <option value="Corporate Business Owner / Serial Entrepreneur">Corporate Business Owner / Entrepreneur</option>
                          <option value="College Professor / Academic Administrator">College Professor / Academic Administrator</option>
                          <option value="NRI / Returning Professional">NRI / Returning Professional</option>
                        </select>
                      </div>
                    </div>

                    {/* Territory & Capital */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Proposed City / Town *</label>
                        <input
                          type="text"
                          required
                          value={proposedCity}
                          onChange={(e) => setProposedCity(e.target.value)}
                          placeholder="E.g., Coimbatore, Bangalore, Madurai, etc."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Locality / Area</label>
                        <input
                          type="text"
                          value={proposedArea}
                          onChange={(e) => setProposedArea(e.target.value)}
                          placeholder="E.g., Gandhipuram, Koramangala, etc."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Investment Capacity</label>
                        <select
                          value={investmentBracket}
                          onChange={(e) => setInvestmentBracket(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="₹15 Lakhs – ₹25 Lakhs">₹15 Lakhs – ₹25 Lakhs (Express / Standard)</option>
                          <option value="₹25 Lakhs – ₹40 Lakhs">₹25 Lakhs – ₹40 Lakhs (Standard City Hub)</option>
                          <option value="₹40 Lakhs – ₹60 Lakhs">₹40 Lakhs – ₹60 Lakhs (Metro Flagship)</option>
                          <option value="₹60 Lakhs+">₹60 Lakhs+ (Multi-Center Territory)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Commercial Space Availability</label>
                        <select
                          value={propertyStatus}
                          onChange={(e) => setPropertyStatus(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="Own Commercial Property Available">Own Commercial Property Available</option>
                          <option value="Rented / Leased Commercial Property">Rented / Leased Commercial Property</option>
                          <option value="Shortlisted Potential Properties">Shortlisted Potential Properties</option>
                          <option value="Yet to Identify Space (Need HQ Guidance)">Yet to Identify Space (Need HQ Guidance)</option>
                        </select>
                      </div>
                    </div>

                    {/* ⭐ MANDATORY MOTIVATION & WHY YOU ARE INTERESTED SECTION */}
                    <div className="pt-2 border-t border-emerald-100">
                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 mb-3">
                        <label className="block text-xs font-extrabold text-emerald-900 mb-1">
                          Primary Motivation for Taking a Franchise *
                        </label>
                        <select
                          value={primaryMotivation}
                          onChange={(e) => setPrimaryMotivation(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm bg-white mb-3"
                        >
                          <option value="Bridging engineering skill gaps & launching a high-growth tech academy">
                            Bridging engineering skill gaps & launching a high-growth tech academy
                          </option>
                          <option value="High ROI & lucrative cash flow in the booming skill-development sector">
                            High ROI & lucrative cash flow in the booming skill-development sector
                          </option>
                          <option value="Upgrading an existing local training center to Greens Technologys brand">
                            Upgrading an existing local training center to Greens Technologys brand
                          </option>
                          <option value="Leveraging Greens 850+ MNC placement network in my home district">
                            Leveraging Greens 850+ MNC placement network in my home district
                          </option>
                          <option value="Long-term family enterprise / diversified business investment">
                            Long-term family enterprise / diversified business investment
                          </option>
                        </select>

                        <label className="block text-xs font-extrabold text-emerald-900 mb-1">
                          Why are you specifically interested in taking a Greens Technologys franchise? *
                        </label>
                        <p className="text-[11px] text-gray-500 mb-2">
                          Please describe your vision for your proposed territory, why you chose Greens Technologys, and how your background will help build a successful tech campus.
                        </p>
                        <textarea
                          rows={3}
                          required
                          value={whyInterestedDetails}
                          onChange={(e) => setWhyInterestedDetails(e.target.value)}
                          placeholder="Example: I have observed a huge gap in practical Full Stack & GenAI training among local engineering graduates in our city. Greens Technologys' proven 150,000+ placement track record and 22 existing branches make it the ideal brand to dominate our region..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#5ea154] text-[#1b342e] font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Formal Franchise Application
                    </button>

                    <p className="text-[11px] text-gray-500 text-center">
                      🔒 All disclosures are strictly protected by mutual non-disclosure and commercial confidentiality.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            Franchise FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b342e]">
            Answers to Common Franchise Queries
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'What ongoing royalty or revenue share does Greens Technologys charge?',
              a: 'We operate on a transparent, mutually aligned royalty model (typically 12% to 15% of course collections) which directly funds continuous curriculum updates, LMS maintenance, master-trainer certification, and centralized placement operations.'
            },
            {
              q: 'How does Greens Technologys support placement for my franchise students?',
              a: 'Every student registered in your center is enrolled directly into Greens Centralized Placement Portal. When top MNCs (TCS, Zoho, Cognizant, Infosys, Amazon) conduct recruitment drives, your eligible students participate in online and regional campus drives on an equal footing with our flagship branches.'
            },
            {
              q: 'I come from a non-IT background. Can I still own a Greens franchise?',
              a: 'Yes! Over 40% of our successful center heads come from non-IT managerial, marketing, or general business backgrounds. Greens Technologys provides the instructional blueprints, trainer recruitment, courseware, and SOPs; your primary role is operational leadership, local student outreach, and maintaining service excellence.'
            },
            {
              q: 'How long is the franchise license valid for?',
              a: 'Standard franchise agreements are signed for a period of 5 years with renewable options upon mutual agreement, ensuring you have ample runway to amortize your capital expenditure and generate multi-year compounding profits.'
            },
            {
              q: 'How fast can a new center become operational after signing?',
              a: 'With our standardized 60-day launch roadmap, most franchise partners launch within 7 to 9 weeks from agreement execution and site finalization.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-emerald-100/90 shadow-sm">
              <h4 className="font-bold text-base text-[#1b342e] mb-2">{faq.q}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

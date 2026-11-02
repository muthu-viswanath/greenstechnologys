import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  Clock,
  Layers,
  Star,
  Users,
  Code2,
  Laptop,
  ShieldCheck,
  BrainCircuit,
  Building2,
  Briefcase,
  Cloud,
  Bot,
  Lock,
  Target,
  Cpu,
  TrendingUp,
  Globe,
  MapPin,
  Zap,
  Phone,
  MessageCircle,
  X,
  FileText,
  Download,
  Calendar
} from 'lucide-react';
import {
  coursesData,
  COURSE_DOMAINS,
  CourseDetailData,
  CourseDomainInfo
} from '../data/coursesData';

// Futuristic dark green panoramic hero background
import heroDarkGreenBg from '../assets/courses/hero_dark_green_bg.jpg';

/**
 * Authentic Technology Logos / Icons for all Course Categories
 * Distinctly represents Java, Python, React, Selenium, AWS Cloud, AI Brain, etc.
 */
function CategoryLogo({ domainId, isSelected }: { domainId: string; isSelected?: boolean }) {
  switch (domainId) {
    case 'programming':
      // Java Coffee Cup + Python Blue/Yellow Serpents
      return (
        <div className="flex items-center -space-x-1" title="Java & Python Full Stack">
          {/* Java Cup */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
            <path d="M4 17h10a2 2 0 0 0 2-2v-2H4v4z" fill={isSelected ? '#fb923c' : '#ea580c'} />
            <path d="M14 11h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" stroke={isSelected ? '#fdba74' : '#ea580c'} strokeWidth="1.5" />
            <path d="M4 11h10v2H4v-2z" fill={isSelected ? '#fdba74' : '#f97316'} />
            <path d="M6 8c0-1 1-2 1-3M9 8c0-1 1-2 1-3M12 8c0-1 1-2 1-3" stroke={isSelected ? '#7dd3fc' : '#0284c7'} strokeWidth="1.25" strokeLinecap="round" />
          </svg>
          {/* Python Mark */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
            <path d="M12 3c-4 0-4 1.7-4 1.7l.01 1.8h4.1v.6H6.3s-2.3.26-2.3 3.9c0 3.6 2 3.8 2 3.8h1.2v-1.7s-.07-2 2-2h4.1s1.9.03 1.9-1.9V5.2S15.6 3 12 3zm-1.1 1.2a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" fill={isSelected ? '#7dd3fc' : '#0284c7'} />
            <path d="M12 21c4 0 4-1.7 4-1.7l-.01-1.8H11.9v-.6h5.8s2.3-.26 2.3-3.9c0-3.6-2-3.8-2-3.8h-1.2v1.7s.07 2-2 2h-4.1s-1.9-.03-1.9 1.9v3.9s-.4 2.2 3.2 2.2zm1.1-1.2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" fill={isSelected ? '#fde047' : '#eab308'} />
          </svg>
        </div>
      );

    case 'web-mobile':
      // React Cyan Atom
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="React & Web Mobile">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#06b6d4" strokeWidth="1.75" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#06b6d4" strokeWidth="1.75" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#06b6d4" strokeWidth="1.75" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#06b6d4" />
        </svg>
      );

    case 'testing-qa':
      // Selenium / Playwright QA Shield & Bug
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Selenium & QA Automation">
          <path d="M12 2l7 3.5v5.5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5.5L12 2z" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'ai-datascience':
      // AI Brain & Neural Net
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="AI & Data Science">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#a855f7" strokeWidth="1.75" fill="#a855f7" fillOpacity="0.15" />
          <circle cx="8" cy="8" r="1.5" fill="#c084fc" />
          <circle cx="16" cy="8" r="1.5" fill="#c084fc" />
          <circle cx="8" cy="16" r="1.5" fill="#c084fc" />
          <circle cx="16" cy="16" r="1.5" fill="#c084fc" />
          <circle cx="12" cy="12" r="2.5" fill="#a855f7" />
          <path d="M8 8l4 4 4-4M8 16l4-4 4 4" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'data-bi':
      // Snowflake & Power BI Analytics
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Snowflake & Power BI">
          <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" fill="#f59e0b" />
          <circle cx="12" cy="5" r="1.5" fill="#f59e0b" />
          <circle cx="12" cy="19" r="1.5" fill="#f59e0b" />
        </svg>
      );

    case 'database-dba':
      // Oracle SQL & Database Cylinder
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Oracle SQL & DBA">
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.75" />
          <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#ef4444" strokeWidth="1.75" />
          <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#ef4444" strokeWidth="1.75" />
          <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" stroke="#ef4444" strokeWidth="1.75" />
        </svg>
      );

    case 'oracle-apps':
      // Oracle Enterprise Fusion Cloud
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Oracle Apps & Fusion">
          <rect x="3" y="4" width="18" height="16" rx="4" stroke="#f97316" strokeWidth="2" fill="#f97316" fillOpacity="0.15" />
          <ellipse cx="12" cy="12" rx="5" ry="3" stroke="#f97316" strokeWidth="1.75" />
          <circle cx="12" cy="12" r="1.5" fill="#f97316" />
        </svg>
      );

    case 'enterprise-erp-crm':
      // SAP & Salesforce ERP
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="SAP & Salesforce">
          <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="#6366f1" strokeWidth="1.75" fill="#6366f1" fillOpacity="0.15" />
          <path d="M8 12h8M12 8v8" stroke="#6366f1" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="8" cy="8" r="1" fill="#6366f1" />
          <circle cx="16" cy="16" r="1" fill="#6366f1" />
        </svg>
      );

    case 'cloud-devops':
      // AWS Cloud & DevOps Terminal
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="AWS & Cloud DevOps">
          <path d="M6.5 19a4.5 4.5 0 0 1-.4-8.98A7.5 7.5 0 0 1 20 12.5a5 5 0 0 1-3 8.5H6.5z" stroke="#0ea5e9" strokeWidth="2" strokeLinejoin="round" fill="#0ea5e9" fillOpacity="0.15" />
          <path d="M12 11v6M9.5 13.5L12 11l2.5 2.5" stroke="#0ea5e9" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'rpa-automation':
      // UiPath / Robotic Bot
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="UiPath & RPA">
          <rect x="4" y="8" width="16" height="12" rx="3" stroke="#10b981" strokeWidth="1.75" fill="#10b981" fillOpacity="0.15" />
          <circle cx="9" cy="13" r="1.5" fill="#10b981" />
          <circle cx="15" cy="13" r="1.5" fill="#10b981" />
          <path d="M12 4v4M9 4h6M8 17h8" stroke="#10b981" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );

    case 'cybersecurity':
      // Cybersecurity Lock & Shield
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Cybersecurity & SOC">
          <path d="M12 2l7 3v6c0 5-3 9.5-7 11-4-1.5-7-6-7-11V5l7-3z" stroke="#ec4899" strokeWidth="2" fill="#ec4899" fillOpacity="0.15" />
          <circle cx="12" cy="10" r="2" fill="#ec4899" />
          <path d="M12 12v3" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'management-analysis':
      // Agile Scrum Target
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Agile & Scrum">
          <circle cx="12" cy="12" r="9" stroke="#8b5cf6" strokeWidth="1.75" fill="#8b5cf6" fillOpacity="0.15" />
          <circle cx="12" cy="12" r="5" stroke="#8b5cf6" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.5" fill="#8b5cf6" />
        </svg>
      );

    case 'uiux-creative':
      // Figma UI/UX & Creative Palette
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Figma UI/UX">
          <path d="M12 2a9 9 0 0 0-9 9c0 4.5 4 6 5 6s1.5-1 2-2 1.5-1 3-1h2a6 6 0 0 0 6-6c0-3.3-4-6-9-6z" stroke="#f43f5e" strokeWidth="1.75" fill="#f43f5e" fillOpacity="0.15" />
          <circle cx="7.5" cy="9.5" r="1.25" fill="#f43f5e" />
          <circle cx="11.5" cy="6.5" r="1.25" fill="#f43f5e" />
          <circle cx="16.5" cy="9.5" r="1.25" fill="#f43f5e" />
        </svg>
      );

    case 'embedded-vlsi':
      // Microchip CPU Silicon
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Embedded & VLSI">
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="#eab308" strokeWidth="1.75" fill="#eab308" fillOpacity="0.15" />
          <rect x="9" y="9" width="6" height="6" fill="#eab308" fillOpacity="0.6" />
          <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'digital-marketing':
      // Growth Rocket & SEO
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Digital Marketing">
          <path d="M4 19l6-6 4 4 6-8" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9h5v5" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'foreign-languages':
      // Multilingual Globe
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Foreign Languages">
          <circle cx="12" cy="12" r="9" stroke="#d97706" strokeWidth="1.75" fill="#d97706" fillOpacity="0.15" />
          <path d="M3.6 9h16.8M3.6 15h16.8" stroke="#d97706" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4.5" ry="9" stroke="#d97706" strokeWidth="1.5" />
        </svg>
      );

    case 'location-specific':
      // Location Hub Map Pin
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Campus Hubs">
          <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" stroke="#059669" strokeWidth="1.75" fill="#059669" fillOpacity="0.15" />
          <circle cx="12" cy="9" r="2.5" fill="#059669" />
        </svg>
      );

    case 'power-platform':
      // Power Platform Lightning Bolt
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-label="Microsoft Power Platform">
          <path d="M13 2L4 14h7l-2 8 11-12h-7l2-8z" stroke="#8b5cf6" strokeWidth="1.75" strokeLinejoin="round" fill="#8b5cf6" fillOpacity="0.25" />
        </svg>
      );

    default:
      return <Code2 className="w-5 h-5 text-emerald-600" />;
  }
}

export default function Courses() {
  // GSAP Animated Text Refs
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const phrase1Ref = useRef<HTMLSpanElement>(null);
  const phrase2Ref = useRef<HTMLSpanElement>(null);
  const phrase3Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Catalog State - Default to first category (Programming & Full Stack), NO 'All courses' option
  const [selectedDomain, setSelectedDomain] = useState<string>(COURSE_DOMAINS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  
  // Quick Syllabus Modal State
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalCourseTitle, setModalCourseTitle] = useState<string>('');
  const [leadName, setLeadName] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [modalSubmitted, setModalSubmitted] = useState<boolean>(false);

  // Active Domain Info
  const activeDomain = useMemo(() => {
    return COURSE_DOMAINS.find((d) => d.id === selectedDomain) || COURSE_DOMAINS[0];
  }, [selectedDomain]);

  // GSAP Animated Text: "Your career! Your Choice! Our Guidance & Support!"
  useEffect(() => {
    if (!heroContainerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial state
      gsap.set([phrase1Ref.current, phrase2Ref.current, phrase3Ref.current], {
        opacity: 0,
        y: 40,
        scale: 0.92,
        filter: 'blur(10px)'
      });
      if (subtextRef.current) gsap.set(subtextRef.current, { opacity: 0, y: 25 });
      if (actionsRef.current) gsap.set(actionsRef.current, { opacity: 0, y: 25 });
      if (statsRef.current) gsap.set(statsRef.current, { opacity: 0, y: 20 });

      // Staggered reveal timeline
      tl.to(phrase1Ref.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.85
      })
      .to(phrase2Ref.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.85
      }, '-=0.35')
      .to(phrase3Ref.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.95
      }, '-=0.35')
      .to(subtextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65
      }, '-=0.25')
      .to(actionsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65
      }, '-=0.3')
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, '-=0.3');

      // Continuous subtle breathing radiant glow on highlight phrases
      if (phrase1Ref.current && phrase2Ref.current) {
        gsap.to([phrase1Ref.current, phrase2Ref.current], {
          textShadow: '0 0 25px rgba(52, 211, 153, 0.7), 0 0 50px rgba(56, 189, 248, 0.45)',
          repeat: -1,
          yoyo: true,
          duration: 2.4,
          ease: 'sine.inOut'
        });
      }
    }, heroContainerRef);

    return () => ctx.revert();
  }, []);

  // Filtered courses - strictly filtered by selected category domain (NO "All courses" option)
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchDomain = course.domainId === selectedDomain;
      const matchLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q) ||
        course.subcategory.toLowerCase().includes(q) ||
        course.keySkills.some((s) => s.toLowerCase().includes(q)) ||
        course.tagline.toLowerCase().includes(q);

      return matchDomain && matchLevel && matchSearch;
    });
  }, [selectedDomain, selectedLevel, searchQuery]);

  const handleOpenSyllabusModal = (title: string) => {
    setModalCourseTitle(title);
    setShowModal(true);
    setModalSubmitted(false);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  return (
    <div className="bg-[#fcfdfd] text-[#1b342e] min-h-screen">
      
      {/* 1. SPECTACULAR FULL-WIDTH PANORAMIC BIG SCREEN HERO (STUDENT LOOKING AT THE BIG SCREEN OF ALL COURSES) */}
      <section
        ref={heroContainerRef}
        className="relative w-full bg-[#04120c] text-white overflow-hidden border-b border-emerald-900/60 select-none"
      >
        {/* Modern Elegant Futuristic Dark Green Background Layer across entire page width */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroDarkGreenBg}
            alt="Futuristic Dark Green Technology Background"
            className="w-full h-full object-cover object-center opacity-35 mix-blend-screen scale-105"
          />
          {/* Multi-layered cinematic emerald and obsidian gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#04120c]/80 via-[#061c13]/55 to-[#04120c]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04120c]/90 via-transparent to-[#04120c]/90" />
          {/* Volumetric ambient emerald glow centers */}
          <div className="absolute -top-32 left-1/4 w-[750px] h-[450px] bg-emerald-500/15 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-emerald-400/10 rounded-full blur-[160px]" />
        </div>

        {/* Full-Width Panoramic Content Canvas directly on Hero Carousel */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20 flex flex-col items-center">
          
          {/* Compact Elite Badge */}
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#86c37c] animate-pulse" />
              <span>CENTRAL DIGITAL COURSES DIRECTORY • 100+ INDUSTRY TRACKS</span>
            </div>
          </div>

          {/* MASTER GSAP ANIMATED HEADLINE DIRECTLY ON CAROUSEL */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] text-white max-w-4xl mx-auto mb-3.5 drop-shadow-2xl">
            <span
              ref={phrase1Ref}
              className="inline-block bg-gradient-to-r from-[#86c37c] via-[#a3e635] to-[#4ade80] bg-clip-text text-transparent mr-2.5 sm:mr-3"
            >
              Your Career!
            </span>
            <span
              ref={phrase2Ref}
              className="inline-block bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#818cf8] bg-clip-text text-transparent mr-2.5 sm:mr-3"
            >
              Your Choice!
            </span>
            <br className="hidden sm:inline" />
            <span
              ref={phrase3Ref}
              className="inline-block bg-gradient-to-r from-amber-300 via-amber-200 to-white bg-clip-text text-transparent"
            >
              Our Guidance & Support!
            </span>
          </h1>

          {/* Animated Subtitle */}
          <p
            ref={subtextRef}
            className="text-sm sm:text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-3xl mx-auto mb-6 drop-shadow-md"
          >
            Stand in front of limitless opportunity. Discover 100+ certified programs across all 18 domains with live coding labs, 1-on-1 expert mentorship, and 100% placement assurance across our 22 Chennai campuses.
          </p>

          {/* Animated Call-to-Actions */}
          <div
            ref={actionsRef}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6"
          >
            <a
              href="#all-courses-catalog"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#142621] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Explore 100+ Courses Below <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleOpenSyllabusModal('Greens Complete Courses Master Catalog')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-md flex items-center gap-2 shadow"
            >
              <Download className="w-4 h-4 text-[#86c37c]" /> Download Master Syllabus
            </button>
          </div>

          {/* Animated Compact Key Metrics Strip */}
          <div
            ref={statsRef}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-emerald-200/90 pt-4 border-t border-emerald-500/20 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#86c37c]" />
              <span>22 Chennai Campus Hubs</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>1,400+ Hiring Partners</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
              <span>₹8.5 - 24 LPA Packages</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Placement Assurance</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SIDE-PANEL CATEGORIZATION & COURSE CARDS CATALOG */}
      <section id="all-courses-catalog" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-gray-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              100+ Placement-Driven Programs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#142621] tracking-tight">
              Explore Programs by Category
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
              Select a domain track from the left panel to explore all certified syllabus modules, career roles, live projects, and batch schedules.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-white px-3.5 py-2 rounded-xl border border-gray-200/80 shadow-sm">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>Viewing: <strong className="text-[#142621]">{activeDomain.shortName}</strong> ({filteredCourses.length} programs)</span>
          </div>
        </div>

        {/* Mobile Horizontal Category Scroller (NO "All courses" option) */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2 px-1">
            <span>SELECT TRACK:</span>
            <span className="text-emerald-700">{activeDomain.shortName}</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {COURSE_DOMAINS.map((domain) => {
              const isSelected = selectedDomain === domain.id;
              const count = coursesData.filter((c) => c.domainId === domain.id).length;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 shadow-sm ${
                    isSelected
                      ? 'bg-[#142621] text-white ring-2 ring-emerald-500/50'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <CategoryLogo domainId={domain.id} isSelected={isSelected} />
                  <span>{domain.shortName}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    isSelected ? 'bg-[#86c37c] text-[#142621]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Two-Column Layout: Left Side Panel + Right Courses */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDE PANEL CATEGORIZATION (DESKTOP) */}
          <aside className="hidden lg:block w-80 xl:w-88 flex-shrink-0 sticky top-24">
            <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-4 overflow-hidden">
              
              {/* Panel Header */}
              <div className="px-3 py-3 border-b border-gray-100 flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="font-extrabold text-xs text-[#142621] uppercase tracking-wider">
                    Course Categories
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {COURSE_DOMAINS.length} Streams
                </span>
              </div>

              {/* Category Items List (Scrollable, NO "All courses") */}
              <div className="space-y-1.5 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
                {COURSE_DOMAINS.map((domain) => {
                  const isSelected = selectedDomain === domain.id;
                  const count = coursesData.filter((c) => c.domainId === domain.id).length;
                  return (
                    <button
                      key={domain.id}
                      onClick={() => {
                        setSelectedDomain(domain.id);
                      }}
                      className={`w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-center justify-between group relative ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#142621] to-[#1c3931] text-white shadow-md ring-1 ring-emerald-500/30'
                          : 'hover:bg-emerald-50/60 text-gray-700 hover:text-[#142621]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Technology Icon / Logo container (Java, Python, etc.) */}
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-sm ${
                            isSelected
                              ? 'bg-white/10 text-white border border-white/15'
                              : 'bg-gray-100/80 text-gray-700 border border-gray-200/60'
                          }`}
                        >
                          <CategoryLogo domainId={domain.id} isSelected={isSelected} />
                        </div>

                        <div className="min-w-0 pr-1">
                          <p className={`text-xs font-bold truncate leading-tight ${
                            isSelected ? 'text-white' : 'text-gray-900 group-hover:text-emerald-950'
                          }`}>
                            {domain.shortName}
                          </p>
                          <p className={`text-[10px] truncate mt-0.5 ${
                            isSelected ? 'text-emerald-200/80' : 'text-gray-400'
                          }`}>
                            {domain.summary.split(',').slice(0, 2).join(', ')}
                          </p>
                        </div>
                      </div>

                      {/* Course Count Badge */}
                      <span
                        className={`px-2 py-0.5 rounded-lg text-[11px] font-bold flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#86c37c] text-[#142621]'
                            : 'bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-900'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </aside>

          {/* RIGHT SIDE CONTENT: SELECTED CATEGORY COURSES */}
          <main className="flex-1 min-w-0 w-full">
            
            {/* Active Category Hero Banner */}
            <div className="bg-gradient-to-br from-[#142621] via-[#1a352c] to-[#0f1f1a] text-white rounded-3xl p-6 sm:p-7 shadow-md mb-6 relative overflow-hidden border border-emerald-900/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-inner">
                    <CategoryLogo domainId={activeDomain.id} isSelected={true} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#86c37c] text-[10px] font-extrabold uppercase tracking-wider">
                        Active Category
                      </span>
                      <span className="text-white/60 text-xs">• {filteredCourses.length} Programs</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {activeDomain.name}
                    </h3>
                    <p className="text-emerald-100/80 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                      {activeDomain.summary}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenSyllabusModal(`${activeDomain.name} Master Syllabus`)}
                  className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs whitespace-nowrap transition-all flex items-center gap-2 shadow"
                >
                  <Download className="w-3.5 h-3.5 text-[#86c37c]" />
                  Domain Syllabus
                </button>
              </div>

              {/* Search & Level Filter inside the right header area */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:max-w-md">
                  <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search within ${activeDomain.shortName}...`}
                    className="w-full pl-10 pr-9 py-2 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#86c37c] backdrop-blur-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#86c37c] backdrop-blur-sm"
                  >
                    <option value="All" className="bg-[#142621] text-white">All Skill Levels</option>
                    <option value="Beginner to Advanced" className="bg-[#142621] text-white">Beginner to Advanced</option>
                    <option value="Intermediate" className="bg-[#142621] text-white">Intermediate</option>
                    <option value="Professional" className="bg-[#142621] text-white">Professional</option>
                    <option value="Expert" className="bg-[#142621] text-white">Expert</option>
                  </select>

                  {(searchQuery || selectedLevel !== 'All') && (
                    <button
                      onClick={() => {
                        setSelectedLevel('All');
                        setSearchQuery('');
                      }}
                      className="text-xs font-bold text-[#86c37c] hover:underline whitespace-nowrap"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Courses Display (with Framer Motion animation) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDomain}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                {filteredCourses.length === 0 ? (
                  <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-gray-300">
                    <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="font-extrabold text-base text-[#142621]">
                      No Matching Courses Found
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
                      No programs in <strong>{activeDomain.shortName}</strong> match your search "{searchQuery}".
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedLevel('All');
                      }}
                      className="mt-4 px-4 py-2 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold hover:bg-emerald-200"
                    >
                      Clear Search Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredCourses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                      >
                        {/* Course Thumbnail Image */}
                        <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                          {/* Top Badges */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 shadow-sm">
                              {course.subcategory}
                            </span>
                            {course.badge && (
                              <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-[#86c37c] text-[#0a2016] text-[11px] font-black shadow uppercase tracking-wider">
                                {course.badge.replace(/^⭐\s*/, '')}
                              </span>
                            )}
                          </div>

                          {/* Media Bottom Stats */}
                          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                            <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                              <Clock className="w-3.5 h-3.5 text-[#86c37c]" />
                              <span>{course.duration.split('(')[0].trim()}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 text-amber-300">
                              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                              <span>{course.rating}</span>
                              <span className="text-white/70 text-[10px]">({course.reviewsCount})</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Main Body */}
                        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            {/* Title */}
                            <h3 className="font-extrabold text-base sm:text-lg text-[#142621] mb-2 group-hover:text-emerald-800 transition-colors leading-snug">
                              <Link to={`/courses/${course.id}`} className="hover:underline">
                                {course.title}
                              </Link>
                            </h3>

                            {/* Tagline */}
                            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                              {course.tagline}
                            </p>

                            {/* Key Skills Pills */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {course.keySkills.slice(0, 4).map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100 text-[11px] font-semibold"
                                >
                                  {skill}
                                </span>
                              ))}
                              {course.keySkills.length > 4 && (
                                <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600 text-[11px] font-medium">
                                  +{course.keySkills.length - 4} more
                                </span>
                              )}
                            </div>

                            {/* Salary & Placement Strip */}
                            {course.avgSalary && (
                              <div className="mb-4 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-1.5 text-emerald-950 font-bold">
                                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>Avg Package:</span>
                                  <span className="text-emerald-700 font-extrabold">{course.avgSalary}</span>
                                </div>
                                <span className="text-[10px] text-emerald-800 font-bold bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                                  100% Placement
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Card Action Buttons */}
                          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                            <button
                              type="button"
                              onClick={() => handleOpenSyllabusModal(course.title)}
                              className="px-3.5 py-2 rounded-xl border border-gray-200 hover:border-emerald-400 text-gray-700 hover:text-emerald-800 text-xs font-bold flex items-center gap-1.5 transition-all bg-gray-50 hover:bg-emerald-50/50"
                            >
                              <Download className="w-3.5 h-3.5 text-emerald-600" /> Syllabus
                            </button>

                            <Link
                              to={`/courses/${course.id}`}
                              className="px-4 py-2 rounded-xl bg-[#142621] hover:bg-[#1f3d34] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm group-hover:shadow"
                            >
                              View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

          </main>
        </div>

      </section>

      {/* QUICK SYLLABUS DOWNLOAD MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase">
                    Free Syllabus & Curriculum
                  </span>
                  <h3 className="text-base font-bold text-[#1b342e] mt-1 line-clamp-1">
                    {modalCourseTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {modalSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1b342e]">Syllabus Sent!</h4>
                  <p className="text-xs text-gray-600">
                    The complete curriculum roadmap for <strong>{modalCourseTitle}</strong> has been shared with your mobile number / email.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="mt-2 px-5 py-2 rounded-xl bg-[#1b342e] text-white text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-3.5">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Enter your details to receive the comprehensive PDF syllabus and upcoming batch calendar directly:
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="E.g., Priya Kumar"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#86c37c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#86c37c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="priya@example.com"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#86c37c]"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#1b342e] text-xs font-extrabold shadow"
                    >
                      Download Syllabus PDF
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

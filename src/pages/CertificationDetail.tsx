import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  GraduationCap,
  Laptop,
  Layers,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  TrendingUp,
  User,
  Users,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  getCertificationById,
  certificationsData,
  CertificationDetailData
} from '../data/certificationsData';

export default function CertificationDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const cert = useMemo<CertificationDetailData | undefined>(() => {
    if (!slug) return undefined;
    return getCertificationById(slug);
  }, [slug]);

  // Related certifications from same category
  const relatedCerts = useMemo(() => {
    if (!cert) return [];
    return certificationsData
      .filter((c) => c.category === cert.category && c.id !== cert.id)
      .slice(0, 3);
  }, [cert]);

  // Lead Generation Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    trainingMode: 'Classroom - Chennai (Adyar / OMR / Tambaram / Navalur / Porur)',
    experience: 'Fresher / College Graduate',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in your Name, Email, and Phone number.');
      return;
    }

    setSubmitting(true);

    // Simulate fast submission & store locally
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);

      // Save lead to localStorage
      try {
        const storedLeads = JSON.parse(localStorage.getItem('greens_syllabus_leads') || '[]');
        storedLeads.push({
          ...formData,
          certificationId: cert?.id,
          certificationTitle: cert?.title,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('greens_syllabus_leads', JSON.stringify(storedLeads));
      } catch (err) {
        console.error('Lead storage error:', err);
      }

      // Confetti celebration
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0f3d2e', '#10b981', '#34d399', '#f59e0b', '#3b82f6']
      });
    }, 600);
  };

  // If certification not found
  if (!cert) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-200 p-8 text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Certification Not Found
          </h2>
          <p className="text-sm text-slate-600">
            We couldn't locate the curriculum details for "{slug}". Explore our complete catalog of 50+ industry-recognized certifications.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to="/certifications"
              className="flex-1 py-3 px-4 rounded-xl font-bold text-xs text-white bg-[#0f3d2e] hover:bg-[#18533e] transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Browse All Certifications</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfdfc] text-slate-900 pb-20">
      
      {/* ========================================================= */}
      {/* 1. TOP BREADCRUMB & BACK NAVIGATION                        */}
      {/* ========================================================= */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 truncate">
            <Link to="/" className="hover:text-emerald-700 transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to="/certifications" className="hover:text-emerald-700 transition-colors shrink-0">Certifications</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-400 truncate hidden sm:inline">{cert.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:inline" />
            <span className="font-semibold text-emerald-900 truncate">{cert.title}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Share this certification"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
            <Link
              to="/certifications"
              className="py-1.5 px-3 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Catalog</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. HERO SECTION: CERTIFICATION PROFILE & OVERVIEW         */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f9f5] via-[#f9fdfa] to-[#fcfdfc] border-b border-slate-200 pt-8 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{cert.category}</span>
                </span>

                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                    cert.level === 'Expert'
                      ? 'bg-purple-100 text-purple-900 border-purple-200'
                      : cert.level === 'Professional'
                      ? 'bg-blue-100 text-blue-900 border-blue-200'
                      : 'bg-teal-100 text-teal-900 border-teal-200'
                  }`}
                >
                  {cert.level} Level
                </span>

                {cert.badge && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{cert.badge}</span>
                  </span>
                )}

                <div className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{cert.rating}</span>
                  <span className="text-slate-400 font-normal">({cert.reviewsCount})</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f3d2e] tracking-tight leading-tight">
                  {cert.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  {cert.tagline}
                </p>
              </div>

              {/* Exam & Provider info */}
              <div className="p-3.5 rounded-2xl bg-white/90 border border-emerald-200/80 shadow-2xs flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Accredited Body:</strong> {cert.provider}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-700 shrink-0" />
                  <span><strong>Exam Code:</strong> {cert.examCode}</span>
                </div>
              </div>

              {/* Quick Highlights Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-800 font-extrabold text-xs sm:text-sm">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{cert.duration.split(' ')[0]} {cert.duration.split(' ')[1]}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Duration</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-800 font-extrabold text-xs sm:text-sm">
                    <Laptop className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Practical</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Live Sandbox Labs</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-800 font-extrabold text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chennai & Online</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Classroom / Live</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-800 font-extrabold text-xs sm:text-sm">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Placement</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Interview Drives</span>
                </div>
              </div>

            </div>

            {/* Right Card Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Official Curriculum Blueprint
                  </span>
                  <p className="text-sm font-semibold text-slate-100 line-clamp-2">
                    Industry-vetted syllabus designed in collaboration with hiring leaders
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MAIN CONTENT: CURRICULUM OVERVIEW & STICKY FORM        */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================= */}
          {/* LEFT 7-8 COLS: WHAT WILL BE COVERED IN THE CURRICULUM   */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-10">
            
            {/* 3.1 Course Overview Narrative */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f3d2e] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <span>Certification Overview & Industry Value</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {cert.overview}
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {cert.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.2 What Will Be Covered in the Curriculum */}
            <div className="space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f3d2e] flex items-center gap-2">
                    <Layers className="w-5 h-5 text-emerald-600" />
                    <span>What Will Be Covered in the Curriculum</span>
                  </h2>
                  <p className="text-xs text-slate-500 pt-0.5">
                    High-level architectural pillars covered during the training (5 Comprehensive Modules)
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>Executive Summary</span>
                </span>
              </div>

              {/* Intellectual Property & Deep Syllabus Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-white to-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-emerald-900">
                    Why does this page show an overview instead of the full 35-page syllabus?
                  </p>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    To maintain educational integrity and protect Greens Technologys proprietary lab workbooks, this page outlines the core competency milestones. For the detailed topic-by-topic breakdown, lab exercises, and mock test schedules, request the <strong>Official Syllabus Dossier</strong> using the quick form.
                  </p>
                </div>
              </div>

              {/* Modules Accordion / List */}
              <div className="space-y-3 pt-2">
                {cert.curriculumModules.map((module, index) => {
                  const isOpen = expandedModule === index;
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-white border-emerald-400 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedModule(isOpen ? null : index)}
                        className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0">
                              {index + 1}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-slate-900">
                              {module.title}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-500 pl-8">
                            {module.subtitle}
                          </p>
                        </div>

                        <div className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-emerald-700' : ''
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-slate-100 bg-slate-50/60 px-5 py-4"
                          >
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                              Core Concepts & Hands-on Capabilities Covered:
                            </span>
                            <ul className="space-y-2">
                              {module.topics.map((topic, tIdx) => (
                                <li
                                  key={tIdx}
                                  className="text-xs text-slate-700 flex items-start gap-2.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                                  <span className="leading-relaxed">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* 3.3 Tools & Technology Stack */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-[#0f3d2e] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-600" />
                <span>Tools, Frameworks & Platforms Practiced</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cert.toolsAndTech.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs hover:border-emerald-300 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 3.4 Target Audience & Prerequisites */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>Who Should Take This Certification</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {cert.targetAudience.map((audience, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Prerequisites & Eligibility</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.prerequisites}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Zero-to-Hero bridge modules included for freshers.</span>
                </div>
              </div>

            </div>

            {/* 3.5 Career Opportunities & Hiring Partners */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0f3d2e] text-white space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    Career Outlook & Placement
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    Target Job Roles & Salary Potential
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[11px] text-slate-300 block">Average Industry Compensation</span>
                  <span className="text-lg font-black text-amber-400">{cert.avgSalary}</span>
                </div>
              </div>

              {/* Roles unlocked */}
              <div className="space-y-2">
                <span className="text-xs text-slate-300 font-semibold block">
                  Designations Unlocked by this Credential:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cert.careerRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-emerald-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hiring Companies */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-xs text-slate-300 font-semibold block">
                  Enterprises Actively Recruiting for this Certification Profile:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cert.topHiringCompanies.map((company, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-black/30 text-[11px] font-medium text-slate-300 border border-white/10"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT 4-5 COLS: STICKY DATA COLLECTION LEAD FORM         */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-28 space-y-6">
            
            {/* Lead Capture Box */}
            <div className="bg-white rounded-3xl border-2 border-emerald-300/80 shadow-xl overflow-hidden">
              
              {/* Form Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0f3d2e] to-[#18533e] text-white space-y-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                  <Sparkles className="w-3 h-3 text-emerald-300" />
                  <span>Free Instant PDF Download</span>
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                  Get Detailed Syllabus & Exam Blueprint
                </h3>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Enter your contact details to instantly receive the complete 35-page syllabus, fee breakdown, and batch schedule.
                </p>
              </div>

              {/* Form Body */}
              <div className="p-5 sm:p-6">
                
                {formSubmitted ? (
                  // Success State
                  <div className="py-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-900">
                        Syllabus Package Sent!
                      </h4>
                      <p className="text-xs text-slate-600">
                        Thank you, <strong className="text-emerald-800">{formData.fullName}</strong>. A copy has been dispatched to <strong>{formData.email}</strong>.
                      </p>
                    </div>

                    {/* Instant Download Button */}
                    <a
                      href={`https://wa.me/918939915577?text=${encodeURIComponent(
                        `Hi Greens Technologies, I submitted the form for ${cert.title}. Please send me the complete syllabus PDF and fee structure for ${formData.fullName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-white" />
                      <span>Download Syllabus PDF on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          trainingMode: 'Classroom - Chennai (Adyar / OMR / Tambaram / Navalur / Porur)',
                          experience: 'Fresher / College Graduate',
                          message: ''
                        });
                      }}
                      className="text-[11px] text-slate-500 hover:text-slate-800 underline block mx-auto cursor-pointer"
                    >
                      Request syllabus for another course
                    </button>
                  </div>
                ) : (
                  // Active Form
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Karthik Rajan"
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="karthik@example.com"
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Training Mode */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Training Mode
                      </label>
                      <select
                        value={formData.trainingMode}
                        onChange={(e) => setFormData({ ...formData, trainingMode: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50 text-slate-700"
                      >
                        <option value="Classroom - Chennai (Adyar / OMR / Tambaram / Navalur / Porur)">
                          Classroom in Chennai (Adyar / OMR / Tambaram / Navalur)
                        </option>
                        <option value="Live Online Interactive (Weekend Batch)">
                          Live Online Interactive (Weekend Batch)
                        </option>
                        <option value="Live Online Interactive (Weekday Batch)">
                          Live Online Interactive (Weekday Batch)
                        </option>
                        <option value="1-on-1 Fast-Track Fast Track Mentorship">
                          1-on-1 Fast-Track Mentorship
                        </option>
                      </select>
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Current Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50 text-slate-700"
                      >
                        <option value="Fresher / College Graduate">Fresher / College Graduate</option>
                        <option value="1 - 3 Years (Junior Tech Role)">1 - 3 Years (Junior Tech Role)</option>
                        <option value="3 - 6 Years (Mid-Level Professional)">3 - 6 Years (Mid-Level Professional)</option>
                        <option value="6+ Years (Senior Engineer / Manager)">6+ Years (Senior Engineer / Manager)</option>
                        <option value="Non-IT / Career Switcher">Non-IT / Career Switcher</option>
                      </select>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0f3d2e] to-[#18533e] hover:from-[#0b2d22] hover:to-[#123e2f] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {submitting ? (
                        <span>Preparing Dossier...</span>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Download Detailed Syllabus (Instant PDF)</span>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-slate-400">
                      🔒 No spam. We respect your privacy. Instant download link provided.
                    </p>

                  </form>
                )}

              </div>

            </div>

            {/* Quick Contact Widget */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-800">Need Immediate Batch Guidance?</span>
              </div>
              <p className="text-xs text-slate-600">
                Speak directly with our senior technical advisors for free 1-on-1 profile evaluation and branch visit slots.
              </p>
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="tel:+918939915577"
                  className="py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center justify-between transition-colors"
                >
                  <span>OMR / Navalur:</span>
                  <span className="font-mono text-emerald-700">+91 89399 15577</span>
                </a>
                <a
                  href="tel:+918939982127"
                  className="py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-between transition-colors"
                >
                  <span>Adyar Branch:</span>
                  <span className="font-mono text-slate-700">+91 89399 82127</span>
                </a>
                <a
                  href="tel:+918939905577"
                  className="py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-between transition-colors"
                >
                  <span>Tambaram Branch:</span>
                  <span className="font-mono text-slate-700">+91 89399 05577</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 4. RELATED CERTIFICATIONS CAROUSEL / GRID                 */}
      {/* ========================================================= */}
      {relatedCerts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="border-t border-slate-200 pt-10 space-y-6">
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
                  Explore Complementary Paths
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f3d2e]">
                  Other In-Demand {cert.category} Certifications
                </h3>
              </div>
              <Link
                to="/certifications"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
              >
                <span>View All 50+</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedCerts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="p-4 space-y-3">
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-emerald-700 uppercase">
                        {rel.level} • {rel.duration.split(' ')[0]} {rel.duration.split(' ')[1]}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 line-clamp-2 mt-0.5">
                        {rel.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <Link
                      to={`/certifications/${rel.id}`}
                      className="w-full py-2 px-3 rounded-xl border border-emerald-300 text-emerald-900 hover:bg-emerald-50 text-xs font-bold text-center block transition-colors"
                    >
                      View Curriculum Overview
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}

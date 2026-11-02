import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  GraduationCap,
  Laptop,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  RotateCcw,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  TrendingUp,
  User,
  Users,
  Video,
  Volume2,
  VolumeX,
  X,
  Zap,
  ArrowRight,
  Flame,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  PLACEMENT_STATS,
  HIRING_PARTNERS,
  VIDEO_TESTIMONIALS,
  REGULAR_TESTIMONIALS,
  CAREER_TRANSITION_MATRIX,
  VideoTestimonial,
  RegularTestimonial
} from '../data/placementsData';
import heroDarkGreenBg from '../assets/courses/hero_dark_green_bg.jpg';

export default function Placements() {
  // GSAP Animation Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Animated Counter Refs
  const statVal0 = useRef<HTMLSpanElement>(null);
  const statVal1 = useRef<HTMLSpanElement>(null);
  const statVal2 = useRef<HTMLSpanElement>(null);
  const statVal3 = useRef<HTMLSpanElement>(null);

  // Active Category & Domain Filters
  const [activeCategory, setActiveCategory] = useState<'all' | 'video' | 'regular'>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active Video Modal State
  const [activeVideoModal, setActiveVideoModal] = useState<VideoTestimonial | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);

  // Quick Report Download State
  const [showReportModal, setShowReportModal] = useState<boolean>(false);
  const [reportName, setReportName] = useState<string>('');
  const [reportPhone, setReportPhone] = useState<string>('');
  const [reportEmail, setReportEmail] = useState<string>('');
  const [reportSubmitted, setReportSubmitted] = useState<boolean>(false);

  // GSAP Entrance & Counter Animation
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Headline and Subtitle Reveal
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 }
      )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      );

      // Numbers Counter Animation
      const targets = [
        { ref: statVal0.current, end: 24500, prefix: '', suffix: '+' },
        { ref: statVal1.current, end: 1400, prefix: '', suffix: '+' },
        { ref: statVal2.current, end: 42, prefix: '₹', suffix: ' LPA' },
        { ref: statVal3.current, end: 8.8, prefix: '₹', suffix: ' LPA' }
      ];

      targets.forEach((t) => {
        if (!t.ref) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: t.end,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => {
            if (t.ref) {
              const displayVal = t.end % 1 === 0 ? Math.floor(obj.val).toLocaleString() : obj.val.toFixed(1);
              t.ref.innerText = `${t.prefix}${displayVal}${t.suffix}`;
            }
          }
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Filtered Testimonials
  const filteredVideos = useMemo(() => {
    return VIDEO_TESTIMONIALS.filter((v) => {
      const matchDomain = selectedDomain === 'all' || v.domain === selectedDomain;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        v.studentName.toLowerCase().includes(q) ||
        v.company.toLowerCase().includes(q) ||
        v.designation.toLowerCase().includes(q) ||
        v.courseTaken.toLowerCase().includes(q) ||
        v.campusBranch.toLowerCase().includes(q);
      return matchDomain && matchSearch;
    });
  }, [selectedDomain, searchQuery]);

  const filteredRegulars = useMemo(() => {
    return REGULAR_TESTIMONIALS.filter((r) => {
      const matchDomain = selectedDomain === 'all' || r.domain === selectedDomain;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        r.studentName.toLowerCase().includes(q) ||
        r.company.toLowerCase().includes(q) ||
        r.designation.toLowerCase().includes(q) ||
        r.courseTaken.toLowerCase().includes(q) ||
        r.campusBranch.toLowerCase().includes(q);
      return matchDomain && matchSearch;
    });
  }, [selectedDomain, searchQuery]);

  // Handle Report Form Submit
  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#86c37c', '#10b981', '#38bdf8', '#fbbf24']
    });
  };

  return (
    <div className="bg-[#fcfdfd] text-[#142621] min-h-screen">
      
      {/* ========================================================= */}
      {/* 1. CINEMATIC HERO: PLACEMENT RECORDS & TRANSFORMATIONS    */}
      {/* ========================================================= */}
      <section
        ref={heroRef}
        className="relative w-full bg-[#04120c] text-white overflow-hidden border-b border-emerald-900/60 select-none pt-12 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
      >
        {/* Background glow layers */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroDarkGreenBg}
            alt="Futuristic Dark Green Background"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-screen scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04120c]/90 via-[#061c13]/60 to-[#04120c]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04120c]/90 via-transparent to-[#04120c]/90" />
          <div className="absolute -top-32 left-1/4 w-[700px] h-[450px] bg-emerald-500/15 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 right-10 w-[600px] h-[500px] bg-sky-500/10 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Elite Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-lg backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#86c37c] animate-pulse" />
            <span>CHENNAI'S NO.1 PLACEMENT ACCELERATOR • 2024–2026 AUDITED REPORT</span>
          </div>

          {/* GSAP Animated Headline */}
          <h1
            ref={headlineRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] text-white max-w-4xl mx-auto mb-4 drop-shadow-2xl"
          >
            From Aspirant to Industry Leader.{' '}
            <span className="bg-gradient-to-r from-[#86c37c] via-[#a3e635] to-[#4ade80] bg-clip-text text-transparent">
              24,500+ Verified Careers
            </span>{' '}
            Launched.
          </h1>

          {/* Subtext */}
          <p
            ref={subtextRef}
            className="text-sm sm:text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            Discover candid video debriefs and verified written reviews from students who pivoted from non-IT backgrounds, fresh college graduation, and career gaps into dream packages across 1,400+ leading tech organizations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="#testimonials-feed"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#142621] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Video className="w-4 h-4" /> Watch Student Video Stories
            </a>

            <button
              onClick={() => {
                setShowReportModal(true);
                setReportSubmitted(false);
              }}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-md flex items-center gap-2 shadow"
            >
              <Download className="w-4 h-4 text-[#86c37c]" /> Download 2026 Placement Report
            </button>
          </div>

          {/* GSAP Dynamic Animated Metrics Strip */}
          <div
            ref={statsContainerRef}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-emerald-500/20 max-w-5xl"
          >
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span ref={statVal0} className="block text-2xl sm:text-3xl lg:text-4xl font-black text-[#86c37c]">
                24,500+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-200/90 block mt-1">
                Alumni Successfully Placed
              </span>
              <span className="text-[11px] text-white/50 hidden sm:block mt-0.5">
                Across 22 Chennai Hubs
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span ref={statVal1} className="block text-2xl sm:text-3xl lg:text-4xl font-black text-[#38bdf8]">
                1,400+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-200/90 block mt-1">
                Active Hiring Partners
              </span>
              <span className="text-[11px] text-white/50 hidden sm:block mt-0.5">
                MNCs, Startups & Global Hubs
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span ref={statVal2} className="block text-2xl sm:text-3xl lg:text-4xl font-black text-amber-300">
                ₹42 LPA
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-200/90 block mt-1">
                Highest CTC Package
              </span>
              <span className="text-[11px] text-white/50 hidden sm:block mt-0.5">
                Cloud & AI Architecture
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span ref={statVal3} className="block text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-400">
                ₹8.8 LPA
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-200/90 block mt-1">
                Average Alumni Salary
              </span>
              <span className="text-[11px] text-white/50 hidden sm:block mt-0.5">
                Across All Core Specializations
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. RECRUITMENT PARTNERS RIBBON / LIVE TICKER              */}
      {/* ========================================================= */}
      <section className="bg-white border-b border-gray-200/80 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            Top IT Companies Actively Recruiting Greens Graduates:
          </span>
          <span className="text-xs font-bold text-emerald-700 hidden sm:inline">
            Over 250+ Drives Conducted Annually
          </span>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-2 scrollbar-none px-4 max-w-7xl mx-auto items-center">
          {HIRING_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50/80 border border-gray-200/80 px-4 py-2.5 rounded-2xl flex-shrink-0 hover:border-emerald-300 transition-colors shadow-2xs"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-6 w-auto max-w-[90px] object-contain grayscale hover:grayscale-0 transition-all"
              />
              <div className="border-l border-gray-200 pl-3 text-left">
                <span className="block text-[11px] font-bold text-gray-900 leading-tight">
                  {partner.hiresLastYear}
                </span>
                <span className="block text-[10px] text-emerald-700 font-semibold">
                  Avg: {partner.avgPackage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. STUDENT TESTIMONIALS SECTION (REGULAR + VIDEO)         */}
      {/* ========================================================= */}
      <section id="testimonials-feed" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        
        {/* Section Heading & Category Filter Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-gray-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Real Voices • Unfiltered Experiences
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#142621] tracking-tight">
              Student Success Stories & Testimonials
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
              Explore in-depth video interview stories and verified written reviews from students across our 22 Chennai campus hubs.
            </p>
          </div>

          {/* TWO PRIMARY TESTIMONIAL CATEGORIES SWITCHER */}
          <div className="flex items-center gap-1.5 bg-gray-100 p-1.5 rounded-2xl border border-gray-200/80 self-start md:self-auto shadow-inner">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'all'
                  ? 'bg-white text-[#142621] shadow-sm font-extrabold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>All Stories</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-900 font-bold">
                {VIDEO_TESTIMONIALS.length + REGULAR_TESTIMONIALS.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('video')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'video'
                  ? 'bg-[#142621] text-white shadow-sm font-extrabold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-[#86c37c]" />
              <span>Video Testimonials</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20 text-white font-bold">
                {VIDEO_TESTIMONIALS.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('regular')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'regular'
                  ? 'bg-[#142621] text-white shadow-sm font-extrabold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#86c37c]" />
              <span>Verified Written Reviews</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20 text-white font-bold">
                {REGULAR_TESTIMONIALS.length}
              </span>
            </button>
          </div>
        </div>

        {/* Secondary Filter & Search Row */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-gray-200/80 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Domain Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto">
            <span className="text-xs font-bold text-gray-500 whitespace-nowrap pl-1 pr-2">Track:</span>
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'programming', label: 'Java & Python Full Stack' },
              { id: 'ai-datascience', label: 'AI & Data Science' },
              { id: 'cloud-devops', label: 'AWS & Cloud DevOps' },
              { id: 'testing-qa', label: 'SDET & Automation' },
              { id: 'data-bi', label: 'Snowflake & Power BI' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDomain(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDomain === tab.id
                    ? 'bg-[#142621] text-white shadow-xs'
                    : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-emerald-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student, role, company..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#86c37c] bg-gray-50/60"
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

        </div>

        {/* ======================================================= */}
        {/* 3A. VIDEO TESTIMONIALS GRID (WHEN ALL OR VIDEO SELECTED) */}
        {/* ======================================================= */}
        {(activeCategory === 'all' || activeCategory === 'video') && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#142621]">
                    Video Interview Debriefs
                  </h3>
                  <p className="text-xs text-gray-500">
                    Watch our graduates talk through their salary hikes, interview rounds, and hands-on preparation.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {filteredVideos.length} Video Interviews
              </span>
            </div>

            {filteredVideos.length === 0 ? (
              <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500">No video testimonials match your search filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                  >
                    {/* Video Player Card Header (Interactive Thumbnail with Pulse Play Button) */}
                    <div
                      onClick={() => setActiveVideoModal(video)}
                      className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
                    >
                      <img
                        src={video.videoThumbnail}
                        alt={video.studentName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                          {video.campusBranch}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow">
                          <Play className="w-2.5 h-2.5 fill-white" />
                          <span>{video.videoDuration}</span>
                        </span>
                      </div>

                      {/* Central Pulsing Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-emerald-500/30 animate-ping absolute inset-0" />
                          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#142621] to-emerald-600 text-white flex items-center justify-center shadow-2xl border-2 border-white/40 group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-white ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Quote Banner */}
                      <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs">
                        <p className="line-clamp-2 text-white/95 font-medium leading-snug drop-shadow-sm">
                          "{video.videoHighlightQuote}"
                        </p>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Student Profile Row */}
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={video.avatar}
                            alt={video.studentName}
                            className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500 shadow-sm"
                          />
                          <div className="min-w-0">
                            <h4 className="font-extrabold text-base text-[#142621] truncate">
                              {video.studentName}
                            </h4>
                            <p className="text-xs text-gray-500 truncate">
                              {video.designation} at <strong className="text-gray-800">{video.company}</strong>
                            </p>
                          </div>
                        </div>

                        {/* Salary Hike Pill */}
                        <div className="mb-3.5 p-3 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-100 flex items-center justify-between text-xs">
                          <div>
                            <span className="text-[10px] text-gray-500 block">Package Transformation:</span>
                            <span className="font-bold text-gray-700">{video.packageBefore}</span>
                            <span className="mx-1 text-emerald-600 font-black">➔</span>
                            <span className="font-extrabold text-emerald-800">{video.packageAfter}</span>
                          </div>
                          <span className="px-2 py-1 rounded-lg bg-emerald-700 text-white text-[10px] font-black shadow-xs">
                            {video.hike}
                          </span>
                        </div>

                        {/* Course & Timeline Details */}
                        <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                          <div className="flex items-center gap-1.5">
                            <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate"><strong>Track:</strong> {video.courseTaken}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span><strong>Cleared:</strong> {video.interviewRounds} Technical Interview Rounds</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Action */}
                      <button
                        type="button"
                        onClick={() => setActiveVideoModal(video)}
                        className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#142621] hover:text-white border border-gray-200 text-xs font-bold text-gray-800 transition-all flex items-center justify-center gap-2 group-hover:bg-[#142621] group-hover:text-white shadow-2xs"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Video Interview & Key Insights</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ======================================================= */}
        {/* 3B. VERIFIED WRITTEN TESTIMONIALS (WHEN ALL OR REGULAR) */}
        {/* ======================================================= */}
        {(activeCategory === 'all' || activeCategory === 'regular') && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#142621]">
                    Verified Alumni Offer Reviews & Transitions
                  </h3>
                  <p className="text-xs text-gray-500">
                    Comprehensive written reviews with verified placement offer credentials and mentors' feedback.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {filteredRegulars.length} Verified Reviews
              </span>
            </div>

            {filteredRegulars.length === 0 ? (
              <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500">No written testimonials match your search filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRegulars.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                  >
                    <div>
                      {/* Top Header: Rating & Verified Offer Badge */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-1 text-amber-500">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-xs font-bold text-gray-700 ml-1">5.0</span>
                        </div>

                        {review.verifiedOffer && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 text-[10px] font-black border border-emerald-300">
                            <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                            <span>VERIFIED OFFER</span>
                          </span>
                        )}
                      </div>

                      {/* Headline */}
                      <h4 className="font-extrabold text-base text-[#142621] mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
                        "{review.headline}"
                      </h4>

                      {/* Review Text */}
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {review.reviewText}
                      </p>

                      {/* Mentors Feedback Highlight Box */}
                      <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 mb-4 text-xs text-emerald-950">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-0.5">
                          Faculty Mentor Note:
                        </span>
                        <p className="text-[11px] text-gray-700 italic">
                          "{review.mentorsFeedback}"
                        </p>
                      </div>

                      {/* Package Hike Summary */}
                      <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 mb-4 flex items-center justify-between text-xs">
                        <div>
                          <span className="text-[10px] text-gray-400 block">Package Growth:</span>
                          <span className="font-semibold text-gray-600">{review.packageBefore}</span>
                          <span className="mx-1 text-emerald-600 font-bold">➔</span>
                          <span className="font-black text-emerald-800">{review.packageAfter}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-[10px] font-bold">
                          {review.hike}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {review.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[10px] font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Review Author Footer */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={review.avatar}
                          alt={review.studentName}
                          className="w-9 h-9 rounded-full object-cover border border-emerald-400"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#142621] leading-tight">
                            {review.studentName}
                          </p>
                          <p className="text-[10px] text-gray-500">
                            {review.designation} • {review.company}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] text-gray-400">
                        {review.campusBranch}
                      </span>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </section>

      {/* ========================================================= */}
      {/* 4. CAREER TRANSITION MATRIX (BEFORE & AFTER IMPACT)       */}
      {/* ========================================================= */}
      <section className="py-16 bg-gradient-to-b from-[#f3f9f5] via-[#f7fbf8] to-[#fcfdfd] border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Proven Career Transitions
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#142621] mt-3 tracking-tight">
              Transforming Profiles Beyond Traditional Limits
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Greens Technologys curriculum is explicitly architected to bridge non-coding backgrounds, college fresher voids, and multi-year career gaps into high-demand product salaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_TRANSITION_MATRIX.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="font-extrabold text-base text-[#142621] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  
                  <div className="space-y-2 text-xs text-gray-600 my-4">
                    <div className="p-2.5 rounded-xl bg-rose-50 text-rose-900 border border-rose-100">
                      <span className="text-[10px] uppercase font-bold text-rose-700 block">Starting As:</span>
                      <span className="font-medium">{item.from}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-950 border border-emerald-200 font-bold">
                      <span className="text-[10px] uppercase font-bold text-emerald-700 block">Placed As:</span>
                      <span className="text-emerald-900">{item.to}</span>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-amber-700 mb-1">
                    {item.avgHike}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    <strong>Recommended:</strong> {item.keyTracks}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between text-xs">
                  <span className="text-gray-400">{item.timeline}</span>
                  <Link
                    to="/courses"
                    className="font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                  >
                    <span>View Tracks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. GREENS 5-STAGE PLACEMENT LAUNCHPAD ACCELERATOR         */}
      {/* ========================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Systematic Placement Process
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#142621] mt-3 tracking-tight">
            Our 5-Stage Placement Acceleration Engine
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Every Greens student undergoes our structured corporate incubation protocol before facing actual enterprise panels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Hands-on Sandbox Labs',
              desc: '5+ Production grade capstone projects hosted live on GitHub and cloud environments.'
            },
            {
              step: '02',
              title: 'ATS Resume Engineering',
              desc: 'Keyword optimization and portfolio structuring verified by Fortune-500 hiring managers.'
            },
            {
              step: '03',
              title: 'Mock Technical Rounds',
              desc: '1-on-1 simulated interviews with senior architects covering system design & live coding.'
            },
            {
              step: '04',
              title: 'Direct Campus Drives',
              desc: 'Unlimited exclusive recruitment drives with Greens 1,400+ authorized hiring partners.'
            },
            {
              step: '05',
              title: 'Offer & Compensation',
              desc: 'Salary negotiation support to maximize package CTC multipliers and joining bonuses.'
            }
          ].map((stage, sIdx) => (
            <div
              key={sIdx}
              className="p-5 rounded-3xl bg-white border border-gray-200 shadow-2xs hover:border-emerald-400 transition-all text-center flex flex-col justify-between"
            >
              <div>
                <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 font-black text-sm flex items-center justify-center mx-auto mb-3 border border-emerald-200">
                  {stage.step}
                </span>
                <h4 className="font-extrabold text-sm text-[#142621] mb-1.5">
                  {stage.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION: REPORT DOWNLOAD & ENROLLMENT           */}
      {/* ========================================================= */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#142621] via-[#1a352c] to-[#0f1f1a] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-emerald-900/40">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#86c37c] text-xs font-black uppercase tracking-wider">
              Take The Next Step Today
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
              Ready to Craft Your High-Package Success Story?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 leading-relaxed">
              Join the next upcoming classroom or live interactive batch across our 22 Chennai hubs. Get complete placement assurance, 1-on-1 mentorship, and corporate interview access.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
              <Link
                to="/courses"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#142621] font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all"
              >
                Explore 100+ Placement Programs
              </Link>

              <button
                onClick={() => {
                  setShowReportModal(true);
                  setReportSubmitted(false);
                }}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
              >
                Request Placement Dossier PDF
              </button>

              <a
                href="https://wa.me/918939915577?text=Hi%20Greens%20Technologies%2C%20I%20am%20looking%20for%20placement%20assistance%20and%20career%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-green-600/80 hover:bg-green-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. INTERACTIVE VIDEO THEATER MODAL                        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b1714] text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-emerald-500/30 flex flex-col max-h-[90vh]"
            >
              {/* Modal Top Bar */}
              <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Alumni Video Testimonial • {activeVideoModal.batchYear}
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated Interactive Video Screen */}
              <div className="relative aspect-[16/9] bg-black overflow-hidden group">
                <img
                  src={activeVideoModal.videoThumbnail}
                  alt={activeVideoModal.studentName}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isVideoPlaying ? 'opacity-90' : 'opacity-60'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Overlaid Animated Transcript Subtitles */}
                <div className="absolute bottom-12 left-6 right-6 text-center">
                  <div className="inline-block px-4 py-2 rounded-xl bg-black/75 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-semibold border border-white/10 shadow-lg">
                    "{activeVideoModal.videoHighlightQuote}"
                  </div>
                </div>

                {/* Player Controls Bar */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black to-transparent flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white"
                    >
                      {isVideoPlaying ? <Play className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => setIsVideoMuted(!isVideoMuted)}
                      className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white"
                    >
                      {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[11px] text-gray-300 font-mono">
                      01:15 / {activeVideoModal.videoDuration}
                    </span>
                  </div>

                  {/* Scrub bar */}
                  <div className="flex-1 mx-4 h-1.5 rounded-full bg-white/20 overflow-hidden">
                    <div className="w-1/3 h-full bg-[#86c37c] rounded-full" />
                  </div>

                  <span className="text-[11px] font-bold text-[#86c37c]">HD 1080p</span>
                </div>
              </div>

              {/* Student Journey Breakdown */}
              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeVideoModal.avatar}
                      alt={activeVideoModal.studentName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {activeVideoModal.studentName}
                      </h4>
                      <p className="text-xs text-emerald-200">
                        {activeVideoModal.designation} • <strong>{activeVideoModal.company}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[10px] text-gray-400 block">Offer Compensation:</span>
                    <span className="text-lg font-black text-amber-300">{activeVideoModal.packageAfter}</span>
                    <span className="text-xs text-emerald-400 font-bold ml-1.5">({activeVideoModal.hike})</span>
                  </div>
                </div>

                <div className="text-xs text-gray-300 leading-relaxed">
                  <p className="font-semibold text-white mb-1">Career Transition Background:</p>
                  <p>{activeVideoModal.detailedStory}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-gray-400 block font-bold">Previous Role:</span>
                    <span className="text-rose-300">{activeVideoModal.previousRole}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-gray-400 block font-bold">Campus Hub:</span>
                    <span className="text-emerald-300">{activeVideoModal.campusBranch}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Studied: <strong className="text-white">{activeVideoModal.courseTaken}</strong>
                  </span>
                  <Link
                    to="/courses"
                    className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all"
                  >
                    Explore This Course Track
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 8. PLACEMENT REPORT DOWNLOAD MODAL                        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {showReportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase">
                    Official 2026 Audit
                  </span>
                  <h3 className="text-base font-bold text-[#142621] mt-1">
                    Download Placement Report
                  </h3>
                </div>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {reportSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#142621]">Dossier Sent!</h4>
                  <p className="text-xs text-gray-600">
                    The 2024–2026 Greens Technologys Master Placement Report has been sent to your mobile & email.
                  </p>
                  <button
                    onClick={() => setShowReportModal(false)}
                    className="mt-2 px-5 py-2 rounded-xl bg-[#142621] text-white text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReportSubmit} className="space-y-3.5">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Includes company-wise salary slabs, batch hiring volumes, and interview question banks:
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={reportName}
                      onChange={(e) => setReportName(e.target.value)}
                      placeholder="e.g. Arun Kumar"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#86c37c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={reportPhone}
                      onChange={(e) => setReportPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#86c37c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={reportEmail}
                      onChange={(e) => setReportEmail(e.target.value)}
                      placeholder="arun@example.com"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#86c37c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#142621] to-[#1c3a31] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    Download Full PDF Dossier
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

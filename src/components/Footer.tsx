import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronUp,
  ChevronDown,
  MessageCircle,
  CheckCircle2,
  Send,
  Building,
  GraduationCap,
  Search,
  Navigation
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import logoWhite from '../assets/logo_white.png';
import './Footer.css';

interface Branch {
  name: string;
  address: string;
  landmark?: string;
  tel: string;
  email?: string;
  zone: 'OMR Corridor' | 'Central & South' | 'West Chennai' | 'North Chennai' | 'GST & Suburbs' | 'Other Cities';
  isHQ?: boolean;
}

const allBranches: Branch[] = [
  {
    name: 'Greens Technology OMR (Head Office)',
    address: '19, Balamurugan Garden, Rajiv Gandhi Salai, Thoraipakkam, Chennai - 600097',
    landmark: 'Opp to Geetham Restaurant',
    tel: '+91-8939982288',
    zone: 'OMR Corridor',
    isHQ: true,
  },
  {
    name: 'Greens Technology Adyar',
    address: '11 First Street, Padmanabha Nagar, Adyar, Chennai - 600020',
    tel: '+91-8939982127',
    email: 'contact@greenstechnologys.com',
    zone: 'Central & South',
  },
  {
    name: 'Greens Technology Velachery',
    address: '51-A, 2nd Floor, Velachery Road, Dhandeeswaram Nagar, Velachery, Chennai - 600042',
    tel: '+91-9150059983',
    zone: 'Central & South',
  },
  {
    name: 'Greens Technology Tambaram (Sanatorium)',
    address: 'No.1, Appa Rao Colony, Tambaram Sanatorium, Chennai - 600047',
    landmark: 'Opp to Sri Rama Anjaneyar Temple, Near HP Bunk',
    tel: '+91-8939905577',
    zone: 'GST & Suburbs',
  },
  {
    name: 'Greens Technology West Tambaram',
    address: 'No. 05, Bakthavachalam Street, West Tambaram, Chennai - 600045',
    tel: '+91-8939905577',
    zone: 'GST & Suburbs',
  },
  {
    name: 'Greens Technologies Navalur',
    address: 'No: 12, Rajiv Gandhi Salai (OMR), Egattur Village, Navalur (Just Before Navalur Tollgate), Chennai - 600035',
    tel: '+91-8939915577',
    zone: 'OMR Corridor',
  },
  {
    name: 'Greens Technology Perumbakkam',
    address: '1st Floor, Plot No. 19 & 20, American Advent Christian Layout, Sholinganallur to Medavakkam Main Rd, Chennai - 600100',
    landmark: 'Next to OMR Food Street',
    tel: '+91-8939915577',
    zone: 'OMR Corridor',
  },
  {
    name: 'Greens Technology Anna Nagar',
    address: 'Ground Floor, New No. W125, Old No. W42, 3rd Avenue, W Block, Anna Nagar, Chennai - 600040',
    landmark: 'Near Parambriym Hotel & Opp HP Petrol Bunk',
    tel: '+91-8939982022',
    zone: 'North Chennai',
  },
  {
    name: 'Greens Technologies Porur',
    address: '149, 1C/1D, 1st Floor, Ramapuram, Chennai - 600089',
    landmark: 'Opp to DLF IT Park',
    tel: '+91-8939915572',
    zone: 'West Chennai',
  },
  {
    name: 'Greens Technology Vadapalani',
    address: '79, 100 Feet Rd, Thiru Nagar Colony, NGO Colony, Vadapalani, Chennai - 600026',
    tel: '+91-8939915572',
    zone: 'Central & South',
  },
  {
    name: 'Greens Technologys T Nagar',
    address: '160, North Usman Road, T Nagar, Chennai - 600017',
    tel: '+91-8939915577',
    zone: 'Central & South',
  },
  {
    name: 'Greens Technologys Mount Road',
    address: '162, 2nd Floor, Anna Salai, Express Estate, Triplicane, Chennai - 600002',
    tel: '+91-8939915572',
    zone: 'Central & South',
  },
  {
    name: 'Greens Technologys Avadi',
    address: 'New No. 398, Old No. 577, CTH Road, Avadi Checkpost, Avadi, Chennai - 600054',
    landmark: 'Near GRT Jewellers',
    tel: '+91-8939915572',
    zone: 'West Chennai',
  },
  {
    name: 'Greens Technologys Ambattur',
    address: '3rd Floor, No. 27/A, North Park Street, Secretariat Colony, Venkatapuram, Ambattur, Chennai - 600053',
    tel: '+91-8939915572',
    zone: 'West Chennai',
  },
  {
    name: 'Greens Technologys Mugalivakkam',
    address: 'No: 01, Adithi Colony, Mugalivakkam Main Road, Mugalivakkam, Porur, Chennai - 600116',
    tel: '+91-8939915572',
    zone: 'West Chennai',
  },
  {
    name: 'Greens Technologys Poonamallee',
    address: 'Om Sakthi Plaza, 1st Floor, Old No 1, New No 126, Avadi Road, Karayanchavadi, Poonamallee, Chennai - 600056',
    tel: '+91-8939982022',
    zone: 'West Chennai',
  },
  {
    name: 'Greens Technologys Kolathur',
    address: 'No: 7, 2nd Floor, Perambur Paper Mills Road, Kolathur, Chennai - 600099',
    landmark: 'Near Everwin Vidhyashram, Above Axis Bank',
    tel: '+91-8939915577',
    zone: 'North Chennai',
  },
  {
    name: 'Greens Technologys Tiruvottriyur',
    address: 'No. 1050, 2nd Floor, Tiruvottiyur High Road Thangal, Kaladipet, Chennai - 600019',
    landmark: 'Above KFC, Near Kaladipet Metro',
    tel: '+91-8939915577',
    zone: 'North Chennai',
  },
  {
    name: 'Greens Technologys Gowriwakkam',
    address: 'No. 280 K, Saranya Complex, Velachery Rd, Gowriwakkam, Sembakkam, Chennai - 600073',
    tel: '+91-8939905577',
    zone: 'GST & Suburbs',
  },
  {
    name: 'Greens Technologys Guduvancheri',
    address: '162, Grand Southern Trunk Rd, Nandivaram, Guduvancheri - 603202',
    landmark: 'Near Guduvancheri Railway Station',
    tel: '+91-8939905577',
    zone: 'GST & Suburbs',
  },
  {
    name: 'Greens Technologys Trichy',
    address: '75/E-3, Sri Krishna Enclave, 2nd Floor, Salai Road, Thillai Nagar, Tiruchirappalli - 620018',
    landmark: 'Next to Kannappa Hotel',
    tel: '+91-8939915577',
    zone: 'Other Cities',
  },
  {
    name: 'Greens Technologys Salem',
    address: '2nd Floor, Sri Sai Kamatchi Complex, Vincent, Salem - 636007',
    landmark: 'Opp to Government Arts College',
    tel: '+91-8939902300',
    zone: 'Other Cities',
  },
];

const zones = [
  'All Branches (22)',
  'OMR Corridor',
  'Central & South',
  'West Chennai',
  'North Chennai',
  'GST & Suburbs',
  'Other Cities',
] as const;

const flagshipCourses = [
  { name: 'Java Full Stack with Gen AI', tag: 'Trending' },
  { name: 'Python Full Stack & AI', tag: 'Hot' },
  { name: 'Generative AI & Data Science', tag: 'New' },
  { name: 'DevOps, SRE & Multi-Cloud', tag: 'Popular' },
  { name: 'SDET & Automation Testing', tag: 'Core' },
  { name: 'N8N Workflow Automation', tag: 'Agentic' },
  { name: 'Forward Deployed Engineering', tag: 'Elite' },
];

const studentLinks = [
  { label: 'About Greens Academy', to: '/about-us' },
  { label: 'Placement Records & Drives', to: '/placements' },
  { label: 'Explore All Courses', to: '/courses' },
  { label: 'Master Certification Tracks', to: '/certifications' },
  { label: 'Hostel & Lab Facilities', to: '/hostel-facilities' },
  { label: 'Corporate Tech Training', to: '/about-us' },
  { label: 'Careers at Greens', to: '/careers' },
];

const socialProfiles = [
  { icon: faLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
  { icon: faYoutube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-[#ff0000]' },
  { icon: faInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-[#e1306c]' },
  { icon: faFacebookF, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-[#1877f2]' },
  { icon: faXTwitter, href: 'https://x.com', label: 'X (formerly Twitter)', color: 'hover:bg-[#000000] hover:text-white' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedZone, setSelectedZone] = useState<string>('All Branches (22)');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered branches based on active zone tab and search query
  const filteredBranches = useMemo(() => {
    return allBranches.filter((branch) => {
      const matchesZone =
        selectedZone === 'All Branches (22)' || branch.zone === selectedZone;
      const matchesQuery =
        searchQuery.trim() === '' ||
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (branch.landmark && branch.landmark.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesZone && matchesQuery;
    });
  }, [selectedZone, searchQuery]);

  // If collapsed and "All Branches (22)" is active with no search query, show top 8, else show all matching
  const displayedBranches = useMemo(() => {
    if (!isExpanded && selectedZone === 'All Branches (22)' && searchQuery.trim() === '') {
      return filteredBranches.slice(0, 8);
    }
    return filteredBranches;
  }, [filteredBranches, isExpanded, selectedZone, searchQuery]);

  return (
    <footer className="relative bg-[#05110f] text-slate-300 font-sans border-t border-emerald-500/20 overflow-hidden">
      {/* Ambient Aurora Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-emerald-500/10 blur-[100px] pointer-events-none" />

      {/* 1. TOP VALUE METRICS STRIP */}
      <div className="border-b border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-white">15+ Years</div>
                <div className="text-xs text-slate-400">Pioneer in Tech Upskilling</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-white">50,000+ Alumni</div>
                <div className="text-xs text-slate-400">Placed in Global MNCs</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-white">22 Campuses</div>
                <div className="text-xs text-slate-400">Chennai & Regional Centers</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-white">100% Placement Call</div>
                <div className="text-xs text-slate-400">Dedicated Job Assurance Cell</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN 4-COLUMN COMPREHENSIVE FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Bio & Accreditations (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group">
              <img
                src={logoWhite}
                alt="Greens Technologys"
                className="h-11 sm:h-12 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Greens Technologys is Chennai’s #1 Leading Software & Tech Career Transition Academy with 22 state-of-the-art training centers across Tamil Nadu.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-medium text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ISO 9001:2015 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-medium text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                NASSCOM Aligned
              </span>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Connect With Us
              </div>
              <div className="flex items-center gap-2">
                {socialProfiles.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-200 hover:text-white hover:border-transparent ${s.color} hover:scale-110`}
                  >
                    <FontAwesomeIcon icon={s.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Flagship Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Flagship Tracks
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {flagshipCourses.map((course, idx) => (
                <li key={idx}>
                  <Link
                    to="/courses"
                    className="group flex items-center justify-between text-slate-300 hover:text-emerald-300 transition-colors py-0.5"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {course.name}
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                      {course.tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Explore Academy
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {studentLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="inline-block text-slate-300 hover:text-emerald-300 transition-colors hover:translate-x-1 transform duration-150 py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Official Central Helpline
            </h4>

            {/* Quick Contact Links */}
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="tel:+918939915577"
                className="flex items-start gap-2.5 text-slate-300 hover:text-white group transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">+91 89399 15577 / +91 89399 82288</div>
                  <div className="text-[11px] text-slate-400">Head Office Admissions & Counseling</div>
                </div>
              </a>

              <a
                href="https://wa.me/918939915577?text=Hi%20Greens%20Technologies,%20I%20would%20like%20to%20know%20more%20about%20your%20training%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 hover:text-white group transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">+91 89399 15577 (WhatsApp)</div>
                  <div className="text-[11px] text-slate-400">Instant Demo Booking & Syllabus PDF</div>
                </div>
              </a>

              <a
                href="mailto:contact@greenstechnologys.com"
                className="flex items-start gap-2.5 text-slate-300 hover:text-white group transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">contact@greenstechnologys.com</div>
                  <div className="text-[11px] text-slate-400">Corporate & General Enquiries</div>
                </div>
              </a>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-300 mb-1.5">
                Join 25,000+ Tech Newsletter Readers
              </div>
              <p className="text-[11px] text-slate-400 mb-2.5">
                Get weekly placement alerts, tech cheat-sheets, and upcoming batch dates.
              </p>

              {subscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Subscribed! Check your inbox soon 🚀</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-3.5 pr-11 py-2.5 text-xs rounded-xl bg-white/[0.07] border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 p-1.5 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* 3. COMPREHENSIVE 22 BRANCHES EXPLORER (HIGH TRUST & CONVERSION) */}
      <div className="border-t border-white/[0.08] bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Header Row: Title + Search input */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Navigation className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Our Extensive Network
                </span>
              </div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>All 22 Training Centers & Campuses</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-semibold">
                  Chennai • Trichy • Salem
                </span>
              </h3>
            </div>

            {/* Quick Filter Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search branch or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => {
                  setSelectedZone(zone);
                  setIsExpanded(true);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedZone === zone
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'bg-white/[0.05] text-slate-300 hover:bg-white/10 hover:text-white border border-white/[0.08]'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>

          {/* Responsive Branches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedBranches.map((branch, idx) => (
              <div
                key={idx}
                className={`relative p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  branch.isHQ
                    ? 'bg-emerald-950/30 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                    : 'bg-white/[0.03] border-white/[0.08] hover:border-emerald-500/30 hover:bg-white/[0.05]'
                }`}
              >
                {branch.isHQ && (
                  <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    Head Office
                  </span>
                )}

                <div>
                  <div className="flex items-start gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {branch.name}
                    </h4>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed mb-2 pl-6">
                    {branch.address}
                  </p>

                  {branch.landmark && (
                    <div className="text-[10px] text-amber-300/90 font-medium pl-6 mb-2">
                      📍 {branch.landmark}
                    </div>
                  )}
                </div>

                {/* Branch Contact Details */}
                <div className="pt-2.5 border-t border-white/[0.06] mt-2 flex items-center justify-between pl-6 text-[11px]">
                  <a
                    href={`tel:${branch.tel.replace(/[^0-9+]/g, '')}`}
                    className="font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{branch.tel}</span>
                  </a>

                  <a
                    href={`https://wa.me/918939915577?text=${encodeURIComponent(
                      `Hi Greens Technologies, I am interested in joining a course at your ${branch.name} branch.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Enquire on WhatsApp"
                    className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Button when viewing all branches */}
          {selectedZone === 'All Branches (22)' && searchQuery.trim() === '' && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/15 text-white text-xs font-bold transition-all cursor-pointer group"
              >
                <span>
                  {isExpanded
                    ? 'Show Fewer Branches'
                    : `View All 22 Branches Across Chennai & Tamil Nadu (${allBranches.length})`}
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>
            </div>
          )}

        </div>
      </div>

      {/* 4. FOOTER BOTTOM: LEGAL, COPYRIGHT & BACK TO TOP */}
      <div className="border-t border-white/[0.08] bg-[#030908]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 Greens Technologys. All rights reserved. | 22 Campuses Across Tamil Nadu.
            </div>

            <div className="flex items-center gap-6">
              <Link to="/about-us" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about-us" className="hover:text-emerald-400 transition-colors">
                Terms of Training
              </Link>
              <Link to="/contact-us" className="hover:text-emerald-400 transition-colors">
                Sitemap
              </Link>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-emerald-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all cursor-pointer group"
              >
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

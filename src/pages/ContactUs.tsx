import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  MapPin,
  Phone,
  Mail,
  Search,
  Navigation,
  Compass,
  Clock,
  Building2,
  Sparkles,
  Send,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  Layers,
  Filter,
  Globe,
  Calendar,
  ChevronRight,
  Check,
  Maximize2,
  Car,
  Train,
  Laptop,
  Headphones,
  ArrowUpRight,
  ShieldCheck,
  Award,
  HelpCircle,
  X,
  RotateCcw
} from 'lucide-react';

export interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  area: string;
  address: string;
  landmark?: string;
  tel: string;
  secondaryTel?: string;
  email: string;
  zone: 'OMR Corridor' | 'Central & South' | 'West Chennai' | 'North Chennai' | 'GST & Suburbs' | 'Other Cities';
  isHQ?: boolean;
  metroNear?: string;
  busNear?: string;
  features: string[];
  mapQuery: string;
}

export const ALL_22_BRANCHES: BranchInfo[] = [
  {
    id: 'omr-hq',
    name: 'Greens Technology OMR (Head Office & Corporate Hub)',
    shortName: 'OMR Thoraipakkam (HQ)',
    area: 'Thoraipakkam, OMR',
    address: '19, Balamurugan Garden, Rajiv Gandhi Salai, Thoraipakkam, Chennai - 600097',
    landmark: 'Opposite to Geetham Restaurant & Next to Shell Petrol Bunk',
    tel: '+91 89399 82288',
    secondaryTel: '+91 89399 15577',
    email: 'contact@greenstechnologys.com',
    zone: 'OMR Corridor',
    isHQ: true,
    metroNear: 'Upcoming Metro Phase 2 OMR line / Sholinganallur Junction',
    busNear: 'Thoraipakkam Bus Stop (1 min walk)',
    features: ['Headquarters & Executive Labs', 'Placement Assessment Hub', 'Dedicated 24/7 Lab Mentors', 'Car & Bike Parking'],
    mapQuery: 'Greens Technology OMR Thoraipakkam Chennai'
  },
  {
    id: 'adyar',
    name: 'Greens Technology Adyar Main Branch',
    shortName: 'Adyar',
    area: 'Padmanabha Nagar, Adyar',
    address: '11, First Street, Padmanabha Nagar, Adyar, Chennai - 600020',
    landmark: 'Near Adyar Bus Depot & Walking distance to Madhya Kailash MRTS',
    tel: '+91 89399 82127',
    secondaryTel: '+91 89399 15577',
    email: 'adyar@greenstechnologys.com',
    zone: 'Central & South',
    metroNear: 'Madhya Kailash MRTS Station (3 mins walk)',
    busNear: 'Adyar Bus Depot (2 mins walk)',
    features: ['High-Tech Mac & Windows Labs', 'Hostel Facility Adjacent', 'Corporate Training Wings', 'Two-Wheeler Parking'],
    mapQuery: 'Greens Technology Adyar Chennai'
  },
  {
    id: 'velachery',
    name: 'Greens Technology Velachery Hub',
    shortName: 'Velachery',
    area: 'Dhandeeswaram Nagar, Velachery',
    address: '51-A, 2nd Floor, Velachery Road, Dhandeeswaram Nagar, Velachery, Chennai - 600042',
    landmark: 'Near Dhandeeswaram Bus Stand & Close to Phoenix Marketcity',
    tel: '+91 91500 59983',
    secondaryTel: '+91 89399 15577',
    email: 'velachery@greenstechnologys.com',
    zone: 'Central & South',
    metroNear: 'Velachery MRTS Railway Station (5 mins walk)',
    busNear: 'Dhandeeswaram Bus Stop (Right outside)',
    features: ['Full Stack Cloud Labs', 'Mock Interview Rooms', 'High-Speed Wi-Fi', 'Library & Reading Zone'],
    mapQuery: 'Greens Technology Velachery Chennai'
  },
  {
    id: 'tambaram-sanatorium',
    name: 'Greens Technology Tambaram Sanatorium',
    shortName: 'Tambaram Sanatorium',
    area: 'Tambaram Sanatorium, GST Road',
    address: 'No.1, Appa Rao Colony, Tambaram Sanatorium, Chennai - 600047',
    landmark: 'Opp to Sri Rama Anjaneyar Temple, Near HP Petrol Bunk',
    tel: '+91 89399 05577',
    secondaryTel: '+91 89399 15577',
    email: 'tambaram@greenstechnologys.com',
    zone: 'GST & Suburbs',
    metroNear: 'Tambaram Sanatorium Railway Station (3 mins walk)',
    busNear: 'Sanatorium Bus Stop',
    features: ['GST Corridor Center', 'Testing & DevOps Lab', 'Flexible Weekend Batches', 'Spacious Classrooms'],
    mapQuery: 'Greens Technology Tambaram Sanatorium Chennai'
  },
  {
    id: 'west-tambaram',
    name: 'Greens Technology West Tambaram',
    shortName: 'West Tambaram',
    area: 'West Tambaram',
    address: 'No. 05, Bakthavachalam Street, West Tambaram, Chennai - 600045',
    landmark: 'Near Tambaram Market & Hindu Mission Hospital',
    tel: '+91 89399 05577',
    secondaryTel: '+91 91500 59983',
    email: 'tambaram.west@greenstechnologys.com',
    zone: 'GST & Suburbs',
    metroNear: 'Tambaram Railway Station (5 mins walk)',
    busNear: 'Tambaram West Bus Terminus',
    features: ['Python & AI Labs', 'Dedicated Mentorship Desk', 'Career Guidance Center', 'Air-Conditioned Labs'],
    mapQuery: 'Greens Technology West Tambaram Chennai'
  },
  {
    id: 'navalur',
    name: 'Greens Technologies Navalur (OMR IT Expressway)',
    shortName: 'Navalur (OMR)',
    area: 'Egattur, Navalur',
    address: 'No: 12, Rajiv Gandhi Salai (OMR), Egattur Village, Navalur (Just Before Navalur Tollgate), Chennai - 600035',
    landmark: 'Adjacent to Marina Mall & Opposite TCS Siruseri Gateway',
    tel: '+91 89399 15577',
    secondaryTel: '+91 89399 82288',
    email: 'navalur@greenstechnologys.com',
    zone: 'OMR Corridor',
    metroNear: 'Siruseri SIPCOT IT Corridor',
    busNear: 'Navalur Toll Bus Stop',
    features: ['Close to SIPCOT IT Techies', 'Evening Batches for Corporates', 'AI & Data Science Labs', 'Ample Parking'],
    mapQuery: 'Greens Technologies Navalur OMR Chennai'
  },
  {
    id: 'perumbakkam',
    name: 'Greens Technology Perumbakkam / Sholinganallur',
    shortName: 'Perumbakkam',
    area: 'Sholinganallur - Medavakkam Main Road',
    address: '1st Floor, Plot No. 19 & 20, American Advent Christian Layout, Sholinganallur to Medavakkam Main Rd, Chennai - 600100',
    landmark: 'Next to OMR Food Street & Near Global Hospital',
    tel: '+91 89399 15577',
    secondaryTel: '+91 89399 82288',
    email: 'perumbakkam@greenstechnologys.com',
    zone: 'OMR Corridor',
    metroNear: 'Sholinganallur Junction',
    busNear: 'Perumbakkam Bus Stop',
    features: ['Specialized GenAI Workstations', 'Modern Infrastructure', 'Project Guidance Desk', 'High-Speed Fiber'],
    mapQuery: 'Greens Technology Perumbakkam Chennai'
  },
  {
    id: 'anna-nagar',
    name: 'Greens Technology Anna Nagar',
    shortName: 'Anna Nagar',
    area: '3rd Avenue, W Block, Anna Nagar',
    address: 'Ground Floor, New No. W125, Old No. W42, 3rd Avenue, W Block, Anna Nagar, Chennai - 600040',
    landmark: 'Near Parambriym Hotel & Opposite HP Petrol Bunk',
    tel: '+91 89399 82022',
    secondaryTel: '+91 89399 15577',
    email: 'annanagar@greenstechnologys.com',
    zone: 'North Chennai',
    metroNear: 'Anna Nagar Tower Metro / Roundtana Metro (5 mins walk)',
    busNear: 'Anna Nagar West Depot / Roundtana',
    features: ['Metro-Connected Hub', 'High-End Multimedia Classroom', '1-on-1 Doubt Clarification', 'Placement Drives'],
    mapQuery: 'Greens Technology Anna Nagar Chennai'
  },
  {
    id: 'porur',
    name: 'Greens Technologies Porur (Opp. DLF IT Park)',
    shortName: 'Porur (DLF)',
    area: 'Ramapuram, Porur',
    address: '149, 1C/1D, 1st Floor, Mount Poonamallee Road, Ramapuram, Chennai - 600089',
    landmark: 'Directly Opposite to DLF IT Park & L&T Infotech',
    tel: '+91 89399 15572',
    secondaryTel: '+91 89399 15577',
    email: 'porur@greenstechnologys.com',
    zone: 'West Chennai',
    metroNear: 'Upcoming Porur Junction Metro Station',
    busNear: 'DLF IT Park Bus Stop (Right opposite)',
    features: ['Adjacent to Major IT Parks', 'Corporate Upskilling Hub', 'Hands-on Coding Labs', '2 Wheeler & 4 Wheeler Space'],
    mapQuery: 'Greens Technologies Porur DLF Ramapuram Chennai'
  },
  {
    id: 'vadapalani',
    name: 'Greens Technology Vadapalani',
    shortName: 'Vadapalani',
    area: '100 Feet Road, Vadapalani',
    address: '79, 100 Feet Rd, Thiru Nagar Colony, NGO Colony, Vadapalani, Chennai - 600026',
    landmark: 'Opposite to Vadapalani Metro Station & Near Forum Vijaya Mall',
    tel: '+91 89399 15572',
    secondaryTel: '+91 89399 82127',
    email: 'vadapalani@greenstechnologys.com',
    zone: 'Central & South',
    metroNear: 'Vadapalani Metro Station (2 mins walk)',
    busNear: 'Vadapalani Bus Terminus (3 mins walk)',
    features: ['Direct Metro Access', 'Full Stack Development Center', 'Interview Readiness Program', 'Interactive Whiteboards'],
    mapQuery: 'Greens Technology Vadapalani Chennai'
  },
  {
    id: 'tnagar',
    name: 'Greens Technologys T. Nagar',
    shortName: 'T. Nagar',
    area: 'North Usman Road, T. Nagar',
    address: '160, North Usman Road, T. Nagar, Chennai - 600017',
    landmark: 'Near Panagal Park & Above Standard Chartered Bank',
    tel: '+91 89399 15577',
    secondaryTel: '+91 89399 82288',
    email: 'tnagar@greenstechnologys.com',
    zone: 'Central & South',
    metroNear: 'Teynampet Metro / AG-DMS Metro Station',
    busNear: 'T Nagar Bus Depot / Panagal Park',
    features: ['Central City Landmark', 'Weekend Fast-Track Courses', 'Dedicated Lab Mentors', 'Corporate Meeting Rooms'],
    mapQuery: 'Greens Technologys North Usman Road T Nagar Chennai'
  },
  {
    id: 'mount-road',
    name: 'Greens Technologys Mount Road (Anna Salai)',
    shortName: 'Mount Road',
    area: 'Anna Salai, Triplicane',
    address: '162, 2nd Floor, Anna Salai, Express Estate, Triplicane, Chennai - 600002',
    landmark: 'Near Express Avenue Mall & LIC Metro Station',
    tel: '+91 89399 15572',
    secondaryTel: '+91 89399 15577',
    email: 'mountroad@greenstechnologys.com',
    zone: 'Central & South',
    metroNear: 'LIC Metro Station & Thousand Lights Metro (3 mins walk)',
    busNear: 'Express Avenue / Spencers Bus Stop',
    features: ['Prime CBD Location', 'Direct Metro Connectivity', 'Enterprise Training Suites', 'Executive Counseling'],
    mapQuery: 'Greens Technologys Anna Salai Mount Road Chennai'
  },
  {
    id: 'avadi',
    name: 'Greens Technologys Avadi Checkpost',
    shortName: 'Avadi',
    area: 'CTH Road, Avadi',
    address: 'New No. 398, Old No. 577, CTH Road, Avadi Checkpost, Avadi, Chennai - 600054',
    landmark: 'Near GRT Jewellers & Avadi Police Checkpost',
    tel: '+91 89399 15572',
    secondaryTel: '+91 89399 92288',
    email: 'avadi@greenstechnologys.com',
    zone: 'West Chennai',
    metroNear: 'Avadi Railway Station (5 mins walk)',
    busNear: 'Avadi Checkpost Bus Stop',
    features: ['West Chennai Tech Hub', 'Engineering Student Labs', '100% Practical Training', 'Flexible Timings'],
    mapQuery: 'Greens Technologys Avadi Checkpost CTH Road Chennai'
  },
  {
    id: 'ambattur',
    name: 'Greens Technologys Ambattur',
    shortName: 'Ambattur',
    area: 'North Park Street, Venkatapuram',
    address: '3rd Floor, No. 27/A, North Park Street, Secretariat Colony, Venkatapuram, Ambattur, Chennai - 600053',
    landmark: 'Near Ambattur OT Bus Stand & TI Cycles',
    tel: '+91 89399 15572',
    secondaryTel: '+91 89399 82022',
    email: 'ambattur@greenstechnologys.com',
    zone: 'West Chennai',
    metroNear: 'Ambattur Railway Station',
    busNear: 'Ambattur OT Bus Stand (2 mins walk)',
    features: ['Serving Ambattur Industrial Techies', 'Python, Java & QA Center', 'Modern Lab Systems', 'Weekend Batches'],
    mapQuery: 'Greens Technologys Ambattur North Park Street Chennai'
  },
  {
    id: 'mugalivakkam',
    name: 'Greens Technologys Mugalivakkam / Manapakkam',
    shortName: 'Mugalivakkam',
    area: 'Mugalivakkam Main Road',
    address: 'No: 01, Adithi Colony, Mugalivakkam Main Road, Mugalivakkam, Porur, Chennai - 600116',
    landmark: 'Near L&T Tech Park & Mugalivakkam Junction',
    tel: '+91 89399 15572',
    secondaryTel: '+91 89399 15577',
    email: 'mugalivakkam@greenstechnologys.com',
    zone: 'West Chennai',
    metroNear: 'Upcoming Manapakkam Metro Station',
    busNear: 'Mugalivakkam Bus Stop',
    features: ['Serving Manapakkam & Porur IT', 'High-Speed Wi-Fi', 'DevOps & SRE Practice Hub', 'Comfortable Classrooms'],
    mapQuery: 'Greens Technologys Mugalivakkam Porur Chennai'
  },
  {
    id: 'poonamallee',
    name: 'Greens Technologys Poonamallee',
    shortName: 'Poonamallee',
    area: 'Avadi Road, Karayanchavadi',
    address: 'Om Sakthi Plaza, 1st Floor, Old No 1, New No 126, Avadi Road, Karayanchavadi, Poonamallee, Chennai - 600056',
    landmark: 'Near Karayanchavadi Signal & Kumananchavadi Junction',
    tel: '+91 89399 82022',
    secondaryTel: '+91 89399 15577',
    email: 'poonamallee@greenstechnologys.com',
    zone: 'West Chennai',
    metroNear: 'Upcoming Poonamallee Bypass Metro Terminal',
    busNear: 'Karayanchavadi Bus Stop',
    features: ['Gateway for Western Colleges', 'Full Software Stack Training', 'Career Placement Guidance', 'AC Classrooms'],
    mapQuery: 'Greens Technologys Poonamallee Karayanchavadi Chennai'
  },
  {
    id: 'kolathur',
    name: 'Greens Technologys Kolathur',
    shortName: 'Kolathur',
    area: 'Perambur Paper Mills Road',
    address: 'No: 7, 2nd Floor, Perambur Paper Mills Road, Kolathur, Chennai - 600099',
    landmark: 'Near Everwin Vidhyashram, Above Axis Bank',
    tel: '+91 89399 15577',
    secondaryTel: '+91 89399 82022',
    email: 'kolathur@greenstechnologys.com',
    zone: 'North Chennai',
    metroNear: 'Perambur Railway Station / Retteri Junction',
    busNear: 'Kolathur Axis Bank Bus Stop',
    features: ['North Chennai Tech Center', 'Real-Time Project Labs', 'Soft Skills & Interview Prep', 'Free Counseling'],
    mapQuery: 'Greens Technologys Kolathur Perambur Paper Mills Road Chennai'
  },
  {
    id: 'tiruvottriyur',
    name: 'Greens Technologys Tiruvottriyur',
    shortName: 'Tiruvottriyur',
    area: 'Kaladipet, Tiruvottiyur High Road',
    address: 'No. 1050, 2nd Floor, Tiruvottiyur High Road Thangal, Kaladipet, Chennai - 600019',
    landmark: 'Above KFC, Just Opposite Kaladipet Metro Station',
    tel: '+91 89399 15577',
    secondaryTel: '+91 89399 82022',
    email: 'tiruvottriyur@greenstechnologys.com',
    zone: 'North Chennai',
    metroNear: 'Kaladipet Metro Station (1 min walk, directly opposite)',
    busNear: 'Thangal / Kaladipet Bus Stop',
    features: ['Direct Metro Frontage', 'Coastal Chennai Tech Hub', 'Live Project Training', 'Placement Cell'],
    mapQuery: 'Greens Technologys Tiruvottiyur Kaladipet Chennai'
  },
  {
    id: 'gowriwakkam',
    name: 'Greens Technologys Gowriwakkam / Medavakkam',
    shortName: 'Gowriwakkam',
    area: 'Velachery Main Road, Sembakkam',
    address: 'No. 280 K, Saranya Complex, Velachery Rd, Gowriwakkam, Sembakkam, Chennai - 600073',
    landmark: 'Near Medavakkam Junction & Camp Road Tambaram',
    tel: '+91 89399 05577',
    secondaryTel: '+91 89399 15577',
    email: 'gowriwakkam@greenstechnologys.com',
    zone: 'GST & Suburbs',
    metroNear: 'Medavakkam Koot Road',
    busNear: 'Gowriwakkam Bus Stop',
    features: ['Between Velachery & Tambaram', 'Interactive Coding Labs', 'Flexible Morning/Evening Batches', 'Parking Space'],
    mapQuery: 'Greens Technologys Gowriwakkam Sembakkam Chennai'
  },
  {
    id: 'guduvancheri',
    name: 'Greens Technologys Guduvancheri (GST Corridor)',
    shortName: 'Guduvancheri',
    area: 'Grand Southern Trunk (GST) Road',
    address: '162, Grand Southern Trunk Rd, Nandivaram, Guduvancheri - 603202',
    landmark: 'Near Guduvancheri Railway Station & SRM University Tech Park',
    tel: '+91 89399 05577',
    secondaryTel: '+91 89399 15577',
    email: 'guduvancheri@greenstechnologys.com',
    zone: 'GST & Suburbs',
    metroNear: 'Guduvancheri Railway Station (2 mins walk)',
    busNear: 'Guduvancheri Bus Stand',
    features: ['Near SRM University & Mahindra World City', 'Automotive IT & Full Stack', 'Career Placement Tie-ups', 'Spacious Labs'],
    mapQuery: 'Greens Technologys Guduvancheri GST Road Chennai'
  },
  {
    id: 'trichy',
    name: 'Greens Technologys Trichy Campus',
    shortName: 'Trichy (Thillai Nagar)',
    area: 'Salai Road, Thillai Nagar',
    address: '75/E-3, Sri Krishna Enclave, 2nd Floor, Salai Road, Thillai Nagar, Tiruchirappalli - 620018',
    landmark: 'Next to Kannappa Hotel & Near Thillai Nagar 11th Cross',
    tel: '+91 89399 15577',
    secondaryTel: '+91 89399 82288',
    email: 'trichy@greenstechnologys.com',
    zone: 'Other Cities',
    metroNear: 'Trichy Junction Railway Station (10 mins drive)',
    busNear: 'Thillai Nagar Bus Stop',
    features: ['Central Tamil Nadu Premier Tech Hub', 'Chennai Placements Directly Available', 'State-of-the-Art Labs', 'Free Hostel Assistance'],
    mapQuery: 'Greens Technologys Thillai Nagar Trichy'
  },
  {
    id: 'salem',
    name: 'Greens Technologys Salem Campus',
    shortName: 'Salem (Vincent)',
    area: 'Vincent, Cherry Road',
    address: '2nd Floor, Sri Sai Kamatchi Complex, Vincent, Salem - 636007',
    landmark: 'Opposite to Government Arts College & Near Vincent Bus Stop',
    tel: '+91 89399 02300',
    secondaryTel: '+91 89399 15577',
    email: 'salem@greenstechnologys.com',
    zone: 'Other Cities',
    metroNear: 'Salem Junction Railway Station',
    busNear: 'Vincent Bus Stop (Right outside)',
    features: ['Western Tamil Nadu Training Hub', 'Direct Chennai IT Campus Recruitments', 'MNC Certified Trainers', 'Complete Career Mentorship'],
    mapQuery: 'Greens Technologys Vincent Salem'
  }
];

const ZONE_OPTIONS = [
  'All Branches (22)',
  'OMR Corridor',
  'Central & South',
  'West Chennai',
  'North Chennai',
  'GST & Suburbs',
  'Other Cities'
] as const;

export default function ContactUs() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('omr-hq');
  const [selectedZone, setSelectedZone] = useState<string>('All Branches (22)');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formBranch, setFormBranch] = useState('OMR Thoraipakkam (HQ)');
  const [formCourse, setFormCourse] = useState('Java Full Stack with Gen AI');
  const [formMode, setFormMode] = useState('Classroom (Offline Lab)');
  const [formTiming, setFormTiming] = useState('Regular Weekday');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Ref for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const statsStripRef = useRef<HTMLDivElement>(null);

  // Trigger GSAP entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgesRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.6
      })
      .from(headlineRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.8
      }, '-=0.3')
      .from(statsStripRef.current ? statsStripRef.current.children : [], {
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6
      }, '-=0.4');

      // Subtle continuous floating effect for ambient background orbs
      gsap.to('.ambient-orb', {
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

  // Filter branches based on Zone and Search Query
  const filteredBranches = useMemo(() => {
    return ALL_22_BRANCHES.filter((b) => {
      const matchesZone = selectedZone === 'All Branches (22)' || b.zone === selectedZone;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.area.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q) ||
        b.landmark?.toLowerCase().includes(q) ||
        b.metroNear?.toLowerCase().includes(q) ||
        b.zone.toLowerCase().includes(q);

      return matchesZone && matchesSearch;
    });
  }, [selectedZone, searchQuery]);

  // Current active branch object for Spotlight and Map
  const activeBranch = useMemo(() => {
    return ALL_22_BRANCHES.find((b) => b.id === selectedBranchId) || ALL_22_BRANCHES[0];
  }, [selectedBranchId]);

  // Update form branch if user selects a branch
  const handleSelectBranch = (b: BranchInfo) => {
    setSelectedBranchId(b.id);
    setFormBranch(b.shortName);
  };

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Google Map Embed URL
  const mapEmbedUrl = useMemo(() => {
    const encoded = encodeURIComponent(`${activeBranch.name}, ${activeBranch.address}`);
    return `https://maps.google.com/maps?q=${encoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  }, [activeBranch]);

  return (
    <div className="bg-[#f7faf8] text-[#1b342e] min-h-screen">
      {/* 1. HERO SECTION WITH GSAP ANIMATIONS */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-[#182e28] via-[#223d38] to-[#1c3631] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40"
      >
        {/* Ambient background orbs for GSAP animation */}
        <div className="ambient-orb absolute -top-10 left-10 w-96 h-96 bg-[#86c37c]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="ambient-orb absolute top-20 right-10 w-96 h-96 bg-[#e9c86a]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="ambient-orb absolute -bottom-10 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div ref={badgesRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-4 h-4 text-[#e9c86a]" />
            Chennai’s Largest IT Training Network • 22 World-Class Branches
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 max-w-4xl mx-auto">
            Find Your Nearest <span className="text-[#86c37c]">Greens Technology</span> Campus
          </h1>

          <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto mb-10">
            With <strong>22 strategically located branches</strong> spanning the OMR IT Corridor, Central, West, North Chennai, GST Suburbs, Trichy, and Salem, 
            premium hands-on tech education is always right around your corner.
          </p>

          {/* Quick Stats Strip */}
          <div
            ref={statsStripRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/15"
          >
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#86c37c]">22</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Physical Campuses</p>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#e9c86a]">8 AM - 8:30 PM</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Open All 7 Days</p>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#86c37c]">150,000+</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Placed Alumni</p>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#e9c86a]">100%</p>
              <p className="text-xs text-emerald-200 mt-1 font-medium">Free Career Counseling</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 22-BRANCH INTERACTIVE COMMAND CENTER (SPLIT VIEW WITH MAP & DIRECTORY) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-emerald-700" />
            Interactive Branch Locator & Live Google Map
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
            Explore All 22 Campuses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Filter by city zones, search by area or landmark, and click any branch card to automatically center the Google Map and preview complete contact details.
          </p>
        </div>

        {/* Filter Controls: Zone Tabs + Search Input */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-emerald-100 mb-8 space-y-4">
          
          {/* Zone Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {ZONE_OPTIONS.map((zone) => {
              const count =
                zone === 'All Branches (22)'
                  ? ALL_22_BRANCHES.length
                  : ALL_22_BRANCHES.filter((b) => b.zone === zone).length;

              const isSelected = selectedZone === zone;
              return (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#1b342e] text-white shadow-md scale-105'
                      : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100/80'
                  }`}
                >
                  <span>{zone.replace(' (22)', '')}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      isSelected ? 'bg-[#86c37c] text-[#1b342e]' : 'bg-emerald-200/70 text-emerald-900'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar + Result Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-gray-100">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by area, landmark, metro station, or pincode..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-xs sm:text-sm bg-gray-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-500 w-full sm:w-auto justify-between sm:justify-end">
              <span>
                Showing <strong>{filteredBranches.length}</strong> of 22 locations
              </span>
              {(selectedZone !== 'All Branches (22)' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedZone('All Branches (22)');
                    setSearchQuery('');
                  }}
                  className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2-COLUMN COMMAND CENTER LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: SCROLLABLE DIRECTORY OF BRANCH CARDS */}
          <div className="lg:col-span-6 space-y-4 max-h-[780px] overflow-y-auto pr-1 sm:pr-2 scrollbar-none">
            {filteredBranches.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-dashed border-gray-300">
                <MapPin className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <h4 className="font-bold text-gray-700 text-base">No Branches Found</h4>
                <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                  No branch matches your search "{searchQuery}". Try searching for another area, metro station, or reset the filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedZone('All Branches (22)');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold"
                >
                  Show All 22 Branches
                </button>
              </div>
            ) : (
              filteredBranches.map((branch) => {
                const isSelected = branch.id === selectedBranchId;
                return (
                  <div
                    key={branch.id}
                    onClick={() => handleSelectBranch(branch)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left relative ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-50/90 to-teal-50/60 border-[#86c37c] shadow-lg ring-2 ring-[#86c37c]/50 scale-[1.01]'
                        : 'bg-white border-gray-200/80 hover:border-emerald-300 hover:shadow-md'
                    }`}
                  >
                    {/* Top Row: Tag + Zone + Metro indicator */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                            branch.isHQ
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {branch.isHQ ? '⭐ Head Office' : branch.zone}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {branch.area}
                        </span>
                      </div>

                      {isSelected && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-[#86c37c]/30 px-2 py-0.5 rounded-full animate-pulse">
                          <Check className="w-3 h-3 text-emerald-700" /> Active on Map
                        </span>
                      )}
                    </div>

                    {/* Branch Title */}
                    <h3 className="font-bold text-base sm:text-lg text-[#1b342e] mb-1.5 flex items-center justify-between">
                      <span>{branch.name}</span>
                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          isSelected ? 'rotate-90 text-emerald-700' : 'text-gray-400'
                        }`}
                      />
                    </h3>

                    {/* Address & Landmark */}
                    <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                      {branch.address}
                    </p>

                    {branch.landmark && (
                      <p className="text-[11px] text-emerald-800 bg-emerald-50/80 p-2 rounded-lg mb-3 flex items-start gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Landmark:</strong> {branch.landmark}</span>
                      </p>
                    )}

                    {/* Metro / Bus Connectivity Badge */}
                    {branch.metroNear && (
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-600 mb-3">
                        <Train className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                        <span>{branch.metroNear}</span>
                      </div>
                    )}

                    {/* Action Bar inside card */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${branch.tel.replace(/\s+/g, '')}`}
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1.5 rounded-lg bg-emerald-100/70 hover:bg-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3 h-3 text-emerald-700" /> {branch.tel}
                        </a>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyPhone(branch.tel);
                          }}
                          className="text-[11px] text-gray-400 hover:text-gray-700 underline"
                        >
                          {copiedPhone === branch.tel ? 'Copied!' : 'Copy'}
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/918939915577?text=Hi%20Greens%20Technology%2C%20I%20want%20to%20visit%20the%20${encodeURIComponent(
                            branch.shortName
                          )}%20branch.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-700"
                          title="WhatsApp this Branch"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            branch.name + ', ' + branch.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2.5 py-1.5 rounded-lg bg-[#1b342e] hover:bg-[#284c42] text-white text-[11px] font-bold flex items-center gap-1"
                        >
                          Navigate <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT COLUMN: STICKY DYNAMIC GOOGLE MAP & SPOTLIGHT HUD */}
          <div className="lg:col-span-6 sticky top-24 space-y-4">
            
            {/* Active Branch Spotlight Card */}
            <div className="bg-gradient-to-br from-[#1b342e] to-[#25463f] text-white p-6 rounded-3xl shadow-xl border border-emerald-700/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#86c37c]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#86c37c] text-[#1b342e] text-xs font-extrabold uppercase tracking-wider">
                  📍 Selected Campus Spotlight
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Open Today (8 AM - 8:30 PM)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {activeBranch.name}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4">
                {activeBranch.address}
              </p>

              {activeBranch.landmark && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 mb-4 text-xs text-emerald-200 flex items-start gap-2">
                  <Compass className="w-4 h-4 text-[#e9c86a] flex-shrink-0 mt-0.5" />
                  <span><strong>Landmark:</strong> {activeBranch.landmark}</span>
                </div>
              )}

              {/* Facility Features Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {activeBranch.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/15 text-[11px] font-medium text-emerald-100 border border-white/10"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>

              {/* Direct Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <a
                  href={`tel:${activeBranch.tel.replace(/\s+/g, '')}`}
                  className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#1b342e] font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Campus
                </a>

                <a
                  href={`https://wa.me/918939915577?text=Hi%20Greens%20Technology%2C%20I%20want%20to%20visit%20the%20${encodeURIComponent(
                    activeBranch.shortName
                  )}%20branch.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    activeBranch.name + ', ' + activeBranch.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 sm:col-span-1 px-3 py-2.5 rounded-xl bg-white/15 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/20"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#e9c86a]" /> Get Directions
                </a>
              </div>
            </div>

            {/* Embedded Live Google Map with Dynamic Coordinates */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 aspect-[16/11] sm:aspect-[16/10]">
              <iframe
                title={`Google Map - ${activeBranch.name}`}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Badge */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-gray-200 text-xs font-semibold text-[#1b342e] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-600 animate-bounce" />
                <span>{activeBranch.shortName}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. THREE CENTRALIZED EXPRESS DESKS */}
      <section className="py-16 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Headphones className="w-4 h-4 text-emerald-600" />
              Express Department Support
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b342e]">
              Direct Contact Channels
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-1">
              Reach the exact team dedicated to your specific requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Desk 1 */}
            <div className="p-6 rounded-3xl bg-[#fbfdfc] border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#1b342e] mb-1">Student Admissions & Lab Visits</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                Connect with our senior career counselors to discuss syllabus, course fees, batch schedules, and free demo sessions.
              </p>
              <div className="space-y-2 pt-3 border-t border-gray-100 text-xs font-semibold">
                <p className="flex items-center gap-2 text-emerald-800">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> +91 89399 82288 / +91 89399 15577
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" /> contact@greenstechnologys.com
                </p>
              </div>
            </div>

            {/* Desk 2 */}
            <div className="p-6 rounded-3xl bg-[#fbfdfc] border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#e9c86a]/30 text-amber-900 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-extrabold text-lg text-[#1b342e] mb-1">Corporate & Enterprise Upskilling</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                Customized corporate training batches in GenAI, Full Stack, DevOps, and Cloud for IT companies across India.
              </p>
              <div className="space-y-2 pt-3 border-t border-gray-100 text-xs font-semibold">
                <p className="flex items-center gap-2 text-amber-900">
                  <Phone className="w-3.5 h-3.5 text-amber-700" /> +91 89399 82022
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3.5 h-3.5 text-amber-700" /> corporate@greenstechnologys.com
                </p>
              </div>
            </div>

            {/* Desk 3 */}
            <div className="p-6 rounded-3xl bg-[#fbfdfc] border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#1b342e] mb-1">Placements & Hiring Partners Desk</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                Hire trained developers, QA automation engineers, and data analysts with zero recruitment fees for employers.
              </p>
              <div className="space-y-2 pt-3 border-t border-gray-100 text-xs font-semibold">
                <p className="flex items-center gap-2 text-teal-900">
                  <Phone className="w-3.5 h-3.5 text-teal-700" /> +91 89399 92288
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3.5 h-3.5 text-teal-700" /> placements@greenstechnologys.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOOK A VISIT / FREE CAREER COUNSELLING SESSION */}
      <section className="py-20 bg-gradient-to-b from-[#1b342e] to-[#25463f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-[#e9c86a]" />
                Walk-in or Schedule Online
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Schedule a Free Lab Visit & <br />
                <span className="text-[#86c37c]">1-on-1 Career Counselling</span>
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Step into any of our 22 branch locations to explore our live training labs, meet our faculty mentors, review sample live projects, and get customized guidance for career transitions into high-paying tech roles.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#86c37c] flex-shrink-0" />
                  <span>Free Career Assessment & Skill-Gap Analysis</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#86c37c] flex-shrink-0" />
                  <span>Attend a Free 2-Hour Live Classroom Demo</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#86c37c] flex-shrink-0" />
                  <span>Inspect Placement Records & Salary Packages</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs">
                <p className="font-bold text-white mb-1">Direct WhatsApp Helpdesk</p>
                <p className="text-emerald-200 mb-3">Prefer immediate replies on WhatsApp? Message our team directly:</p>
                <a
                  href="https://wa.me/918939915577?text=Hi%20Greens%20Technology%2C%20I%20would%20like%20to%20schedule%20a%20campus%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp (+91 89399 15577)
                </a>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-[#1b342e] shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1b342e]">Visit Scheduled Successfully!</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you, <strong>{formName}</strong>. Our counselor from the <strong>{formBranch}</strong> branch will contact you on <strong>{formPhone}</strong> to confirm your appointment time and send directions.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#1b342e] text-white text-xs font-bold hover:bg-[#284c42]"
                    >
                      Schedule Another Appointment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-xl font-extrabold text-[#1b342e]">
                      Reserve Your Free Demo / Campus Visit
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="E.g., Priya Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number (WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="priya@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Select Campus Branch *</label>
                        <select
                          value={formBranch}
                          onChange={(e) => setFormBranch(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          {ALL_22_BRANCHES.map((b) => (
                            <option key={b.id} value={b.shortName}>
                              {b.shortName} ({b.area})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Technology of Interest</label>
                        <select
                          value={formCourse}
                          onChange={(e) => setFormCourse(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="Java Full Stack with Gen AI">Java Full Stack with Gen AI</option>
                          <option value="Python Full Stack & AI">Python Full Stack & AI</option>
                          <option value="Generative AI & Data Science">Generative AI & Data Science</option>
                          <option value="DevOps, SRE & Multi-Cloud">DevOps, SRE & Multi-Cloud</option>
                          <option value="SDET & Automation Testing">SDET & Automation Testing</option>
                          <option value="Forward Deployed Engineering">Forward Deployed Engineering</option>
                          <option value="Oracle / Database SQL">Oracle / Database SQL</option>
                          <option value="Career Transition Consultation">General Career Transition Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Learning Mode</label>
                        <select
                          value={formMode}
                          onChange={(e) => setFormMode(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="Classroom (Offline Lab)">Classroom (Offline Hands-on Lab)</option>
                          <option value="Live Interactive Online">Live Interactive Online</option>
                          <option value="Hybrid (Weekend Lab + Weekday Online)">Hybrid (Weekend Lab + Weekday Online)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#5ea154] text-[#1b342e] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    >
                      Confirm Free Demo & Campus Visit
                    </button>

                    <p className="text-[11px] text-gray-500 text-center">
                      🔒 No spam guaranteed. We only use your phone number to coordinate your visit.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            Branch & Contact FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b342e]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Can I visit any branch without prior appointment?',
              a: 'Yes, all 22 of our branches are open 7 days a week from 8:00 AM to 8:30 PM. Walk-ins are always warmly welcomed! However, scheduling in advance ensures a senior technical trainer or course mentor is reserved specifically for your 1-on-1 career discussion.'
            },
            {
              q: 'Can I transfer between branches if I relocate within Chennai?',
              a: 'Absolutely! Students enrolled at Greens Technology enjoy seamless inter-branch transfer privileges. For instance, if you start training at our Adyar or Anna Nagar campus and shift to OMR or Porur, your admission, lab hours, and placement tracker transfer without any extra charges.'
            },
            {
              q: 'Are lab facilities open on weekends?',
              a: 'Yes, our fully air-conditioned computer labs with high-speed internet and backup power are accessible on both Saturdays and Sundays for practice, assignments, and mock interview preparations.'
            },
            {
              q: 'Is parking available at the branches?',
              a: 'All our branches offer secure two-wheeler parking. Major hubs such as OMR (Head Office), Adyar, Porur, and Navalur also have convenient four-wheeler parking provisions.'
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

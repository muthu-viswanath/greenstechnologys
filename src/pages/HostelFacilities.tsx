import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Wifi,
  Tv,
  Utensils,
  Coffee,
  Zap,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  CheckCircle2,
  Bed,
  Droplets,
  Camera,
  Upload,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  RotateCcw,
  Info,
  Calendar,
  Building,
  Heart,
  Lock,
  X,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  Check,
  Compass,
  ArrowRight,
  Flame,
  BadgeCheck,
  Award
} from 'lucide-react';

// Pre-loaded high resolution hostel photography
import roomDoubleImg from '../assets/hostel/room_double.jpg';
import diningHallImg from '../assets/hostel/dining_hall.jpg';
import sharingRoomImg from '../assets/hostel/sharing_room.jpg';
import buildingFacadeImg from '../assets/hostel/building_facade.jpg';

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Bedrooms' | 'Dining' | 'Building' | 'Facilities';
  description: string;
  tags: string[];
}

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 'building-1',
    url: buildingFacadeImg,
    title: 'Greens Women’s Hostel - Adyar Main Campus',
    category: 'Building',
    description: 'Purpose-built architectural premises situated on 11th Cross Street, Sasthri Nagar, Adyar. Features round-the-clock gated security, green landscape, and secure access.',
    tags: ['Gated Premises', '24/7 Security Cabin', 'Walk to Adyar Depot', 'Central Hub']
  },
  {
    id: 'room-double-1',
    url: roomDoubleImg,
    title: 'Spacious 2-Sharing AC Bedroom',
    category: 'Bedrooms',
    description: 'Naturally lit, cross-ventilated bedroom with individual wooden cots, orthopedic mattresses, individual study workstations, full-length mirror wardrobes, and split air conditioning.',
    tags: ['Air Conditioned', 'Full Mirror Wardrobe', 'Attached Bath & Geyser', 'Study Desk']
  },
  {
    id: 'dining-1',
    url: diningHallImg,
    title: 'Spacious Hygienic Dining Hall & Buffet Station',
    category: 'Dining',
    description: 'Clean and well-ventilated dining area serving unlimited home-style South Indian & Chettinad vegetarian and non-vegetarian delicacies with multi-stage RO purified drinking water.',
    tags: ['Buffet Self-Service', 'Veg & Non-Veg', 'RO Drinking Water', 'Spotless Hygiene']
  },
  {
    id: 'sharing-room-1',
    url: sharingRoomImg,
    title: 'Comfortable 4-Sharing Well-Ventilated Room',
    category: 'Bedrooms',
    description: 'Thoughtfully designed multi-sharing room with individual labeled cots, personal wardrobes, bedside power outlets, high ceiling fans, AC, and daily housekeeping services.',
    tags: ['Individual Cots', 'Daily Housekeeping', 'Spacious & Airy', 'Personal Storage']
  }
];

const ROOM_TYPES = [
  {
    name: 'Single Private Room',
    subtitle: 'Quiet & Exclusive for Focused Working Professionals',
    sharing: '1 Person',
    badge: 'Executive Comfort',
    features: [
      'Complete personal privacy with lockable wardrobe & mirror',
      'Dedicated study / work desk with ergonomic chair',
      'Split Air Conditioner & high-speed Wi-Fi router access',
      'Private attached bathroom with instant geyser',
      'Buffet meals & pure RO drinking water included'
    ],
    idealFor: 'IT Professionals, Research Scholars, Exam Aspirants'
  },
  {
    name: '2-Sharing Twin Room',
    subtitle: 'Balanced Harmony with Ample Personal Space',
    sharing: '2 Persons',
    badge: 'Most Popular',
    popular: true,
    features: [
      'Two separate wooden cots with clean mattress & bedspreads',
      'Individual twin wardrobes with dressing mirrors',
      'Attached bathroom with hot water geyser',
      'Large windows with ample sunlight & cross ventilation',
      'Air Conditioned & Non-AC choices available'
    ],
    idealFor: 'Working Women, College Friends, Corporate Trainees'
  },
  {
    name: '3-Sharing Comfort Room',
    subtitle: 'Vibrant Community Living with Great Comfort',
    sharing: '3 Persons',
    badge: 'Best Value',
    features: [
      'Three comfortable individual cots with personal storage',
      'Spacious room layout allowing easy movement',
      'Attached washroom with clean tiles & daily sanitization',
      'High-speed Wi-Fi & power backup support',
      'Nutritious buffet breakfast, lunch & dinner included'
    ],
    idealFor: 'Students & Junior Software Engineers'
  },
  {
    name: '4 & 5-Sharing Economy Room',
    subtitle: 'Ultra-Affordable & Safe with Full Amenities',
    sharing: '4-5 Persons',
    badge: 'Budget Friendly',
    features: [
      'Sturdy individual cots with pillows and linen',
      'Secure wardrobe space for each occupant',
      'Attached toilet & bathroom facility',
      'Daily professional housekeeping & garbage clearance',
      'Includes all 3 meals, Wi-Fi, and 24/7 security'
    ],
    idealFor: 'Fresh Graduates, Course Trainees, Budget Conscious'
  },
  {
    name: 'Daily Guest Accommodation',
    subtitle: 'Flexible Short Stay for Visiting Female Guests',
    sharing: 'Daily Basis',
    badge: 'Flexible Stay',
    features: [
      'Allowed on daily rent basis for female guardians & candidates',
      'Ideal for job interviews, weekend college visits, or short seminars',
      'Furnished room with fresh bed linen & bath amenities',
      'Option to avail hygienic dining hall buffet food',
      'Prior booking & valid female ID proof required'
    ],
    idealFor: 'Parents, Visiting Relatives, Short-Term Candidates'
  }
];

const FACILITIES_LIST = [
  {
    icon: Zap,
    title: 'Uninterrupted Electricity & Backup',
    desc: 'Equipped with heavy-duty power backup generators to tackle unexpected power outages effortlessly, keeping lights, fans, and Wi-Fi active.'
  },
  {
    icon: Droplets,
    title: 'Attached Bathrooms & Geyser',
    desc: 'Every single room has an attached, fully tiled toilet and bathroom with continuous hot water supply via electric geysers.'
  },
  {
    icon: Lock,
    title: '24/7 Security & CCTV Vigilance',
    desc: 'Round-the-clock trained security guards at entry gates, CCTV surveillance across common corridors, and resident hostel warden for complete safety.'
  },
  {
    icon: Wifi,
    title: 'High-Speed Unlimited Wi-Fi',
    desc: 'Reliable fiber-optic wireless internet connectivity on all floors for uninterrupted remote work, tech assignments, and video calling.'
  },
  {
    icon: Utensils,
    title: 'Hygienic Chettinad Home Food',
    desc: 'Tasty home-style vegetarian and non-vegetarian menus cooked fresh in our spotless kitchen. Served hot in our spacious dining buffet hall.'
  },
  {
    icon: Flame,
    title: 'Induction E-Stove for Self-Catering',
    desc: 'Dedicated electric induction stove available for residents wishing to make herbal tea, coffee, boil milk, or prepare light quick snacks.'
  },
  {
    icon: Building,
    title: 'Ground Floor 24h Admin Office',
    desc: 'Hostel administrative office located right on the ground floor with courteous management staff available 24 hours for resident assistance.'
  },
  {
    icon: Sparkles,
    title: 'Wardrobes & Full-Length Mirrors',
    desc: 'Each room is well-furnished with dedicated wooden wardrobes, secure locking provisions, and dressing mirrors for daily grooming.'
  },
  {
    icon: Coffee,
    title: 'Washing Machines for Laundry',
    desc: 'Modern automatic washing machine facilities provided on designated utility zones to make weekly clothes washing convenient.'
  },
  {
    icon: Tv,
    title: 'Common Television & Entertainment',
    desc: 'Shared television setup in the common recreation lounge to unwind with friends, watch news, and catch up with sports or movies.'
  },
  {
    icon: Bed,
    title: 'Two-Wheeler Private Parking',
    desc: 'Gated, protected parking space inside hostel compound exclusively for residents’ scooters and two-wheelers.'
  },
  {
    icon: Calendar,
    title: 'Newspapers & Periodicals',
    desc: 'Daily national newspapers in English & Tamil, along with tech & employment magazines, provided in the reading lounge.'
  }
];

const NEARBY_LANDMARKS = [
  { distance: '1 Min Walk', place: 'Adyar Bus Depot', desc: 'Direct buses to all corners of Chennai city and suburban routes.' },
  { distance: '3 Mins Walk', place: 'Madhya Kailash Junction & Railway Station', desc: 'Seamless MRTS train connectivity to Chennai Central, Velachery & Beach.' },
  { distance: 'Direct Transit', place: 'OMR IT Corridor & TIDEL Park', desc: '24 hours transport available, making workplace commutes swift and effortless.' },
  { distance: '5 Mins Walk', place: 'Kesari Vidya Mandir & Sanskrit College', desc: 'Prime educational institutions and academies located around the corner.' },
  { distance: '5 Mins Walk', place: 'SPS, Acropolis, AVM Rajeswari & Shakti Towers', desc: 'Prominent commercial offices and corporate centers nearby.' },
  { distance: '10 Mins Walk', place: 'Chennai City Centre & INOX Theatres', desc: 'Top tier entertainment, multiplexes, supermarkets, and dining avenues.' }
];

const THREE_BRANCHES = [
  {
    name: 'Adyar Branch (Flagship)',
    address: 'No. 14/8, 11th Cross Street, Sasthri Nagar, Adyar, Chennai - 600 020',
    landmark: 'Behind Adyar Bus Depot, near Madhya Kailash',
    rooms: '17 Rooms | 68 Beds',
    phone: '+91 89399 15577',
    active: true
  },
  {
    name: 'OMR - Thoraipakkam Branch',
    address: 'Near IT Highway, Okkiyam Thoraipakkam, OMR, Chennai - 600 097',
    landmark: 'Walking distance to major IT tech parks & SEZ',
    rooms: '22 Rooms | 80 Beds',
    phone: '+91 89399 25577',
    active: false
  },
  {
    name: 'Velachery Branch',
    address: 'Opposite Phoenix Marketcity Road, Velachery, Chennai - 600 042',
    landmark: '5 mins to Velachery MRTS & Vijayanagar Bus Stop',
    rooms: '15 Rooms | 60 Beds',
    phone: '+91 89399 35577',
    active: false
  }
];

export default function HostelFacilities() {
  // Gallery State (loaded from localStorage if user added custom photos)
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('greens_hostel_gallery');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return DEFAULT_GALLERY;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [showDeveloperGuide, setShowDeveloperGuide] = useState<boolean>(false);

  // Upload Form State
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<'Bedrooms' | 'Dining' | 'Building' | 'Facilities'>('Bedrooms');
  const [uploadDesc, setUploadDesc] = useState('');
  const [uploadTags, setUploadTags] = useState('Air Conditioned, Attached Bath');
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);

  // Booking Form State
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingRoomType, setBookingRoomType] = useState('2-Sharing Twin Room');
  const [bookingAcType, setBookingAcType] = useState('AC Room');
  const [bookingMoveInDate, setBookingMoveInDate] = useState('');
  const [bookingProfession, setBookingProfession] = useState('Working Professional');
  const [bookingMessage, setBookingMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filtered gallery for the cinema viewer
  const filteredGallery = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(item => item.category === selectedCategory);

  // Ensure currentIndex stays within bounds when filter changes
  useEffect(() => {
    if (currentIndex >= filteredGallery.length) {
      setCurrentIndex(0);
    }
  }, [selectedCategory, filteredGallery.length, currentIndex]);

  // Auto slide effect
  useEffect(() => {
    if (!isPlaying || filteredGallery.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredGallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, filteredGallery.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, filteredGallery.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  // Image Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadPreview) {
      alert('Please select an image file first.');
      return;
    }

    const newItem: GalleryItem = {
      id: 'custom-' + Date.now(),
      url: uploadPreview,
      title: uploadTitle.trim() || 'Greens Hostel Facility View',
      category: uploadCategory,
      description: uploadDesc.trim() || 'Spacious, clean, and well-maintained hostel facility for women in Adyar.',
      tags: uploadTags.split(',').map(t => t.trim()).filter(Boolean)
    };

    const updated = [newItem, ...galleryImages];
    setGalleryImages(updated);
    try {
      localStorage.setItem('greens_hostel_gallery', JSON.stringify(updated));
    } catch {
      // storage limit handle
    }
    setCurrentIndex(0);
    setSelectedCategory('All');
    setShowUploadModal(false);
    // Reset form
    setUploadPreview(null);
    setUploadTitle('');
    setUploadDesc('');
  };

  const handleResetGallery = () => {
    if (window.confirm('Reset gallery to default high-resolution photographs?')) {
      localStorage.removeItem('greens_hostel_gallery');
      setGalleryImages(DEFAULT_GALLERY);
      setCurrentIndex(0);
      setSelectedCategory('All');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const currentItem = filteredGallery[currentIndex] || DEFAULT_GALLERY[0];

  return (
    <div className="bg-[#f7faf8] text-[#1b342e] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b342e] via-[#243f40] to-[#1e3834] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#86c37c]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#e9c86a]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Hero Content */}
            <div className="lg:w-7/12 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5">
                <Sparkles className="w-4 h-4 text-[#e9c86a]" />
                Food + Accommodation • Estd. 2016 by Ms. Mageswari
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
                Greens Women’s Hostel <span className="text-[#86c37c]">in Adyar</span>
              </h1>

              <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed max-w-2xl mb-8">
                Recognized as one of Chennai’s most reputable women’s hostels for the past <strong>9+ years</strong>. 
                Purpose-built with exceptional ventilation, daily cleanliness, delicious home-cooked Chettinad food, 
                and 24-hour vigilant security just behind Adyar Bus Depot and Madhya Kailash Station.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                <a
                  href="#cinema-gallery"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#68a75e] text-[#1b342e] font-bold text-base shadow-lg hover:shadow-xl hover:from-[#92d387] hover:to-[#74b66a] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Camera className="w-5 h-5 text-[#1b342e]" />
                  Explore Big Photo Gallery
                </a>

                <a
                  href="#booking-enquiry"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all backdrop-blur-sm flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5 text-[#e9c86a]" />
                  Check Room Availability
                </a>

                <a
                  href="tel:+918939915577"
                  className="px-4 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-200 text-sm font-medium flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#86c37c]" />
                  Direct Admin Call
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#86c37c]/20 flex items-center justify-center text-[#86c37c]">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">17 Rooms</p>
                    <p className="text-xs text-emerald-200/80">68 Individual Beds</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e9c86a]/20 flex items-center justify-center text-[#e9c86a]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">24/7</p>
                    <p className="text-xs text-emerald-200/80">Guards & Warden</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#86c37c]/20 flex items-center justify-center text-[#86c37c]">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">Buffet</p>
                    <p className="text-xs text-emerald-200/80">Veg & Non-Veg</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e9c86a]/20 flex items-center justify-center text-[#e9c86a]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-white">Adyar Hub</p>
                    <p className="text-xs text-emerald-200/80">Behind Bus Depot</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:w-5/12 w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-gradient-to-b from-[#243f40] to-[#1a2f2b] p-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner group">
                  <img
                    src={buildingFacadeImg}
                    alt="Greens Womens Hostel Adyar Building"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-1 rounded bg-[#86c37c] text-[#1b342e] font-bold text-xs uppercase tracking-wider mb-2 inline-block">
                      Adyar Main Campus
                    </span>
                    <h3 className="text-lg font-bold">14/8, 11th Cross Street, Sasthri Nagar</h3>
                    <p className="text-xs text-emerald-200">Specifically architected for female safety, ventilation & comfort</p>
                  </div>
                </div>

                {/* Floating Quick Summary Card */}
                <div className="mt-3 bg-white/10 backdrop-blur-md rounded-xl p-4 text-xs text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#e9c86a]" />
                    <span><strong>9 Years</strong> of Trusted Hospitality</span>
                  </div>
                  <span className="text-[#86c37c] font-semibold">Adyar • OMR • Velachery</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CREATIVE BIG-SIZED IMAGE GALLERY (ONE IMAGE AFTER THE OTHER SHOWCASE) */}
      <section id="cinema-gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-emerald-600" />
            Immersive Big-Screen Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
            Hostel Image Showcase
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base sm:text-lg">
            Experience our rooms, dining hall, and amenities in high definition. 
            Navigate one image after the other in our grand cinema viewer or upload your real hostel photos.
          </p>
        </div>

        {/* Gallery Controls & Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-emerald-100 mb-6">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Bedrooms', 'Dining', 'Building', 'Facilities'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1b342e] text-white shadow-md'
                    : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Action Tools: Upload & Permanent Guide */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
            >
              {isPlaying ? (
                <>
                  <Clock className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
                  <span>Autoplay: ON</span>
                </>
              ) : (
                <>
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span>Autoplay: OFF</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs sm:text-sm font-bold shadow-md hover:from-emerald-700 hover:to-teal-800 transition-all flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload Real Photos
            </button>

            <button
              onClick={() => setShowDeveloperGuide(true)}
              className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors"
              title="How to replace static images permanently"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* GRAND BIG-SIZED ONE-BY-ONE CINEMA VIEWPORT */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-white/80">
          {/* Main Giant Image Canvas */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] bg-zinc-950 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentItem.id}
                src={currentItem.url}
                alt={currentItem.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="w-full h-full object-cover select-none"
              />
            </AnimatePresence>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

            {/* Top Bar on Image: Counter + Category + Fullscreen */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-bold tracking-wider">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(filteredGallery.length).padStart(2, '0')}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#86c37c]/90 text-[#1b342e] text-xs font-bold uppercase tracking-wider shadow">
                  {currentItem.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white transition-all transform hover:scale-110"
                  title="Toggle Fullscreen Lightbox"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all transform hover:scale-110 z-20 focus:outline-none"
            >
              <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all transform hover:scale-110 z-20 focus:outline-none"
            >
              <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-20 text-white">
              <motion.div
                key={currentItem.id + '-caption'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow-md">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 sm:line-clamp-none max-w-3xl leading-relaxed mb-3 drop-shadow">
                  {currentItem.description}
                </p>

                {/* Highlight Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {currentItem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-medium text-white"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                  <a
                    href="#booking-enquiry"
                    className="ml-auto px-4 py-1.5 rounded-lg bg-[#e9c86a] hover:bg-[#deb753] text-[#1b342e] text-xs font-bold transition-all flex items-center gap-1.5 shadow"
                  >
                    Inquire About This Room <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Thumbnail Strip Underneath */}
          <div className="bg-[#142320] p-3 sm:p-4 border-t border-emerald-900/50">
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
              {filteredGallery.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-20 h-14 sm:w-28 sm:h-18 rounded-xl overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? 'border-[#86c37c] ring-2 ring-[#86c37c]/50 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                  {idx === currentIndex && (
                    <div className="absolute inset-0 bg-[#86c37c]/15" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Footer Bar */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-3 px-2">
          <span>Tip: Use <strong>Left</strong> and <strong>Right</strong> arrow keys to switch photos.</span>
          {galleryImages.length > DEFAULT_GALLERY.length && (
            <button
              onClick={handleResetGallery}
              className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Custom Uploads
            </button>
          )}
        </div>
      </section>

      {/* 3. STORY & PURPOSE-BUILT PHILOSOPHY */}
      <section className="py-16 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#243f40] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4 text-[#86c37c]" />
                Dedicated Care Since 2016
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e] leading-tight">
                Designed From the Ground Up as a <span className="text-[#3f6f52]">True Ladies Hostel</span>
              </h2>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                <strong>GREEN WOMEN Hostel Adyar</strong> was established by <strong>Ms. Mageswari in 2016</strong> with 
                a heartfelt vision: to provide young college students and working women in Chennai with a haven that combines 
                <strong> style, safety, comfort, and affordability</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Unlike converted apartments, our building was <em>specifically architected and engineered</em> as a ladies hostel. 
                Every floor enjoys wide cross-ventilation, abundant sunlight, tall ceilings, and private attached washrooms in every single room. 
                With <strong>17 spotless rooms housing 68 individual beds</strong>, every resident enjoys her own individual space without feeling cramped.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#1b342e]">Daily Deep Maintenance</h4>
                    <p className="text-xs text-gray-600 mt-1">Rooms, corridors, and washrooms sanitized every day by dedicated staff.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#1b342e]">24h Ground Floor Office</h4>
                    <p className="text-xs text-gray-600 mt-1">Admin staff & resident warden physically available round the clock.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Feature Highlights */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-emerald-100 group">
                  <img
                    src={roomDoubleImg}
                    alt="Neat hostel bedroom"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-[#fbfdfc]">
                    <h4 className="font-bold text-sm text-[#1b342e]">Sunny, Airy Bedrooms</h4>
                    <p className="text-xs text-gray-600 mt-1">Wide sliding glass windows with ample daylight.</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#1b342e] to-[#2b4c44] text-white p-6 shadow-lg">
                  <p className="text-4xl font-extrabold text-[#e9c86a]">68</p>
                  <p className="text-sm font-semibold text-emerald-200 mt-1">Individual Beds Only</p>
                  <p className="text-xs text-gray-300 mt-2">No overcrowding. Every resident gets dedicated cot, mattress & wardrobe.</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl bg-gradient-to-br from-[#86c37c] to-[#5a9a50] text-[#1b342e] p-6 shadow-lg">
                  <p className="text-4xl font-extrabold text-[#1b342e]">3</p>
                  <p className="text-sm font-bold mt-1">City Hub Branches</p>
                  <p className="text-xs text-[#243f40] mt-2">Covering Adyar, OMR IT Expressway & Velachery.</p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg border border-emerald-100 group">
                  <img
                    src={diningHallImg}
                    alt="Spacious dining hall"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-[#fbfdfc]">
                    <h4 className="font-bold text-sm text-[#1b342e]">Buffet Dining Hall</h4>
                    <p className="text-xs text-gray-600 mt-1">Unlimited self-service with RO pure drinking water.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. ROOM TYPES & ACCOMMODATION OPTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Bed className="w-4 h-4 text-emerald-600" />
            Accommodation Tailored to You
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
            Choose Your Preferred Room Sharing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base">
            From peaceful single private setups to economical multi-sharing arrangements, all rooms include food, RO water, Wi-Fi, and daily housekeeping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOM_TYPES.map((room, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                room.popular
                  ? 'bg-gradient-to-b from-white to-emerald-50/60 border-2 border-[#86c37c] shadow-xl relative scale-[1.02]'
                  : 'bg-white border border-emerald-100/80 shadow-md hover:shadow-lg'
              }`}
            >
              {room.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#86c37c] text-[#1b342e] text-xs font-extrabold uppercase tracking-wider shadow">
                  ⭐ Most Preferred
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                    {room.sharing}
                  </span>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                    {room.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1b342e] mb-1">{room.name}</h3>
                <p className="text-xs text-gray-500 mb-5">{room.subtitle}</p>

                <div className="space-y-3 mb-6">
                  {room.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-100">
                <p className="text-[11px] text-gray-500 mb-3">
                  <strong>Ideal for:</strong> {room.idealFor}
                </p>
                <a
                  href="#booking-enquiry"
                  onClick={() => setBookingRoomType(room.name)}
                  className={`w-full py-2.5 rounded-xl text-center text-xs sm:text-sm font-bold transition-all block ${
                    room.popular
                      ? 'bg-[#1b342e] text-white hover:bg-[#284c42]'
                      : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                  }`}
                >
                  Book / Inquire This Room
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Electricity & Daily Rentals */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <p className="text-xs sm:text-sm">
              <strong>Transparent Policy:</strong> Monthly hostel tariff covers complete accommodation, 3-time buffet food, and unlimited RO water. Electricity bills are calculated extra as per sub-meter consumption. 
              <strong> Female guests allowed on daily rent basis</strong> with prior registration.
            </p>
          </div>
          <a
            href="tel:+918939915577"
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs whitespace-nowrap shadow-sm"
          >
            Check Daily Rates
          </a>
        </div>
      </section>

      {/* 5. FOOD & DINING EXPERIENCE (HOME-STYLE CHETTINAD BUFFET) */}
      <section className="py-20 bg-gradient-to-b from-[#1b342e] to-[#243f40] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30">
                <img
                  src={diningHallImg}
                  alt="Greens Hostel Hygienic Dining Hall"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded bg-[#e9c86a] text-[#1b342e] font-bold text-xs uppercase mb-2 inline-block">
                    Feel Like Home
                  </span>
                  <h3 className="text-2xl font-bold text-white">Spacious Buffet Dining Hall</h3>
                  <p className="text-xs text-emerald-200 mt-1">Self-service dining with unlimited servings and pure RO water station.</p>
                </div>
              </div>

              {/* Floating Chef Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white text-[#1b342e] p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm">Authentic Chettinad</h4>
                  <p className="text-xs text-gray-600">Fresh Vegetarian & Non-Vegetarian</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs font-bold uppercase tracking-wider">
                <Utensils className="w-4 h-4 text-[#e9c86a]" />
                Nutritious & Delicious Food
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
                Wholesome Home Food <br />
                <span className="text-[#86c37c]">You Will Long For</span>
              </h2>

              <p className="text-emerald-100/90 leading-relaxed text-base sm:text-lg">
                We believe that good food is the heart of feeling at home. Our in-house kitchen prepares daily fresh, 
                balanced South Indian and Chettinad specialties with the highest standards of culinary cleanliness.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-[#86c37c] flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Self-Service Buffet System</h4>
                    <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
                      Residents can eat as they wish in our airy dining hall without any portion constraints.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-[#86c37c] flex items-center justify-center flex-shrink-0 mt-1">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Multi-Stage Purified RO Water</h4>
                    <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
                      Safe, certified reverse-osmosis drinking water stations placed conveniently on all dining floors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-[#86c37c] flex items-center justify-center flex-shrink-0 mt-1">
                    <Flame className="w-5 h-5 text-[#e9c86a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Induction E-Stove for Self-Catering</h4>
                    <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
                      Need a late-night tea, herbal brew, hot milk, or instant snack? An electric induction cooktop is available for residents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. COMPREHENSIVE AMENITIES & FACILITIES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Complete Amenities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e]">
            Facilities Built for Comfort, Safety & Study
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base">
            Every convenience you need for a peaceful, productive, and secure stay in Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_LIST.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-emerald-100/90 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-[#86c37c] text-emerald-700 group-hover:text-[#1b342e] flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#1b342e] mb-2">{fac.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{fac.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. STRATEGIC LOCATION & WALKING PROXIMITY */}
      <section className="py-16 bg-[#eef5f0] border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/70 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-emerald-700" />
                Prime Connectivity
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b342e] leading-tight">
                Where Are We Located?
              </h2>

              <div className="p-5 rounded-2xl bg-white border border-emerald-200/80 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-base text-[#1b342e]">Greens Women’s Hostel (Adyar Main)</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      No. 14/8, 11th Cross Street, Sasthri Nagar, Adyar, Chennai – 600 020, Tamil Nadu.
                    </p>
                    <p className="text-xs text-emerald-700 font-semibold mt-2">
                      Landmark: Just behind Adyar Bus Depot & Madhya Kailash Railway Station.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                24 hours continuous transport from OMR IT corridor makes it effortless for software engineers and corporate executives 
                to commute to and from their office campuses. The hostel is surrounded by leading multi-specialty hospitals, banks, supermarkets, and dining hubs.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Greens+Womens+Hostel+Adyar+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#1b342e] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#284c42] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#86c37c]" /> Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:+918939915577"
                  className="px-5 py-2.5 rounded-xl bg-white border border-emerald-200 text-[#1b342e] text-xs font-bold flex items-center gap-2 hover:bg-emerald-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" /> Call for Directions
                </a>
              </div>
            </div>

            {/* Walking Distance Matrix */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-emerald-100">
                <h3 className="font-bold text-lg text-[#1b342e] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  Walking Distance & Commute Advantages
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {NEARBY_LANDMARKS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100/80 hover:bg-emerald-50 transition-colors"
                    >
                      <span className="px-2.5 py-1 rounded bg-[#86c37c]/25 text-emerald-900 font-extrabold text-xs inline-block mb-1.5">
                        {item.distance}
                      </span>
                      <h4 className="font-bold text-sm text-[#1b342e]">{item.place}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. THREE CHENNAI BRANCHES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Building className="w-4 h-4 text-emerald-600" />
            Chennai Network
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b342e]">
            Our 3 Branches Across Key Chennai Hubs
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-1">
            Choose the branch closest to your workplace or university campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THREE_BRANCHES.map((branch, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                branch.active
                  ? 'bg-white border-[#86c37c] shadow-lg ring-1 ring-[#86c37c]/40'
                  : 'bg-white/80 border-emerald-100 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  {branch.rooms}
                </span>
                {branch.active && (
                  <span className="text-[11px] font-bold text-emerald-800 bg-[#86c37c]/30 px-2 py-0.5 rounded-full">
                    Current Page
                  </span>
                )}
              </div>

              <h3 className="font-bold text-lg text-[#1b342e] mb-2">{branch.name}</h3>
              <p className="text-xs text-gray-700 mb-2 leading-relaxed">{branch.address}</p>
              <p className="text-[11px] text-gray-500 mb-4 italic">({branch.landmark})</p>

              <div className="pt-3 border-t border-emerald-50 flex items-center justify-between">
                <a
                  href={`tel:${branch.phone}`}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" /> {branch.phone}
                </a>
                <a
                  href="#booking-enquiry"
                  className="text-xs font-semibold text-emerald-600 hover:underline"
                >
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. BOOKING ENQUIRY & CONTACT SECTION */}
      <section id="booking-enquiry" className="py-20 bg-gradient-to-b from-[#1b342e] to-[#243f40] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#86c37c]/20 border border-[#86c37c]/40 text-[#a3e699] text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-[#e9c86a]" />
                Direct Hostel Admission
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Plan Your Stay or <br />
                <span className="text-[#86c37c]">Visit Us Today</span>
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Rooms fill quickly due to high demand from OMR IT employees and nearby academy students. 
                Submit your inquiry to reserve your bed, schedule a visit, or request daily guest tariffs.
              </p>

              {/* Quick Contact Box */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#86c37c]/20 text-[#86c37c] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200">Admin Desk & Warden Helpline</p>
                    <a href="tel:+918939915577" className="text-base font-bold text-white hover:text-[#86c37c] transition-colors">
                      +91 89399 15577 / +91 89399 25577
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#86c37c]/20 text-[#86c37c] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200">WhatsApp Instant Chat</p>
                    <a
                      href="https://wa.me/918939915577?text=Hi%2C%20I%20am%20interested%20in%20room%20accommodation%20at%20Greens%20Womens%20Hostel%20Adyar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-[#86c37c] transition-colors"
                    >
                      Chat on WhatsApp (+91 89399 15577)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#86c37c]/20 text-[#86c37c] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200">Campus Address</p>
                    <p className="text-xs font-semibold text-white">
                      14/8, 11th Cross St, Sasthri Nagar, Adyar, Chennai 600020
                    </p>
                  </div>
                </div>
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
                    <h3 className="text-2xl font-bold text-[#1b342e]">Enquiry Received Successfully!</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you for contacting Greens Women’s Hostel. Our resident warden / admin desk will call you back shortly on <strong>{bookingPhone}</strong> to confirm room availability and tariff details.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#1b342e] text-white text-xs font-bold hover:bg-[#284c42]"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-xl font-extrabold text-[#1b342e] mb-2">
                      Hostel Admission & Visit Request
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number (WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          value={bookingPhone}
                          onChange={(e) => setBookingPhone(e.target.value)}
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
                          value={bookingEmail}
                          onChange={(e) => setBookingEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Current Role / Status</label>
                        <select
                          value={bookingProfession}
                          onChange={(e) => setBookingProfession(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="Working Professional">Working Professional (IT / Corporate)</option>
                          <option value="College Student">College Student (Undergrad / Postgrad)</option>
                          <option value="Greens Tech Trainee">Greens Tech Course Student</option>
                          <option value="Job Aspirant">Job Aspirant / Interviewee</option>
                          <option value="Short Term Daily Guest">Short Term Daily Guest (Female)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Room Sharing</label>
                        <select
                          value={bookingRoomType}
                          onChange={(e) => setBookingRoomType(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="Single Private Room">Single Private Room</option>
                          <option value="2-Sharing Twin Room">2-Sharing Twin Room (Popular)</option>
                          <option value="3-Sharing Comfort Room">3-Sharing Comfort Room</option>
                          <option value="4 & 5-Sharing Economy Room">4 & 5-Sharing Economy Room</option>
                          <option value="Daily Guest Accommodation">Daily Guest Accommodation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Cooling Preference</label>
                        <select
                          value={bookingAcType}
                          onChange={(e) => setBookingAcType(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="AC Room">Air Conditioned (A/C)</option>
                          <option value="Non-AC Room">Well-Ventilated Non-A/C</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Expected Move-in Date</label>
                        <input
                          type="date"
                          value={bookingMoveInDate}
                          onChange={(e) => setBookingMoveInDate(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Branch</label>
                        <select
                          defaultValue="Adyar"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                        >
                          <option value="Adyar">Adyar Branch (Sasthri Nagar)</option>
                          <option value="OMR">OMR Branch (Thoraipakkam)</option>
                          <option value="Velachery">Velachery Branch</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Specific Requirements / Message</label>
                      <textarea
                        rows={2}
                        value={bookingMessage}
                        onChange={(e) => setBookingMessage(e.target.value)}
                        placeholder="E.g., Vegetarian food preference, two-wheeler parking required, or request a room visit time."
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#86c37c] to-[#5ea154] text-[#1b342e] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    >
                      Confirm & Send Booking Inquiry
                    </button>

                    <p className="text-[11px] text-gray-500 text-center">
                      🔒 Your details are safe with us. We respect privacy and do not share your number.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b342e]">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'What is included in the monthly hostel rent?',
              a: 'The monthly rent covers clean furnished room accommodation, daily housekeeping, 3-time buffet food (hygienic veg & non-veg options), unlimited pure RO drinking water, high-speed Wi-Fi internet, and 24/7 security. Electricity bills are calculated separately as per the actual sub-meter reading.'
            },
            {
              q: 'Are female guests allowed on a daily rental basis?',
              a: 'Yes, female family members, mothers, sisters, and visiting female candidates can stay with us on a convenient daily rent basis subject to room availability and valid female government ID verification.'
            },
            {
              q: 'What are the food serving timings in the dining hall?',
              a: 'We serve Breakfast, Lunch, and Dinner in our spacious dining hall with buffet self-service so residents can enjoy wholesome, home-style meals at their convenience. Additionally, an electric induction stove is accessible for self-service tea, coffee, or warm snacks.'
            },
            {
              q: 'What are the safety and security measures in place?',
              a: 'Safety is our top priority. We have 24/7 professional security guards at the main gate, full CCTV coverage of exterior and common areas, a resident female warden for round-the-clock vigilance, and a ground floor administrative office staffed 24 hours.'
            },
            {
              q: 'How close is the hostel to OMR and public transit?',
              a: 'Our Adyar branch is located just behind Adyar Bus Depot and at a quick walking distance from Madhya Kailash Railway Station. 24-hour public transit connects directly to OMR IT Expressway, TIDEL Park, and Siruseri SIPCOT.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-emerald-100/90 shadow-sm">
              <h4 className="font-bold text-base text-[#1b342e] mb-2">{faq.q}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL 1: PHOTO UPLOAD MANAGER (Upload Real Hostel Images Later) */}
      <AnimatePresence>
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#1b342e]">Upload Real Hostel Photos</h3>
                    <p className="text-xs text-gray-500">Add authentic photos to preview directly in the big showcase</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveUpload} className="space-y-4">
                {/* File Dropzone */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Select Image File *</label>
                  <div className="border-2 border-dashed border-emerald-300 rounded-2xl p-5 text-center bg-emerald-50/50 hover:bg-emerald-50 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {uploadPreview ? (
                      <div className="space-y-2">
                        <img
                          src={uploadPreview}
                          alt="Upload Preview"
                          className="h-36 mx-auto object-cover rounded-xl shadow-sm"
                        />
                        <p className="text-xs text-emerald-700 font-semibold">Click or drag another image to replace</p>
                      </div>
                    ) : (
                      <div className="space-y-2 py-4">
                        <Upload className="w-8 h-8 text-emerald-600 mx-auto" />
                        <p className="text-xs text-gray-700 font-semibold">Click to choose image or drag & drop</p>
                        <p className="text-[11px] text-gray-500">JPG, PNG, WebP supported</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Photo Title *</label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="E.g., 2-Sharing AC Room with Balcony"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Category</label>
                    <select
                      value={uploadCategory}
                      onChange={(e) => setUploadCategory(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm bg-white"
                    >
                      <option value="Bedrooms">Bedrooms</option>
                      <option value="Dining">Dining</option>
                      <option value="Building">Building</option>
                      <option value="Facilities">Facilities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={uploadTags}
                      onChange={(e) => setUploadTags(e.target.value)}
                      placeholder="AC, Attached Bath, Cot"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    value={uploadDesc}
                    onChange={(e) => setUploadDesc(e.target.value)}
                    placeholder="Highlight features like cots, ventilation, study tables, or cleanliness."
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86c37c] text-sm"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs font-bold shadow-md hover:from-emerald-700 hover:to-teal-800"
                  >
                    Add to Gallery
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: DEVELOPER INSTRUCTIONS FOR PERMANENT IMAGES */}
      <AnimatePresence>
        {showDeveloperGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-emerald-100"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-base text-[#1b342e]">How to Add Real Images Permanently</h3>
                </div>
                <button
                  onClick={() => setShowDeveloperGuide(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
                <p>
                  You can test or upload images directly through the <strong>"Upload Real Photos"</strong> button on this page at any time. It will immediately show up in the big cinema viewer and persist in your browser!
                </p>

                <p>
                  To permanently bundle your actual photos in the production codebase:
                </p>

                <ol className="list-decimal pl-4 space-y-1.5 font-mono text-[11px] bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                  <li>Place your photo files inside: <br/><strong className="text-emerald-900">src/assets/hostel/</strong></li>
                  <li>Name them (e.g. <code className="text-teal-800">room_double.jpg</code>, <code className="text-teal-800">dining_hall.jpg</code>, etc.) or add new files.</li>
                  <li>Import them in <strong className="text-emerald-900">HostelFacilities.tsx</strong> and add them to the <code className="text-teal-800">DEFAULT_GALLERY</code> array.</li>
                </ol>

                <p className="text-[11px] text-gray-500 italic">
                  The pre-loaded images currently display our customized, high-definition architectural photos for Greens Women’s Hostel.
                </p>
              </div>

              <div className="mt-5 text-right">
                <button
                  onClick={() => setShowDeveloperGuide(false)}
                  className="px-5 py-2 rounded-xl bg-[#1b342e] text-white text-xs font-bold hover:bg-[#284c42]"
                >
                  Got It, Thanks!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN LIGHTBOX MODE */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Fullscreen Header */}
            <div className="flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm bg-white/10 px-3 py-1 rounded-full">
                  {currentIndex + 1} / {filteredGallery.length}
                </span>
                <h3 className="font-bold text-sm sm:text-base">{currentItem.title}</h3>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Big Center Image in Lightbox */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <img
                src={currentItem.url}
                alt={currentItem.title}
                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
              />

              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Lightbox Footer */}
            <div className="text-center text-xs text-gray-400 z-10">
              Press <strong>Esc</strong> to exit fullscreen • Use arrow keys to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

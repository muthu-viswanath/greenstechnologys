import React, { useRef } from 'react';
import gsap from 'gsap';
import {
  Users2,
  Terminal,
  CalendarCheck2,
  ArrowRight,
  CheckCircle2,
  Building2,
  GraduationCap,
  ShieldCheck,
  Activity,
  Laptop,
  Sparkles,
} from 'lucide-react';

import mentorshipImg from '../assets/carousel/story_4_greens_mentorship.jpg';
import sandboxImg from '../assets/whyus/classroom_mentorship.jpg';
import placementImg from '../assets/carousel/story_5_dream_job_triumph.jpg';

interface PedagogyPillar {
  id: string;
  category: string;
  image: string;
  themeColor: {
    badgeBg: string;
    badgeText: string;
    spotlight: string;
    wash: string;
    tagBg: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  narrative: string;
  chips: string[];
  proofBadge: string;
  specs: { title: string; desc: string }[];
}

const pillars: PedagogyPillar[] = [
  {
    id: 'mentorship',
    category: 'Tier-1 Corporate Faculty',
    image: mentorshipImg,
    themeColor: {
      badgeBg: 'bg-emerald-500/20 border-emerald-400/40',
      badgeText: 'text-emerald-300',
      spotlight: 'radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, transparent 70%)',
      wash: 'bg-emerald-950',
      tagBg: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-200',
    },
    icon: Users2,
    headline: 'Trained by Working Engineers from Tier-1 MNCs',
    narrative:
      'We do not hire academic lecturers. Batches are led by practicing Technical Leads and Architects from Chennai’s major tech corridors (TCS, Infosys, Cognizant, Wipro) teaching real enterprise design patterns and production instincts.',
    chips: ['TCS Lead Mentors', 'Cognizant Architects', 'Infosys SDETs', 'Weekly PR Reviews'],
    proofBadge: 'Active MNC Practitioners',
    specs: [
      { title: '12+ Years Avg. Experience', desc: 'Active engineering leads, not theoretical instructors.' },
      { title: 'Corporate PR Reviews', desc: 'Enterprise pull request reviews on your code every week.' },
      { title: 'Direct 1-on-1 Mentorship', desc: 'Unrestricted doubt clearance during and after sessions.' },
    ],
  },
  {
    id: 'methodology',
    category: 'Production Sandboxes',
    image: sandboxImg,
    themeColor: {
      badgeBg: 'bg-cyan-500/20 border-cyan-400/40',
      badgeText: 'text-cyan-300',
      spotlight: 'radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, transparent 70%)',
      wash: 'bg-cyan-950',
      tagBg: 'bg-cyan-950/60 border-cyan-500/30 text-cyan-200',
    },
    icon: Terminal,
    headline: '100% Practical Labs. Zero Slide-Deck Boredom.',
    narrative:
      'Slide reading does not build software engineers. Every module operates within live cloud sandboxes, containerized enterprise setups, and realistic production incident drills from Day One.',
    chips: ['Cloud Terminal', 'Live Containers', 'Handout Drills', '24/7 Access'],
    proofBadge: 'Hands-on Lab Handouts',
    specs: [
      { title: 'Structured Lab Handouts', desc: 'Comprehensive technical workout sheets for every single topic.' },
      { title: 'Live Incident Triage Drills', desc: 'Debug real production race conditions, latency spikes, and deadlocks.' },
      { title: '24/7 Chennai Workstations', desc: 'Dedicated high-speed machines equipped with personal mentor support.' },
    ],
  },
  {
    id: 'transparency',
    category: 'Guaranteed Transparency',
    image: placementImg,
    themeColor: {
      badgeBg: 'bg-amber-500/20 border-amber-400/40',
      badgeText: 'text-amber-300',
      spotlight: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, transparent 70%)',
      wash: 'bg-amber-950',
      tagBg: 'bg-amber-950/60 border-amber-500/30 text-amber-200',
    },
    icon: CalendarCheck2,
    headline: 'Day-to-Day Course Plan Shared Before Registration',
    narrative:
      'Transparency is our founding principle. Before you enroll or pay any fee, receive the exact Day-by-Day course roadmap detailing every concept, lab exercise, and milestone—backed by 500+ corporate hiring partners.',
    chips: ['Day-by-Day Plan', '500+ Hiring MNCs', 'Mock Panels', 'Direct Interviews'],
    proofBadge: '100% Transparent Blueprint',
    specs: [
      { title: 'Day-to-Day Syllabus Upfront', desc: 'Complete daily learning calendar provided prior to enrollment.' },
      { title: '500+ Corporate Hiring Partners', desc: 'Direct corporate interview pipelines across Chennai and global MNCs.' },
      { title: 'Continuous Career Backing', desc: 'Rigorous technical mock interviews until you secure your offer.' },
    ],
  },
];

export default function WhyLearnFromUs() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP 3D Magnetic Parallax & Dynamic Light Follower on Hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.35,
      ease: 'power2.out',
    });

    const img = card.querySelector('.card-bg-image');
    if (img) {
      gsap.to(img, {
        scale: 1.12,
        x: (x - centerX) * 0.03,
        y: (y - centerY) * 0.03,
        duration: 0.35,
        ease: 'power2.out',
      });
    }

    const spotlight = card.querySelector('.card-spotlight') as HTMLElement;
    if (spotlight) {
      gsap.to(spotlight, {
        opacity: 1,
        left: x - 175,
        top: y - 175,
        duration: 0.15,
        ease: 'power1.out',
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)',
    });

    const img = card.querySelector('.card-bg-image');
    if (img) {
      gsap.to(img, {
        scale: 1.05,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    }

    const spotlight = card.querySelector('.card-spotlight') as HTMLElement;
    if (spotlight) {
      gsap.to(spotlight, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section className="relative w-full py-24 bg-slate-950 text-white border-y border-slate-800/80 overflow-hidden select-none">
      {/* Background radial ambient lights & grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Greens Pedagogy Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineered around real corporate demands.{' '}
            <span className="text-emerald-400 font-serif italic font-normal">
              Not textbook theory.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            For nearly a decade, Greens Technologys has bridged the gap between academic education and high-paying IT engineering careers in Chennai through genuine corporate apprenticeships.
          </p>
        </div>

        {/* 3 Creative Cinematic GSAP 3D Interactive Parallax Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 bg-slate-900/90 shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[560px] cursor-pointer will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 1. Cinematic Background Image with GSAP Parallax */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src={pillar.image}
                    alt={pillar.headline}
                    className="card-bg-image w-full h-full object-cover object-center scale-105 will-change-transform"
                  />
                  {/* Deep dark gradient scrim for crystal clear readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 via-50% to-slate-950/45" />
                  {/* Subtle color wash overlay */}
                  <div className={`absolute inset-0 ${pillar.themeColor.wash} mix-blend-overlay opacity-30`} />
                </div>

                {/* 2. GSAP Dynamic Cursor Spotlight Reflection */}
                <div
                  className="card-spotlight pointer-events-none absolute w-[350px] h-[350px] rounded-full blur-2xl opacity-0 transition-opacity duration-300 z-10"
                  style={{ background: pillar.themeColor.spotlight }}
                />

                {/* 3. Card Content Floating in 3D Space */}
                <div className="relative z-20 p-7 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    {/* Header: Category Glass Badge & Glowing Icon Container */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-md border ${pillar.themeColor.badgeBg} ${pillar.themeColor.badgeText}`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{pillar.category}</span>
                      </span>

                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-slate-950 shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors leading-snug mb-3 tracking-tight">
                      {pillar.headline}
                    </h3>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                      {pillar.narrative}
                    </p>

                    {/* Creative Glass Chips Box */}
                    <div className="p-3.5 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {pillar.chips.map((chip, i) => (
                          <span
                            key={i}
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border backdrop-blur-sm transition-all duration-200 ${pillar.themeColor.tagBg}`}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Value Highlights */}
                    <div className="space-y-2.5 mb-6">
                      {pillar.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <strong className="text-white block font-semibold leading-tight">
                              {spec.title}
                            </strong>
                            <span className="text-slate-400 text-[11px] leading-normal block mt-0.5">
                              {spec.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Proof Tag & Hover Trigger */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs mt-auto">
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-300 bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-500/30 backdrop-blur-md">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{pillar.proofBadge}</span>
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-emerald-400 group-hover:border-emerald-400 text-slate-300 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-md">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Multi-Mode Delivery Channels (Classroom, Corporate, Virtual, Video) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Laptop className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Classroom Training</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Air-conditioned high-speed lab centers across Chennai: OMR, Velachery, Tambaram, Anna Nagar.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 group">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Live Interactive Online</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Two-way interactive virtual screens with real-time screen sharing and direct code review sessions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 group">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Building2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">Corporate Bootcamps</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Custom enterprise engineering upskilling tailored to modern enterprise development stacks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 group">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">Self-Paced Architecture</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lifetime access to recorded session deep-dives, lab handouts, and production test suites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Users
} from 'lucide-react';

interface NextCohortCTAProps {
  onEnrollClick?: () => void;
}

const techDomains = [
  'Generative AI & LLMs',
  'Full Stack Java & Cloud',
  'DevOps & Multi-Cloud SRE',
  'Python & Data Science',
  'Automation SDET Testing',
  'Workflow AI with N8N',
];

export default function NextCohortCTA({ onEnrollClick }: NextCohortCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleStaticRef = useRef<HTMLSpanElement>(null);
  const cyclingTextRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const perksRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);

  const [roleIndex, setRoleIndex] = useState(0);
  const entranceTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const handleEnrollClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#059669', '#10b981', '#f59e0b', '#0284c7', '#34d399'],
    });

    if (onEnrollClick) {
      onEnrollClick();
    } else {
      const el = document.getElementById('callback-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // 1. Cycling GSAP Text Animation for Tech Domains
  useEffect(() => {
    const interval = setInterval(() => {
      if (cyclingTextRef.current) {
        // Animate out
        gsap.to(cyclingTextRef.current, {
          y: -18,
          opacity: 0,
          filter: 'blur(5px)',
          duration: 0.35,
          ease: 'power2.in',
          onComplete: () => {
            setRoleIndex((prev) => (prev + 1) % techDomains.length);
          },
        });
      }
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // When roleIndex changes, animate in with GSAP elastic bounce
  useEffect(() => {
    if (cyclingTextRef.current) {
      gsap.fromTo(
        cyclingTextRef.current,
        { y: 22, opacity: 0, filter: 'blur(5px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.55,
          ease: 'back.out(1.8)',
        }
      );
    }
  }, [roleIndex]);

  // 2. Entrance Animation triggered by IntersectionObserver on Scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const triggerEntrance = () => {
      if (entranceTimelineRef.current) {
        entranceTimelineRef.current.kill();
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -16, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 }
        );
      }

      if (titleStaticRef.current) {
        const words = titleStaticRef.current.querySelectorAll('.cta-word');
        if (words.length > 0) {
          tl.fromTo(
            words,
            { opacity: 0, y: 28, rotateX: -35 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.6,
              stagger: 0.05,
            },
            '-=0.35'
          );
        }
      }

      if (cyclingTextRef.current) {
        tl.fromTo(
          cyclingTextRef.current,
          { opacity: 0, scale: 0.9, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5 },
          '-=0.25'
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );
      }

      if (perksRef.current) {
        tl.fromTo(
          perksRef.current.children,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.07 },
          '-=0.25'
        );
      }

      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current,
          { opacity: 0, scale: 0.94, x: 20 },
          { opacity: 1, scale: 1, x: 0, duration: 0.6 },
          '-=0.35'
        );
      }

      entranceTimelineRef.current = tl;
    };

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerEntrance();
            hasAnimated = true;
          } else {
            if (hasAnimated && entry.boundingClientRect.top > window.innerHeight) {
              hasAnimated = false;
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (entranceTimelineRef.current) {
        entranceTimelineRef.current.kill();
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white border-y border-slate-200 py-12 sm:py-14 md:py-16 text-slate-800"
    >
      {/* Full-width Responsive Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Urgent Tag, Animated Headline, Subtitle, Trust Badges */}
          <div className="w-full lg:max-w-2xl text-center lg:text-left space-y-3.5">
            
            {/* Live Cohort Status Tag (Clean White with Neutral Border) */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold tracking-wide shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Limited Seats Available for Next Cohort</span>
              <span className="text-slate-300">•</span>
              <span className="text-amber-600 font-bold">Only 4 Seats Left</span>
            </div>

            {/* GSAP Split Word Animated Headline with Proper Spacing on Pure White */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.25] text-slate-900">
              <span ref={titleStaticRef} className="perspective-1000 inline-block">
                <span className="cta-word inline-block mr-2 sm:mr-2.5">Ready</span>
                <span className="cta-word inline-block mr-2 sm:mr-2.5">to</span>
                <span className="cta-word inline-block mr-2 sm:mr-2.5">Accelerate</span>
                <span className="cta-word inline-block mr-2 sm:mr-2.5">Your</span>
                <span className="cta-word inline-block mr-2 sm:mr-2.5">Career</span>
                <span className="cta-word inline-block mr-2 sm:mr-2.5">in</span>
              </span>
              <br className="hidden sm:inline" />
              {/* Cycling animated text */}
              <span
                ref={cyclingTextRef}
                className="inline-block font-black text-emerald-700 ml-0 sm:ml-1"
              >
                {techDomains[roleIndex]}?
              </span>
            </h2>

            {/* Concise Value Subtitle */}
            <p
              ref={subtitleRef}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0"
            >
              Join thousands of successful professionals who transitioned from non-tech or service desks to top-tier development, DevOps, and AI roles.
            </p>

            {/* Inline Micro-Proof Badges in Crisp Clean White Cards */}
            <div
              ref={perksRef}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-medium shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Placement Assurance</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-medium shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>140% - 220% Avg Hike</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-medium shadow-xs">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                <span>15 Students / Batch</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Compact Action Center */}
          <div
            ref={ctaGroupRef}
            className="w-full lg:w-auto flex flex-col items-center lg:items-end shrink-0 space-y-3"
          >
            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              {/* Primary Enrollment Button */}
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEnrollClick}
                className="relative group w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#1d4c38] via-[#255e45] to-[#1d4c38] hover:from-[#163c2c] hover:to-[#174130] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5 overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Enroll in Next Batch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Sheen Animation */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
              </motion.button>

              {/* Secondary Advisor Button (WhatsApp) */}
              <motion.a
                whileHover={{ scale: 1.03, backgroundColor: '#f8fafc' }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/918939915577?text=Hi%20Greens%20Technologies,%20I%20would%20like%20to%20talk%20to%20a%20career%20advisor%20regarding%20the%20upcoming%20batch."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all text-slate-800 shadow-xs flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Talk to Advisor</span>
              </motion.a>
            </div>

            {/* Micro reassurance line under buttons */}
            <p className="text-[11px] text-slate-500 text-center lg:text-right flex items-center justify-center lg:justify-end gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Free 1-on-1 Profile Assessment • No Commitment</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

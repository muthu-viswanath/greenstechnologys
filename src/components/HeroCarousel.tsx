import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  GraduationCap,
  Award,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

// South Indian Authentic Story Carousel Images
import slide1Img from '../assets/carousel/story_1_tech_evolution.jpg';
import slide2Img from '../assets/carousel/story_2_industry_expectations.jpg';
import slide3Img from '../assets/carousel/story_3_learning_gap.jpg';
import slide4Img from '../assets/carousel/story_4_greens_mentorship.jpg';
import slide5Img from '../assets/carousel/story_5_dream_job_triumph.jpg';

interface StorySlide {
  id: number;
  chapter: string;
  badge: string;
  badgeIcon: React.ElementType;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
  accentColor: string;
  glowColor: string;
}

const slides: StorySlide[] = [
  {
    id: 1,
    chapter: '01. The Tech Evolution',
    badge: 'India’s Tech Leap',
    badgeIcon: Cpu,
    titlePrefix: 'How The Technology Landscape',
    titleHighlight: 'Transformed Forever',
    titleSuffix: 'Into AI & Cloud',
    description:
      'From legacy IT server rooms and static maintenance tasks to cutting-edge Generative AI, cloud-native microservices, and autonomous data pipelines across India’s leading tech corridors.',
    highlights: ['Generative AI Revolution', 'Autonomous Microservices', 'High-Speed Cloud Ops'],
    ctaText: 'Explore Tech Shifts',
    ctaLink: '#curriculum',
    image: slide1Img,
    accentColor: '#86c37c',
    glowColor: 'rgba(134, 195, 124, 0.4)',
  },
  {
    id: 2,
    chapter: '02. Industry Expectations',
    badge: 'What Top MNCs Demand Today',
    badgeIcon: Layers,
    titlePrefix: 'The IT Sector Expects',
    titleHighlight: 'Agile Problem Solvers',
    titleSuffix: 'Not Just Syntax Typers',
    description:
      'Tier-1 MNCs and fast-growing product startups in Chennai and Bangalore require engineers who can architect distributed systems, optimize live Kubernetes clusters, and deploy enterprise AI models.',
    highlights: ['Production-Grade Coding', 'System Design & Scalability', 'DevOps & CI/CD Pipelines'],
    ctaText: 'View In-Demand Skills',
    ctaLink: '#curriculum',
    image: slide2Img,
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
  },
  {
    id: 3,
    chapter: '03. The Academic Gap',
    badge: 'The Conventional Dilemma',
    badgeIcon: TrendingUp,
    titlePrefix: 'Why Traditional Syllabuses',
    titleHighlight: 'Fall Short',
    titleSuffix: 'In Production Readiness',
    description:
      'College degrees focus on rote textbook theory. Without real production sandboxes and live debugging on enterprise codebases, fresh graduates find campus-to-corporate transitions daunting.',
    highlights: ['Zero Live Production Context', 'Outdated College Curriculum', 'Rote Memorization vs Real Building'],
    ctaText: 'Bridge The Skill Gap',
    ctaLink: '#callback-form',
    image: slide3Img,
    accentColor: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.4)',
  },
  {
    id: 4,
    chapter: '04. The Greens Solution',
    badge: 'Transformative Mentorship',
    badgeIcon: GraduationCap,
    titlePrefix: 'How Greens Technologys',
    titleHighlight: 'Architects Your Mastery',
    titleSuffix: 'With Live Projects',
    description:
      'Train directly under seasoned South Indian tech architects with 15+ years of Tier-1 MNC experience. Build live full-stack projects, undergo rigorous mock interviews, and master modern tech stacks.',
    highlights: ['1-on-1 Senior Tech Mentors', 'Real-time Enterprise Projects', 'Daily Mock Technical Rounds'],
    ctaText: 'Meet Our Mentors',
    ctaLink: '#callback-form',
    image: slide4Img,
    accentColor: '#4ade80',
    glowColor: 'rgba(74, 222, 128, 0.4)',
  },
  {
    id: 5,
    chapter: '05. The Triumph',
    badge: 'Guaranteed Career Success',
    badgeIcon: Award,
    titlePrefix: 'Step Into Your',
    titleHighlight: 'Dream IT Career',
    titleSuffix: 'With Confident Pride',
    description:
      'Over 50,000+ South Indian graduates and working professionals placed in top MNCs like TCS, Infosys, Cognizant, Wipro, and global product teams with high compensation packages.',
    highlights: ['100% Placement Assistance', '500+ Top Hiring Partners', 'Alumni in 40+ Countries'],
    ctaText: 'Claim Your Dream Offer',
    ctaLink: '#callback-form',
    image: slide5Img,
    accentColor: '#e9c86a',
    glowColor: 'rgba(233, 200, 106, 0.4)',
  },
];

const AUTOPLAY_DURATION = 7; // seconds per slide

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const slideImageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const contentBoxRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);

  // Touch swipe support for mobile
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Trigger celebration on slide 5
  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#86c37c', '#3f6f52', '#e9c86a', '#38bdf8', '#ffffff'],
    });
  }, []);

  // GSAP Slide Transition Animation
  const animateSlideChange = useCallback(
    (index: number) => {
      if (!containerRef.current || !contentBoxRef.current) return;

      const activeImg = slideImageRefs.current[index];
      const otherImgs = slideImageRefs.current.filter((_, i) => i !== index);

      // Fade out other images and fade in current active image with Ken Burns effect
      if (otherImgs.length) {
        gsap.to(otherImgs, {
          opacity: 0,
          scale: 1.04,
          duration: 0.8,
          ease: 'power2.inOut',
        });
      }

      if (activeImg) {
        gsap.fromTo(
          activeImg,
          { opacity: 0, scale: 1.12 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.3,
            ease: 'power3.out',
          },
        );
      }

      // Animate text & interactive elements using GSAP timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const badge = contentBoxRef.current.querySelector('.carousel-badge');
      const title = contentBoxRef.current.querySelector('.carousel-title');
      const desc = contentBoxRef.current.querySelector('.carousel-desc');
      const tags = contentBoxRef.current.querySelectorAll('.carousel-tag');
      const cta = contentBoxRef.current.querySelector('.carousel-cta');

      tl.fromTo(
        badge,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
        .fromTo(
          title,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          '-=0.3'
        )
        .fromTo(
          desc,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          '-=0.35'
        )
        .fromTo(
          tags,
          { scale: 0.9, opacity: 0, y: 10 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          cta,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 },
          '-=0.2'
        );

      if (index === 4) {
        triggerConfetti();
      }
    },
    [triggerConfetti]
  );

  // Restart GSAP auto-scroll progress bar
  const startProgressBar = useCallback(() => {
    if (!progressBarRef.current) return;

    if (progressTweenRef.current) {
      progressTweenRef.current.kill();
    }

    gsap.set(progressBarRef.current, { width: '0%' });

    if (!isPlaying) return;

    progressTweenRef.current = gsap.to(progressBarRef.current, {
      width: '100%',
      duration: AUTOPLAY_DURATION,
      ease: 'none',
      onComplete: () => {
        goToNext();
      },
    });
  }, [isPlaying]);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
    animateSlideChange(idx);
  };

  const goToNext = useCallback(() => {
    setCurrent((prev) => {
      const next = (prev + 1) % slides.length;
      animateSlideChange(next);
      return next;
    });
  }, [animateSlideChange]);

  const goToPrev = () => {
    setCurrent((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      animateSlideChange(next);
      return next;
    });
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    const diffY = touchStartYRef.current - e.changedTouches[0].clientY;

    // Horizontal swipe threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Run on slide change or autoplay state change
  useEffect(() => {
    animateSlideChange(current);
    startProgressBar();

    return () => {
      if (progressTweenRef.current) {
        progressTweenRef.current.kill();
      }
    };
  }, [current, isPlaying, animateSlideChange, startProgressBar]);

  const activeSlide = slides[current];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden bg-slate-950 text-white select-none border-b border-white/10"
      onMouseEnter={() => {
        setIsPlaying(false);
        progressTweenRef.current?.pause();
      }}
      onMouseLeave={() => {
        setIsPlaying(true);
        progressTweenRef.current?.play();
      }}
      aria-roledescription="carousel"
      aria-label="South Indian Technology and Career Story Carousel"
    >
      {/* Full Width Container - Compact Height */}
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[540px] lg:h-[580px] flex items-center">
        {/* Layer 1: Background Images with GSAP Crossfade & Parallax Zoom */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              ref={(el) => (slideImageRefs.current[index] = el)}
              src={slide.image}
              alt={slide.chapter}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 pointer-events-none ${
                index === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Layer 2: High-contrast Dark Gradients optimized for Mobile & Desktop Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/40 md:bg-gradient-to-r md:from-slate-950/95 md:via-slate-950/80 md:to-slate-950/30 md:w-3/4 pointer-events-none" />

          {/* Dynamic Color Hue Glow */}
          <div
            className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-[100px] sm:blur-[120px] transition-all duration-1000 opacity-40 pointer-events-none"
            style={{ backgroundColor: activeSlide.accentColor }}
          />
        </div>

        {/* Layer 3: Narrative Content (GSAP Animated) */}
        <div
          ref={contentBoxRef}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full py-6 sm:py-8 md:py-10"
        >
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            {/* Live Badge */}
            <div className="carousel-badge flex flex-wrap items-center gap-2 sm:gap-3">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderColor: activeSlide.accentColor,
                  color: activeSlide.accentColor,
                }}
              >
                <BadgeIcon className="w-3.5 h-3.5" />
                <span>{activeSlide.badge}</span>
              </div>
            </div>

            {/* Dynamic Animated Title */}
            <h2 className="carousel-title text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-white">
              {activeSlide.titlePrefix}{' '}
              <span
                className="underline decoration-wavy decoration-2 transition-colors duration-500"
                style={{
                  color: activeSlide.accentColor,
                  textDecorationColor: activeSlide.accentColor,
                }}
              >
                {activeSlide.titleHighlight}
              </span>{' '}
              {activeSlide.titleSuffix}
            </h2>

            {/* Narrative Description */}
            <p className="carousel-desc text-xs sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
              {activeSlide.description}
            </p>

            {/* Micro Feature Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2.5 pt-1 sm:pt-2">
              {activeSlide.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="carousel-tag inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold bg-slate-900/80 border border-white/15 text-slate-200 backdrop-blur-sm shadow-sm"
                >
                  <CheckCircle2
                    className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0"
                    style={{ color: activeSlide.accentColor }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Interactive Call-To-Action Buttons */}
            <div className="carousel-cta pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={activeSlide.ctaLink}
                onClick={current === 4 ? triggerConfetti : undefined}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
                style={{
                  backgroundColor: activeSlide.accentColor,
                  boxShadow: `0 10px 25px -5px ${activeSlide.glowColor}`,
                }}
              >
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#callback-form"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-xs sm:text-sm w-full sm:w-auto"
              >
                <span>Book Free Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Arrow Controls (Visible and touch-optimized) */}
        <button
          onClick={goToPrev}
          aria-label="Previous story slide"
          className="hidden sm:flex absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md items-center justify-center transition-all hover:scale-110 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>

        <button
          onClick={goToNext}
          aria-label="Next story slide"
          className="hidden sm:flex absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md items-center justify-center transition-all hover:scale-110 shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
      </div>

      {/* Layer 4: Modern Bottom Bar with Story Chapters & Auto-scroll Progress Line */}
      <div className="relative z-30 bg-slate-950/95 border-t border-white/10 backdrop-blur-md px-3 sm:px-6 py-3 sm:py-4">
        {/* Animated Auto-scroll Progress Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-white/10 overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full transition-all"
            style={{
              backgroundColor: activeSlide.accentColor,
              boxShadow: `0 0 10px ${activeSlide.accentColor}`,
            }}
          />
        </div>

        <div className="flex items-center justify-center">
          {/* 5 Story Chapter Buttons (Horizontally scrollable on mobile) */}
          <div className="flex items-center justify-start md:justify-center gap-1.5 sm:gap-3 w-full overflow-x-auto pb-1 md:pb-0 scrollbar-none no-scrollbar">
            {slides.map((s, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-white border border-white/30 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all shrink-0"
                    style={{
                      backgroundColor: isActive ? s.accentColor : 'rgba(255,255,255,0.3)',
                    }}
                  />
                  <span>{s.chapter}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

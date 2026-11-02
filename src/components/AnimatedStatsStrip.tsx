import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

export default function AnimatedStatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);

  // States starting from 5
  const [students, setStudents] = useState(5);
  const [partners, setPartners] = useState(5);
  const [support, setSupport] = useState(5);
  const [rating, setRating] = useState(1.0);

  const tweenRef = useRef<gsap.core.Timeline | null>(null);

  // Animate from 5 every time
  const triggerAnimation = useCallback(() => {
    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    const state = {
      s: 5,
      p: 5,
      sup: 5,
      r: 1.0,
    };

    setStudents(5);
    setPartners(5);
    setSupport(5);
    setRating(1.0);

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // GSAP staggered reveal on the 4 stats
    if (containerRef.current) {
      tl.fromTo(
        containerRef.current.querySelectorAll('.stat-col'),
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 }
      );
    }

    // Number counting from 5
    tl.to(
      state,
      {
        s: 50000,
        p: 500,
        sup: 100,
        r: 4.9,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          setStudents(Math.floor(state.s));
          setPartners(Math.floor(state.p));
          setSupport(Math.floor(state.sup));
          setRating(Number(state.r.toFixed(1)));
        },
      },
      0.1
    );

    tweenRef.current = tl;
  }, []);

  // IntersectionObserver to re-trigger on every scroll into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let inView = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inView = true;
            triggerAnimation();
          } else {
            if (inView) {
              setStudents(5);
              setPartners(5);
              setSupport(5);
              setRating(1.0);
              inView = false;
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [triggerAnimation]);

  return (
    <section className="relative w-full py-16 md:py-20 select-none">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {/* 1. Students Placed */}
          <div className="stat-col flex flex-col items-center text-center px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#162a2b] font-mono">
              {students.toLocaleString()}
              <span className="text-emerald-700 font-sans">+</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-700 mt-2 uppercase tracking-wide">
              Students Placed
            </p>
          </div>

          {/* 2. Hiring Partners */}
          <div className="stat-col flex flex-col items-center text-center px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#162a2b] font-mono">
              {partners}
              <span className="text-emerald-700 font-sans">+</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-700 mt-2 uppercase tracking-wide">
              Hiring Partners
            </p>
          </div>

          {/* 3. Placement Support */}
          <div className="stat-col flex flex-col items-center text-center px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#162a2b] font-mono">
              {support}
              <span className="text-emerald-700 font-sans">%</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-700 mt-2 uppercase tracking-wide">
              Placement Support
            </p>
          </div>

          {/* 4. Student Rating */}
          <div className="stat-col flex flex-col items-center text-center px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#162a2b] font-mono">
              {rating.toFixed(1)}
              <span className="text-2xl sm:text-3xl text-slate-400 font-sans font-bold">/5</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-700 mt-2 uppercase tracking-wide">
              Student Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

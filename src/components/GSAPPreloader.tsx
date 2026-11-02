import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import logoWhite from '../assets/logo_white.png';

interface GSAPPreloaderProps {
  onComplete: () => void;
}

export default function GSAPPreloader({ onComplete }: GSAPPreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topShutterRef = useRef<HTMLDivElement>(null);
  const bottomShutterRef = useRef<HTMLDivElement>(null);
  const centerStageRef = useRef<HTMLDivElement>(null);
  const laserBeamRef = useRef<HTMLDivElement>(null);
  const laserPointRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);
  const glowBackdropRef = useRef<HTMLDivElement>(null);
  const counterNumberRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          onComplete();
        }
      });

      // 1. Initial State
      gsap.set(topShutterRef.current, { yPercent: 0 });
      gsap.set(bottomShutterRef.current, { yPercent: 0 });
      gsap.set(centerStageRef.current, { opacity: 1, scale: 1 });

      // Laser line starts collapsed at center
      gsap.set(laserBeamRef.current, { scaleX: 0, transformOrigin: 'center center' });
      gsap.set(laserPointRef.current, { opacity: 0, scale: 0 });

      // Logo mask starts closed (clipped vertically to middle seam)
      gsap.set(logoWrapperRef.current, {
        clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
        opacity: 0,
        scale: 0.96
      });
      gsap.set(logoImgRef.current, { filter: 'brightness(1.5) contrast(1.1)' });

      // Sheen starts off to the left
      gsap.set(sheenRef.current, { x: '-150%', opacity: 0 });
      gsap.set(glowBackdropRef.current, { opacity: 0, scale: 0.7 });
      gsap.set(subtextRef.current, { opacity: 0, y: 12 });

      // 2. Phase 1: Laser Ignition & Horizontal Expansion (0.0s - 0.5s)
      masterTl
        // Laser spark ignites at center
        .to(laserPointRef.current, {
          opacity: 1,
          scale: 1.5,
          duration: 0.25,
          ease: 'power2.out'
        })
        // Laser line draws across the horizon with energetic mint-emerald glow
        .to(
          laserBeamRef.current,
          {
            scaleX: 1,
            duration: 0.55,
            ease: 'expo.out'
          },
          '-=0.1'
        )
        // Background ambient glow blooms behind logo
        .to(
          glowBackdropRef.current,
          {
            opacity: 0.65,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          },
          '-=0.4'
        );

      // 3. Phase 2: Logo Unveils from the Laser Seam (0.45s - 1.1s)
      masterTl
        .to(
          logoWrapperRef.current,
          {
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
            opacity: 1,
            scale: 1,
            duration: 0.65,
            ease: 'power3.inOut'
          },
          '-=0.35'
        )
        .to(
          logoImgRef.current,
          {
            filter: 'brightness(1) contrast(1)',
            duration: 0.5,
            ease: 'power2.out'
          },
          '-=0.3'
        )
        // Sheen light sweep glints across the letters
        .fromTo(
          sheenRef.current,
          { x: '-120%', opacity: 0 },
          { x: '180%', opacity: 1, duration: 0.75, ease: 'power2.inOut' },
          '-=0.35'
        )
        // Tech Subtitle & Counter fade in
        .to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          },
          '-=0.4'
        );

      // 4. Phase 3: High-Tech Percentage Counter 0 -> 100
      const counterObj = { val: 0 };
      masterTl.to(
        counterObj,
        {
          val: 100,
          duration: 0.85,
          ease: 'power2.inOut',
          onUpdate: () => {
            const current = Math.round(counterObj.val);
            setPercent(current);
            if (counterNumberRef.current) {
              counterNumberRef.current.textContent = current < 10 ? `0${current}` : `${current}`;
            }
          }
        },
        '-=0.6'
      );

      // 5. Phase 4: Climax & The Dual Shutter Split Reveal (1.5s - 2.2s)
      masterTl
        // Brief energetic bloom on logo
        .to(logoWrapperRef.current, {
          scale: 1.05,
          filter: 'drop-shadow(0 0 30px rgba(134,195,124,0.85))',
          duration: 0.25,
          ease: 'power1.out'
        })
        .to([subtextRef.current, laserPointRef.current], {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in'
        }, '<')
        // Center stage dissolves into light
        .to(centerStageRef.current, {
          opacity: 0,
          scale: 1.1,
          duration: 0.35,
          ease: 'power2.in'
        })
        // The Top & Bottom Architectural Shutters Split Open!
        .to(
          topShutterRef.current,
          {
            yPercent: -100,
            duration: 0.75,
            ease: 'expo.inOut'
          },
          '-=0.15'
        )
        .to(
          bottomShutterRef.current,
          {
            yPercent: 100,
            duration: 0.75,
            ease: 'expo.inOut'
          },
          '<'
        );
    }, containerRef);

    return () => {
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden"
      aria-label="Greens Technologys Preloader"
    >
      {/* ======================================================== */}
      {/* 1. TOP SHUTTER CURTAIN PANEL                             */}
      {/* ======================================================== */}
      <div
        ref={topShutterRef}
        className="absolute top-0 left-0 right-0 h-[50.5vh] bg-[#071314] border-b border-emerald-500/20 flex flex-col justify-end overflow-hidden"
        style={{ willChange: 'transform' }}
      >
        {/* Soft emerald radial aura inside top curtain */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#86c37c]/10 rounded-full blur-[100px] pointer-events-none" />
        {/* Subtle grid accent */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #86c37c 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. BOTTOM SHUTTER CURTAIN PANEL                          */}
      {/* ======================================================== */}
      <div
        ref={bottomShutterRef}
        className="absolute bottom-0 left-0 right-0 h-[50.5vh] bg-[#071314] border-t border-emerald-500/20 flex flex-col justify-start overflow-hidden"
        style={{ willChange: 'transform' }}
      >
        {/* Soft gold radial aura inside bottom curtain */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#e9c86a]/10 rounded-full blur-[100px] pointer-events-none" />
        {/* Subtle grid accent */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #86c37c 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 3. CENTER SEAM LASER BEAM                                */}
      {/* ======================================================== */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
        {/* Glowing Laser Line */}
        <div
          ref={laserBeamRef}
          className="w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-[#86c37c] to-transparent shadow-[0_0_15px_#86c37c,0_0_30px_rgba(134,195,124,0.6)]"
        />

        {/* Central Laser Ignition Spark */}
        <div
          ref={laserPointRef}
          className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_20px_#ffffff,0_0_35px_#86c37c]"
        />
      </div>

      {/* ======================================================== */}
      {/* 4. CENTRAL HERO LOGO & STAGE                             */}
      {/* ======================================================== */}
      <div
        ref={centerStageRef}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-6"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Radial Glow Aura Behind Logo */}
        <div
          ref={glowBackdropRef}
          className="absolute w-[440px] h-[220px] bg-gradient-to-r from-[#86c37c]/25 via-[#38bdf8]/20 to-[#e9c86a]/20 rounded-full blur-[70px] -z-10"
        />

        {/* Wide Logo Wrapper with Shimmer Mask */}
        <div
          ref={logoWrapperRef}
          className="relative overflow-hidden py-4 px-6 max-w-[92vw] sm:max-w-md flex items-center justify-center"
          style={{ willChange: 'clip-path, transform' }}
        >
          {/* Official White Logo */}
          <img
            ref={logoImgRef}
            src={logoWhite}
            alt="Greens Technologys Logo"
            className="w-64 sm:w-80 md:w-96 max-w-full h-auto object-contain drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]"
          />

          {/* High-Intensity Laser Light Sweep / Sheen Glint */}
          <div
            ref={sheenRef}
            className="absolute inset-0 w-36 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none"
            style={{ willChange: 'transform' }}
          />
        </div>

        {/* High-Tech Subtext & Percentage Counter */}
        <div
          ref={subtextRef}
          className="mt-6 flex flex-col items-center space-y-3 font-mono text-center"
        >
          {/* Subtle Tagline */}
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-emerald-400/80" />
            <span className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.28em] uppercase text-emerald-200/90">
              India's No.1 Tech Training Hub
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-emerald-400/80" />
          </div>

          {/* Monospace Architectural Counter */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-emerald-500/30 backdrop-blur-md shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-slate-400">Loading</span>
            <span
              ref={counterNumberRef}
              className="font-bold text-xs text-[#e9c86a] tabular-nums tracking-widest pl-0.5"
            >
              {percent < 10 ? `0${percent}` : percent}
            </span>
            <span className="text-[10px] text-emerald-400">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

interface GAssistRobotIconProps {
  className?: string;
  size?: number;
  isThinking?: boolean;
  isHappy?: boolean;
}

export const GAssistRobotIcon: React.FC<GAssistRobotIconProps> = ({
  className = 'w-10 h-10',
  size = 40,
  isThinking = false,
  isHappy = true
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="G-Assist Robot Avatar"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="robotBodyGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#243f40" />
            <stop offset="0.5" stopColor="#1e3637" />
            <stop offset="1" stopColor="#0f2122" />
          </linearGradient>

          <linearGradient id="robotScreenGrad" x1="20" y1="30" x2="80" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0d1b1c" />
            <stop offset="1" stopColor="#16292a" />
          </linearGradient>

          <linearGradient id="robotMintGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#a3e635" />
            <stop offset="0.5" stopColor="#86c37c" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>

          <linearGradient id="robotEarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#e9c86a" />
            <stop offset="1" stopColor="#d97706" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Antenna Pole */}
        <line x1="50" y1="20" x2="50" y2="7" stroke="#86c37c" strokeWidth="4" strokeLinecap="round" />

        {/* Antenna Bulb with Pulse */}
        <circle
          cx="50"
          cy="7"
          r="5.5"
          fill="url(#robotMintGrad)"
          filter="url(#neonGlow)"
          className={isThinking ? 'animate-ping origin-center' : 'animate-pulse'}
        />
        <circle cx="50" cy="7" r="3" fill="#ffffff" />

        {/* Side Ears / Headphone Accents */}
        <rect x="10" y="42" width="7" height="20" rx="3.5" fill="url(#robotEarGrad)" />
        <rect x="83" y="42" width="7" height="20" rx="3.5" fill="url(#robotEarGrad)" />
        <line x1="17" y1="52" x2="22" y2="52" stroke="#e9c86a" strokeWidth="2" strokeLinecap="round" />
        <line x1="78" y1="52" x2="83" y2="52" stroke="#e9c86a" strokeWidth="2" strokeLinecap="round" />

        {/* Robot Head Frame */}
        <rect
          x="18"
          y="20"
          width="64"
          height="58"
          rx="18"
          fill="url(#robotBodyGrad)"
          stroke="#86c37c"
          strokeWidth="2.5"
        />

        {/* Inner Visor / Screen */}
        <rect
          x="24"
          y="26"
          width="52"
          height="44"
          rx="12"
          fill="url(#robotScreenGrad)"
          stroke="#3f6f52"
          strokeWidth="1.5"
        />

        {/* Eyes */}
        {isThinking ? (
          // Thinking animation eyes (dots / wave)
          <g>
            <circle cx="38" cy="45" r="5" fill="#86c37c" className="animate-bounce" style={{ animationDelay: '0ms' }} />
            <circle cx="50" cy="45" r="5" fill="#a3e635" className="animate-bounce" style={{ animationDelay: '150ms' }} />
            <circle cx="62" cy="45" r="5" fill="#86c37c" className="animate-bounce" style={{ animationDelay: '300ms' }} />
          </g>
        ) : (
          // Regular Expressive Eyes
          <g>
            {/* Left Eye */}
            <rect x="33" y="38" width="11" height="13" rx="5.5" fill="url(#robotMintGrad)" filter="url(#neonGlow)" />
            <circle cx="36" cy="42" r="2.5" fill="#ffffff" />

            {/* Right Eye */}
            <rect x="56" y="38" width="11" height="13" rx="5.5" fill="url(#robotMintGrad)" filter="url(#neonGlow)" />
            <circle cx="59" cy="42" r="2.5" fill="#ffffff" />

            {/* Cheerful Blush Dots */}
            <circle cx="31" cy="54" r="2" fill="#ec4899" opacity="0.75" />
            <circle cx="69" cy="54" r="2" fill="#ec4899" opacity="0.75" />
          </g>
        )}

        {/* Robot Smile / Voice Wave */}
        {isHappy && !isThinking ? (
          <path
            d="M40 57C43 61 57 61 60 57"
            stroke="#86c37c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : (
          <line x1="42" y1="58" x2="58" y2="58" stroke="#86c37c" strokeWidth="2.5" strokeLinecap="round" />
        )}

        {/* Greens Tech "G" Emblem on Forehead */}
        <circle cx="50" cy="27" r="3" fill="#e9c86a" />
        <path d="M51 26h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2v-1h-1" stroke="#243f40" strokeWidth="0.8" strokeLinecap="round" />

        {/* Neck / Collar */}
        <rect x="42" y="78" width="16" height="5" rx="2.5" fill="#86c37c" />

        {/* Chest Plate Silhouette */}
        <path
          d="M32 83H68L62 97H38L32 83Z"
          fill="url(#robotBodyGrad)"
          stroke="#3f6f52"
          strokeWidth="1.5"
        />
        <circle cx="50" cy="89" r="2" fill="#86c37c" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default GAssistRobotIcon;


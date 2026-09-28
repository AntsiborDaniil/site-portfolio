export function HeroGlassArt() {
  return (
    <svg viewBox="0 0 720 640" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="ringGrad" x1="120" y1="80" x2="580" y2="560" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#9fd5cf" stopOpacity="0.35" />
          <stop offset="1" stopColor="#7aa2c7" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="shardA" x1="300" y1="40" x2="520" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0f766e" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="shardB" x1="80" y1="220" x2="340" y2="520" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ecfeff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#94a3b8" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id="shardC" x1="380" y1="280" x2="640" y2="560" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#5eead4" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glowSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <circle cx="420" cy="300" r="190" fill="#0f766e" opacity="0.07" filter="url(#glowSoft)" />
      <circle cx="280" cy="340" r="150" fill="#7aa2c7" opacity="0.08" filter="url(#glowSoft)" />

      <circle cx="360" cy="310" r="210" stroke="url(#ringGrad)" strokeWidth="1.4" opacity="0.7" />
      <circle cx="360" cy="310" r="158" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="8 14" />
      <circle cx="360" cy="310" r="104" stroke="#0f766e" strokeOpacity="0.22" strokeWidth="1.1" />

      <path
        d="M360 96 L428 214 L360 246 L292 214 Z"
        fill="url(#shardA)"
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeWidth="1.3"
      />
      <path
        d="M168 250 L286 214 L318 320 L210 372 Z"
        fill="url(#shardB)"
        stroke="#ffffff"
        strokeOpacity="0.42"
        strokeWidth="1.2"
      />
      <path
        d="M410 268 L552 246 L582 372 L448 404 Z"
        fill="url(#shardC)"
        stroke="#ffffff"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <path
        d="M300 380 L392 356 L430 470 L318 498 Z"
        fill="#ffffff"
        fillOpacity="0.18"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="1.1"
      />

      <circle cx="360" cy="310" r="18" fill="#ffffff" fillOpacity="0.35" stroke="#ffffff" strokeOpacity="0.55" />
      <circle cx="360" cy="310" r="7" fill="#0f766e" fillOpacity="0.35" />

      <circle cx="196" cy="168" r="10" fill="#ffffff" fillOpacity="0.35" />
      <circle cx="540" cy="150" r="14" fill="#9fd5cf" fillOpacity="0.35" stroke="#ffffff" strokeOpacity="0.4" />
      <circle cx="560" cy="460" r="9" fill="#ffffff" fillOpacity="0.28" />
      <circle cx="180" cy="470" r="12" fill="#0f766e" fillOpacity="0.2" stroke="#ffffff" strokeOpacity="0.3" />

      <path
        d="M140 320 C180 250, 240 230, 290 250"
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M430 200 C500 220, 560 280, 580 340"
        stroke="#0f766e"
        strokeOpacity="0.22"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

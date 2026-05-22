export function Mascot({ size = 220 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      role="img"
      aria-label="مساعد إبني"
      style={{ filter: "drop-shadow(0 18px 30px rgba(14,61,123,0.18))" }}
    >
      <defs>
        <linearGradient id="m-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1E73D6" />
          <stop offset="1" stopColor="#43B8F0" />
        </linearGradient>
        <linearGradient id="m-belly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFAF1" />
          <stop offset="1" stopColor="#FFE7C2" />
        </linearGradient>
        <radialGradient id="m-cheek" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F39A1F" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F39A1F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* antenna */}
      <g>
        <line x1="120" y1="20" x2="120" y2="48" stroke="#0E3D7B" strokeWidth="4" strokeLinecap="round" />
        <circle cx="120" cy="16" r="8" fill="#F39A1F" />
        <circle cx="120" cy="16" r="3" fill="#FFFAF1" />
      </g>

      {/* body */}
      <rect x="42" y="48" width="156" height="146" rx="42" fill="url(#m-body)" />

      {/* belly screen */}
      <rect x="64" y="110" width="112" height="68" rx="22" fill="url(#m-belly)" />
      {/* dashboard mini graphs */}
      <g stroke="#0E3D7B" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M76 156 L92 142 L108 150 L124 134 L140 144 L164 128" />
        <circle cx="164" cy="128" r="4" fill="#F39A1F" stroke="none" />
      </g>
      <g fill="#6BC04B">
        <rect x="76" y="166" width="8" height="6" rx="2" />
        <rect x="90" y="166" width="14" height="6" rx="2" />
        <rect x="110" y="166" width="10" height="6" rx="2" />
      </g>

      {/* eyes */}
      <g fill="#FFFFFF">
        <circle cx="92" cy="82" r="14" />
        <circle cx="148" cy="82" r="14" />
      </g>
      <g fill="#0E3D7B">
        <circle cx="95" cy="84" r="6" />
        <circle cx="151" cy="84" r="6" />
        <circle cx="97" cy="82" r="2" fill="#FFFFFF" />
        <circle cx="153" cy="82" r="2" fill="#FFFFFF" />
      </g>

      {/* cheeks */}
      <circle cx="74" cy="100" r="10" fill="url(#m-cheek)" />
      <circle cx="166" cy="100" r="10" fill="url(#m-cheek)" />

      {/* smile */}
      <path d="M104 100 Q120 112 136 100" stroke="#0E3D7B" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* arms */}
      <g fill="url(#m-body)">
        <rect x="22" y="100" width="22" height="64" rx="11" />
        <rect x="196" y="100" width="22" height="64" rx="11" />
      </g>
      {/* waving hand */}
      <circle cx="33" cy="98" r="12" fill="#43B8F0" />

      {/* feet */}
      <g fill="#0E3D7B">
        <rect x="74" y="190" width="36" height="14" rx="7" />
        <rect x="130" y="190" width="36" height="14" rx="7" />
      </g>
    </svg>
  );
}

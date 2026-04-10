/**
 * Decorative SVG: low-poly mesh + wireframe nodes (no external assets).
 */
export default function HeroPolygonVisual() {
  return (
    <svg
      className="hero-polygon-svg"
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="heroPolyFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f6feb" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#58a6ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#bc8cff" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="heroPolyStroke" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#39c5cf" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#58a6ff" stopOpacity="0.25" />
        </linearGradient>
        <filter id="heroPolyGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base */}
      <rect width="800" height="450" fill="#0d1117" />
      <rect width="800" height="450" fill="url(#heroPolyFill)" opacity="0.5" />

      {/* Low-poly facet layer */}
      <g fill="rgba(31,111,235,0.08)" stroke="rgba(88,166,255,0.22)" strokeWidth="0.6">
        <polygon points="0,120 180,40 90,200" />
        <polygon points="180,40 320,0 200,160" />
        <polygon points="320,0 480,20 380,140" />
        <polygon points="480,20 640,0 560,130" />
        <polygon points="640,0 800,80 720,100" />
        <polygon points="90,200 200,160 140,280" />
        <polygon points="200,160 380,140 260,260" />
        <polygon points="380,140 560,130 420,250" />
        <polygon points="560,130 720,100 620,240" />
        <polygon points="720,100 800,80 800,220" />
        <polygon points="0,280 140,280 60,400" />
        <polygon points="140,280 260,260 180,380" />
        <polygon points="260,260 420,250 300,370" />
        <polygon points="420,250 620,240 480,360" />
        <polygon points="620,240 800,220 700,350" />
        <polygon points="60,400 180,380 120,450" />
        <polygon points="180,380 300,370 220,450" />
        <polygon points="300,370 480,360 360,450" />
        <polygon points="480,360 700,350 560,450" />
        <polygon points="700,350 800,320 800,450" />
        <polygon points="0,120 0,280 90,200" />
        <polygon points="320,0 480,20 400,90" />
      </g>

      {/* Finer tessellation (center focus) */}
      <g fill="rgba(57,197,207,0.06)" stroke="rgba(57,197,207,0.2)" strokeWidth="0.5">
        <polygon points="340,100 420,95 380,155" />
        <polygon points="420,95 500,110 450,170" />
        <polygon points="380,155 450,170 400,230" />
        <polygon points="340,100 380,155 320,190" />
        <polygon points="500,110 580,125 520,200" />
        <polygon points="450,170 520,200 470,260" />
        <polygon points="400,230 470,260 420,310" />
        <polygon points="320,190 400,230 350,280" />
      </g>

      {/* Wireframe edges */}
      <g
        fill="none"
        stroke="url(#heroPolyStroke)"
        strokeWidth="1"
        opacity="0.85"
        filter="url(#heroPolyGlow)"
      >
        <path d="M40 380 L200 320 L360 340 L520 300 L680 320 L760 280" />
        <path d="M80 420 L240 360 L400 280 L560 240 L720 260" />
        <path d="M120 200 L280 140 L440 160 L600 120 L740 160" />
        <path d="M200 380 L360 260 L520 200 L680 220" />
        <path d="M0 200 L160 120 L320 100 L480 80 L640 100 L800 140" />
        <path d="M360 100 L400 200 L440 120" />
        <path d="M400 200 L520 180 L480 280" />
        <path d="M280 320 L400 240 L520 260 L640 200" />
      </g>

      {/* Hex-inspired accent rings */}
      <g transform="translate(400,200)" fill="none" strokeWidth="0.8">
        <g stroke="rgba(88,166,255,0.35)">
          <polygon points="0,-55 48,-28 48,28 0,55 -48,28 -48,-28">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="24s"
              repeatCount="indefinite"
            />
          </polygon>
        </g>
        <g stroke="rgba(188,140,255,0.4)">
          <polygon points="0,-35 30,-18 30,18 0,35 -30,18 -30,-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 0 0"
              to="0 0 0"
              dur="18s"
              repeatCount="indefinite"
            />
          </polygon>
        </g>
      </g>

      {/* Nodes */}
      <g className="hero-mesh-nodes">
        <circle cx="200" cy="320" r="3.5" fill="#58a6ff" className="hero-node hero-node-a" />
        <circle cx="360" cy="340" r="3" fill="#39c5cf" className="hero-node hero-node-b" />
        <circle cx="520" cy="300" r="3.5" fill="#bc8cff" className="hero-node hero-node-c" />
        <circle cx="400" cy="200" r="4" fill="#58a6ff" className="hero-node hero-node-d" />
        <circle cx="680" cy="320" r="3" fill="#39c5cf" className="hero-node hero-node-e" />
        <circle cx="440" cy="160" r="2.5" fill="#8b949e" className="hero-node hero-node-f" />
        <circle cx="280" cy="140" r="2.5" fill="#58a6ff" className="hero-node hero-node-g" />
      </g>
    </svg>
  )
}

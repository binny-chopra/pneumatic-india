// An easy-to-read figure instead of a wall of text: a working hydraulic loop —
// the pump pushes fluid (animated) through a control valve to a cylinder whose
// rod strokes in and out. Shows, at a glance, what the catalogue is for.

const NODES = [
  ['Pump', 78],
  ['Control valve', 215],
  ['Cylinder', 333],
]

export function HydraulicCircuit() {
  return (
    <div className="relative w-full max-w-md rounded-2xl border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-[#0b1424]/85 backdrop-blur-md p-6 shadow-2xl shadow-brand-navy/20">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-spec text-[11px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
          How a hydraulic line works
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow" />
      </div>

      <svg viewBox="0 0 420 196" className="w-full text-brand-blue dark:text-sky-300" role="img"
           aria-label="Diagram: a pump drives fluid through a control valve to a hydraulic cylinder.">
        {/* base line + animated fluid (pump -> cylinder, passing through the valve) */}
        <line x1="108" y1="118" x2="306" y2="118" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.25" />
        <line x1="108" y1="118" x2="306" y2="118" stroke="#FFC400" strokeWidth="3.2" strokeLinecap="round"
              strokeDasharray="2 14" className="hp-flow" />

        {/* pump */}
        <circle cx="78" cy="118" r="30" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <g className="hp-spin">
          <path d="M78 118 m0 -19 a19 19 0 0 1 13 6" fill="none" stroke="#FFC400" strokeWidth="3" strokeLinecap="round" />
          <path d="M78 118 m0 19 a19 19 0 0 1 -13 -6" fill="none" stroke="#FFC400" strokeWidth="3" strokeLinecap="round" />
          <path d="M78 118 m19 0 a19 19 0 0 1 -6 13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M78 118 m-19 0 a19 19 0 0 1 6 -13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </g>
        <circle cx="78" cy="118" r="4" fill="currentColor" />

        {/* control valve */}
        <rect x="176" y="96" width="78" height="44" rx="7" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <line x1="215" y1="96" x2="215" y2="76" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="215" cy="73" r="5" fill="#FFC400" />
        <path d="M188 118 h20" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
        <path d="M224 110 l10 8 -10 8" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />

        {/* cylinder: barrel fixed; piston, rod and load stroke in/out */}
        <rect x="304" y="100" width="58" height="36" rx="5" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <rect x="307" y="103" width="52" height="30" rx="3" fill="currentColor" opacity="0.08" />
        <g className="hp-piston">
          <rect x="326" y="104" width="8" height="28" rx="2" fill="currentColor" opacity="0.85" />
          <line x1="334" y1="118" x2="388" y2="118" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <rect x="388" y="106" width="10" height="24" rx="3" fill="#FFC400" />
        </g>

        {/* pressure tag, clear of the valve */}
        <line x1="138" y1="106" x2="138" y2="118" stroke="#FFC400" strokeWidth="1.4" opacity="0.7" />
        <rect x="104" y="84" width="68" height="22" rx="11" fill="#FFC400" />
        <text x="138" y="99" textAnchor="middle" className="font-mono-spec" fontSize="11" fontWeight="700" fill="#0A1A33">
          2000 bar
        </text>

        {/* labels */}
        {NODES.map(([label, x]) => (
          <text key={label} x={x} y="178" textAnchor="middle" className="font-mono-spec"
                fontSize="10" letterSpacing="1.2" fill="currentColor" opacity="0.65">
            {label.toUpperCase()}
          </text>
        ))}
      </svg>

      <p className="mt-2 text-center text-[12px] text-slate-500 dark:text-slate-400">
        Hoses, fittings, couplings &amp; valves — every link in the line.
      </p>
    </div>
  )
}

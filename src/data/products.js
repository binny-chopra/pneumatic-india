// Product catalogue. `icon` keys map to <ProductIcon type=… />.

export const CATEGORIES = ['All', 'Hoses', 'Fittings', 'Couplings', 'Valves & Manifolds']

export const PRODUCTS = [
  {
    id: 'hyd-hose',
    name: 'Hydraulic Hose',
    category: 'Hoses',
    icon: 'hose',
    tagline: 'Full-bore hose for every pressure class.',
    specs: { Size: '1/4" – 12"', Pressure: 'up to 2000 bar', Standards: 'Multi-spec' },
    detail:
      'A complete size range covering low-pressure transfer to ultra-high-pressure lines. Stocked types include water and air, hydraulic, rock-drill, welding, steam, oil suction & discharge, and carbon-free hose.',
    bullets: [
      'Water / Air hose',
      'Rock drill hose',
      'Welding & steam hose',
      'Oil suction & discharge',
      'Carbon-free hose',
    ],
  },
  {
    id: 'ss-bellow',
    name: 'SS Bellow Hose & Camlock',
    category: 'Hoses',
    icon: 'bellow',
    tagline: 'Stainless flexible hose for hot & hygienic lines.',
    specs: { Size: '1/4" – 12"', Material: 'SS 304 / 316', Couplings: 'All camlock types' },
    detail:
      'Stainless-steel braided bellow hoses paired with every camlock coupling type. Built for high-temperature service, water lines, food-grade and pharmaceutical duty.',
    bullets: [
      'SS 304 & 316 grade',
      'High-temperature service',
      'Food-grade & pharma',
      'Complete camlock range',
    ],
  },
  {
    id: 'pump-flange',
    name: 'Pump Flange Coupling',
    category: 'Couplings',
    icon: 'flange',
    tagline: 'Mountings matched to your pump.',
    specs: { Mounting: 'Thread / Flange', Drive: 'Allen-key / Flat', Build: 'Per displacement' },
    detail:
      'Made to suit the nature and displacement of the pump. Available as thread, flange, allen-key and flat-face mountings — with or without a base ring.',
    bullets: ['Thread mounting', 'Flange mounting', 'Allen-key mounting', 'Flat-face mounting'],
  },
  {
    id: 'adapters',
    name: 'Hydraulic Adapters',
    category: 'Fittings',
    icon: 'adapter',
    tagline: 'Connectors to every thread standard.',
    specs: { Size: '1/8" – 4"', Threads: 'BSP·JIC·NPT·UNF', Material: 'CS · SS · Brass' },
    detail:
      'ISO-standard connectors across BSP, Metric, JIC, UNF, NPT and flat-face O-ring forms, including elbows and tees for hose-connecting lines, crimped or non-crimped.',
    bullets: ['BSP / Metric / JIC', 'UNF / NPT / O-ring', 'Elbows & tees', 'Carbon steel · SS · Brass'],
  },
  {
    id: 'end-fittings',
    name: 'Hydraulic Hose End Fittings',
    category: 'Fittings',
    icon: 'fitting',
    tagline: 'Ferrules, flanges & inserts — any size.',
    specs: { Type: 'Ferrule / Flange', Code: '61 & 62', Finish: 'Skive / Non-skive' },
    detail:
      'End fittings for every pressure rating to ISO standards — straight or bent, ferrule type, BSP, SAE flange Code 61 and Code 62, plus nuts, nipples, hose inserts and caps in skiving or non-skiving form.',
    bullets: ['Ferrule type', 'Flange Code 61 & 62', 'Nuts, nipples & inserts', 'Skiving / non-skiving'],
  },
  {
    id: 'manifold',
    name: 'Manifold Blocks',
    category: 'Valves & Manifolds',
    icon: 'manifold',
    tagline: 'Custom 1–10 station blocks.',
    specs: { Stations: '1 – 10 line', Size: 'NG06 / NG10', Material: 'MS cast / Aluminium' },
    detail:
      'Custom manifolds in high-grade mild-steel casting and aluminium, from a single line station to ten, in NG06 and NG10 — with in-built cartridge and side-mounting sub-plate types, threaded to your specified pressure.',
    bullets: ['1 to 10 line stations', 'NG06 & NG10', 'Cartridge type', 'Side-mounting sub-plate'],
  },
  {
    id: 'distributor-valve',
    name: 'Hydraulic Distributor Valve',
    category: 'Valves & Manifolds',
    icon: 'valve',
    tagline: 'Directional control for mobile machines.',
    specs: { Type: 'Monoblock / Sectional', Use: 'Mobile equipment', Control: 'Directional' },
    detail:
      'Monoblock and sectional directional control valves for mobile applications — agriculture, fork-lifts, construction, tractors & loaders, earthmovers and cranes — regulating motor speed and cylinder movement across multiple paths at once.',
    bullets: ['Monoblock & sectional', 'Agriculture & construction', 'Cranes & earthmovers', 'Multi-path control'],
  },
  {
    id: 'quick-couplers',
    name: 'Quick Release Couplers',
    category: 'Couplings',
    icon: 'coupler',
    tagline: 'Connect & disconnect with zero spill.',
    specs: { Size: '1/4" – 2"', Tested: 'up to 900 bar', Parts: 'Male + Female' },
    detail:
      'Quick couplings connect and disconnect fluid lines fast and cleanly, with no loss of fluid. Precisely engineered male/female pairs seal perfectly to let flow pass — tested up to 900 bar.',
    bullets: ['No-spill connection', 'Male & female pairs', 'Perfect sealing', 'Tested to 900 bar'],
  },
]

// Threads / standards shown in the hero ticker.
export const STANDARDS = [
  'BSP', 'JIC', 'NPT', 'UNF', 'Metric', 'Flat-face O-ring',
  'Code 61', 'Code 62', 'NG06', 'NG10', 'Ferrule', 'Camlock',
]

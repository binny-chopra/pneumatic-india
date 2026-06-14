// One glyph per product family. `type` matches the `icon` field in products.js.

const Stroke = ({ className, children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || 'w-7 h-7'}
  >
    {children}
  </svg>
)

export function ProductIcon({ type, className }) {
  switch (type) {
    case 'hose':
      return (
        <Stroke className={className}>
          <path d="M3 7c4 0 4 10 8 10s4-10 8-10" />
          <rect x="2" y="5" width="3" height="4" rx="1" />
          <rect x="19" y="15" width="3" height="4" rx="1" />
        </Stroke>
      )
    case 'bellow':
      return (
        <Stroke className={className}>
          <path d="M4 9h2m-2 3h2m-2 3h2" />
          <rect x="6" y="7" width="9" height="10" rx="1" />
          <path d="M15 9l2-1m-2 4h3m-3 4l2 1" />
          <path d="M18 8v8" />
        </Stroke>
      )
    case 'flange':
      return (
        <Stroke className={className}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2.4" />
          <circle cx="12" cy="6.5" r="1" />
          <circle cx="12" cy="17.5" r="1" />
          <circle cx="6.5" cy="12" r="1" />
          <circle cx="17.5" cy="12" r="1" />
        </Stroke>
      )
    case 'adapter':
      return (
        <Stroke className={className}>
          <path d="M3 12h4m10 0h4" />
          <path d="M7 8h4l3 4-3 4H7z" />
          <path d="M14 9h3v6h-3" />
        </Stroke>
      )
    case 'fitting':
      return (
        <Stroke className={className}>
          <path d="M12 3l7.5 4.5v9L12 21l-7.5-4.5v-9z" />
          <circle cx="12" cy="12" r="3" />
        </Stroke>
      )
    case 'manifold':
      return (
        <Stroke className={className}>
          <rect x="4" y="5" width="16" height="14" rx="1.5" />
          <path d="M8 5v14M14 5v14" />
          <circle cx="6" cy="9" r=".7" />
          <circle cx="6" cy="15" r=".7" />
          <circle cx="11" cy="9" r=".7" />
          <circle cx="11" cy="15" r=".7" />
          <circle cx="17" cy="9" r=".7" />
          <circle cx="17" cy="15" r=".7" />
        </Stroke>
      )
    case 'valve':
      return (
        <Stroke className={className}>
          <rect x="3" y="11" width="18" height="7" rx="1.5" />
          <path d="M8 11V6m8 5V6" />
          <circle cx="8" cy="5" r="1.6" />
          <circle cx="16" cy="5" r="1.6" />
          <path d="M7 14.5h2m6 0h2" />
        </Stroke>
      )
    case 'coupler':
      return (
        <Stroke className={className}>
          <circle cx="8" cy="12" r="4" />
          <path d="M12 12h2" />
          <path d="M16 8.5l4-1.5v10l-4-1.5z" />
          <path d="M8 12h.01" />
        </Stroke>
      )
    default:
      return null
  }
}

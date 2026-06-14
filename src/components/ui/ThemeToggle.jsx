import { Sun, Moon } from '../icons'

export function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-14 h-8 rounded-full p-1 bg-slate-200 dark:bg-slate-700 transition-colors"
    >
      <span
        className={`absolute top-1 left-1 grid place-items-center w-6 h-6 rounded-full bg-white dark:bg-brand-navy shadow transition-transform duration-300 ${
          dark ? 'translate-x-6' : ''
        }`}
      >
        {dark ? (
          <Moon className="w-3.5 h-3.5 text-brand-azure" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-brand-yellow" />
        )}
      </span>
    </button>
  )
}

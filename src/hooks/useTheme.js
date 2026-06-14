import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'pi-theme'

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Class-based dark mode.
 * - Initial value mirrors the <html> class set by the no-flash script in index.html.
 * - Follows the OS preference live until the user makes a manual choice.
 */
export function useTheme() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
      } catch {
        /* storage blocked — session-only, harmless */
      }
      return next
    })
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!readStored()) {
        document.documentElement.classList.toggle('dark', e.matches)
        setDark(e.matches)
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return { dark, toggle }
}

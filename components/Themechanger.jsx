import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-4">
      <button
        className="[ transition-colors duration-150 ] [ hover:text-blue-500 dark:hover:text-blue-600 ]"
        onClick={() => setTheme('light')}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
      <button
        className="[ transition-colors duration-150 ] [ hover:text-blue-500 dark:hover:text-blue-600 ]"
        onClick={() => setTheme('dark')}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          id="moon"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default ThemeChanger

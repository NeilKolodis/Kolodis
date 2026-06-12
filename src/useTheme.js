import { useEffect, useState } from "react"

export default function useTheme() {
  const getInitialTheme = () => {
    // ✅ Check saved preference
    if (typeof window !== "undefined") {
      if (localStorage.theme) {
        return localStorage.theme
      }

      // ✅ Optional: detect system theme
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark"
      }
    }

    // ✅ Default (better for your design)
    return "dark"
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    localStorage.theme = theme
  }, [theme])

  return [theme, setTheme]
}

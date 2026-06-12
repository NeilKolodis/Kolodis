import { useEffect, useState } from "react"

export default function Counter({ value, suffix = "+" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 1200

    const increment = end / (duration / 16) // smooth animation (~60fps)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center">
      
      {/* Number */}
      <div className="text-3xl md:text-4xl font-bold text-emerald-400 
                      drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
        {count}{suffix}
      </div>

    </div>
  )
}

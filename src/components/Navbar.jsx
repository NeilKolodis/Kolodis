import { Link } from "react-router-dom"
import { useState } from "react"
import useTheme from "../hooks/useTheme"
import logo from "../assets/QubeITLogo.png"

export default function Navbar() {
  const [theme, setTheme] = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#020617]/80 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🌿 Logo */}
<Link to="/" className="flex items-center gap-2">
  <img 
    src={logo} 
    alt="Qube IT consulting logo" 
    className="h-8 w-auto drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] hover:drop-shadow-[0_0_16px_rgba(16,185,129,0.9)] transition"
  />
</Link>
        {/* 💻 Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link className="hover:text-emerald-400 transition" to="/">Home</Link>
          <Link className="hover:text-emerald-400 transition" to="/about">About</Link>
          <Link className="hover:text-emerald-400 transition" to="/services">Services</Link>
          <Link className="hover:text-emerald-400 transition" to="/case-studies">Case Studies</Link>

          <Link
            to="/contact"
            className="btn text-sm"
          >
            Contact
          </Link>

          {/* 🌙 Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 px-3 py-1 border border-white/10 rounded-md text-xs hover:border-emerald-400 transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* 📱 Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#020617] border-t border-white/10 px-6 py-6 space-y-5 text-gray-300">
          
          <Link onClick={() => setOpen(false)} className="block text-lg hover:text-emerald-400" to="/">
            Home
          </Link>

          <Link onClick={() => setOpen(false)} className="block text-lg hover:text-emerald-400" to="/about">
            About
          </Link>

          <Link onClick={() => setOpen(false)} className="block text-lg hover:text-emerald-400" to="/services">
            Services
          </Link>

          <Link onClick={() => setOpen(false)} className="block text-lg hover:text-emerald-400" to="/case-studies">
            Case Studies
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="block text-center bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-lg transition shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            Contact
          </Link>

          {/* 🌙 Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full border border-white/10 rounded-lg px-4 py-2 text-sm hover:border-emerald-400 transition"
          >
            {theme === "dark" ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
          </button>

        </div>
      )}
    </nav>
  )
}

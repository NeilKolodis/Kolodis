import { Link } from "react-router-dom"
import logo from "../assets/KolodisITLogo.png"

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* 🔴 Brand */}
        <div>
          <img 
            src={logo} 
            alt="Kolodis IT Services logo" 
            className="h-16 w-auto drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
          />
          <p className="text-sm text-gray-400 mt-4">
            Strategic consulting for sustainable growth. Helping businesses
            transform, scale, and succeed.
          </p>
        </div>

        {/* 🔗 Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">
            Company
          </h3>
          <div className="space-y-2 text-gray-400 text-sm">
            <Link to="/" className="block hover:text-red-400 transition">Home</Link>
            <Link to="/about" className="block hover:text-red-400 transition">About</Link>
            <Link to="/services" className="block hover:text-red-400 transition">Services</Link>
            <Link to="/case-studies" className="block hover:text-red-400 transition">Case Studies</Link>
          </div>
        </div>

        {/* 📩 Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">
            Contact
          </h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>contact@kolodis.com</p>
            <p>UK / Europe / US</p>
          </div>
        </div>

        {/* 🚀 CTA */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">
            Get Started
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Let’s build something impactful together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-5 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 transition shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            Contact Us
          </Link>
        </div>

      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-white/10 text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Kolodis IT Services. All rights reserved.
      </div>

    </footer>
  )
}

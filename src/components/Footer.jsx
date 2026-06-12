import { Link } from "react-router-dom"
import logo from "../assets/QubeITLogo.png"

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* 🌿 Brand */}
        <div>
  <img 
    src={logo} 
    alt="Qube IT consulting logo" 
    className="h-8 w-auto drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
  />
  <p className="text-sm text-gray-400">
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
            <Link to="/" className="block hover:text-emerald-400">Home</Link>
            <Link to="/about" className="block hover:text-emerald-400">About</Link>
            <Link to="/services" className="block hover:text-emerald-400">Services</Link>
            <Link to="/case-studies" className="block hover:text-emerald-400">Case Studies</Link>
          </div>
        </div>

        {/* 📩 Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">
            Contact
          </h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p>contact@qubeitconsulting.com</p>
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
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2 rounded-lg text-sm transition shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            Contact Us
          </Link>
        </div>

      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-white/10 text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Qube IT consulting. All rights reserved.
      </div>

    </footer>
  )
}

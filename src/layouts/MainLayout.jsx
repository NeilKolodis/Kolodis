import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {
  return (
    <div className="bg-[#020617] text-white min-h-screen flex flex-col relative">
      
      {/* 🔴 Global subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 blur-3xl opacity-30 pointer-events-none"></div>

      <Navbar />

      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  )
}

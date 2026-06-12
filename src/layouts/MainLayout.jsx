import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {
  return (
    <div className="bg-[#020617] text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default function CTA() {
  return (
    <div className="relative overflow-hidden bg-[#020617] border border-red-500/10 p-10 text-center rounded-xl mt-16">
      
      {/* 🔴 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-3xl opacity-40"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to{" "}
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Transform Your Business?
          </span>
        </h2>

        <p className="mb-6 text-gray-400">
          Schedule a free consultation with our experts.
        </p>

        <a
          href="#/contact"
          className="inline-block px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 transition transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(239,68,68,0.4)]"
        >
          Book a Consultation
        </a>
      </div>

    </div>
  )
}

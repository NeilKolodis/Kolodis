import MainLayout from "../layouts/MainLayout"
import Reveal from "../components/Reveal"

export default function Contact() {
  return (
    <MainLayout>
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          {/* 🔥 Header */}
          <Reveal>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Contact{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-16">
              Let’s discuss your business goals.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">

            {/* 📩 Contact Info */}
            <Reveal>
              <div className="card">
                <h3 className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent mb-4 text-lg font-semibold">
                  Get in Touch
                </h3>

                <p className="text-gray-400">
                  contact@qubeitconsulting.com
                </p>
              </div>
            </Reveal>

            {/* 📝 Form */}
            <Reveal delay={0.2}>
              <div className="card">
                <h3 className="text-white mb-6 text-xl font-semibold">
                  Send Message
                </h3>

                <form
                  action="https://formspree.io/f/xgongwvd"
                  method="POST"
                  className="space-y-4"
                >
                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 bg-[#020617] border border-white/10 rounded text-white placeholder-gray-500 focus:border-sky-400 outline-none transition"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 bg-[#020617] border border-white/10 rounded text-white placeholder-gray-500 focus:border-sky-400 outline-none transition"
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                    className="w-full p-3 bg-[#020617] border border-white/10 rounded text-white placeholder-gray-500 focus:border-sky-400 outline-none transition"
                  ></textarea>

                  {/* 🔘 Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 transition shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                  We’ll get back to you within 24 hours.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </MainLayout>
  )
}

import ServiceCard from "../components/ServiceCard"
import CTA from "../components/CTA"
import Counter from "../components/Counter"
import Reveal from "../components/Reveal"
import MainLayout from "../layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-[#020617] text-white min-h-screen">
        
        {/* 🔥 Hero Section */}
        <section className="hero-bg relative overflow-hidden">
          
          {/* 🌿🔵 Dual Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 blur-3xl opacity-30"></div>

          {/* ✨ Floating particles */}
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="hero-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${6 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 py-32 text-center relative z-10">
            
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Strategic Consulting for
                <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-sky-500 bg-clip-text text-transparent ml-2">
                  Sustainable Growth
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                Qube IT consulting partners with organizations to deliver clarity,
                transformation, and measurable impact.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex justify-center gap-4 flex-wrap">
                
                {/* 🌿🔵 Gradient Button */}
                <button className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 transition shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                  Get Started
                </button>

                {/* 🔘 Secondary Button */}
                <button className="border border-white/20 hover:border-sky-400 px-6 py-3 rounded-lg transition hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                  Learn More
                </button>

              </div>
            </Reveal>

          </div>
        </section>

        {/* 💎 Metrics Section */}
        <section className="relative px-6 py-20">
          
          {/* 🌿🔵 Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-sky-500/5 blur-3xl opacity-40"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            
            {[
              { value: 8, label: "Years Experience" },
              { value: 40, label: "Projects Delivered" },
              { value: 98, label: "Client Satisfaction", suffix: "%" },
              { value: 8, label: "Countries Served" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card text-center">
                  <Counter value={item.value} suffix={item.suffix} />
                  <p className="text-gray-400 mt-2">{item.label}</p>
                </div>
              </Reveal>
            ))}

          </div>
        </section>

        {/* 🚀 Services Section */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                    Expertise
                  </span>
                </h2>
                <p className="text-gray-400 mt-3">
                  Delivering impact through strategy, technology, and execution
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              
              <Reveal delay={0.1}>
                <ServiceCard
                  title="Business Strategy"
                  desc="Data-driven strategies to scale and compete."
                />
              </Reveal>

              <Reveal delay={0.2}>
                <ServiceCard
                  title="Technology Consulting"
                  desc="Modern solutions for digital transformation."
                />
              </Reveal>

              <Reveal delay={0.3}>
                <ServiceCard
                  title="Operational Excellence"
                  desc="Optimizing performance and efficiency."
                />
              </Reveal>

            </div>

            <Reveal delay={0.4}>
              <div className="mt-20">
                <CTA />
              </div>
            </Reveal>

          </div>
        </section>

      </div>
    </MainLayout>
  )
}

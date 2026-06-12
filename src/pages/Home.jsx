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
          
          {/* 🔴 Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-3xl opacity-40"></div>

          {/* ✨ Particles */}
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
                Transforming Businesses Through
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent ml-2">
                  Digital Innovation & Strategy
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                Kolodis IT Services empowers organizations to scale, innovate,
                and stay competitive through strategic consulting, modern technology,
                and data-driven decision making.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex justify-center gap-4 flex-wrap">
                
                <button className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 transition shadow-[0_0_25px_rgba(239,68,68,0.4)]">
                  Get Started
                </button>

                <button className="border border-white/20 hover:border-red-400 px-6 py-3 rounded-lg transition hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                  Explore Services
                </button>

              </div>
            </Reveal>

          </div>
        </section>

        {/* 💎 Metrics */}
        <section className="relative px-6 py-20">
          
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 blur-3xl opacity-40"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            
            {[
              { value: 17, label: "Years Experience" },
              { value: 150, label: "Projects Delivered" },
              { value: 98, label: "Client Satisfaction", suffix: "%" },
              { value: 15, label: "Countries Served" }
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

        {/* 🚀 Services */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our{" "}
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Capabilities
                  </span>
                </h2>
                <p className="text-gray-400 mt-3">
                  Comprehensive IT and consulting services designed to drive business success
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              
              <Reveal delay={0.1}>
                <ServiceCard
                  title="Cloud & Infrastructure"
                  desc="Design, migrate, and optimize scalable cloud environments across AWS, Azure, and GCP."
                />
              </Reveal>

              <Reveal delay={0.2}>
                <ServiceCard
                  title="Data & AI Solutions"
                  desc="Unlock insights with data engineering, AI/ML models, and real-time analytics platforms."
                />
              </Reveal>

              <Reveal delay={0.3}>
                <ServiceCard
                  title="Cybersecurity & Risk"
                  desc="Protect your enterprise with robust security strategies, compliance, and cyber resilience."
                />
              </Reveal>

              <Reveal delay={0.4}>
                <ServiceCard
                  title="Digital Transformation"
                  desc="Modernize legacy systems and accelerate innovation through digital-first strategies."
                />
              </Reveal>

              <Reveal delay={0.5}>
                <ServiceCard
                  title="DevOps & Automation"
                  desc="Streamline delivery pipelines and improve operational efficiency with modern DevOps practices."
                />
              </Reveal>

              <Reveal delay={0.6}>
                <ServiceCard
                  title="Product & Engineering"
                  desc="Build scalable, high-quality products with expert engineering leadership and architecture."
                />
              </Reveal>

            </div>

            <Reveal delay={0.7}>
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

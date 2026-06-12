import MainLayout from "../layouts/MainLayout"

export default function About() {
  return (
    <MainLayout>
      <div className="px-6 py-20">
        
        <div className="max-w-7xl mx-auto">

          {/* 🔥 Page Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Qube IT consulting
            </span>
          </h2>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12">
            Qube IT consulting is a trusted advisory firm helping organizations
            navigate complex business challenges with confidence, integrity,
            and expertise. We partner with leaders to unlock sustainable growth,
            drive transformation, and deliver measurable outcomes.
          </p>

          {/* 💎 Two Column Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Who We Are
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Founded by experienced consultants, Qube IT consulting combines
                strategic insight, technical expertise, and pragmatic execution.
                We work closely with executives, founders, and leadership teams
                across industries to solve complex problems and enable long-term
                success.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                What We Do
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our services span business strategy, digital transformation,
                product and technology advisory, and operational excellence.
                We focus on clarity, speed, and impact—helping organizations move
                from insight to action.
              </p>
            </div>

          </div>

          {/* 💎 Values Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Values
              </span>
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              {[
                "Integrity",
                "Excellence",
                "Partnership",
                "Impact"
              ].map((val, i) => (
                <div key={i} className="card text-sm">
                  <h4 className="font-semibold mb-2 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                    {val}
                  </h4>
                  <p className="text-gray-400">
                    Delivering high standards and measurable results.
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* 💎 Closing Section */}
          <div className="max-w-3xl card">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Why{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Qube IT consulting
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Clients choose Qube IT consulting for our ability to balance
              strategic thinking with hands-on execution. We bring clarity to
              ambiguity, structure to complexity, and momentum to change—helping
              organizations move forward with confidence.
            </p>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}

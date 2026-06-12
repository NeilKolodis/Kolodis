import MainLayout from "../layouts/MainLayout"

export default function Services() {
  return (
    <MainLayout>
      <div className="px-6 py-20">
        
        <div className="max-w-7xl mx-auto">

          {/* 🔥 Page Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-16">
            We partner with organizations to design strategies, build capabilities,
            and deliver transformation programs that create measurable and lasting impact.
          </p>

          {/* 💎 Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            
            {/* Service 1 */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Strategy & Growth Consulting
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Define clear direction and unlock growth opportunities through
                data-driven strategy and market insights.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Corporate & business strategy</li>
                <li>Market expansion & entry</li>
                <li>Revenue growth optimization</li>
                <li>Business model innovation</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Digital & Cloud Transformation
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Modernize your technology landscape to enable scalability,
                agility, and innovation.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Cloud migration & modernization</li>
                <li>Digital strategy & roadmaps</li>
                <li>Platform transformation</li>
                <li>Change management & adoption</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Product & Engineering Advisory
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Accelerate product delivery and improve engineering excellence
                with modern practices and scalable architectures.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Product strategy & roadmap</li>
                <li>Architecture & system design</li>
                <li>Agile transformation</li>
                <li>Engineering leadership support</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Data & AI Enablement
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Turn data into a strategic asset and leverage AI to drive smarter
                decisions and automation.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Data strategy & governance</li>
                <li>Business intelligence & dashboards</li>
                <li>AI & machine learning solutions</li>
                <li>Advanced analytics</li>
              </ul>
            </div>
          </div>

          {/* 💎 How We Work */}
          <div className="max-w-4xl mb-20 card">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              How{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                We Work
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our approach combines strategic thinking with hands-on execution.
              We collaborate closely with your teams, bringing structure to complexity,
              accelerating delivery, and ensuring long-term, sustainable impact.
            </p>
          </div>

          {/* 🚀 CTA */}
          <div className="card text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6">
              Let’s explore how we can help you scale, innovate, and succeed.
            </p>
            <a
              href="#/contact"
              className="inline-block px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 transition shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
              Book a Consultation
            </a>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}

import CaseStudyCard from "../components/CaseStudyCard"
import MainLayout from "../layouts/MainLayout"

export default function CaseStudies() {
  return (
    <MainLayout>
      <div className="px-6 py-20">
        
        <div className="max-w-7xl mx-auto">

          {/* 🔥 Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Case{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Studies
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mb-12">
            A snapshot of how we partner with organizations to solve complex
            challenges, unlock growth, and deliver measurable impact.
          </p>

          {/* 💎 Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* 🚀 Case 1 */}
            <div className="card">
              <CaseStudyCard
                title="AI-Driven Customer Insights Platform"
                client="Retail & E-commerce Group (UK)"
                problem="Fragmented customer data across multiple systems limited personalization and decision-making."
                impact="Unified data platform + AI models increased customer engagement by 32% and boosted conversion rates."
              />
            </div>

            {/* 🚀 Case 2 */}
            <div className="card">
              <CaseStudyCard
                title="Cloud Migration & Cost Optimization"
                client="Global SaaS Company"
                problem="Rising infrastructure costs and legacy deployments were impacting scalability."
                impact="Migrated to cloud-native architecture, reducing costs by 28% and improving system performance."
              />
            </div>

            {/* 🚀 Case 3 */}
            <div className="card">
              <CaseStudyCard
                title="End-to-End Digital Transformation"
                client="Financial Services Firm (EU)"
                problem="Manual processes and outdated systems slowed innovation and compliance readiness."
                impact="Digitized workflows and modernized systems, reducing processing time by 45%."
              />
            </div>

            {/* 🚀 Case 4 */}
            <div className="card">
              <CaseStudyCard
                title="Data Strategy & Business Intelligence"
                client="Healthcare Organization"
                problem="Lack of real-time insights for operational and clinical decision-making."
                impact="Built real-time dashboards and data pipelines, enabling faster and data-driven decisions."
              />
            </div>

            {/* 🚀 Case 5 */}
            <div className="card">
              <CaseStudyCard
                title="Scaling Engineering Teams & Delivery"
                client="High-Growth Tech Startup"
                problem="Rapid scaling caused delivery bottlenecks and inconsistent product quality."
                impact="Introduced agile frameworks and team restructuring, improving delivery speed by 35%."
              />
            </div>

            {/* 🚀 Case 6 */}
            <div className="card">
              <CaseStudyCard
                title="Operational Efficiency Transformation"
                client="Logistics & Supply Chain Company"
                problem="Inefficient processes and lack of visibility led to increased operational costs."
                impact="Optimized workflows and introduced automation, reducing costs by 20%."
              />
            </div>

          </div>

        </div>
      </div>
    </MainLayout>
  )
}

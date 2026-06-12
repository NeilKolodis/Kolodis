export default function CaseStudyCard({ title, client, problem, impact }) {
  return (
    <div className="relative border border-red-500/10 rounded-xl p-6 bg-[#020617] transition transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)]">
      
      {/* 🔴 Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 blur-2xl opacity-30 pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Client */}
        <p className="text-sm text-gray-400 mb-4">
          Client: {client}
        </p>

        {/* Problem */}
        <p className="mb-2 text-gray-300">
          <span className="font-semibold text-red-400">Challenge:</span> {problem}
        </p>

        {/* Impact */}
        <p className="text-gray-300">
          <span className="font-semibold text-orange-400">Impact:</span> {impact}
        </p>

      </div>
    </div>
  )
}
``

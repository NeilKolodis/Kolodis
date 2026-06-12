export default function CaseStudyCard({ title, client, problem, impact }) {
  return (
    <div className="border rounded-xl p-6 bg-white dark:bg-darkCard transition hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-secondary mb-4">
        Client: {client}
      </p>

      <p className="mb-2">
        <strong>Challenge:</strong> {problem}
      </p>

      <p>
        <strong>Impact:</strong> {impact}
      </p>
    </div>
  )
}

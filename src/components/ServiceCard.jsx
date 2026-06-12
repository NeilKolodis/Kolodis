export default function ServiceCard({ title, desc }) {
  return (
   <div className="card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary dark:text-gray-300">{desc}</p>
    </div>
  )
}

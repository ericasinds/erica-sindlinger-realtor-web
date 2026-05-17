export default function StatCard({ value, label }) {
  return (
    <article className="card stat-card">
      <strong>{value}</strong>
      <p>{label}</p>
    </article>
  );
}

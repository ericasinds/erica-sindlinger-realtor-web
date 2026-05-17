import { MapPin } from "lucide-react";

export default function ServiceAreaCard({ area }) {
  return (
    <article className="card">
      <MapPin className="card-icon" size={26} aria-hidden="true" />
      <h3>{area.name}</h3>
      <p>{area.description}</p>
    </article>
  );
}

import { metrics } from "@/features/portfolio/constants";

export function Metrics() {
  return (
    <section className="metrics">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <metric.icon aria-hidden="true" />
          <b>{metric.value}</b>
          <small>{metric.label}</small>
        </div>
      ))}
    </section>
  );
}

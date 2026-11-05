interface SensorCardProps {
  title: string;
  value: string;
  unit: string;
  description: string;
  symbol: string;
}

export default function SensorCard({
  title,
  value,
  unit,
  description,
  symbol,
}: SensorCardProps) {
  return (
    <article className="sensor-card">
      <div className="sensor-card__header">
        <span className="sensor-card__symbol" aria-hidden="true">
          {symbol}
        </span>
        <span className="sensor-card__indicator" />
      </div>

      <p className="sensor-card__title">{title}</p>

      <div className="sensor-card__reading">
        <strong>{value}</strong>
        <span>{unit}</span>
      </div>

      <p className="sensor-card__description">{description}</p>
    </article>
  );
}
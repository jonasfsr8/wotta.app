import { Link, useParams } from "react-router-dom";

import SensorCard from "../components/SensorCard";
import SensorStatus from "../components/SensorStatus";
import "../styles/home.css";

export default function TelemetryPage() {
  const { deviceId } = useParams<{ deviceId: string }>();

  const device = deviceId ?? "Desconhecido";

  return (
    <main className="dashboard">
      <header className="dashboard__header">
        <Link to="/" className="dashboard__brand">
          <span className="dashboard__brand-icon">⌁</span>
          Wo<span>TTa</span>
        </Link>

        <Link to="/" className="dashboard__back">
          Change device
        </Link>
      </header>

      <section className="dashboard__content">
        <div className="dashboard__intro">
          <div>
            <p className="dashboard__eyebrow">OVERVIEW</p>
            <h1>Remote data in Oil and Gas stations</h1>
            <p className="dashboard__subtitle">
              pipeline condition.
            </p>
          </div>

          <SensorStatus deviceId={device} />
        </div>

        <section aria-labelledby="readings-title">
          <div className="dashboard__section-heading">
            <h2 id="readings-title">Sensor readings</h2>
            <span>AVERAGE</span>
          </div>

          <div className="dashboard__grid">
            <SensorCard
              title="Pipeline pressure"
              value="1013.2"
              unit="hPa"
              description="Pipeline pressure"
              symbol="↗"
            />

            <SensorCard
              title="Temperature"
              value="25.7"
              unit="°C"
              description="Temperature"
              symbol="°"
            />

            <SensorCard
              title="Humidity"
              value="62.4"
              unit="%"
              description="Humidity"
              symbol="≈"
            />
          </div>
        </section>

        <section className="dashboard__placeholder">
          <div className="dashboard__placeholder-icon">⌁</div>
          <div>
            <h2>Measurement history</h2>
            <p>
              
            </p>
          </div>
        </section>

        <footer className="dashboard__footer">
          WoTTa · IoT monitoring platform
        </footer>
      </section>
    </main>
  );
}
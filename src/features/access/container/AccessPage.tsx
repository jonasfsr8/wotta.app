import DeviceCodeForm from "../components/DeviceCodeForm";
import { useDeviceAccess } from "../hooks/useDeviceAccess";
import "../styles/access.css";

export default function AccessPage() {
  const { accessDevice, loading, error } = useDeviceAccess();

  return (
    <main className="access-page">
      <div className="access-page__glow access-page__glow--one" />
      <div className="access-page__glow access-page__glow--two" />

      <section className="access-panel">
        <header className="access-brand">
          <div className="access-brand__icon" aria-hidden="true">
            <span>⌁</span>
          </div>

          <div>
            <p className="access-brand__eyebrow">ENVIRONMENTAL IOT</p>
            <h1>Wo<span>TTa</span></h1>
          </div>
        </header>

        <div className="access-content">
          <p className="access-content__eyebrow">
            DEVICE ACCESS <span />
          </p>

          <h2>
            Data
            <br />
            <span>In real time</span>
          </h2>

          <p className="access-content__description">
            Access the device and track telemetry data.
          </p>

          <DeviceCodeForm
            onSubmit={accessDevice}
            loading={loading}
            error={error}
          />
        </div>

        <footer className="access-footer">
          <span className="access-footer__status">
            <span /> FOG SYSTEM
          </span>
          <span>IoT PLATFORM · v1.0</span>
        </footer>
      </section>

      <p className="access-page__copyright">
        WoTTa <span>© 2026</span>
      </p>
    </main>
  );
}
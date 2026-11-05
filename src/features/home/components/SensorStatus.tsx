interface SensorStatusProps {
  deviceId: string;
}

export default function SensorStatus({ deviceId }: SensorStatusProps) {
  return (
    <div className="sensor-status">
      <span className="sensor-status__dot" />

      <div>
        <strong>Status</strong>
        <span>Device: {deviceId}</span>
      </div>
    </div>
  );
}
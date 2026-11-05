import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useDeviceAccess() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function accessDevice(code: string) {
    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const normalizedCode = code.trim();

      if (!/^SENSOR-[A-Z0-9-]+$/i.test(normalizedCode)) {
        setError("Enter a code in the format SENSOR-001.");
        return;
      }

      navigate(`/device/${encodeURIComponent(normalizedCode)}`);
    } catch {
      setError("Sensor does not match");
    } finally {
      setLoading(false);
    }
  }

  return { accessDevice, loading, error };
}
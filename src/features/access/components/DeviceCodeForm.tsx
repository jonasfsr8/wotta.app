import { useState, type SubmitEvent } from "react";

interface DeviceCodeFormProps {
  onSubmit: (code: string) => void;
  loading?: boolean;
  error?: string;
}

export default function DeviceCodeForm({ onSubmit, loading = false, error }: DeviceCodeFormProps) {
  const [code, setCode] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedCode = code.trim();

    if (!normalizedCode || loading) return;

    onSubmit(normalizedCode);
  }

  return (
    <form className="access-form" onSubmit={handleSubmit}>
      <label htmlFor="device-code">DEVICE CODE</label>

      <input
        id="device-code"
        type="text"
        placeholder="Ex.: SENSOR-001"
        value={code}
        onChange={(event) => setCode(event.target.value)}
        autoComplete="off"
        autoCapitalize="characters"
        spellCheck={false}
        maxLength={64}
        required
      />

      {error && (
        <p className="access-form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={loading || !code.trim()}>
        {loading ? "Checking device..." : "Access"}
        {!loading && <span aria-hidden="true"> →</span>}
      </button>

      <p className="access-form__hint">
        Provide the code corresponding to sensor.
      </p>
    </form>
  );
}
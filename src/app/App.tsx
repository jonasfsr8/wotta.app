import { Navigate, Route, Routes } from "react-router-dom";

import AccessPage from "../features/access/container/AccessPage";
import TelemetryPage from "../features/home/container/TelemetryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AccessPage />} />
      <Route path="/device/:deviceId" element={<TelemetryPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
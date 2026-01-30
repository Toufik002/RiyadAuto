import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Buy from "./pages/Buy"
// import Sell from "./pages/Sell";
// import About from "./pages/About";
import CarDetails from "./pages/CarDetails";
import Vendre from "./pages/Vendre";
import ExpertiseAuto from "./pages/ExpertiseAuto";
export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<Landing />} />

      {/* Buy (كاينين cars ف Home) */}
      <Route path="/buy" element={<Buy />} />

      {/* Car Details */}
      <Route path="/car/:id" element={<CarDetails />} />

      Sell
      <Route path="/sell" element={<Vendre />} />

      About
      <Route path="/expertise" element={<ExpertiseAuto />} />

      {/* أي route خاريج رجعو للـ Landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

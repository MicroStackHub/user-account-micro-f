import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import AffiliateDashboard from "./components/AffiliateDashboard";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<AffiliateDashboard />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
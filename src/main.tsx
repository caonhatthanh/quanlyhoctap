import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Dashboard from "./page/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NguoiDung from "./page/NguoiDung";
import Baitap from "./page/baitap";
import LichSu from "./page/LichSu";
import FormLogin from "./components/FormLogin/FormLogin";
import Caidat from "./page/Caidat";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<NguoiDung />} />
        <Route path="/baitap" element={<Baitap />} />
        <Route path="/lichsu" element={<LichSu />} />
        <Route path="/dangky" element={<FormLogin />} />
        <Route path="/thongtin" element={<Caidat />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

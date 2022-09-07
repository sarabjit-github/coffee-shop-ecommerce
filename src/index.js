import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./Components/About/About";
import { Menu } from "./Components/Menu/Menu";
import { Navbar } from "./Components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourproduct" element={<Menu />} />
    </Routes>
  </BrowserRouter>
);

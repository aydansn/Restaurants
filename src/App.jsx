import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Pages from "./pages/Pages";
import Plugins from "./pages/Plugins";
import Utilities from "./pages/Utilities";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Details from "./pages/Details";
import BreakFast from "./components/BreakFast/BreakFast";
import Contact from "./pages/Contact";
import Location from "./pages/Location";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

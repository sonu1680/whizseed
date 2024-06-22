import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Home from "./pages/Home";
import Services from "./pages/Services"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Start-Up" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;

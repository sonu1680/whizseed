import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Home from "./pages/Home";
import About from "../src/pages/About"
import Services from "./pages/Services"
import Contact from "./pages/contact";
import Refer from "./pages/Refer";
import Partner from "./pages/Partner";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Start-Up" element={<Services />} />
          <Route path="/Licence" element={<About />} />
          <Route path="/Tax" element={<Contact />} />
          <Route path="/Regulatory" element={<Refer />} />
          <Route path="/Environmental" element={<Partner />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;

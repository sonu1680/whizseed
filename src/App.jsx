import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
};
export default App;

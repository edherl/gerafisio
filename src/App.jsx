import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import BMI from "./components/BMI";
import Bioimpedance from "./components/Bioimpedance";
import SkinFolds from "./components/SkinFolds";
import Circumference from "./components/Circumference";
import Wells from "./components/Wells";
import SitStand from "./components/SitStand";
import ElbowFlexion from "./components/ElbowFlexion";
import Dynamometer from "./components/Dynamometer";
import MWT from "./components/MWT";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imc" element={<BMI />} />
          <Route path="/bioimpedancia" element={<Bioimpedance />} />
          <Route path="/pregas-cutaneas" element={<SkinFolds />} />
          <Route path="/perimetros-de-circunferiencia" element={<Circumference />} />
          <Route path="/wells" element={<Wells />} />
          <Route path="/sentar-e-levantar" element={<SitStand />} />
          <Route path="/flexao-de-cotovelos" element={<ElbowFlexion />} />
          <Route path="/dinamometria-manual" element={<Dynamometer />} />
          <Route path="/tc6" element={<MWT/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
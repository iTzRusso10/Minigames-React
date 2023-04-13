/* eslint-disable react/style-prop-object */
import React from "react";
import { useEffect } from "react";
import Particles from "./components/Particles";
import { Route, Routes, useNavigate } from "react-router-dom";
import Numbers from "./pages/Number";
import Home from "./pages/Home";
import ChooseBox from "./pages/ChooseBox";

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center flex-wrap relative">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/choosebox" element={<ChooseBox />} />
      </Routes>
      <div className="w-full h-screen absolute top-0 left-0 z-[-1] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500">
        <Particles />
      </div>
    </div>
  );
};

export default App;

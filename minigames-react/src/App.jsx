/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import Particles from "./components/Particles";
import { Route, Routes } from "react-router-dom";
import Numbers from "./pages/Number";

const App = () => {
  // useEffect(() => {
  //   alert("Benvenuto nel minigioco Indovina il numero!");
  // }, []);

  return (
    <div className="flex justify-center flex-wrap relative">
      <Routes>
        <Route path="/numbers" element={<Numbers />} />
      </Routes>
      <div className="w-full h-screen absolute top-0 left-0 z-[-1]">
        <Particles />
      </div>
    </div>
  );
};

export default App;

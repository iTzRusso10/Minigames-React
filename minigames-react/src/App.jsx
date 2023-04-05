/* eslint-disable react/style-prop-object */
import React from "react";
import Particles from "./components/Particles";
import Numbers from "./pages/Number";

const App = () => {
  return (
    <div className="w-full h-screen relative bg-banner bg-no-repeat bg-center bg-cover text-white p-2 flex justify-center">
        <div>
            <Numbers />
        </div>
      <div className="w-full h-screen absolute top-0 left-0 z-[-1]">
        <Particles />
      </div>
    </div>
  );
};

export default App;

/* eslint-disable react/style-prop-object */
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-200 flex flex-col p-10 gap-8 content-center items-center text-black rounded-xl opacity-90 flex-wrap absolute top-[85px]">
        <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 leading-loose bg-clip-text text-transparent text-5xl font-black">
          Scegli il gioco
        </p>
        <Button
          text="Indovina il numero"
          id="Home"
          style="border-2 border-black p-2 rounded hover:bg-gray-300 active:bg-gray-400 shadow-xl"
          callback={() => navigate("/numbers")}
        />
        <Button
          text="Box Fortunata"
          id="choose-box"
          style="border-2 border-black p-2 rounded hover:bg-gray-300 active:bg-gray-400 shadow-xl"
          callback={() => navigate("/choosebox")}
        />
        <Button text='Tira il dado' id='rolls-dice' callback={() => navigate("/rolls-dice")} />
      </div>
    </>
  );
};

export default Home;

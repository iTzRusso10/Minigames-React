/* eslint-disable react/style-prop-object */
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ChooseBox = () => {
  const [choose, setChoose] = useState(false);
  const [wrong, setWrong] = useState();
  const navigate = useNavigate();

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 3) + 1;
  };

  const checkAnswer = (userNumber) => {
    const randomNumber = generateRandomNumber();

    if (randomNumber !== userNumber) {
      setChoose(false);
      setWrong(true);
      setTimeout(() => {
        setWrong(false);
      }, 1500);
    } else {
      setChoose(true);
      setTimeout(() => {
        setChoose(false);
      }, 2100);
    }
  };

  return (
    <>
      <div className="bg-gray-200 flex flex-col p-10 gap-8 content-center items-center text-black rounded-xl opacity-90 flex-wrap absolute top-[85px]">
        <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
          Box Fortunata
        </p>
        <p className="font-black">
          Scegli la box <span className="text-green-500">giusta</span>
        </p>
        <div className="flex gap-10">
          <Button text="1" id="box-1" callback={() => checkAnswer(1)} />
          <Button text="2" id="box-2" callback={() => checkAnswer(2)} />
          <Button text="3" id="box-3" callback={() => checkAnswer(3)} />
        </div>
        <div className="flex justify-center flex-col">
          <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
            Ogni qual volta si da una risposta giusta o sbagliata che sia la
            posizione
            <br />
          </p>
          <span className="text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
            della box giusta cambierà
          </span>
        </div>
        <Button
          id="back-home"
          text="Torna alla home"
          callback={() => navigate("/home")}
        />
        {choose ? (
          <p className={`${choose ? "shake text-green-500 font-bold" : ""}`}>
            Complimenti! Hai scelto la box giusta!
          </p>
        ) : (
          ""
        )}
        {wrong ? (
          <p
            id="wrong"
            className={`${wrong ? "shake text-red-500 font-bold" : ""}`}
          >
            Sbagliato, riprova!
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ChooseBox;

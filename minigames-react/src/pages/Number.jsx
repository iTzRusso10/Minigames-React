/* eslint-disable react/style-prop-object */
import { useState } from "react";
import Button from "../components/Button";
import NumberCensored from "../components/NumberCensored";

const Numbers = () => {
  const [inputValue, setInputValue] = useState("");
  const [initalWord, setInitialWord] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [animation, setAnimation] = useState();
  const [randomNumber, setRandomNumber] = useState(
    Math.round(Math.random() * 10)
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const checkAnswer = () => {
    const inputNumber = parseInt(inputValue);
    if (inputNumber === randomNumber) {
      setIsCorrect(true);
      setInitialWord(false);
      setWrong(false);
    } else {
      setIsCorrect(false);
      setWrong(true);
      setInitialWord(false);
      setAnimation(true);
    }
    setInputValue("");
  };

  const rigenerateNumber = () => {
    setRandomNumber(Math.round(Math.random() * 10));
    setIsCorrect(false);
    setInputValue("");
    setInitialWord(true);
    setWrong(false);
  };

  return (
    <div className="bg-gray-200 flex flex-col justify-center p-10 gap-8 items-center text-black rounded-xl opacity-90">
      <Button
        id="rigenerate"
        callback={rigenerateNumber}
        text="Ricomincia"
        style="border-2 border-black rounded p-2 hover:bg-gray-300 active:bg-gray-400 shadow-xl"
      ></Button>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
        Indovina il numero
      </h1>
      <span className="text-md font-black">
        Numero:{" "}
        {isCorrect ? (
          <span className="flex justify-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black">
            {randomNumber}
          </span>
        ) : (
          <NumberCensored />
        )}
      </span>
      <label
        form="numbers"
        className="text-md font-black"
      >
        {isCorrect ? <p>Clicca ricomincia per avviare un altra partita ☝️</p> : <p>Inserisci il numero 👇</p> } 
      </label>
      <input
        placeholder="Tenta la fortuna"
        type="text"
        className="border-2 border-black p-2 rounded"
        name="numbers"
        onChange={handleInputChange}
        value={inputValue}
      />
      <Button
        text="Invia"
        id="number"
        style="border-2 border-black p-2 rounded hover:bg-gray-300 active:bg-gray-400 shadow-xl"
        callback={() => checkAnswer()}
      />
      {initalWord}
      {isCorrect ? (
        <p className="text-green-500 font-bold">Complimenti! Hai indovinato</p>
      ) : (
        ""
      )}
      {wrong ? (
        <p
          className={animation ? "shake text-red-500 font-bold" : ""}
          id="wrongs"
        >
          Sbagliato!
        </p>
      ) : (
        ""
      )}
      {initalWord ? (
        <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-md font-black">
          Indovina il numero che si nasconde dietro il punto interrogativo
          (0-10)
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Numbers;

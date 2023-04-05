/* eslint-disable react/style-prop-object */
import { useState } from "react";
import Button from "../components/Button";
import NumberCensored from "../components/NumberCensored";

const Numbers = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [randomNumber, setRandomNumber] = useState(
    Math.round(Math.random() * 20)
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const checkAnswer = () => {
    const inputNumber = parseInt(inputValue);
    if(inputNumber === randomNumber){
        setIsCorrect(true);
    }
    setInputValue('');
  };

  const rigenerateNumber = () => {
    setRandomNumber(Math.round(Math.random() * 20));
    setIsCorrect(false);
    setInputValue('')
  }

 
  return (
    <div className="bg-gray-200 flex flex-col justify-center p-20 gap-8 items-center text-black rounded-xl content-center opacity-90">
        <Button id="rigenerate" callback={rigenerateNumber} text="Rigenera" style='border-2 border-black rounded p-2'>Rigenera</Button>
      <p>Indovina il numero</p>
      <span>
        Numero: {randomNumber}
        <NumberCensored />
      </span>
      <label form="numbers">Inserisci il numero</label>
      <input
        type="text"
        className="border-2 border-black p-2 rounded"
        name="numbers"
        onChange={handleInputChange}
      />
      <Button
        text="Invia"
        id="number"
        style="border-2 border-black p-2 rounded"
        callback={() => checkAnswer()}
      />
      {isCorrect  ? <p className="text-green-500">Risposta esatta</p> : <p className="text-red-500">Non hai ancora indovinato</p>}
    </div>
  );
};

export default Numbers;

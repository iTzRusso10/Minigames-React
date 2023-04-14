/* eslint-disable react/style-prop-object */
import { useState } from "react";
import DiceImage1 from "../dice-images/Dice1.png";
import DiceImage2 from "../dice-images/Dice2.png";
import DiceImage3 from "../dice-images/Dice3.png";
import DiceImage4 from "../dice-images/Dice4.png";
import DiceImage5 from "../dice-images/Dice5.png";
import DiceImage6 from "../dice-images/Dice6.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const DiceRoller = () => {

    const navigate = useNavigate();

  const images = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ];

  images.unshift('');

  const [image, setImage] = useState(images[1]);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [check, setCheck] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const randomDice = () => {
    const inputUser = parseInt(inputValue)
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setImage(images[randomNumber]);
    if (randomNumber === inputUser) {
      setIsCorrect(true);
      setTimeout(() => {
        setIsCorrect(false)
      }, 3000);
      setWrong(false);
    }else if(inputUser > 6){
        setCheck(true);
        setTimeout(() => {
            setCheck(false)
        }, 2000);
        setImage(images[1])
    }else{
        setIsCorrect(false)
        setWrong(true);
        setTimeout(() => {
            setWrong(false)
        }, 2000);
    }
    setInputValue('')
  };

  return (
    <>
      <div className="bg-gray-200 flex flex-col p-10 gap-5 content-center items-center text-black rounded-xl opacity-90 flex-wrap absolute top-[20px]">
      <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
          Tira il dado
        </p>
        <Button
        id="return-home"
        callback={() => navigate("/home")}
        text="Torna alla home"
        style="border-2 border-black rounded p-2 hover:bg-gray-300 active:bg-gray-400 shadow-xl"
      />
        <img src={image} alt="dado" className="w-60" />
        <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-md font-black">
          Indovina il numero che uscirà dopo premuto il pulsante Lancia!
        </p>
        <input
          placeholder="Tenta la fortuna"
          type="text"
          className="border-2 border-black p-2 rounded"
          name="rolls-number"
          onChange={handleInputChange}
          value={inputValue}
        />{" "}
        <Button
          id="roll-dice"
          text="Lancia!"
          callback={() => randomDice()}
        />
        {isCorrect ? <p className="shake text-green-500 font-bold">Complimenti! Hai indovinato</p> : ''}
        {wrong ? <p className="shake text-red-500 font-bold">Sbagliato, riprova!</p> : ''}
        {check ? <p className="shake text-red-500 font-bold">Errore! I numeri vanno da 1 a 6</p> : ''}
      </div>
    </>
  );
};

export default DiceRoller;

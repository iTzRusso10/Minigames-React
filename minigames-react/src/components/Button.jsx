const Button = ({ id, text, callback, style }) => {
  if (!id) {
    throw new Error("Id is required!");
  }
  return (
    <div>
      <button id={id} onClick={callback} className="font-black border-2 border-black rounded p-3 hover:bg-gray-300 active:bg-gray-400 shadow-xl">
        {text}
      </button>
    </div>
  );
};

export default Button;

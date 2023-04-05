const Button = ({ id, text, callback, style }) => {
  if (!id) {
    throw new Error("Id is required!");
  }
  return (
    <div>
      <button id={id} onClick={callback} className={style}>
        {text}
      </button>
    </div>
  );
};

export default Button;

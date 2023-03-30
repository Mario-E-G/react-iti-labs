import "./button.css";

const Button = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.plus}> + </button>
      <button onClick={props.minus}> - </button>
    </div>
  );
};

export default Button;

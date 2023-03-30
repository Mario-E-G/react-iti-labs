import "./button.css";

const Button = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <button className="btn btn-primary mx-2" onClick={props.plus}>
        +
      </button>
      <button className="btn btn-primary mx-2" onClick={props.minus}>
        -
      </button>
    </div>
  );
};

export default Button;

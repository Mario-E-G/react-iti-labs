import { useState } from "react";
import Button from "./button.js";
import "./button.css";

function Controls() {
  let [counter, setCounter] = useState(0);
  function plus() {
    setCounter(++counter);
  }
  function minus() {
    if (counter >= 1) {
      setCounter(--counter);
    }
  }

  return (
    <div className="card2 text-center">
      <div className="alert alert-primary my-2">
        <Button plus={plus} minus={minus} value={counter} />
      </div>
    </div>
  );
}

export default Controls;

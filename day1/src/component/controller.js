import { useState } from "react";
import Button from "../component/button";

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
    <div>
      <Button plus={plus} minus={minus} value={counter} />
    </div>
  );
}

export default Controls;

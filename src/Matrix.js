import { useState } from "react";
import "./index.css";
export default function Matrix() {
  let a = 4;
  let b = 4;

  const matrix = [];

  const [state, setstate] = useState(0);
  const [lastTwo, setLastTwo] = useState([]);

  const handleClick = (i, j) => {
    setstate(state + 1);
    setLastTwo([...lastTwo, { i: i, j: j }]);
  };

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      let reds = lastTwo.slice(-2);

      matrix.push(
        <div
          onClick={() => handleClick(i, j)}
          className={
            (reds[0]?.i === i && reds[0]?.j === j) ||
            (reds[1]?.i === i && reds[1]?.j === j)
              ? "red"
              : "blue"
          }
        >
          {(reds[0]?.i === i && reds[0]?.j === j) ||
          (reds[1]?.i === i && reds[1]?.j === j)
            ? "Box" + state
            : null}
        </div>
      );
    }
  }

  return <div className="matrix">{matrix}</div>;
}

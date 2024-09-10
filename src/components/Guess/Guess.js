import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ word, answer }) {
  const results = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map(index => (
        <Cell key={index} letter={results && results[index].letter} status={results && results[index].status} />
      ))}
    </p>
  );
}

export default Guess;

import React from "react";

import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResult({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(index => (
        <Guess key={index} word={guessList[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResult;

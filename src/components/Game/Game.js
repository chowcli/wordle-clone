import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameState, setGameState] = React.useState("running");

  const handleSubmit = (event, guessWord) => {
    const newGuessList = [...guessList, guessWord];

    setGuessList(newGuessList);
    handleGameState(newGuessList);

    event.preventDefault();
  };

  const handleGameState = guessList => {
    const state = guessList.some(word => word === answer);

    if (!state && guessList.length === 6) {
      setGameState("lost");
    }
    if (state) {
      setGameState("won");
    }
  };

  return (
    <>
      <GuessResult guessList={guessList} answer={answer} />
      <GuessInput handleSubmit={handleSubmit} />
      {gameState !== "running" && <GameOverBanner gameState={gameState} guessNum={guessList.length} answer={answer} />}
    </>
  );
}

export default Game;

import React from "react";

function GameOverBanner({ gameState, guessNum, answer }) {
  const className = gameState === "won" ? "happy banner" : "sad banner";

  return (
    <div className={className}>
      {gameState === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessNum} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default GameOverBanner;

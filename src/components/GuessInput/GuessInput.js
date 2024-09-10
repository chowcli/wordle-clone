import React from "react";

function GuessInput({ handleSubmit }) {
  const [guessValue, setGuessValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        handleSubmit(event, guessValue);
        setGuessValue("");
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        name="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guessValue}
        onChange={event => setGuessValue(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

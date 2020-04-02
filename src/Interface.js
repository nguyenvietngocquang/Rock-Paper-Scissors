import React from "react";

export const Interface = props => {
  return (
    <>
      <div class="title">Rock - Paper - Scissors</div>
      <div>Choose your choice:</div>
      <img
        alt="Rock"
        onClick={props.choiceRock}
        style={{ cursor: "pointer" }}
        width="9%"
        src="https://static.thenounproject.com/png/477918-200.png"
      />
      <img
        alt="Paper"
        onClick={props.choicePaper}
        style={{ cursor: "pointer" }}
        width="9%"
        src="https://static.thenounproject.com/png/477922-200.png"
      />
      <img
        alt="Scissors"
        onClick={props.choiceScissors}
        style={{ cursor: "pointer" }}
        width="9%"
        src="https://static.thenounproject.com/png/477919-200.png"
      />
      <div>
        <span style={{ cursor: "pointer" }} onClick={props.clearState}>
          Reset
        </span>
      </div>
      <div>Games: {props.games}</div>
    </>
  );
};
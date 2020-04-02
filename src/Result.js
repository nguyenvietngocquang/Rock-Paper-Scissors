import React from "react";

export const Result = props => {
  if ((props.yourChoice === 1 && props.computerChoice === 3) || (props.yourChoice === 2 && props.computerChoice === 1) 
    || (props.yourChoice === 3 && props.computerChoice === 2)) {
    props.wins.push(1);
    return (
      <h2>
        Wins: {props.wins.length} - Draws: {props.draws.length} - Losses: {props.losses.length}
      </h2>
    );
  } else if ((props.yourChoice === 1 && props.computerChoice === 2) || (props.yourChoice === 2 && props.computerChoice === 3) 
    || (props.yourChoice === 3 && props.computerChoice === 1)) {
    props.losses.push(1);
    return (
      <h2>
        Wins: {props.wins.length} - Draws: {props.draws.length} - Losses: {props.losses.length}
      </h2>
    );
  } else if (props.computerChoice === props.yourChoice) {
    props.draws.push(1);
    return (
      <h2>
        Wins: {props.wins.length} - Draws: {props.draws.length} - Losses: {props.losses.length}
      </h2>
    );
  } else if (props.computerChoice === null && props.yourChoice === "") {
    return (
      <h2>
        Wins: {props.wins.length} - Draws: {props.draws.length} - Losses: {props.losses.length}
      </h2>
    );
  } else {
    return null;
  }
};
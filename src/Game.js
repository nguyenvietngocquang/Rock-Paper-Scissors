import React from "react";

export const Game = props => {
  const { yourChoice, computerChoice } = props.results;

  if ((yourChoice === 1 && computerChoice === 3) || (yourChoice === 2 && computerChoice === 1) 
    || (yourChoice === 3 && computerChoice === 2)) {
    return <h1 className="won">You Won!</h1>;
  } else if ((yourChoice === 1 && computerChoice === 2) || (yourChoice === 2 && computerChoice === 3) 
    || (yourChoice === 3 && computerChoice === 1)) {
    return <h1 className="lost">You Lost!</h1>;
  } else if (yourChoice === computerChoice) {
    return <h1 className="draw">Draw!</h1>;
  } else {
    return <h1></h1>;
  }
};
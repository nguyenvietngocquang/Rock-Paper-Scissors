import React from "react";

export const ComputerChoice = props => {
  const { rock, paper, scissors, computerChoice } = props.allstates;
  if (computerChoice === 1) {
    return (
      <div className="computer-choice">
        <div>Computer</div> <img alt="Rock" width="70%" src={rock} />
      </div>
    );
  } else if (computerChoice === 2) {
    return (
      <div className="computer-choice">
        <div>Computer</div> <img alt="Paper" width="70%" src={paper} />
      </div>
    );
  } else if (computerChoice === 3) {
    return (
      <div className="computer-choice">
        <div>Computer</div> <img alt="Scissors" width="70%" src={scissors} />
      </div>
    );
  } else {
    return null;
  }
};
import React from "react";

export const YourChoice = props => {
  const { rock, paper, scissors, yourChoice } = props.allstates;
  if (yourChoice === 1) {
    return (
      <div className="your-choice">
        <div>You</div> <img alt="Rock" width="70%" src={rock} />
      </div>
    );
  } else if (yourChoice === 2) {
    return (
      <div className="your-choice">
        <div>You</div> <img alt="Paper" width="70%" src={paper} />
      </div>
    );
  } else if (yourChoice === 3) {
    return (
      <div className="your-choice">
        <div>You</div> <img alt="Scissors" width="70%" src={scissors} />
      </div>
    );
  } else {
    return null;
  }
};
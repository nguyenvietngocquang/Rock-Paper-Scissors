import React from "react";
import { Game } from "./Game";
import { Interface } from "./Interface";
import { ComputerChoice } from "./ComputerChoice";
import { YourChoice } from "./YourChoice";
import { Result } from "./Result";
import "./App.css";

class App extends React.Component {
  draws = [];
  losses = [];
  wins = [];
  state = {
    games: 0,
    yourChoice: "",
    computerChoice: null,
    rock:
      "https://static.thenounproject.com/png/477918-200.png",
    paper:
      "https://static.thenounproject.com/png/477922-200.png",
    scissors:
      "https://static.thenounproject.com/png/477919-200.png",
  };

  computerChoice = () => {
    this.setState({
      computerChoice: Math.floor(Math.random() * 3) + 1
    });
  };

  chooseChoice = (number) => {
    this.setState({
      yourChoice: number,
      games: this.state.games + 1
    });
    this.computerChoice();
  };

  clearState = () => {
    this.losses = [];
    this.wins = [];
    this.draws = [];
    this.setState({
      yourChoice: "",
      computerChoice: null,
      games: 0
    });
  };

  render() {
    return (
      <>
        <Interface
          games={this.state.games}
          clearState={this.clearState}
          chooseChoice={this.chooseChoice}
          yourChoice={this.state.yourChoice}
          computerChoice={this.state.computerChoice}
        />
        <div className="effects">
          <YourChoice allstates={this.state} />
          <ComputerChoice allstates={this.state} />
        </div>
        <Game results={this.state} />
        <Result
          wins={this.wins}
          losses={this.losses}
          draws={this.draws}
          yourChoice={this.state.yourChoice}
          computerChoice={this.state.computerChoice}
        />
      </>
    );
  }
}

export default App;

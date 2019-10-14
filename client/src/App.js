import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      worldCupData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ worldCupData: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log("data", this.state);
    return (
      <div>
        <Header />
        {this.state.worldCupData.map(player => (
          <PlayerCard
            key={player.id}
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        ))}
      </div>
    );
  }
}

export default App;

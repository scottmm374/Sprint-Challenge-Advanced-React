import React, {Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      worldCupData: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => this.setState({worldCupData: res.data}))
      .catch(err => console.log(err))
  };

  render() {
    console.log("data", this.state)
    return (
      <div>
        
       
      </div>
    );

  }
 
}

export default App;

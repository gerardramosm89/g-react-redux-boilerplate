import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <h1 style={{margin: 'auto'}}>Welcome to Gerry's React-Redux Boiler plate!</h1>
      </div>
    );
  }
}

export default Home;
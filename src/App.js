import React, { Component } from 'react';
import {me, twitter, github, linkedin, nodejs, react, serverless} from './images';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hi <span role="img" aria-label="wave">👋</span> I'm Jon Storm</p>
        <img className="me" src={me} alt="jon_storm" />
        <p>I live in Austin, TX</p>
        <p>I studied <span style={{fontWeight: '400'}}>Computer Science</span> and <span style={{fontWeight: '400'}}>Business Management</span> at <a href="http://carthage.edu" style={{'color': '#da3f2b', textDecoration: 'none', fontWeight: '400'}}>Carthage College</a></p>
        <p>I'm a full stack software engineer at <a href="http://uship.com" style={{color: '#2c83bb', textDecoration: 'none', fontWeight: '400'}}>uShip</a></p>
        <p>I'm a semi-professional beach volleyball player at <a href="http://avp.com" style={{color: '#fcd333', textDecoration: 'none', fontWeight: '400'}}>AVP</a></p>
        <div className="preferredStack">
          <a href="https://nodejs.org/en/"><img src={nodejs} alt="nodejs"/></a>
          <a href="https://serverless.com/"><img src={serverless} alt="twitter"/></a>
          <a href="https://reactjs.org/"><img src={react} alt="twitter"/></a>
        </div>
        <div className="links">
          <a href="https://twitter.com/iamjonstorm"><img src={twitter} alt="twitter"/></a>
          <a href="https://github.com/iamjonstorm"><img src={github} alt="github"/></a>
          <a href="http://www.linkedin.com/in/jon-storm"><img src={linkedin} alt="linkedin"/></a>
        </div>
      </div>
    );
  }
}

export default App;

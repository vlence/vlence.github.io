import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <h1>Hello!</h1>
        <p className="lead">My name is Victor.</p>
        <p>I am a software developer at <a href="https://www.intown-solutions.com" target="_blank">InTown Solutions</a>. (No I don't fix broken computers)</p>
        <p>I love writing code, listening to metal instrumentals and discussing about the Bible.</p>
      </div>
    );
  }
}

export default Intro;
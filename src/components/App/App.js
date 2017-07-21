import React, { Component } from 'react';

import Intro   from 'COMPONENTS/Intro/Intro';
import Story   from 'COMPONENTS/Story/Story';
import Work    from 'COMPONENTS/Work/Work';
import Contact from 'COMPONENTS/Contact/Contact';

import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

          <section>
            <Intro></Intro>
          </section>

          <section>
            <Work></Work>
          </section>

          <section>
            <Story></Story>
          </section>
          
          <section>
            <Contact></Contact>
          </section>
        </div>

      </div>
    );
  }
}

export default App;

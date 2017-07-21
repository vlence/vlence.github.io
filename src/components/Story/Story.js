import React, { Component } from 'react';

class Story extends Component {
  render() {
    return (
      <div className="Story">
        <h1>A backstory</h1>
        <p className="lead">I started young(-ish).</p>
        <p>
          It started with video games.
          I would play video games all the time but there was always something about the game I didn't like.
          Whether it was the physics, the animation or whatever it was there was always something I wanted to change.
          So I thought to myself I would one day become a game developer and show people how it's done (LOL!)
        </p>
        <p>
          Come sixth grade and I knew how to connect to the internet, look up stuff on Google and watch videos on YouTube.
          This was the turning point. My cousin had once told me I could find videos of anything on YouTube. I took it literally.
          Finally piecing two and two together, I hit up YouTube and searched for "how to write programs in java". There were videos!
        </p>
        <p>
          Internet speeds back then were horrible. I would wait half an hour for a five minute video to buffer before watching it.
          This went on for months until I could string up my own Java programs which could do stuff with numbers.
        </p>
        <p>
          Today I am here, hosting my own portfolio on GitHub using technologies like React.
        </p>
      </div>
    );
  }
}

export default Story;
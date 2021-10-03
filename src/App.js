import React from "react";
import "./App.css";
import ParticlesBg from "particles-bg";
import MouseParticles from 'react-mouse-particles';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            covidData: null,
        };
    }

    componentDidMount() {
        fetch("https://hpb.health.gov.lk/api/get-current-statistical")
            .then((Response) => Response.json())
            .then((users) => {
                console.log(users);
                this.setState({
                    covidData: users.data,
                });
            });
    }

    render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

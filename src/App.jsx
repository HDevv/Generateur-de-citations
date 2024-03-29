import React from "react";
import axios from "axios";
import "./App.css";
import Mouse from "./mouse/mouse.jsx";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <>
        <Mouse />
        <div className="app">
          <form placeholder="machin"></form>
          <div className="card">
            <h1 className="heading">{advice}</h1>

            <button className="button" onClick={this.fetchAdvice}>
              <span>GIVE ME ADVICE</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;

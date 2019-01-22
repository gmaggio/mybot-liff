import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "muicss/react";

const liff = window.liff;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      userId: "",
      pictureUrl: "",
      statusMessage: ""
    };
    this.initialize = this.initialize.bind(this);
    this.closeApp = this.closeApp.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.initialize);
  }

  initialize() {
    console.log("test uhuy");
    liff.init(async data => {
      console.log(data);
      try {
        let profile = await liff.getProfile();

        const result = await fetch(
          `https://gio-mybot-api.herokuapp.com/user?query=${profile.userId}`
        );

        this.setState({
          displayName: profile.displayName,
          userId: result,
          pictureUrl: profile.pictureUrl,
          statusMessage: profile.statusMessage
        });
      } catch (e) {
        this.setState({
          userId: e.toString()
        });
      }
    });
  }

  closeApp(event) {
    event.preventDefault();
    liff
      .sendMessages([
        {
          type: "text",
          text: "Thank you, Bye!"
        }
      ])
      .then(() => {
        liff.closeWindow();
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ height: "20px" }} />
        <p className="App-intro">
          Display Name : {this.state.displayName} <br />
          User ID : {this.state.userId} <br />
          {/* Status Msg : {this.state.statusMessage} */}
        </p>
        <Button color="primary" onClick={this.closeApp}>
          Close
        </Button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "muicss/react";
import redis from "redis";

// const client = redis.createClient(
//   "redis://h:pe1006fb64e59cea3cae4f3e94c7ca51ac918438cff6cde0290ce22d3eab6d2a2@ec2-174-129-114-5.compute-1.amazonaws.com:37849"
// );
// const redis = require("redis"),
/* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
const client = redis.createClient({
  port: 37849, // replace with your port
  host: "ec2-174-129-114-5.compute-1.amazonaws.com", // replace with your hostanme or IP address
  password: "pe1006fb64e59cea3cae4f3e94c7ca51ac918438cff6cde0290ce22d3eab6d2a2"
});

client.on("connect", function() {
  console.log("connected");
});

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
    liff.init(async data => {
      let profile = await liff.getProfile();
      this.setState({
        displayName: profile.displayName,
        userId: profile.userId,
        pictureUrl: profile.pictureUrl,
        statusMessage: profile.statusMessage
      });
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
          Status Msg : {this.state.statusMessage}
        </p>
        <Button color="primary" onClick={this.closeApp}>
          Close
        </Button>
      </div>
    );
  }
}

export default App;

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
      let profile = await liff.getProfile();

      fetch(
        `https://gio-mybot-api.herokuapp.com/members?query=${
          data.context.groupId
        }`
      )
        .then(result => result.json())
        .then(data => {
          this.setState({
            displayName: `${data.data[0].name}, ${data.data[1].name}, ${
              data.data[2].name
            }`
          });
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
      <div className="app">
        <header className="header">
          {/* <img src={logo} className="logo" alt="logo" /> */}
          <h1 className="title">S E P L I T</h1>
          <h2 className="subtitle">Patungan Jadi Gampang</h2>
        </header>

        <div className="body">
          <div class="content">Content</div>
        </div>

        <div class="actions">
          <Button color="primary" onClick={this.closeApp}>
            Close
          </Button>
        </div>
      </div>
    );
  }
}

export default App;

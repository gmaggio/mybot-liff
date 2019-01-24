import React, { Component } from "react";
import "./App.css";
import { Button } from "muicss/react";

const liff = window.liff;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
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
      fetch(
        `https://gio-mybot-api.herokuapp.com/members?query=${
          data.context.groupId
        }`
      )
        .then(result => result.json())
        .then(data => {
          this.setState({
            members: data.data
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
          <div class="content">
            <div class="form-input input-transaction-name">
              <label for="transaction-name">Nama tagihan</label>
              <input type="text" name="transaction-name" />
            </div>

            <div>
              {`asdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\nasdf\n`}
            </div>
          </div>
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

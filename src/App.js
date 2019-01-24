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
          <div className="content">
            <section className="form-input input-transaction-name">
              <label for="transaction-name">Nama tagihan</label>
              <input type="text" name="transaction-name" />
            </section>

            <section className="form-input input-transaction-amt">
              <label for="transaction-amt">Jumlah tagihan</label>
              <div className="form-input-group">
                <span className="form-input-prefix">Rp</span>
                <input type="text" name="transaction-amt" />
              </div>
            </section>

            <section className="set-payer">
              <p>Siapa yang nalangin transaksi itu? Dan berapa?</p>

              <div className="checklist select-members">
                {this.state.members.map((member, index) => (
                  <div className="mui-checkbox" key={member.user_id}>
                    <label>
                      <input type="checkbox" value="{member.user_id}" checked />
                      >{member.name}
                    </label>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="actions">
          <Button color="primary" onClick={this.closeApp} disabled>
            Close
          </Button>
        </div>
      </div>
    );
  }
}

export default App;

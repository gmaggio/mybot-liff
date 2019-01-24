import React, { PureComponent } from 'react'
import './App.scss'
import { Button } from 'muicss/react'
import Spinner from './components/Spinner/'

const liff = window.liff

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      loading: true,
    }
    this.initialize = this.initialize.bind(this)
    this.closeApp = this.closeApp.bind(this)
  }

  componentDidMount() {
    window.addEventListener('load', this.initialize)
  }

  initialize() {
    liff.init(
      async data => {
        fetch(
          `https://gio-mybot-api.herokuapp.com/members?query=${
            data.context.groupId
          }`,
        )
          .then(result => result.json())
          .then(data => {
            this.setState({
              members: data.data,
              loading: false,
            })
          })
      },
      err => {
        console.log('-----> Error:', err)

        // TEST: Test data
        const tempData = []
        for (let i = 1; i <= 6; i++) {
          tempData.push({
            name: `Test User ${i}`,
            user_id: `${i}`,
          })
        }
        this.setState({
          members: tempData,
          loading: false,
        })
      },
    )
  }

  closeApp(event) {
    event.preventDefault()
    liff
      .sendMessages([
        {
          type: 'text',
          text: 'Thank you, Bye!',
        },
      ])
      .then(() => {
        liff.closeWindow()
      })
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <header className="header">
            {/* <img src={logo} className="logo" alt="logo" /> */}
            <h1 className="title">S E P L I T</h1>
            <h2 className="subtitle">Patungan Jadi Gampang</h2>
          </header>

          <div className="content-wrapper">
            <div className="content">
              <section className="form-input input-transaction-name">
                <label htmlFor="transaction-name">Nama tagihan</label>
                <input type="text" name="transaction-name" />
              </section>

              <section className="form-input input-transaction-amt">
                <label htmlFor="transaction-amt">Jumlah tagihan</label>
                <div className="form-input-group">
                  <span className="form-input-prefix">Rp</span>
                  <input type="text" name="transaction-amt" />
                </div>
              </section>

              <section className="set-payer checklist">
                <p>Siapa yang nalangin transaksi itu? Dan berapa?</p>

                <div className="checklist-list select-members">
                  {this.state.loading === true ? (
                    <Spinner />
                  ) : (
                    this.listMembers()
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="actions">
          <Button color="primary" onClick={this.closeApp} disabled>
            Close
          </Button>
        </div>
      </div>
    )
  }

  listMembers() {
    if (this.state.members.length === 0) {
      return <p>Belum ada yang ikutan...</p>
    } else {
      return this.state.members.map((member, index) => (
        <div className="mui-checkbox" key={member.user_id}>
          <label>
            <input type="checkbox" value="{member.user_id}" />
            {member.name}
          </label>
        </div>
      ))
    }
  }
}

export default App

import React, { Component } from 'react'

class Header extends Component {
  render() {
    return <h2>我是Header组件</h2>
  }
}

class Main extends Component {
  render() {
    return <h2>我是Main组件</h2>
  }
}

class Footer extends Component {
  render() {
    return <h2>我是Footer组件</h2>
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

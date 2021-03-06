import React, { Component } from 'react'

class Header extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('Header render被调用')
    return <h2>我是Header组件</h2>
  }
}

class Main extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('Main render被调用')
    return <h2>我是Main组件</h2>
  }
}

class Footer extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('Footer render被调用')
    return <h2>我是Footer组件</h2>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      message: 'Hello World'
    }
  }
  shouldComponentUpdate(nextProps, nextStates) {
    if (this.state.counter !== nextStates.counter) {
      return true
    }
    return false
  }
  render() {
    console.log('App render被调用')
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.changeText()}>改变文本</button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  changeText() {
    this.setState({
      message: 'Hello'
    })
  }
}

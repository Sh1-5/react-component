import React, { PureComponent } from 'react'

class Header extends PureComponent {
  render() {
    console.log('Header render被调用')
    return <h2>我是Header组件</h2>
  }
}

class Main extends PureComponent {
  render() {
    console.log('Main render被调用')
    return <h2>我是Main组件</h2>
  }
}

class Footer extends PureComponent {
  render() {
    console.log('Footer render被调用')
    return <h2>我是Footer组件</h2>
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    console.log('App render被调用')
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+</button>
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
}

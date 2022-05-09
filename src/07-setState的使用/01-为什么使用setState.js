import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h1>当前计数：{this.state.counter}</h1>
        <button onClick={() => this.increment()}>+</button>
      </div>
    )
  }
  increment() {
    // 视图不会刷新
    // this.state.counter += 1
    // console.log(this.state.counter)
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

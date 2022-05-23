import React, { Component } from 'react'

class CounterButton extends Component {
  render() {
    const { increment, decrement } = this.props
    return (
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>当前计数：{counter}</h2>
        <CounterButton
          increment={() => this.increment()}
          decrement={() => this.decrement()}
        />
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
}

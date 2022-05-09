import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
      this.setState({
        counter: this.state.counter + 1
      })
      console.log(this.state.counter) // 异步更新
    })
  }
  render() {
    return (
      <div>
        <h1>当前计数：{this.state.counter}</h1>
        <button onClick={() => this.increment()}>+</button>
        <button id="btn">原生+</button>
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
    console.log(this.state.counter) // 异步更新

    // setTimeout(() => {
    //   this.setState({
    //     counter: this.state.counter + 1
    //   })
    //   console.log(this.state.counter) // 异步更新
    // }, 0)

    // 解决合并问题
    // this.setState((prevState, props) => {
    //   return {
    //     counter: prevState.counter + 1
    //   }
    // })
    // this.setState((prevState, props) => {
    //   return {
    //     counter: prevState.counter + 1
    //   }
    // })
    // this.setState((prevState, props) => {
    //   return {
    //     counter: prevState.counter + 1
    //   }
    // })
  }
}

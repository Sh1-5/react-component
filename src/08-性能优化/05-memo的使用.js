import React, { PureComponent, memo } from 'react'

const MemoHeader = memo(function Header() {
  console.log('Header render被调用')
  return <h1>我是Header组件</h1>
})

const MemoMain = memo(function Main() {
  console.log('Main render被调用')
  return <h1>我是Main组件</h1>
})

const MemoFooter = memo(function Footer() {
  console.log('Footer render被调用')
  return <h1>我是Footer组件</h1>
})

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
        <h1>当前计数：{this.state.counter}</h1>
        <button onClick={() => this.increment()}>+</button>
        <MemoHeader />
        <MemoMain />
        <MemoFooter />
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.titleRef = createRef()
    this.titleEl = ''
  }
  render() {
    return (
      <div>
        {/* 字符串 */}
        <h2 ref="titleRef">Hello World</h2>
        <button onClick={() => this.changeText1()}>改变文本1</button>
        {/* 对象，推荐方式 */}
        <h2 ref={this.titleRef}>Hello World</h2>
        <button onClick={() => this.changeText2()}>改变文本2</button>
        {/* 回调函数 */}
        <h2 ref={(arg) => (this.titleEl = arg)}>Hello World</h2>
        <button onClick={() => this.changeText3()}>改变文本3</button>
      </div>
    )
  }
  changeText1() {
    this.refs.titleRef.innerHTML = 'Hello React'
  }
  changeText2() {
    this.titleRef.current.innerHTML = 'Hello React'
  }
  changeText3() {
    this.titleEl.innerHTML = 'Hello React'
  }
}

import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}

// 函数式组件不能被给ref
// function About(props) {
//   return <h2>About</h2>
// }

const About = forwardRef(function (props, ref) {
  return <h2 ref={ref}>About</h2>
})

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.titleRef = createRef()
    this.homeRef = createRef()
    this.aboutRef = createRef()
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>App</h2>
        <Home ref={this.homeRef} />
        <About ref={this.aboutRef} />
        <button onClick={() => this.printRef()}>打印ref</button>
      </div>
    )
  }
  printRef() {
    console.log(this.titleRef.current)
    console.log(this.homeRef.current)
    console.log(this.aboutRef.current)
  }
}

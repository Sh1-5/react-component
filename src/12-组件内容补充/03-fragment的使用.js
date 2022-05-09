import React, { PureComponent, Fragment } from 'react'

export default class App extends PureComponent {
  render() {
    // 有个多余的div
    // return (
    //   <div>
    //     <h2>Hello</h2>
    //     <h2>React</h2>
    //   </div>
    // )
    return (
      // 类似template
      <Fragment>
        <h2>Hello</h2>
        <h2>React</h2>
      </Fragment>

      // 短语法
      // <>
      //   <h2>Hello</h2>
      //   <h2>React</h2>
      // </>
    )
  }
}

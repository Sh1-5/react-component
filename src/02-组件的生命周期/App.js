import React, { Component } from 'react'

// 1.挂载阶段
// export default class App extends Component {
//   constructor() {
//     super()
//     console.log('执行了组件的constructor方法')
//   }
//   componentDidMount() {
//     console.log('执行力组件的componentDidMount方法')
//   }
//   render() {
//     console.log('执行了组件的render方法')
//     return <h1>Hello React</h1>
//   }
// }

// 2.更新阶段
// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       message: 'Hello React'
//     }
//     console.log('执行了组件的constructor方法')
//   }
//   componentDidMount() {
//     console.log('执行力组件的componentDidMount方法')
//   }
//   componentDidUpdate() {
//     console.log('执行力组件的componentDidUpdate方法')
//   }
//   render() {
//     console.log('执行了组件的render方法')
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={() => this.handleClick()}>改变文本</button>
//       </div>
//     )
//   }
//   handleClick() {
//     this.setState({
//       message: 'Hello World'
//     })
//   }
// }

// 3.卸载阶段
class Cpn extends Component {
  componentWillUnmount() {
    console.log('调用了Cpn组件的componentWillUnmount方法')
  }
  render() {
    return <h1>我是Cpn组件</h1>
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>切换显示</button>
        {this.state.isShow && <Cpn />}
      </div>
    )
  }
  handleClick() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

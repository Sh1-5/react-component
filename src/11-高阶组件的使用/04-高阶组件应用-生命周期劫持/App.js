import React, { PureComponent } from 'react'

import Home from './Home'
import About from './About'

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }
    componentDidMount() {
      const interval = Date.now() - this.beginTime
      console.log(`${WrappedComponent.name}组件渲染时间为：${interval}ms`)
    }
    render() {
      return <WrappedComponent />
    }
  }
}

const EnhanceHome = withRenderTime(Home)
const EnhanceAbout = withRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <Home />
        <About /> */}
        <EnhanceHome />
        <EnhanceAbout />
      </div>
    )
  }
}

import React, { PureComponent } from 'react'

import Home from './Home'
import About from './About'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home name="kobe" age={18} />
        <About name="张三" age={18} />
      </div>
    )
  }
}

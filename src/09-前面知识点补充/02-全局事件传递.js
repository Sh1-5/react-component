import React, { PureComponent } from 'react'

import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
        <button onClick={() => this.emitEvent()}>点击了Home按钮</button>
      </div>
    )
  }
  emitEvent() {
    eventBus.emit('sayHello', 'Hello Profile')
  }
}

class Profile extends PureComponent {
  componentDidMount() {
    eventBus.addListener('sayHello', this.handleSayHelloListener)
  }
  componentWillUnmount() {
    eventBus.removeListener('sayHello', this.handleSayHelloListener)
  }
  render() {
    return <div>Profile</div>
  }
  handleSayHelloListener(message) {
    console.log(message)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}

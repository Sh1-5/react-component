import React, { Component } from 'react'

class ChildCpn extends Component {
  render() {
    const { name, age } = this.props
    return <h1>{'name ' + name + ' age ' + age}</h1>
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="kobe" age="18" />
      </div>
    )
  }
}

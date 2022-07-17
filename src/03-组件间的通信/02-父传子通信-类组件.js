import React, { Component } from 'react'

class ChildCpn extends Component {
  render() {
    const { name, age } = this.props
    return <h2>{`Name：${name}，Age：${age}`}</h2>
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

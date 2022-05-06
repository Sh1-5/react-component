import React, { Component } from 'react'

function ChildCpn(props) {
  const { name, age } = props
  return <h1>{'name ' + name + ' age ' + age}</h1>
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

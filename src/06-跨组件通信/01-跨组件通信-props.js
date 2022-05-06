import React, { Component } from 'react'

function ProfileHeader(props) {
  const { name, level } = props
  return (
    <div>
      <h2>用户昵称：{name}</h2>
      <h2>用户等级：{level}</h2>
    </div>
  )
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'kobe',
      level: 99
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.state} />
        {/* <Profile name={this.state.name} level={this.state.level} /> */}
      </div>
    )
  }
}

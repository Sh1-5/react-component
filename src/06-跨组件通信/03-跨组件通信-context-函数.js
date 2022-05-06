import React, { Component } from 'react'

const UserContext = React.createContext({
  name: 'james',
  level: 18
})

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称：{value.name}</h2>
            <h2>用户等级：{value.level}</h2>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

function Profile() {
  return (
    <div>
      <ProfileHeader />
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
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}

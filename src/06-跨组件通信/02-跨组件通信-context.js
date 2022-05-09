import React, { createContext, Component } from 'react'

// 创建context对象
const UserContext = createContext({
  name: 'james',
  level: 18
})

class ProfileHeader extends Component {
  render() {
    const { name, level } = this.context
    return (
      <div>
        <h2>用户昵称：{name}</h2>
        <h2>用户等级：{level}</h2>
      </div>
    )
  }
}
ProfileHeader.contextType = UserContext

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
        {/* 使用创建context时的默认值 */}
        <Profile />
      </div>
    )
  }
}

import React, { createContext, Component } from 'react'

const UserContext = createContext({
  name: 'james',
  level: 18
})
const ThemeContext = createContext({
  color: 'black'
})

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(userValue) => {
        return (
          <ThemeContext.Consumer>
            {(themeValue) => {
              return (
                <div>
                  <h2 style={{ color: themeValue.color }}>
                    用户昵称：{userValue.name}
                  </h2>
                  <h2>用户等级：{userValue.level}</h2>
                  <h2>颜色：{themeValue.color}</h2>
                </div>
              )
            }}
          </ThemeContext.Consumer>
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
          <ThemeContext.Provider value={{ color: 'red' }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}

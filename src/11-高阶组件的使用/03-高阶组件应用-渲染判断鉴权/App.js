import React, { PureComponent } from 'react'

import Login from './Login'
import Profile from './Profile'

function loginAuth(WrappedComponent) {
  return (props) => {
    if (props.isLogin) {
      return <Profile />
    } else {
      return <Login />
    }
  }
}

const EnhanceProfile = loginAuth(Profile)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceProfile isLogin={true} />
      </div>
    )
  }
}

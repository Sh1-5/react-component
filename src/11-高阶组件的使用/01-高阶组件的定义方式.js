import React, { PureComponent } from 'react'

function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent />
    }
  }
  NewComponent.displayName = 'Kobe'
  return NewComponent
}

class App extends PureComponent {
  render() {
    return <div>App</div>
  }
}

const EnhanceComponent = enhanceComponent(App)

export default EnhanceComponent

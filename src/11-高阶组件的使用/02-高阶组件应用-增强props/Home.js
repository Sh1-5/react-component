import React, { PureComponent } from 'react'

function enhanceComponent(WrappedComponent, otherProps) {
  return (props) => <WrappedComponent {...props} {...otherProps} />
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>
          姓名：{this.props.name} 年龄：{this.props.age} 地区：
          {this.props.region}
        </h2>
      </div>
    )
  }
}

const EnhanceHome = enhanceComponent(Home, { region: '美国', major: '篮球' })

export default EnhanceHome

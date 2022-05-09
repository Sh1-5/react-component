import React, { PureComponent } from 'react'

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>
          姓名：{this.props.name} 年龄：{this.props.age}
        </h2>
      </div>
    )
  }
}

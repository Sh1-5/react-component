import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [
        {
          name: '张三',
          age: 18
        },
        {
          name: '李四',
          age: 19
        },
        {
          name: '王五',
          age: 20
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name + index}>
                姓名：{item.name} 年龄：{item.age}
                <button onClick={() => this.incrementAge(index)}>age+1</button>
              </li>
            )
          })}
        </ul>
        <button onClick={() => this.insertData()}>添加数据</button>
      </div>
    )
  }
  insertData() {
    // 不要直接修改state
    // 修改state只能使用setState
    this.setState({
      friends: [...this.state.friends, { name: '赵六', age: 21 }]
    })
  }
  incrementAge(index) {
    const newFriends = [...this.state.friends]
    newFriends[index].age += 1
    this.setState({
      friends: newFriends
    })
  }
}

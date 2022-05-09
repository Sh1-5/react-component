import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: ['星际穿越', '火星救援']
    }
  }
  render() {
    return (
      <div>
        <h1>电影列表</h1>
        <ul>
          {this.state.movies.map((item, index) => {
            return <li key={item + index}>{item}</li>
          })}
        </ul>
        <button onClick={() => this.insertMovie()}>插入电影</button>
      </div>
    )
  }
  insertMovie() {
    this.setState({
      movies: ['流浪地球', ...this.state.movies]
    })
  }
}

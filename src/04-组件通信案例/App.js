import React, { Component } from 'react'

import TabControl from './TabControl'

import './style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: ['新款', '精选', '流行'],
      currentIndex: 0
    }
  }
  render() {
    const { titles, currentIndex } = this.state
    return (
      <div>
        <TabControl
          titles={titles}
          itemClick={(index) => this.itemClick(index)}
        />
        <h2>{titles[currentIndex]}</h2>
      </div>
    )
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })
  }
}

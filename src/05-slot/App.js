import React, { Component } from 'react'

import NavBar from './NavBar'
import NavBar2 from './NavBar2'

import './style.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>span</span>
          <i>i</i>
          <strong>strong</strong>
        </NavBar>
        <NavBar2
          leftSlot={<span>span</span>}
          centerSlot={<i>i</i>}
          rightSlot={<strong>strong</strong>}
        />
      </div>
    )
  }
}

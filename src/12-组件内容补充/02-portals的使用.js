import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

import '../assets/css/index.css'

class Modal extends PureComponent {
  render() {
    const modal = document.createElement('div')
    modal.id = 'modal'
    document.body.appendChild(modal)
    return createPortal(this.props.children, document.getElementById('modal'))
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>This is Modal</h2>
        </Modal>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, letters } = props
  return (
    <div>
      <h2>{'name ' + name + ' age ' + age}</h2>
      <ul>
        {letters.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  letters: PropTypes.array
}

// 默认值
ChildCpn.defaultProps = {
  name: 'james',
  age: 18,
  letters: ['a', 'b']
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="kobe" age={18} letters={['a', 'b', 'c', 'd']} />
        <ChildCpn />
      </div>
    )
  }
}

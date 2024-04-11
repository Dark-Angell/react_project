import React, { Component } from 'react'
import Item from '../Item'

export default class index extends Component {
  render() {
    const { todos } = this.props

    return (
      <ul className='todo-main'>
        <Item todos={todos} />
      </ul>
    )
  }
}

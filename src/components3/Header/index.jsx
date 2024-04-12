import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class index extends Component {
  handle = (event) => {
    const {target, keyCode} = event
    if(keyCode != 13) return
    if(target.value.trim() === '') {
      return
    }

    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addTodo(todoObj)
    target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handle} type="text" placeholder='请输入你的任务名称，并按回车键确认' />
      </div>
    )
  }
}

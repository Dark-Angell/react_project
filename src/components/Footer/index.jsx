import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div className='todo-footer'>
        <label>
          <input type="text" />
        </label>
        <span>
          <span>已完成0</span> / 全部完成2
        </span>
        <button className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class index extends Component {
  render() {
    const { todos } = this.props
    console.log(todos)
    return (
      <div>
        <ul className='todo-item'>
          {
            todos.map((item, index) => {
              return (
                <li key={item.id}>
                  <label>
                    <input type="text" />
                    <span>{item.name}</span>
                  </label>
                  <button className='btn btn-danger' style={{display: 'none'}}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

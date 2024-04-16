import React, { Component } from 'react'



export default class A extends Component {
  

  render() {
    return (
      <div>
        我是 A 组件,count 值为：
        <B
          render={(data) => (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  {item.name} -- {item.age}
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    )
  }
}

class B extends Component {
  state = {
    data: [
      {
        name: "张三",
        age: 18
      },
      {
        name: "李四",
        age: 20
      },
      {
        name: "王五",
        age: 22
      },
    ]
  }

  render() {
    return (
      <div>
        {this.props.render(this.state.data)}
      </div>
    )
  }
}


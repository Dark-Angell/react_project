import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person_action'

// ui 组件
class person extends Component {

  addPerson = () => {
    const name = this.name.value
    const age = this.age.value
    const personObj = {id: nanoid(), name, age}
    this.props.addPerson(personObj)
    this.name.value = ''
    this.age.value = ''
  }

  render() {
    return (
      <div>
        <h2>我是 person 组件,上方组件求和为：{this.props.count}</h2>
        <input ref={c => this.name = c} type="text" />&nbsp;
        <input ref={c => this.age = c} type='text'></input>&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map((p) => {
              return <li key={p.id}>{p.name}==={p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// 容器组件
export default connect(
  state => ({
    persons: state.persons, 
    count: state.count
  }),
  {
    addPerson
  }
)(person)
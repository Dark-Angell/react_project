import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { creadAddPersonAction } from '../../redux/person_action'

// ui 组件
class person extends Component {

  btnAdd = () => {
    const name = this.name.value
    const age = this.age.value
    const personObj = {id: nanoid(), name, age}
    this.props.jiayiren(personObj)
  }

  render() {
    return (
      <div>
        <h2>我是 person 组件</h2>
        <input ref={c => this.name = c} type="text" />&nbsp;
        <input ref={c => this.age = c} type='text'></input>&nbsp;
        <button onClick={this.btnAdd}>添加</button>
        <ul>
          {
            this.props.yidiren.map((p) => {
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
  state => ({yidiren: state.personP}),
  {
    jiayiren: creadAddPersonAction
  }
)(person)
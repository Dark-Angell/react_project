// 引入 UI 组件
// import CountUI from '../../component/Count'
import React, { Component } from 'react'
// 引入 react-redux
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count_action'


class CountUI extends Component {

  increment = () => {
    const {value} = this.selectNumber
    this.props.increment(value * 1)
  }

  decrement = () => {
    const {value} = this.selectNumber
    this.props.decrement(value * 1)
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if(this.props.count % 2 !== 0 ) {
      this.props.increment(value * 1)
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h2>我是 count 组件</h2>
        <h1>当前求和为:{this.props.count}</h1>
        <h1>下方人数为：{this.props.personCount}</h1>
        <select ref={c =>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>基数求和</button>&nbsp;
        <button onClick={this.incrementAsync}>异步求和</button>&nbsp;
      </div>
    )
  }
}

          // 初始版
// 当只有一个 redux 暴露的时候 此时的 state == count  ，当暴露多个 redux 是，此时 state 是一个对象，需要 通过 key 取值
// const mapStateToProps = function (state) {
//   return {count: state.count, personCount: state.persons.length}
// }

// const mapDispatchToProps = function (dispatch) {
//   return {
//     increment: (data)=> { dispatch(increment(data)) }, // dispatch({type: 'increment', data}) 
//     decrement: (data)=> { dispatch(decrement(data)) },
//     incrementAsync: (data, time) => {dispatch(incrementAsync(data, time))}  
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)




          // 升级版
// 第一个参数，返回对象    第二个参数返回函数  key = value 简写
export default connect(
  state => ({
    count: state.count,
    personCount: state.persons.length
  }),
  {
    increment,
    decrement,
    incrementAsync
  }
)(CountUI)
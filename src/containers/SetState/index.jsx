import React, { Component, PureComponent } from 'react'

export default class index extends Component {

  state = {
    count: 0,
  }

  increment = () => {
    const { count } = this.state
    
    // 对象式 setState
    // this.setState({})
    this.setState({count: count+1}, ()=> {
      console.log(1111111111, this.state)
    })

    // 函数式 setstate
    // this.setState((state,props) => {
    //   return {
    //     count: state.count + 1,
    //   }
    // })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('前', this.state, this.props)
  //   console.log('后', nextState, nextProps)
  //   return !this.state.count === nextState
  // }

  render() {
    console.log(this)
    const { count } = this.state
    return (
      <div>
        <h1>求和数：{count}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

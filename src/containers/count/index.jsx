// 引入 UI 组件
import CountUI from '../../component/Count'
// 引入 react-redux
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 当只有一个 redux 暴露的时候 此时的 state == count  ，当暴露多个 redux 是，此时 state 是一个对象，需要 通过 key 取值
const mapStateToProps = function (state) {
  return {count: state.countP, renshu: state.personP}
}

const mapDispatchToProps = function (dispatch) {
  return {
    increment: (data)=> { dispatch(createIncrementAction(data)) }, // dispatch({type: 'increment', data}) 
    decrement: (data)=> { dispatch(createDecrementAction(data)) },
    incrementAsync: (data, time) => {dispatch(createIncrementAsyncAction(data, time))}  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
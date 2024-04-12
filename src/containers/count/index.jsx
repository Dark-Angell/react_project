// 引入 UI 组件
import CountUI from '../../component/Count'
// 引入 react-redux
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 
const mapStateToProps = function (state) {
  return {count: state}
}

const mapDispatchToProps = function (dispatch) {
  return {
    increment: (data)=> { dispatch(createIncrementAction(data)) }, // dispatch({type: 'increment', data}) 
    decrement: (data)=> { dispatch(createDecrementAction(data)) },
    incrementAsync: (data, time) => {dispatch(createIncrementAsyncAction(data, time))}  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
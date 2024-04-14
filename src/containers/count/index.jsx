// 引入 UI 组件
import CountUI from '../../component/Count'
// 引入 react-redux
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count_action'


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
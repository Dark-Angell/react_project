import store from "./store"

export const createIncrementAction = data => ({type: 'increment', data})
export const createDecrementAction = data => ({type: 'decrement', data})

// 异步 action  需要返回函数
export const createIncrementAsyncAction = (data, time) => {
  return () => {
    return setTimeout(()=> {
      store.dispatch(createIncrementAction(data))
    }, time)
  }
}
import store from "../store"

// 同步 action 返回值 为  object 对象
export const increment = data => ({type: 'increment', data})
export const decrement = data => ({type: 'decrement', data})

// 异步 action  需要返回函数
export const incrementAsync = (data, time) => {
  return () => {
    return setTimeout(()=> {
      store.dispatch(increment(data))
    }, time)
  }
}
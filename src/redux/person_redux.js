const initPerson = [{name: " tom", age: 18, id: '001'}]
export default function personRedux(preState = initPerson, action){
  const { type, data} = action
  switch (type) {
    case 'btnAdd':
      return [data, ...preState]
    default:
      return preState
  }
}
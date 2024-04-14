import { combineReducers } from 'redux' // 汇总多个redux

import count from './count_redux'
import persons from "./person_redux";


// 汇总所有 的reduce  暴露出去
export default combineReducers({
  count,
  persons
})
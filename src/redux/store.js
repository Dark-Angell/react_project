import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, combineReducers } from 'redux'
import {thunk} from 'redux-thunk'  // 引入 redux-thunk 用于支持异步 action , 必须搭配 applyMiddleware
import countRedux from './count_redux'
import personRedux from "./person_redux";

// 汇总所有 的reduce  暴露出去
const allReducer = combineReducers({
  countP: countRedux,
  personP: personRedux
})


export default createStore(allReducer, applyMiddleware(thunk))
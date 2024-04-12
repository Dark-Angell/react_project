import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'  // 引入 redux-thunk 用于支持异步 action , 必须搭配 applyMiddleware
import countRedux from './count_redux'


export default createStore(countRedux, applyMiddleware(thunk))
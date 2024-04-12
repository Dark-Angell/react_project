import { legacy_createStore as createStore } from "redux";

import countRedux from './count_redux'

export default createStore(countRedux)
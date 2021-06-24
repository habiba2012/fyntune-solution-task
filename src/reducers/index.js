import { combineReducers } from 'redux'
import shop from './shopReducer.js'

const rootReducer = combineReducers({
    shop,
});

export default rootReducer;
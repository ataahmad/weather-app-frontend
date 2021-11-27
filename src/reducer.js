import * as actions from './actionTypes'
import timeBox from './reducers/timeBox'
import { combineReducers } from 'redux'


export default combineReducers({
    timeBox,
})
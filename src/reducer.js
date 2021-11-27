import * as actions from './actionTypes'

const initialState = {
    weatherData: {},
    addressInput: {},
    timeIndex: 0
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SUBMIT_ADDRESS_REQUEST:
            return {
                ...state,
                weatherData: action.payload
            }
        case actions.ITERATE_TIME_DOWN:
            return {
                ...state,
                timeIndex: -1
            }
        case actions.ITERATE_TIME_UP:
            return {
                ...state,
                timeIndex: 1
            }
        default:
            return state;
    }
}
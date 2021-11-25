import * as actions from './actionTypes'

const initialState = {
    weatherData: {},
    addressInput: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SUBMIT_ADDRESS_REQUEST:
            return {
                ...state,
                weatherData: action.payload
            }
        default:
            return state;
    }
}
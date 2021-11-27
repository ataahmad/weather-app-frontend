import { SUBMIT_ADDRESS_REQUEST, ITERATE_TIME_UP, ITERATE_TIME_DOWN }  from '../actionTypes'


const initialState = {
    timeIndex: 0
}

export default function timeBox(state = initialState, action) {
    // const { currState } = getState();
    switch (action.type) {
        case SUBMIT_ADDRESS_REQUEST:
            return {
                ...state,
                weatherData: action.payload
            }
        case ITERATE_TIME_DOWN:
            return {
                ...state,
                timeIndex: 1
            }
        case ITERATE_TIME_UP:
            return {
                ...state,
                timeIndex: 1
            }
        default:
            return state;
    }
}
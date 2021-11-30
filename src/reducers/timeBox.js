import * as actions from '../actions'


const initialState = {
    timeIndex: 0
}

export default function timeBox(state = initialState, actions) {
    // const { currState } = getState();
    switch (actions.type) {
        case 'SUBMIT_ADDRESS_REQUEST':
            return {
                ...state,
                // weatherData: action.payload
            }
        case 'ITERATE_TIME_DOWN':
            return {
                ...state,
                timeIndex: 1
            }
        case 'ITERATE_TIME_UP':
            return {
                ...state,
                timeIndex: 1
            }
        default:
            return state;
    }
}
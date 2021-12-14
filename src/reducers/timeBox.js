// import * as actions from '../actions/actions'

function timeBox(state = 0, action) {
    switch (action.type) {
        case "timeUp":
            return state + 1;
        case "timeDown":
            return state - 1;
        default:
            return state;
    }
}

export default timeBox;
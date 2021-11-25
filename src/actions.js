import * as actions from './actionTypes'

export const weatherRequested = desc => ({
    type: actions.SUBMIT_ADDRESS_REQUEST,
    payload: {
        description: desc
    }
});
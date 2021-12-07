import axios from 'axios';

export const SUBMIT_ADDRESS_REQUEST = 'SUBMIT_ADDRESS_REQUEST';
// export const ITERATE_TIME_UP = 'ITERATE_TIME_UP';
// export const ITERATE_TIME_DOWN = 'ITERATE_TIME_DOWN';


export const dataisLoading = (bool) => {
    return {
        type: 'DATA_IS_LOADING',
        isloading: bool
    };
}

export const dataHasError = (bool) => {
    return {
        type: "DATA_HAS_ERROR",
        hasError: bool
    };
}

export const dataLoadedSuccess = items => {
    return {
        type: 'DATA_HAS_LOADED',
        items
    };
}

// export const fetchWeatherData = () => async (dispatch, getState) => {
//     dispatch(dataisLoading(true));
//     const addressInfo = getState()
//     await const response = fetch('https://tranquil-castle-19284.herokuapp.com/', {
//         method: 'POST',
//         body: 
//     })
// }
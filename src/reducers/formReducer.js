

export const fetchData = () => async (dispatch, getState) => {
    const addressInfo = getState().addressInfo;
    const data = await fetch('https://tranquil-castle-19284.herokuapp.com/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'x-www-form-urlencoded'}
    });
}
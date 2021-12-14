import axios from 'axios';
import {
    INCREMENT,
    DECREMENT
} from '../constants/actionTypes';

export const incrementTime = () => ({type: INCREMENT, payload: null});
export const decrementTime = () => ({type: DECREMENT, payload: null});
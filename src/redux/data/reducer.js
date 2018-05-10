 import {DATA_ACTIONS} from './actions';
import { Map } from 'immutable';

// reducer with initial state
const initialState = new Map({
    fetching: false,
    data: null,
    error: null
});

export default function datareducer(state = initialState, action) {
    switch (action.type) {
        case DATA_ACTIONS.API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
    break;
case DATA_ACTIONS.API_CALL_SUCCESS:
        return { ...state, fetching: false, data: action.data };
    break;
case DATA_ACTIONS.API_CALL_FAILURE:
        return { ...state, fetching: false, data: null, error: action.error };
    break;
default:
    return state;
}
}
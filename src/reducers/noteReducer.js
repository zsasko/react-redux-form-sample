import _ from 'lodash';
import { 
    CREATE_NOTE,
    DELETE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES,
    FETCH_NOTE
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_NOTE:
            return {...state, [action.payload.id]: action.payload };
        case CREATE_NOTE:
            return {...state, [action.payload.id]: action.payload };
        case EDIT_NOTE:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_NOTE:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
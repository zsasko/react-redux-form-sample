import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import noteReducer from './noteReducer';

export default combineReducers({
    form: formReducer,
    notes: noteReducer
})
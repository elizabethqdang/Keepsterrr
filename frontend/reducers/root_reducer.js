import { combineReducers } from 'redux';

import notesReducer from './notes_reducer';
import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
	session: sessionReducer,
	users: usersReducer,
	notes: notesReducer,
	errors: errorsReducer
});

export default rootReducer;

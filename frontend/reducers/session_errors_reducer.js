import {
	RECEIVE_SESSION_ERRORS,
	RECEIVE_CURRENT_USER,
	RECEIVE_NO_ERRORS,
	CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

export default (state = [], action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_NO_ERRORS:
			return [];
		case RECEIVE_SESSION_ERRORS:
			return action.errors;
		case RECEIVE_CURRENT_USER:
			return [];
		case CLEAR_SESSION_ERRORS:
			return [];
		default:
			return state;
	}
};
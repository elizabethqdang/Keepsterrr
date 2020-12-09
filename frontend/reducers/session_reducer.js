import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NOTES, RECEIVE_ALL_NOTES } from '../actions/note_actions';

const _nullUser = {
	currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
	Object.freeze(state);
	let newState = Object.assign({}, state);

	switch(action.type) {
		case RECEIVE_CURRENT_USER:
			// newState = merge({}, state);
			newState.currentUser = action.currentUser;
			return newState;
			// return { currentUser: action.currentUser };
		// case RECEIVE_ALL_NOTES: 
		// 	return action.currentUser.notes;
		// case RECEIVE_NOTES:
		// 	if (action.currentUser.notes === undefined) {
		// 		return {};
		// 	} else {
		// 		return Object.assign({}, action.notes);
		// 	};
		case LOGOUT_CURRENT_USER:
			return _nullUser;
		default:
			return state;
	}
};

export default sessionReducer;

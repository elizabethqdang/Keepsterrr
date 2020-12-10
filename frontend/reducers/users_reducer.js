import _ from 'lodash';
import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_SINGLE_USER, RECEIVE_ALL_USERS, RECEIVE_USER_ERRORS } from '../actions/user_actions';
import { RECEIVE_NOTES } from '../actions/note_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _initialState = {
	"0": {
		id: 0,
		owner_id: 0,
		email: "donotdelete@please.com",
		password: "password",
		notes: {}
	}
};

const usersReducer = (state = {}, action) => {
	Object.freeze(state);
	// let newState = Object.assign({}, state);
	let newState = _.merge({}, state);

	switch(action.type) {
		case RECEIVE_CURRENT_USER:
			return merge({}, state, { [action.currentUser.id]: action.currentUser });
			// newState.id = action.user.id;
			// return Object.assign({}, state, { [action.user.id]: action.user });
			// newState.user = action.user;
			return newState;
		case RECEIVE_ALL_USERS:
			return merge({}, state, action.users);
			// return Object.assign({}, state, action.users);
		// case RECEIVE_USER:
		// 	if (action.user.notes === undefined) {
		// 		return {};
		// 	} else {
		// 		return Object.assign({}, state, {[notes]: action.notes});
		// 	};
		default:
			return state;
	}
};

export default usersReducer;
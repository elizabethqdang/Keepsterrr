import _ from 'lodash';
import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_SINGLE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = Object.assign({}, state);

	switch(action.type) {
		case RECEIVE_USER:
			// newState.id = action.user.id;
			return Object.assign({}, state, { [action.user.id]: action.user });
		case RECEIVE_ALL_USERS:
			return Object.assign({}, state, action.users);
		default:
			return state;
	}
};

export default usersReducer;
import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = user => ({
	type: RECEIVE_USER,
	user
});

const receiveSingleUser = user => ({
	type: RECEIVE_SINGLE_USER,
	user
});

const receiveUserErrors = errors => ({
	type: RECEIVE_USER_ERRORS,
	errors
});

const receiveAllUsers = users => ({
	type: RECEIVE_ALL_USERS,
	// doNotReplace: payload.doNotReplace,
	users
	// users: payload.users
});

export const fetchUser = userId => dispatch => {
	return UserAPIUtil.fetchUser(userId).then(
		user => {
			dispatch(receiveUser(user));
			return user;
		},
		errors => {
			dispatch(receiveUserErrors(errors.responseJSON));
			console.log(errors.responseJSON);
			return errors;
		}
	);
};

export const fetchSingleUser = userId => dispatch => {
	return UserAPIUtil.fetchUser(userId).then(
		user => {
			dispatch(receiveSingleUser(user));
			return user;
		},
		errors => {
			dispatch(receiveUserErrors(errors.responseJSON));
			return errors;
		});
};

export const fetchAllUsers = () => dispatch => {
	return UserAPIUtil.fetchAllUsers().then(
		users => {
			dispatch(receiveAllUsers(users));
			return users;
		},
		errors => {
			dispatch(receiveUserErrors(errors.responseJSON));
			console.log(errors.responseJSON);
			return errors.responseJSON;
		}
	)
};

export const updateUser = (userId, formData) => (dispatch) => {
	return UserApiUtil.updateUser(userId, formData).then(
		user => {
			dispatch(receiveUser(user));
			return user;
		},
		errors => {
			dispatch(receiveUserErrors(errors.responseJSON));
			return errors;
		});
};
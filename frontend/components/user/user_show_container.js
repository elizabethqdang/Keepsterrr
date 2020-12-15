import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers, fetchAllUsers, fetchSingleUser } from '../../actions/user_actions';
import { fetchAllNotes, fetchNotes, allNotes } from '../../actions/note_actions';
import { fetchCurrentUser, logout } from '../../util/session_api_util';
import UserShow from './user_show';

const mapStateToProps = (state) => {
	const allNotes = Object.values(state.notes);
	console.log("state", state);
	console.log("notes", state.notes);
	return {
		// notes: Object.values(state.notes) || {},
		notes: state.notes || {},
		users: state.users || {},
		loggedIn: Boolean(state.session.currentUser),
		currentUser: state.session.currentUser || {}
	}
};

const mapDispatchToProps = dispatch => ({
	fetchAllNotes: () => dispatch(fetchAllNotes()),
	// fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
	// fetchNotes: (filter, value) => dispatch(fetchNotes(filter, value)),
	// fetchUser: (userId) => dispatch(fetchUser(userId)),
	// fetchSingleUser: (userId) => dispatch(fetchSingleUser(userId)),
	logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);


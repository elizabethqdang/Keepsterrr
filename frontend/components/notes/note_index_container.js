import { React } from 'react';
import { connect } from 'react-redux';
import NoteIndex from './note_index';

// Actions
import { receiveNotes, receiveNote, removeNote, fetchNotes, allNotes, fetchAllNotes, createNote } from '../../actions/note_actions';
import { logout, fetchCurrentUser } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
	const allNotes = Object.keys(state.notes).map(id => state.notes[id]);
	const pinnedNotes = allNotes.filter(note => note.pinned === true);
	const otherNotes = allNotes.filter(note => note.pinned === false);
	console.log("note index state", state);
	console.log("note index allNotes", allNotes);
	return {
		notes: allNotes || {},
		users: state.users || {},
		pinned: pinnedNotes || {},
		other: otherNotes || {},
		loggedIn: Boolean(state.session.currentUser),
		currentUser: state.session.currentUser || {}
	}
};

const mapDispatchToProps = dispatch => ({
	receiveNote: note => dispatch(receiveNote(note)),
	// receiveNotes: notes => dispatch(receiveAllNotes(notes)),
	// removeNote: () => dispatch(removeNote(note)),
	logout: (user) => dispatch(logout(null)),
	fetchAllNotes: () => dispatch(fetchAllNotes()),
	// fetchNotes: (userId) => dispatch(fetchNotes(userId)),
	// fetchUser: (userId) => dispatch(fetchUser(userId)),
	fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);

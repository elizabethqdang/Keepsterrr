import { connect } from 'react-redux';
import { fetchNote, fetchAllNotes, removeNote, createNote } from '../../actions/note_actions';
import {fetchUser} from '../../actions/user_actions';
import { fetchCurrentUser, logout } from '../../actions/session_actions';
import NoteForm from './note_form';

const mapStateToProps = (state, ownProps) => ({
	notes: (state.notes) || {},
	// pinned: state.notes.pinned,
	currentUser: state.session.currentUser || {},
	loggedIn: Boolean(state.session.currentUser),
	users: state.users || {},
	errors: state.errors.note || {}
});

const mapDispatchToProps = dispatch => ({
	createNote: (note, id) => dispatch(createNote(note, id)),
	fetchAllNotes: () => dispatch(fetchAllNotse()),
	fetchNote: (noteId) => dispatch(fetchNote(noteId)),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	removeNote: () => dispatch(removeNote(note)),
	fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

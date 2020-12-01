import { connect } from 'react-redux';
import { receiveNotes, receiveNote, removeNote } from '../../actions/note_actions';
import NoteForm from './note_form';

const mapStateToProps = state => ({
	notes: Object.values(state.notes),
	pinned: state.notes.pinned,
	currentUser: state.session.currentUser || {},
	loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = dispatch => ({
	receiveNote: note => dispatch(receiveNote(note)),
	removeNote: () => dispatch(removeNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

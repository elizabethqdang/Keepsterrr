import * as NoteAPIUtil from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const ALL_NOTES = 'ALL_NOTES';
export const NOTE_ERROR = 'NOTE_ERROR';

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveNotes = notes => ({
	type: RECEIVE_NOTES,
	notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

export const allNotes = ({ notes }) => Object.keys(notes).map(id => notes[id]);

export const noteError = error => ({
  type: NOTE_ERROR,
  error
});

export const fetchAllNotes = () => dispatch => (
	NoteAPIUtil.fetchAllNotes().then(
		notes => dispatch(receiveAllNotes(notes)),
		error => dispatch(noteError(error.responseJSON))
	)
);

export const fetchNotes = (filter, value) => dispatch => (
	NoteAPIUtil.fetchNotes(filter, value).then(
		notes => dispatch(receiveAllNotes(notes)),
		error => dispatch(noteError(error.responseJSON))
	)
);

export const fetchNote = noteId => dispatch => (
	NoteAPIUtil.fetchNote(noteId).then(note => dispatch(receiveNote(note)))
);

export const createNote = (note, userId) => dispatch => (
	NoteAPIUtil.createNote(note, userId).then(note => dispatch(receiveNote(note)))
);

export const updateNote = note => dispatch => (
	NoteAPIUtil.updateNote(note).then(note => dispatch(receiveNote(note)))
);

export const deleteNote = noteId => dispatch => (
	NoteAPIUtil.deleteNote(noteId).then(note => dispatch(removeNote(noteId)))
);
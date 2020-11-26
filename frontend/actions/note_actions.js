import * as NoteAPIUtil from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const ALL_NOTES = 'ALL_NOTES';
export const NOTE_ERROR = 'NOTE_ERROR';

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes,
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note,
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note,
});

// export const pinnedNotes = ({ notes }) =>

// });

export const allNotes = ({ notes }) => Object.keys(notes).map(id => notes[id]);

export const noteError = error => ({
  type: NOTE_ERROR,
  error,
});

export const fetchAllNotes = () => dispatch => (
	NoteAPIUtil.fetchAllNotes().then(
		notes => dispatch(receiveAllNotes(notes)),
		errors => dispatch(noteError(errors.responseJSON))
	)
);

export const fetchNote = id => dispatch => (
	NoteAPIUtil.fetchNote(id).then(note => dispatch(receiveNote(note)))
);

export const createNote = note => dispatch => (
	NoteAPIUtil.createNote(note).then(note => dispatch(receiveNote(note)))
);

export const updateNote = note => dispatch => (
	NoteAPIUtil.updateNote(note).then(note => dispatch(receiveNote(note)))
);

export const deleteNote = noteId => dispatch => (
	NoteAPIUtil.deleteNote(noteId).then(note => dispatch(removeNote(noteId)))
);
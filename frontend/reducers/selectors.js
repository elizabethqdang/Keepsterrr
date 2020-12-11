import _ from 'lodash';

export const selectAllNotes = state => {
	const allNotes = _.values(state.notes);
	const sortedNotes = _.sortBy(allNotes, [function (note) { return note.updated_at; }]);
	return sortedNotes.reverse();
};

export const selectPinnedNotes = state => {
	const allNotes = selectAllNotes(state);
	return allNotes.filter(note => note.pinned === true);
};

export const selectOtherNotes = state => {
	const allNotes = selectAllNotes(state);
	return allNotes.filter(note => note.pinned === false);
};

export const selectAllLists= state => {
	const allNotes = selectAllNotes(state);
	return allNotes.filter(note => note.list === true); 
};
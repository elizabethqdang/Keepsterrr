export const fetchAllNotes = () => (
	$.ajax({
		method: 'GET',
		url: '/api/notes',
		dataType: 'json'
	})
);

export const fetchNotes = (filter, value) => {
	return $.ajax({
		method: 'GET',
		url: '/api/notes',
		data: { [filter]: value }
	});
};

export const fetchNote = (noteId) => (
	$.ajax({
		method: 'GET',
		url: `/api/notes/${noteId}`,
	})
);

export const createNote = (note, userId) => (
	$.ajax({
		method: 'POST',
		url: '/api/notes',
		processData: false,
		contentType: false,
		data: note
	})
);

export const updateNote = (note) => (
	$.ajax({
		method: 'PATCH',
		url: `/api/notes/${note.id}`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: { note: { note } }
	})
);

export const deleteNote = (noteId) => (
	$.ajax({
		method: 'DELETE',
		url: `/api/notes/${noteId}`
	})
);
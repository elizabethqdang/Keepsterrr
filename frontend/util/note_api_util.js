export const fetchAllNotes = () => (
	$.ajax({
		method: 'GET',
		url: '/api/notes',
		dataType: 'json'
	})
);

export const fetchNote = (noteId) => (
	$.ajax({
		method: 'GET',
		url: `/api/notes/${noteId}`,
		dataType: 'json'
	})
);

export const createNote = (note) => (
	$.ajax({
		method: 'POST',
		url: '/api/notes',
		processData: false,
		contentType: false,
		dataType: 'json',
		data: note
	})
);

export const updateNote = (noteId) => (
	$.ajax({
		method: 'PATCH',
		url: `api/notes/${noteId}`,
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
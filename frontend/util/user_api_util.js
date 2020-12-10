export const fetchAllUsers = () => (
	$.ajax({
		method: 'GET',
		url: '/api/users',
	})
);

export const fetchUser = (userId) => (
	$.ajax({
		method: 'GET',
		url: `/api/users/${userId}`,
		dataType: 'json'
	})
);

export const updateUser = (userId, user) => (
	$.ajax({
		method: 'PATCH',
		url: `/api/users/${userId}`,
		contentType: false,
		processData: false,
		dataType: json,
		data: user
	})
);
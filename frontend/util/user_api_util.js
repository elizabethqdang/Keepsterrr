export const fetchAllUsers = () => (
	$.ajax({
		method: 'GET',
		url: '/api/users',
		dataType: 'json'
	})
);

export const fetchUser = (userId) => (
	$.ajax({
		method: 'GET',
		url: `/api/users/${userId}`,
		dataType: 'json'
	})
);

export const fetchAllUsers = () => (
	$.ajax({
		method: 'GET',
		url: '/api/users',
		dataType: 'json'
	})
);

export const fetchUser = () => (
	$.ajax({
		method: 'GET',
		url: `/api/${userId}`,
		dataType: 'json'
	})
);

export const fetchCurrentUser = currentUserId => (
	$.ajax({
		method: 'GET',
		url: `/api/${currentUserId}`,
		data: { currentUser: currentUserId }
	})
);
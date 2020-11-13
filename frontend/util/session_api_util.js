export const login = user =>
	$.ajax({
		metthod: 'POST',
		url: '/api/session',
		data: { user }
	})
	
export const signup = user =>
	$.ajax({
		metthod: 'POST',
		url: '/api/users',
		data: { user }
	})
	
export const logout = user =>
	$.ajax({
		metthod: 'DELETE',
		url: '/api/session'
	})
	
export const fetchCurrentUser = currentUserId => (
	$.ajax({
		method: 'GET',
		url: `/api/users/${currentUserId}`,
		data: { currentUser: currentUserId }
	})
);
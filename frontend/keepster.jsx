import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
	let store;
	if (window.currentUser) {
		const preloadedState = {
			session: {
				// id: window.currentUser.id,
				currentUser: window.currentUser,
			},
			users: { [window.currentUser.id]: window.currentUser }
		};
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}
	
	const root = document.getElementById("content");
	ReactDOM.render(<Root store={store} />, root);
});

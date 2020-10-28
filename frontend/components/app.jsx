import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LoginForm from './sessions/login_form_container';
import SignupForm from './sessions/signup_form_container';
import Navbar from './navbar/navbar_container';
import Sidebar from './navbar/sidebar';
// import NoteForm from './notes/note_form';
import NoteIndexContainer from './notes/note_index_container';

const App = () => (
	<div id="app" className="app">
		<Navbar />
		<Sidebar />
		{/* <AuthRoute exact path="/" component={SplashContainer} /> */}
		<AuthRoute exact path="/signup" component={SignupForm} />
		<AuthRoute exact path="/login" component={LoginForm} />

		<NoteIndexContainer />
	</div>
);

export default App;

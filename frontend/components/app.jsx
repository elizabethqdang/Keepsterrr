import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LoginForm from './sessions/login_form_container';
import SignupForm from './sessions/signup_form_container';
import Navbar from './navbar/navbar_container';
import Sidebar from './navbar/sidebar';
import SplashContainer from './splash/splash_container';
import NoteFormContainer from './notes/note_form_container';
import NoteIndexContainer from './notes/note_index_container';
import NoteUpdateContainer from './notes/note_detail_container';
import NoteItemShow from './notes/note_index_item';
import UserShowContainer from './user/user_show_container';


const App = () => (
	<div id="app" className="app">
		<Switch>
			<AuthRoute exact path="/" component={SplashContainer} />
			<AuthRoute exact path="/signup" component={SignupForm} />
			<AuthRoute exact path="/login" component={LoginForm} />
		</Switch>
		
			<ProtectedRoute path="/u/" component={UserShowContainer} />
			<ProtectedRoute exact path="/u/:userId" component={NoteIndexContainer} />
			<ProtectedRoute exact path="/u/:userId/#NOTE/:noteId" component={NoteUpdateContainer} />
			{/* <ProtectedRoute exact path="/u/:userId/#LIST/:noteId" component={} /> */}
			{/* <ProtectedRoute path="/u/:userId/#search" component={} /> */}
	</div>
);

export default App;

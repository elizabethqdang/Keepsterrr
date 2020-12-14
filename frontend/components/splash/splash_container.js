import { connect } from "react-redux";
import { fetchAllNotes } from "../../actions/note_actions";
	import { clearSessionErrors, login, fetchCurrentUser } from "../../actions/session_actions";
import Splash from "./splash";

const mapStateToProps = (state) => {
	// const currentUser = state.session.currentUser;
	return {
		users: state.users || {},
		notes: Object.values(state.notes),
		loggedIn: Boolean(state.session.currentUser),
		currentUser: state.session.currentUser || {},
		// userId: currentUser ? currentUser.id : null
	};
};

const mapDispatchToProps = dispatch => ({
	fetchAllNotes: () => dispatch(fetchAllNotes()),
	fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
	login: (user) => dispatch(login(user)),
	clearSessionErrors: () => dispatch(clearSessionErrors)
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

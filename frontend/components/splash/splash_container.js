import { connect } from "react-redux";
// import { fetchAllNotes } from "../../actions/note_actions";
	import { clearSessionErrors, login } from "../../actions/session_actions";
import Splash from "./splash";

const mapStateToProps = (state) => {
	let currentUser = state.session.currentUser;
	return {
		// notes: Object.values(state.notes),
		currentUser: currentUser,
		userId: currentUser ? currentUser.id : null,
		loggedIn: Boolean(state.session.currentUser),
	};
};

const mapDispatchToProps = dispatch => ({
	// fetchAllNotes: () => dispatch(fetchAllNotes()),
	login: (user) => dispatch(login(user)),
	clearSessionErrors: () => dispatch(clearSessionErrors)
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

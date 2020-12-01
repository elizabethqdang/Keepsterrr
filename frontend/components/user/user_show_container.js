import { connect } from 'react-redux';
import { fetchUser, fetchSingleUser } from '../../actions/user_actions';
import { fetchAllNotes } from '../../actions/note_actions';
import UserShow from './user_show';

const mapStateToProps = (state) => ({
	notes: Object.values(state.notes),
	// users: state.users,
	currentUser: state.session.currentUser || {},
	loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
	fetchAllNotes: () => dispatch(fetchAllNotes()),
	// fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	fetchSingleUser: (userId) => dispatch(fetchSingleUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);


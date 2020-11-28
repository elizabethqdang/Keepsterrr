import { connect } from 'react-redux';
import { signup, receiveSessionErrors, login, clearSessionErrors} from '../../actions/session_actions'
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
	return {
		formType: 'signup',
		loggedIn: Boolean(state.session.currentUser),
		errors: state.errors.session || [],
		currentUser: state.session.currentUser || {},
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signup: (user) => dispatch(signup(user)),
		login: (user) => dispatch(login(user)),
		receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
		clearSessionErrors: () => dispatch(clearSessionErrors()),
		processForm: (user) => dispatch(signup(user)),
		// otherForm: (
		// 	<button onClick={() => dispatch(openModal('login'))}>
		// 		Login
    //   </button>
		// )
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

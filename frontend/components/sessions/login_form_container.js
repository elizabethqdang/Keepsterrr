import { connect } from 'react-redux';
import { login, clearSessionErrors, receiveSessionErrors } from '../../actions/session_actions'
import LoginForm from './login_form';

const mapStateToProps = (state) => {
	return {
		formType: 'login',
		loggedIn: Boolean(state.session.currentUser),
		errors: state.errors.session || [],
		currentUser: state.session.currentUser || {},
		users: state.users || {},
		notes: state.notes || {}
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: (user) => dispatch(login(user)),
		clearSessionErrors: () => dispatch(clearSessionErrors()),
		receiveSessionErrors: () => dispatch(receiveSessionErrors()),
		processForm: (user) => dispatch(login(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

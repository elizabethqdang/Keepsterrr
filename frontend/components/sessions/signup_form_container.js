import { connect } from 'react-redux';
import React from 'react';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
	return {
		formType: 'signup',
	};
};

const mapDispatchToProps = dispatch => {
	return {
		processForm: (user) => dispatch(signup(user)),
		otherForm: (
			<button onClick={() => dispatch(openModal('login'))}>
				Login
      </button>
		)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

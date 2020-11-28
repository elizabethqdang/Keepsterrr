import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.sessionLink = this.sessionLink.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}
	
	update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
		e.preventDefault();
		
    const user = Object.assign({}, {email: this.state.email}, {password: this.state.password});
    this.props.login(user);
	}
	
	sessionLink(e) {
		e.preventDefault();
		this.props.clearSessionErrors();
		window.location.hash = "/signup";
	}
	
	handleDemoSubmit(e){
		e.preventDefault();
		
    const demo = { email: "demo-user@keepsterrr.com", password: "password" };
		this.props.login(demo);
		this.props.history.push("/u/");
		this.props.clearSessionErrors();
	}
	
	renderErrors() {
		const errors = this.props.errors;
		if (errors && errors.length > 0) {
			return(
				<ul className="session-errors">
					{this.props.errors ? errors.map((error, i) => (<li key={`error-${i}`}>{error}</li>)) : {}
					}
				</ul>
			);
		} else {
			return;
		}
	}

	render() {
		let loginErrors = this.renderErrors();
		
		return (
			<div className="login-container">
				<div className="login-header">
					keepster logo
					<p className="login">Sign in</p>
					<p className="login-text">Use your Keepster Account</p>
				</div>
				<form className="login-form" onSubmit={this.handleSubmit}>
					<div className="session-row session-input">
						<input
							type="email"
							className="login"
							placeholder="Email"
							onChange={this.update('email')}
							value={this.state.email}
						/>
						<label>Email</label>
					</div>
					<div className="session-row session-input">
						<input
							type="text"
							className="login"
							placeholder="Enter your password"
							onChange={this.update('password')}
							value={this.state.password}
						/>
						<label>Enter your password</label>
					</div>
					
					<div className="modalError">{loginErrors}</div>
					
					<div className="session-footer">
						<p className="session-link"><Link to="/signup" onClick={(e) => this.sessionLink(e)}className="create-account-link">Create account</Link></p>
						<input type="submit" className="login-submit" value="Next" />
					</div>
				</form>
			</div>
		)
	}
}

export default withRouter(LoginForm);

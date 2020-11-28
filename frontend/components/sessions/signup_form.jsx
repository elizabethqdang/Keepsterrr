import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: "",
			lname: "",
			email: "",
			password: "",
			confirmPW: "",
			passwordError: false
		}
			this.handleSubmit = this.handleSubmit.bind(this);
			this.sessionLink = this.sessionLink.bind(this);
			this.renderErrors = this.renderErrors.bind(this);
			this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
	}

	update(field) {
		return e => 
			this.setState({	[field]: e.currentTarget.value });
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.clearSessionErrors();
		// const user = Object.assign({}, this.state);
		if (Boolean(this.state.password === this.state.confirmPW)) {
			const user = Object.assign({}, {email: this.state.email}, {password: this.state.password});
			this.props.signup(user);
			this.setState({ passwordError: false });
    } else {
			this.setState({ passwordError: true });
			console.log('Passwords do not match');
		}
		
	}
	
	sessionLink(e) {
		e.preventDefault();
		this.props.clearSessionErrors();
		window.location.hash = "/login";
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
		if (errors || this.state.passwordError) {
			let passwordErr = (this.state.passwordError ? "Passwords do not match" : "");
			
			return(
				<Fragment>
					<ul className="session-errors">
						{errors ? errors.map((error, i) => (<li key={`error-${i}`}>{error}</li>)) : []
						}
						{passwordErr}
					</ul>
				</Fragment>
			);
		} else {
			return (
			<div></div>
			);
		}
		
	}
	
	render() {
		let signupErrors = this.renderErrors();
		
		return (
			<div className="signup-container">
				<div className="signup-header">
					keepster logo
					<p className="">Create your Keepster Account</p>
				</div>
				<form className="signup-form" onSubmit={this.handleSubmit}>
					<div className="signup-row">
						<div className="signup-input">
							<input type="text" className="signup" placeholder="First name"
								value={this.state.fname}
								onChange={this.update('fname')}
							/>
							<label>First name</label>
						</div>
						<div className="signup-input">
							<input type="text" className="signup" placeholder="Last name" 
								value={this.state.lname}
								onChange={this.update('lname')}
							/>
							<label>Last name</label>
						</div>
					</div>
					<div className="signup-input signup-row">
						<input
							id="email"
							type="email"
							className="signup"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.update('email')}
						/>
						<label>Email</label>
					</div>
					<p className="signup-text">You can use letters, numbers & periods</p>
					<div className="signup-row">
						<div className="signup-input">
							<input
								type="password"
								className="signup password"
								placeholder="Password"
								onChange={this.update('password')}
								value={this.state.password}
							/>
							<label>Password</label>
						</div>
						<div className="signup-input">
							<input
								type="password"
								className="signup password"
								placeholder="Confirm"
								onChange={this.update('confirmPW')}
								value={this.state.confirmPW}
							/>
							<label>Confirm</label>
						</div>
					</div>
					<p className="signup-text">Use 8 or more characters with a mix of letters, numbers & symbols</p>
					
					<div className="modalError">{signupErrors} </div>
					
					<div className="signup-footer signup-row">
						<p className="session-link"><Link to="/login" onClick={(e) => this.sessionLink(e)}>Sign in instead</Link></p>
						<input type="submit" value="Next" className="signup-submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default withRouter(SignupForm);

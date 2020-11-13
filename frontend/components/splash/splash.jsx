import React from 'react';
// import { Link } from 'react-router-dom';
 
class Splash extends React.Component {
	constructor(props) {
		super(props); {
		this.state = {}
		}
		this.verifyLoggedIn = this.verifyLoggedIn.bind(this);
	}
	
	verifyLoggedIn(e, link) {
		e.preventDefault();
		if (this.props.currentUser) {
			indow.location.hash = `/${link}`;
		} else if (!this.props.currentUser) {
			window.location.hash = `/${link}`;
		}
	}
	
	render() {
		return (
			<div className="splash-container">
				<div className="splash-wrapper">
					<div className="splash-bar">
						<div className="splash-left">
							<div className="splash-logo">
							</div>
							<div className="splash-text">SOUNDPOOF
							</div>
            </div>
					
            <nav className="login-signup">
              {/* <button onClick={() => openModal("login")} className="login-button">
                Github
              </button>
              <button onClick={() => openModal("signup")} className="signup-button">
                Portfolio
              </button>
              <button onClick={() => openModal("signup")} className="creators-button">
                For Creators
              </button> */}
            </nav>
					</div>
					
					<section className="splash-header">
            <h1 className="splash-title">Keepster</h1>
            <h2 className="splash-subtitle">Keep your thoughts forever and bring them with you wherever you are</h2>
            <button className="header-button start-uploading-today" onClick={(e) => this.verifyLoggedIn(e, "/#/login")}>Sign in</button>
						<button className="header-button start-uploading-today" onClick={(e) => this.verifyLoggedIn(e, "/#/signup")}>Create account</button>
          </section>
					
					<div className="splash-body">
						<h2 className="splash-body-title">Capture what's on your mind</h2>
            <h4 className="splash-body-subtitle">Add notes, lists and photos to Keep</h4>
        	</div>
					
					<div className="splash-footer">
						
					</div>
					
				</div>
			</div>
		)
	}
}

export default Splash; 
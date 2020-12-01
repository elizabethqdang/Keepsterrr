import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import Sidebar from '../navbar/sidebar';
import NoteIndexContainer from '../notes/note_index_container';

class UserShow extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			defaultSidebar: true,
			expandedSidebar: false
		}
		this.navbar = this.navbar.bind(this);
		this.sidebar = this.sidebar.bind(this);
	}

	navbar() {
		return (
			<Fragment>
				<Navbar />
			</Fragment>
		)
	}
	
	sidebar() {
		return (
			<Fragment>
				<Sidebar />
			</Fragment>
		)
	}
	
	noteIndex() {
		return (
			<NoteIndexContainer />
		)
	}
		
	render() {
		let navbar = this.navbar();
		let sidebar = this.sidebar();
		
		return (
			<Fragment>
			<Navbar />
			<Sidebar />
			<NoteIndexContainer />
			</Fragment>
		)
	}

}

export default withRouter(UserShow);

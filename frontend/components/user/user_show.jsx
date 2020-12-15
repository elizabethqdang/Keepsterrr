import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import Sidebar from '../navbar/sidebar';
import NoteIndexContainer from '../notes/note_index_container';
import NoteItemShow from '../notes/note_index_item';
import NoteUpdateContainer from '../notes/note_detail_container';
import NoteFormContainer from '../notes/note_form_container';
import UserShowContainer from './user_show_container';


class UserShow extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			defaultSidebar: true,
			expandedSidebar: false
		}
		// this.navbar = this.navbar.bind(this);
		// this.sidebar = this.sidebar.bind(this);
		// this.noteIndex = this.noteIndex.bind(this);
	}
	
	componentDidMount() {
		this.props.fetchAllNotes();
		// this.props.fetchCurrentUser(this.props.currentUser.id);
	}

	// navbar() {
	// 	return (
	// 		<Fragment>
	// 			<Navbar />
	// 		</Fragment>
	// 	)
	// }
	
	// sidebar() {
	// 	return (
	// 		<Fragment>
	// 			<Sidebar />
	// 		</Fragment>
	// 	)
	// }
	
	// noteIndex() {
	// 	return (
	// 		<Fragment>
	// 			<NoteIndexContainer users={this.props.users || {}} notes={this.props.notes || {}} currentUser={this.props.currentUser || {}} />
	// 		</Fragment>
	// 	)
	// }
		
	render() {
		// const navBar = (<Navbar />)
		// const sideBar = (<Sidebar />)
		// let noteIndex = this.noteIndex();
		
		return (
			<Fragment>
				<Navbar />
				<Sidebar />
				{/* <NoteFormContainer /> */}
				<NoteIndexContainer />
			</Fragment>
		)
	}

}

export default withRouter(UserShow);

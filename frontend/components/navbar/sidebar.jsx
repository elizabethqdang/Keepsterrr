import React, { Fragment } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// showExpandedSidebar: true
		}
		this.sidebarClick = this.sidebarClick.bind(this);
	}

	toggleSidebar() {
		this.setState({
			showSidebar: !this.state.showExpandedSidebar
		})
	}
	
	sidebarClick(e, icon) {
		e.preventDefault();
		
		window.location.hash = `/${icon}`;
	}

	render() {
		const openSidebar = (
			<div id="sidebar" className="expanded-sidebar">
				
				<div className="notes-btn sidebar-icon" activeClassName="nav-selected">
					<label htmlFor="notesIcon">
						<i class="fas fa-bolt fa-lg" style={{fontSize:"22px",width:"auto",height:"auto"}}></i>
					</label>
					<button id="notesIcon"/>
					<a href="#" id="notesIcon" className="">Notes</a>
				</div>
				<div className="archive-btn sidebar-icon">
					<label htmlFor="archiveIcon">
						<i class="fas fa-archive fa-md"></i>
					</label>
					<button id="archiveIcon" />
					<a href="#" id="archiveIcon" className="" value="Archive">Archive</a>
				</div>
				<div
					className="trash-btn sidebar-icon">
					<label htmlFor="trashIcon">
						<i class="far fa-trash-alt fa-lg"></i>
					</label>
					<button id="trashIcon" value="Trash">Trash</button>
					<a href="#" id="trashIcon" className=""></a>
				</div>

			</div>
		)

		const closedSidebar = (
			<div id="sidebar" className="icon-sidebar">
				<div className="sidebar-row" onClick={(e) => this.sidebarClick(e, "notes")}>
					<NavLink to="/users/notes" activeClassName="selected">
					{/* <i class="fas fa-bolt fa-lg" style={{fontSize:"22px",width:"auto",height:"auto"}}></i> */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>
					</NavLink>
				</div>
				<div className="sidebar-row" onClick={(e) => this.sidebarClick(e, "lists")}>
					<i class="fas fa-bolt fa-lg" style={{fontSize:"22px",width:"auto",height:"auto"}}></i>
				</div>
				<div className="sidebar-row" onClick={(e) => this.sidebarClick(e, "trash")}>
					<i class="far fa-trash-alt fa-lg"></i>
				</div>

			</div>
		)

		if (this.state.showExpandedSidebar) {
			return (
				<Fragment>{openSidebar}</Fragment>
			)
		} else {
			return (
				<Fragment>{closedSidebar}</Fragment>
			)
		}

	}
}

export default Sidebar;
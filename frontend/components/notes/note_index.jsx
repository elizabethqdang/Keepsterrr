import React from 'react';
import { withRouter } from 'react-router-dom';
// import Masonry from 'react-masonry-component';
import Masonry from 'react-masonry-css';
// Components
import NoteIndexItem from './note_index_item';
import NoteFormContainer from './note_form_container';

class NoteIndex extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.fetchAllNotes();
		this.props.fetchCurrentUser(this.props.currentUser.id);
	}

	render() {
		const notes = this.props.notes;
		console.log(this.props.notes);
		
		const breakpointColumnsObj = {
			default: 4,
			1100: 3,
			700: 2,
			500: 1
		};
		const randomHeight = Math.random() * (550 - 100) + 100;
		// console.log(randomHeight);
		const noteItems = (
			<Masonry className="notesIndexIndividualWrapper masonry-grid"
				breakpointCols={breakpointColumnsObj}
				columnClassName="masonry-grid-column"
				>
				{this.props.notes.map(note => 
					<ul className="todo-list">
						<NoteIndexItem
							key={note.id}
							// key={`note-list-item${note.id}`}
							note={note}
							notes={this.props.notes} 
							users={this.props.users}
							receiveNote={this.props.receiveNote}
							removeNote={this.props.removeNote}
							// style={{height:}}
						/>
					</ul>
				)}
			</Masonry>
		);
		// console.log(noteItems);

		return (
			<div className="notesIndexWrapper">
				<NoteFormContainer notes={this.props.notes} users={this.props.users} createNote={this.props.createNote} currentUser={this.props.currentUser} fetchAllNotes={this.props.fetchAllNotes} fetchNote={this.props.fetchNote} fetchUser={this.props.fetchUser} fetchCurrentUser={this.props.fetchCurrentUser} />
				
				{noteItems}
			</div>
		);
	}
}

export default withRouter(NoteIndex);

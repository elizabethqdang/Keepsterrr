class NotesController < ApplicationController
	def index
		@notes = Note.all.order("created_at DESC")
	end
	
	def create
		Note.create(note_params)
	end
	
	def show
		@note = Note.find(params[:id])
		render "/api/notes/show"
	end
	
	def update
		@note = Note.find(params[:id]).update
		render "/api/notes/show"
	end
	
	def destroy
		@note = Note.find(params[:id]).destroy
	end
	
	private
	
	def note_params
		params.require(:note).permit(:title, :body)
	end
end

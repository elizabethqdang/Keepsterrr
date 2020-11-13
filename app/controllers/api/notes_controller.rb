class Api::NotesController < ApplicationController
	
	def index
		@notes = Note.all.order("created_at DESC")
		render :index
	end
	
	def show
		@note = Note.find(params[:id])
		render "/api/notes/show"
	end
	
	def create
		@note = Note.new!(note_params)
		if @note.save
			render :show
		else
			render @note.errors.full_messages, status: 401
		end		
	end
	
	def update
		@note = Note.find(params[:id])
		if @note.update
			render "/api/notes/show"
		else 
			render json: @note.errors.full_messages, status: 401
	end
	
	def destroy
		@note = Note.find(params[:id])
		if @note
			@note.destroy
			render "api/notes/index"
		else
			render json: ["Invalid. Note no longer exists."], status: 404
		end
	end
	
	private
	
	def note_params
		params.require(:note).permit(:title, :body, :list, :pinned)
	end
	
end

class NotesController < ApplicationController
	def index
		@notes = Note.all.order("created_at DESC")
		render :index
	end
	
	def create
		@note = Note.create(note_params)
		if @note.save
			render :show
		else
			render joson: @notes.errors.full_messages, status: 422
		end
	end
	
	def show
		@note = Note.find(params[:id])
		if @note
			render :show
		else
			render json: @notes.errors.full_messages, status: 400
		end
	end
	
	def update
		@note = Note.find(params[:id])
		if @note.update(note_params)
			render :show
		else
			render json: @note.errors.full_messages, status: 422
		end
	end
	
	def destroy
		@note = Note.find(params[:id])
		if @note
			@note.destroy
			render :index
		else
			render json: @note.errors.full_messages, status: 404
		end
	end
	
	private
	
	def note_params
		params.require(:note).permit(:title, :body, :list, :pinned)
	end
	
end

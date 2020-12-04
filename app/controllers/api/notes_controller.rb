class Api::NotesController < ApplicationController
	
	def index
		@notes = current_user.notes.order(updated_at: :desc)
		render :index
	end

	def show
		@note = Note.find(params[:id])
		# render "/api/notes/show"
		render :show
	end
	
	def create
		@note = Note.new(note_params)
		@note.owner_id = current_user.id
		if @note.save
			render :show
			# render "api/users/show"
		else
			render json: note.errors.full_messages, status: 401
		end		
	end
	
	def update
		@note = Note.find(params[:id])
		if @note.update(note_params)
			# render "/api/notes/show"
			render :show
		else 
			render json: @note.errors.full_messages, status: 401
		end
	end
	
	def destroy
		@note = Note.find(params[:id])
		# if @note
			@note.destroy
			render :show
			# render "api/notes/show"
		# else
		# 	render json: ["Invalid. Note no longer exists."], status: 404
		# end
	end
	
	private
	
	def note_params
		params.require(:note).permit(:title, :body, :list, :pinned, :owner_id, :image, :created_at, :updated_at)
	end
	
end

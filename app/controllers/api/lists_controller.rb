class Api::ListsController < ApplicationController
	
	def index
		@lists = List.all.order("created_at DESC")
		# render :index
	end
	
	def show
		@list = List.find(params[:id])
		render "/api/lists/show"
	end
	
	def create
		@list = List.new(list_params)
		if @list.save
			render :show
		else
			render @list.errors.full_messages, status: 401
		end		
	end
	
	def update
		@list = List.find(params[:id])
		if @list.update
			render "/api/lists/show"
		else 
			render json: @list.errors.full_messages, status: 401
		end
	end
	
	def destroy
		@list = List.find(params[:id])
		if @list
			@list.destroy
			render "api/lists/show"
		else
			render json: ["Invalid. List no longer exists."], status: 404
		end
	end
	
	private
	
	def list_params
		params.require(:list).permit(:title, :pinned)
	end
	
end

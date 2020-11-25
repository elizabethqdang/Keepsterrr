class Api::ListItemsController < ApplicationController
	
	def index
		@list_items = List.find_by(id: params[:note_id]).list_items
		render :index
	end
	
	def show
		@list_item = ListItem.find(params[:id])
		render :show
	end
	
	def create
		@list_item = ListItem.new(list_item_params)
		@list_item.note_id = params[:note_id]
		if @list_item.save
			render :show
		else
			render @list_item.errors.full_messages, status: 401
		end		
	end
	
	def destroy
		@list_item = ListItem.find(params[:id])
		@list_item.destroy
		render "api/lists/show"
	end
	
	private
	
	def list_item_params
		params.require(:list_item).permit(:item, :note_id, :completed)
	end
	
end

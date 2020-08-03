class UsersController < ApplicationController
	def index
		# @users = User.all
		render json: ["user index"]
	end
	
	def create
	end
	
	def show
	end
	
	def update
	end
end

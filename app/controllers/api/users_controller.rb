class Api::UsersController < ApplicationController
		
	def index
    @users = User.all
    render :index
	end
	
	def create
		@user = User.new(user_params)
    if @user.save
			login!(@user)
			render :show
      # render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
	end
	
	def show
		@user = User.includes(:notes).find(params[:id])
		# @note = User.find(params[:id])
		render :show
		
		# if @user
		# 	render "/api/users/show"
		# else
    #   render json: @user.errors.full_messages, status: 401
		# end
	end
  
  def update
		if @user = current_user
			@user.update
			render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
	private
	
	def user_params 
		params.require(:user).permit(:email, :password, :owner_id)
	end
	
end

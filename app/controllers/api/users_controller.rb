class Api::UsersController < ApplicationController
	
	def index
		@users = User.all
	end
		
	def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
	end
	
	def show
		@user = User.find(params[:id])
		if @user
			render :show
		else
      render json: @user.errors.full_messages, status: 401
		end
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
		params.require(:user).permit(:email, :password)
	end
	
end

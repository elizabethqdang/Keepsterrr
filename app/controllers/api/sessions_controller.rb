class Api::SessionsController < ApplicationController

	def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
		)
    if @user
      login!(@user)
      render "/api/users/show"
		else
      render json: ["Invalid email/password combination"], status: 401
			# render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      redirect_to new_session_url
		else
      render json: ["You are not logged in"], status: 404
      # render json: @user.errors.full_messages, status: 404
    end
  end

end

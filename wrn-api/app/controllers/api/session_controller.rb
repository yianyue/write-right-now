class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: @user, status: 200
    else
      # TODO: more detail error
      render nothing: true, status: 401
    end
  end

  def destroy
    # current_user.generate_token
  end

end

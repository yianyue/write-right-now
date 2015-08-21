class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def current_user
    @current_user ||= User.find_by(token: request.headers['token'])
  end

  def authenticate_user
    @user = current_user if request.headers["token"]
    if @user && @user.token == request.headers["token"]
       true
     else
       render nothing: true, status: 401
     end
  end

  helper_method :current_user, :authenticate_user
  
end

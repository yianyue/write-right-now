class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  # otherwise get 'Can't verify CSRF token authenticity'
  # protect_from_forgery unless: -> { request.format.json? }


# redirect to 
  # def after_sign_in_path_for(resource)    
  #   app_path
  # end
  
end

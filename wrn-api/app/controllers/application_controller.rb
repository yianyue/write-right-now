class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  # otherwise get 'Can't verify CSRF token authenticity'
  # protect_from_forgery unless: -> { request.format.json? }

  before_action :configure_permitted_parameters, if: :devise_controller?

# redirect to 
  # def after_sign_in_path_for(resource)    
  #   app_path
  # end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :goal << :name
    devise_parameter_sanitizer.for(:account_update) << :goal << :name
  end
  
end

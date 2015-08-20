class Api::UsersController < ApplicationController

  def create
    
  end

  def show
    # TODO: use jbuilder
    render json: current_user
  end

  def update

  end

  protected
  
  def entry_params
    params.require(:user).permit(:goal)
  end

end

class Api::UsersController < ApplicationController

  before_action :authenticate_user
  skip_before_action :authenticate_user, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors
    end
  end

  def show
    # TODO: use jbuilder
    render json: current_user
  end

  def update
    if current_user.update_attributes(user_params)
      render json: current_user
    else
      render json: @user.errors
    end
  end

  protected
  
  def entry_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :goal)
  end

end

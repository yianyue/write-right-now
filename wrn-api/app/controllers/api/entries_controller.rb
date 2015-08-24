class Api::EntriesController < ApplicationController

  before_action :authenticate_user
  
  def index
    @entries = current_user.entries
    # TODO: time zone
    Entry.create(user: current_user) if @entries.empty?
    # Assume the last entry is the latest
    @entries << Entry.create(user: current_user) if @entries.last.created_at.to_date < Date.today
    render json: @entries.order(created_at: :desc)
  end

  def show
    @entry = current_user.entries    
    @entry = @entry.find(params[:id])
    if @entry
      render json: @entry
    else
      render nothing: true, status: 401
    end
  end

  def create
    @entry = current_user.entries.build()
    @entry.save
    render json: @entry
  end

  def update
    @entry = Entry.find(params[:id])
    @entry.update(entry_params)
    render json: @entry
  end

  protected
  
  def entry_params
    params.require(:entry).permit(:content)
  end

end

class Api::EntriesController < ApplicationController

  before_action :authenticate_user
  
  def index
    @entries = current_user.entries.order(created_at: :desc)
    # TODO: time zone
    Entry.create(user: current_user) if @entries.empty?
    @entries << Entry.create(user: current_user) if @entries[0].created_at.to_date < Date.today
    render json: @entries
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

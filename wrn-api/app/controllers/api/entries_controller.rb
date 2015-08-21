class Api::EntriesController < ApplicationController

  before_action :authenticate_user
  
  def index
    # @entries = current_user.entries.order(created_at: :desc)
    # TODO: time zone
    # Entry.create(user: current_user) if @entries.empty?
    # @entries << Entry.create(user: current_user) if @entries[0].created_at.to_date < Date.today
    @entries = Entry.all
    render json: @entries
  end

  def show
    @entry = Entry.find(params[:id])
    render json: @entry
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

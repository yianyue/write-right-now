class Api::EntriesController < ApplicationController

  before_action :authenticate_user

  def index
    @entries = current_user.entries.order(:created_at)
    # TODO: time zone
    Entry.create(user: current_user) if @entries.empty?
    @entries << Entry.create(user: current_user) if @entries.last.created_at.to_date < Date.today

    # exclude today
    total_days = Date.today - @entries.first.created_at.to_date
    days_completed = @entries.where("word_count >= goal").length
    num_lock = [@entries.size - 1, total_days-days_completed].min
    if num_lock > 0
      (0...num_lock).each{ |i|
        @entries[i].locked = true
        @entries[i].save!
      }
    end
    render json: @entries.as_json(only: [:id, :created_at, :preview, :word_count, :goal, :locked]), status: 200
  end

  def show
    @entry = current_user.entries    
    @entry = @entry.find(params[:id])
    if @entry && !@entry.locked
      render json: @entry
    else
      render nothing: true, status: 401
    end
  end

  # def create
  #   @entry = current_user.entries.build()
  #   @entry.save
  #   render json: @entry
  # end

  def update
    @entry = Entry.find(params[:id])
    # if @entry.created_at.to_date == Date.today
      @entry.update(entry_params)
      render json: @entry
    # else
    #   render nothing: true, status: 401
    # end
  end

  protected
  
  def entry_params
    params.require(:entry).permit(:content)
  end

end

Rails.application.routes.draw do

  devise_for :users
  
  root to: 'home#index'

  # resources :users, only: [:new, :create, :show]
  
  namespace :api, defaults: {format: :json} do
    # Directs /api/entries/* to Api::EntriesController
    # (app/controllers/api/entries_controller.rb)
    resources :entries, only: [:index, :create, :show, :update]
    resource :users, only: [:create, :show, :update]
  end

end

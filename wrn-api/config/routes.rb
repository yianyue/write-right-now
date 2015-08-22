Rails.application.routes.draw do
  
  # root to: 'home#index'
  
  namespace :api, defaults: {format: :json} do
    # Directs /api/entries/* to Api::EntriesController
    # (app/controllers/api/entries_controller.rb)
    resources :entries, only: [:index, :create, :show, :update]
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
  end

end

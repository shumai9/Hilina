
Rails.application.routes.draw do
  # devise_for :users, defaults: {format: 'json'}
  root 'landing#index'
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :networth, only: [:index, :show] 
      resources :commitments
      resources :assets
    end
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
  #catch all urls
  get '*path' => 'landing#index'
end

#only: [:show, :edit, :update, :destroy] 
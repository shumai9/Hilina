
Rails.application.routes.draw do
  devise_for :users, defaults: {format: 'json'}
  root 'site#index'
  
  get "/any_user" => 'site#check_user'
  
  namespace :api do
    namespace :v1 do
      resources :networth
      resources :commitments
      resources :assets
    end
  end

end


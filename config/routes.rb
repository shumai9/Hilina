
Rails.application.routes.draw do
  devise_for :users, defaults: {format: 'json'}
  root 'site#index'

  get "/any_user" => 'site#check_user'
  
  get "/home" => 'site#get_home'
  get "/about" => 'site#get_about'
  get "/contact" => 'site#get_contact'
  
  namespace :api do
    namespace :v1 do
      resources :networth
      resources :commitments
      resources :assets
    end
  end
  #catch all urls
  get '*path' => 'site#index'
end


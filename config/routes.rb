Rails.application.routes.draw do
  devise_for :users, defaults: {format: 'json'}
  root 'site#index'
  
  get "/any_user" => 'site#check_user'
  
  scope :api, :v1, defaults: {format: 'json'} do
    resources :total_commitments
    resources :total_assets
    resources :accounts
  end
end
Rails.application.routes.draw do
  root 'site#index'
  get "/site" => 'site#check_user'
  
  scope :api, :v1, defaults: {format: 'json'} do
    devise_for :users, controllers: {
        registrations: 'api/v1/custom_devise/registrations',
        confirmations: 'api/v1/custom_devise/confirmations',
        sessions: 'api/v1/custom_devise/sessions'
    }    
    resources :total_commitments
    resources :total_assets
    resources :accounts
  end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  respond_to :json 
  # might need to change api iinherit from base
end

require "application_responder"
require 'multi_json'

class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  self.responder = ApplicationResponder
  respond_to :json

  # protect_from_forgery unless: -> { request.format.json? }
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  respond_to :json 

  
  protected

  def configure_permitted_parameters 
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :birth_date, :email])
  end
end


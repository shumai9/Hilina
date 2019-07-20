# frozen_string_literal: true

class AuthenticationController < ApplicationController
  # as we dont require token to login user only need user credetials email and password
  skip_before_action :authorize_request, only: :authenticate
  # returns auth token once user is authenticated
  def authenticate
    auth_token = AuthenticateUser.new(
      auth_params[:email], auth_params[:password] ).call
    json_response(auth_token: auth_token)
  end

  private

  def auth_params
    params.permit(:email, :password)
  end
end

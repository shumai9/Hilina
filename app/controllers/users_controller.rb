# frozen_string_literal: true

class UsersController < ApplicationController
  # as we dont require token to signup user
  skip_before_action :authorize_request, only: :create
  # POST /signup
  # return authenticated token upon signup
  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { message: Message.account_created, auth_token: auth_token }
    json_response(response, :created)
  end

  private

  def user_params
    params.require(:user).permit(:user_name,:first_name,:last_name,:email,:password)
  end
end
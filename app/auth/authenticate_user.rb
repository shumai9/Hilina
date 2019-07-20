# frozen_string_literal: true
class AuthenticateUser
  # find out the user what he says he is during login and give token
  def initialize(email, password)
    @email = email
    @password = password
  end

  # service entry point
  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_reader :email, :password

  # varify user
  def user
    user = User.find_by(email: email)
    return user if user&.authenticate(password)

    # raise Authentication error if credentials are invalid
    raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
  end
end

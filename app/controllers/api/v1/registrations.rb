class RegistrationsController < Devise::RegistrationsController
    respond_to :json

  def create
    @user = User.new(user_params)
                      
    if @user.save
      render json: @user
    else
      render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    # data = JSON.parse(user_params)

    params.require(:user).permit(:first_name, :email, :last_name, :password, :birth_date)
  end
end

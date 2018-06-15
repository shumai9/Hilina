module Api::V1
  module CustomDevise
    class RegistrationsController < Devise::RegistrationsController
      protect_from_forgery unless: -> { request.format.json? }
      respond_to :json
      


       # POST /users
      def create 
        @user = User.new(user_params)
        respond_to do |format|
          if @user.save
            format.json { render :show, status: :created, location: @user }
          else
            format.json { render json: @user.errors, status: :unprocessable_entity }
          end
        end
      end


      # DELETE /users/UUID
      def destroy
        resource.deactivated_at = DateTime.now
        resource.save!
        Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
      end

      private

      def user_params
        devise_parameter_sanitizer.permit(:sign_up) do |user_params|
          user_params.permit(:first_name, :last_name, :birth_date, :email, :password)
        end
      end
      
      # def password(password)
      #   ::BCrypt::Password.create("#{:password}#{self.class.pepper}", :cost => self.class.stretches).to_s
      #   return
      # end
    end
  end
end

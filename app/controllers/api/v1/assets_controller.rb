module Api::V1 
  class AssetsController < ApplicationController
    def index
      @user_assets = user_data
      json_response(asset: @user_assets)
    end

    def create
      @asset = Asset.create!(user_params)
      response = {message: "The Asset #{@asset.asset_name} created succesfully"}
      json_response(response, :created)
    end

    def show
    end

    def update
    end

    def delete
    end
    private 
    def user_data
      #Asset.where("user_id = ?", params[:user_id])
      assets = Asset.where(user_id: @current_user.id)
    end
    def user_params
      #
      params.require(:asset).permit(:user_id, :asset_name,
        :amount, :asset_type, :acquired, :ceased )
    end
  end
end

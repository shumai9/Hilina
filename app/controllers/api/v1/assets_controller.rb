module Api::V1 
  class AssetsController < ApplicationController
    def index
      @user_assets = user_data
      json_response(asset: @user_assets)
    end

    def create
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
      @assets = Asset.where(user_id: @current_user.id)
    end
  end
end

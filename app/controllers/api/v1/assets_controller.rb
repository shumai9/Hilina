module Api::V1 
  class AssetsController < ApplicationController
    def index
      @user_assets = user_data
      json_response(asset: @user_assets)
    end
    def create
      @asset = Asset.create!(user_params)
      response = { message:
        "The Asset #{ @asset.asset_name } created succesfully" }
      json_response(response, :created)
    end
    def show
      single_asset = user_data.find_by("id = ?", params[:id])
      json_response( single_asset ? { single_asset: single_asset } : 
        { message: "Record not found" })    
    end
    def update
      if @current_user.id == user_params[:user_id]
        asset_to_update = user_data.find_by("id = ?", params[:id])
        if asset_to_update.update_attributes!(user_params) 
          json_response({ message: asset_to_update})
        end
      else 
        json_response({ message: "Error id mis match" })
      end
    end
    def destroy
      single_asset = Asset.find_by("id = ?", params[:id])
      json_response(
        single_asset && single_asset.destroy ? (
          { message: "Asset name #{single_asset.asset_name} deleted" }
        ) : (
          { message: "Record not found"}
        )
      )
    end
    private
    def user_data
      assets = Asset.where(user_id: @current_user.id)
    end
    def user_params
      params.require(:asset).permit( :user_id, :asset_name,
        :amount, :asset_type, :acquired, :ceased )
    end
  end
end

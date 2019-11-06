module Api::V1 
  class AssetsController < ApplicationController

    def index
      @user_assets = user_data
      json_response(asset: @user_assets)
    end

    def create
      @asset = Asset.create!(user_params)
      response = { message: "The Asset #{@asset.asset_name}
       created succesfully" }
      json_response(response, :created)
    end

    def show
      single_asset = user_data.find_by("id = ?", params[:id])
      json_response( single_asset ? 
        { single_asset: single_asset }
         : 
        { message: "Record not found"}
      )    
    end

    def update
      #Dear my future self I assure u I didn't copy this I worked it out 
      asset_to_update = user_data.find_by("id = ?", params[:id]) and
      asset_to_update.update_attributes!(user_params) if
       @current_user.id == user_params[:user_id]
      json_response( 
        asset_to_update ? 
          { message: asset_to_update}
           : 
          { message: "User id mis match"}
      )
    end

    def destroy
      single_asset = Asset.find_by("id = ?", params[:id])
      json_response( single_asset && single_asset.destroy ? 
        { message: "Asset name #{single_asset.asset_name} deleted" }
          : 
        { message: "Record not found"}, 404
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

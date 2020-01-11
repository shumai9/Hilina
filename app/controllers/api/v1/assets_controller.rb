module Api::V1 
  class AssetsController < ApplicationController
    def index
      json_response(asset: user_data)
    end
    def create
      @asset = Asset.create!(user_params)
      response = { message:
        "The Asset #{ @asset.asset_name } created succesfully" }
      json_response(response, :created)
    end
    def show
      single_asset = user_data.find_by("id = ?", params[:id])
      json_response( 
        single_asset ? 
        { single_asset: single_asset }
        : raise(ActiveRecord::RecordNotFound, Message.not_found)
      )    
    end
    def update
      asset_to_update = user_data.find_by("id = ?", params[:id])
      json_response( 
        asset_to_update && asset_to_update.update_attributes!(user_params) ? 
        { message: asset_to_update }
        : raise(ActiveRecord::RecordNotFound, Message.not_found)
      )
    end
    def destroy
      single_asset = user_data.find_by("id = ?", params[:id])
      json_response(
        single_asset && single_asset.destroy! ? 
          { message: "Asset name #{single_asset.asset_name} deleted" }
        : raise(ActiveRecord::RecordNotFound, Message.not_found)
      )
    end
    private
    def user_data
      @assets ||= Asset.where(user_id: @current_user.id)
    end
    def user_params
      params.require(:asset).permit( :user_id, :asset_name,
        :amount, :asset_type, :acquired, :ceased )
    end
  end
end

module Api::V1 
  #module V1
    class AssetsController < ApplicationController
      def index
        assets = Asset.all
        json_response(asset: assets)
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
      def set_user_data
        @assets = Asset.all.where(user_id: @current.user_id)
      end

    end
  #end
end

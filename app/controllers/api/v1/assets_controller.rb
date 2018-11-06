

module Api 
    module V1
        class AssetsController < ApplicationController
            def index
                @assets = Asset.all 
                render json: {all: @assets}.to_json
            end

            def create
            end

            def show
            end

            def update
            end

            def delete
            end
        end
    end
end

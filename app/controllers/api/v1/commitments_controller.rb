module Api
    module V1 
        class CommitmentsController < ApplicationController
            def index
                @Commitments = Commitment.all 
                render json: { all: @Commitments }.to_json
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


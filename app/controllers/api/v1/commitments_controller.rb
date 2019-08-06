module Api::V1
  class CommitmentsController < ApplicationController
    def index
      @user_commits = set_user_data 
      json_response(commits: @user_commits)
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
      #Asset.where("user_id = ?", params[:user_id])
      @commitments = Commitment.where(user_id: @current_user.id)
    end
  end
end


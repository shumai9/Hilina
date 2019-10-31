module Api::V1
  class CommitmentsController < ApplicationController
    def index
      @user_commits = set_user_data 
      json_response(commits: @user_commits)
    end
    def create
      @commits = Commitment.create!(user_params)
      response = {message: "The Commitment 
        #{@commits.commitment_name} created succesfully"}
      json_response(response, :created)
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
    def user_params
      params.require(:commits).permit(:user_id, :commitment_name,
        :amount, :commitment_type, :acquired, :ceased )
    end
  end
end


module Api::V1
  class CommitmentsController < ApplicationController
    def index
      @user_commits = user_data 
      json_response(commits: @user_commits)
    end

    def create
      @commits = Commitment.create!(user_params)
      response = { message: "The Commitment #{@commits.commitment_name} 
        created succesfully"}
      json_response(response, :created)
    end

    def show
      single_commit = user_data.find_by("id = ?", params[:id])
      json_response( single_commit ? { single_commit: single_commit } : 
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
      single_commit = Asset.find_by("id = ?", params[:id])
      json_response(single_commit && single_commit.destroy ? 
        { message: "Asset name #{single_commit.asset_name} deleted" } : 
        { message: "Record not found"}, 404)
    end

    private 
    def user_data
      @commitments = Commitment.where(user_id: @current_user.id)
    end

    def user_params
      params.require(:commits).permit(:user_id, :commitment_name,
        :amount, :commitment_type, :acquired, :ceased )
    end
  end
end
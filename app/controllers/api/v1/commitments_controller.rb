module Api::V1
  class CommitmentsController < ApplicationController
    def index
      json_response( commits: user_data )
    end

    def create
      @commits = Commitment.create!(user_params)
      response = {
        message: "The commitment #{@commits.commitment_name} created succesfully"}
      json_response(response, :created)
    end

    def show
      single_commit = user_data.find_by("id = ?", params[:id])
      json_response(
        single_commit ?
          { single_commit: single_commit } 
        : raise(ActiveRecord::RecordNotFound, Message.not_found)
      )    
    end

    def update
      commit_to_update = user_data.find_by("id = ?", params[:id])
      json_response(
        commit_to_update && commit_to_update.update_attributes!(user_params) ?
          { message: commit_to_update } 
        : raise(ActiveRecord::RecordNotFound, Message.not_found)
      )
    end

    def destroy
      single_commit = user_data.find_by("id = ?", params[:id])
      json_response( 
        single_commit && single_commit.destroy ? 
        { message: "Commitment name #{single_commit.commitment_name} deleted" }
        : raise(ActiveRecord::RecordNotFound, Message.not_found)
      )
    end

    private 
    def user_data
      @commitments ||= Commitment.where(user_id: @current_user.id)
    end

    def user_params
      params.require(:commitment).permit(:user_id, :commitment_name,
        :amount, :commitment_type, :acquired, :ceased )
    end
  end
end
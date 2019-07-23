module Api
  module V1 
    class CommitmentsController < ApplicationController
      def index
        commits = Commitment.all 
        json_response(commits: commits)
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


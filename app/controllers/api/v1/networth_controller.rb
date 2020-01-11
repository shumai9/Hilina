module Api::V1
  class NetworthController < ApplicationController
    def index
      @user_networth = user_data
      json_response(net: @user_networth)
    end
    private 
    def user_data
      #where returns a collection 
      @networth = Networth.where(user_id: @current_user.id).first
    end
  end
end
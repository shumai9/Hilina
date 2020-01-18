module Api::V1
  class NetworthController < ApplicationController
    def index
      @user_networth = user_data
      @data = set_total
      record_current_networth
      json_response({ net: @user_networth, total: @data })
    end
    private
    def set_total
      asset_data = Asset.where(user_id: @current_user.id)
      commit_data = Commitment.where(user_id: @current_user.id)
      return data = {
        asset:  Networth.get_total_amount(asset_data),
        commit: Networth.get_total_amount(commit_data)
      }
    end
    def record_current_networth
      net =  Networth.current_networth(@data)
      user_data.current_networth = net
    end
    def user_data 
      @networth ||= Networth.where(user_id: @current_user.id).first
    end
  end
end
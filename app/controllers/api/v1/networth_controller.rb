module Api::V1
  class NetworthController < ApplicationController
    def index
      response = { main: user_data, subtotal: get_total.subtotal}
      json_response(response)
    end
    private
    def get_total
      init_data = Networth.new(user_id: @current_user.id)
      if user_data && user_data.current_networth != init_data.current_net
        user_data.update!(current_networth: init_data.current_net)
      end
      init_data 
    end
    def user_data
      Networth.find_by(user_id: @current_user.id) ||
      Networth.create!( user_id: @current_user.id, 
      current_networth: Networth.new(user_id: @current_user.id).current_net )
    end
  end
end
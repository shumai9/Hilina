module Api
  module V1
    class NetworthController < ApplicationController
      def index
        net = Networth.all
        json_response(net: net)
      end
    end
  end
end

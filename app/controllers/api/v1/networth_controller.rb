module Api
    module V1
        class NetworthController < ApplicationController
            def index
                @networths = Networth.all
                render json: { current: "your net worth is #@netwoths"}
            end
        end
    end
end

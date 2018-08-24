class AssetController < ApplicationController
    before_action: :authenticate_user 
    def index
        return "you reached assets"
    end
end

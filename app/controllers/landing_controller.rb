class LandingController < ApplicationController
  skip_before_action :authorize_request, only: :index
  def index
    render "site/landing", {:formats=>[:html]}
  end
end

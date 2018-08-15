class SiteController < ApplicationController
  # before_action :user_signed_in?
  def index
    render "site/site", {:formats=>[:html]}
  end
  
  def check_user
    if user_signed_in?
      render :json => {"signed_in" => true, "user" => current_user}.to_json()
    else
      render :json => {"signed_in" => false}.to_json()
    end       
  end
end
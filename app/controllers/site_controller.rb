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
  def get_home
    render :json => {"title" => "Welcome to Hilina", "body" => "Emnacipate your self from mental slavery by utilizing the blazing fast real time data provided by Hilina. You will feel an immidate freedom... sigin up"}.to_json()
  end
  def get_about
    render :json => {"title" => "Hilina", "body" => "This project is aimed at helping individuals to look after their financial wellbeing. It provides a real-time data of current financial state by tracking individual assets and commitments of user(read only) and display's it in visual represetations as well as list of all assets and commitments..."}.to_json()
  end
  def get_contact
    render :json => {"name" => "Hilina.Ltd", "address" => " 99 Hilina Road", "city" => "Asmara, Eritrea", "tel" => "(+291) 07123401", "email" => "hello@hilina.co.uk"}.to_json()
  end
end

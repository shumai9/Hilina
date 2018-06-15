require "rails_helper"

RSpec.describe TotalAssetsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/total_assets").to route_to("total_assets#index")
    end


    it "routes to #show" do
      expect(:get => "/total_assets/1").to route_to("total_assets#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/total_assets").to route_to("total_assets#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/total_assets/1").to route_to("total_assets#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/total_assets/1").to route_to("total_assets#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/total_assets/1").to route_to("total_assets#destroy", :id => "1")
    end

  end
end

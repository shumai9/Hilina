require "rails_helper"

RSpec.describe NetworthController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/networth").to route_to("networth#index")
    end


    it "routes to #show" do
      expect(:get => "/networth/1").to route_to("networth#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/networth").to route_to("networth#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/networth/1").to route_to("networth#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/networth/1").to route_to("networth#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/networth/1").to route_to("networth#destroy", :id => "1")
    end

  end
end

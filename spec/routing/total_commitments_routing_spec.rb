require "rails_helper"

RSpec.describe TotalCommitmentsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/total_commitments").to route_to("total_commitments#index")
    end


    it "routes to #show" do
      expect(:get => "/total_commitments/1").to route_to("total_commitments#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/total_commitments").to route_to("total_commitments#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/total_commitments/1").to route_to("total_commitments#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/total_commitments/1").to route_to("total_commitments#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/total_commitments/1").to route_to("total_commitments#destroy", :id => "1")
    end

  end
end

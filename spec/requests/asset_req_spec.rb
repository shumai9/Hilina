# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'API V1 Asset Controller', type: :request do
  let!(:user) { create(:user) }
  let(:headers) do
    { 'Authorization' => token_generator(user.id) }
  end
  let(:invalid_headers){{ 'Authorization' => token_generator(65) }}
  let(:no_token){{ }}
  let!(:assets){
    5.times do
      create(:asset, user_id: user.id)
    end
  }
  let!(:single_asset){ create(:asset, user_id: user.id) }
  let!(:single_asset_to_update){
    {"asset" => { 
        asset_name: single_asset.asset_name,
        asset_type: single_asset.asset_type,
        amount: 2,
        acquired: single_asset.acquired,
        ceased: "",
        user_id: single_asset.user_id,
        id: single_asset.id 
      }
    }
  }
  let(:wrong_user_id_to_update){
    {"asset" => { 
        asset_name: single_asset.asset_name,
        asset_type: single_asset.asset_type,
        amount: 2,
        acquired: single_asset.acquired,
        ceased: "",
        user_id: 1,
        id: single_asset.id 
      }
    }
  }
  let(:data){
    {"asset" => {
        asset_name: "house", 
        asset_type: "non-financial",
        amount: 2504514,
        acquired: "12/5/2015",
        ceased: "", 
        user_id: user.id 
      }
    }
  }
  let(:empty_data){
    {"asset" => {
        asset_name: "",
        asset_type: "",
        amount:'',
        acquired: "",
        ceased: "",
        user_id: user.id 
      }
    }
  }
  #Index action
  describe 'GET api/v1/assets' do
    context "when valid request with correct user id" do
      before { get '/api/v1/assets', headers: headers }
      it "should responds with status 200" do
        expect(response).to have_http_status(200)
      end
      it "displays assets" do
        expect(json['asset'].size).to eq(5+1)
      end
    end
    context "when Invalid request with incorrect user id" do
      before { get '/api/v1/assets', headers: invalid_headers }
      it "should responds with status 422" do
        expect(response).to have_http_status(422)
      end
      it "respondss with error message" do
        expect(json["message"]).to match(
          /Invalid token Couldn't find User with 'id'=65/)
      end
    end
    context "when Invalid request with no Authorization token" do
      before { get '/api/v1/assets', headers: no_token }
      it "should responds with status 422" do
        expect(response).to have_http_status(422)
      end
      it "respondss with error message" do
        expect(json["message"]).to match(
          /Missing token/)
      end
    end
  end
  #show
  describe 'GET api/v1/asset/ asset_id' do
    context "when valid request with resource id" do
      before { get "/api/v1/assets/#{single_asset.id}", headers: headers }
      it "should responds with status 200" do
        expect(response).to have_http_status(200)
      end
      it "returns single assets created by the user " do
        expect(json["single_asset"]["user_id"]).to eq(user.id)
      end
    end
    context "when Invalid request with incorrect/not available id" do
      before { get "/api/v1/assets/100", headers: headers }
      it "should responds with status 404" do
        expect(response).to have_http_status(404)
      end
      it "respondss with error message" do
        expect(json["message"]).to match(/Sorry, record not found./)
      end
    end
  end
  #Create action
  describe 'POST api/v1/assets' do
    context "when valid request to create a resource" do
      before { post "/api/v1/assets", headers: headers, params: data }
      it "should responds with status 201" do
        expect(response).to have_http_status(201)
      end
      it "respondss with success message" do
        expect(json["message"]).to match(
          /The Asset house created succesfully/)
      end
    end
    #form control should handle this at front end
    context "when authenticated user sends invalid request with empty resource" do
      before { post "/api/v1/assets", headers: headers, params: empty_data }
      it "reponds with status 422" do
        expect(response).to have_http_status( 422)
      end
      it "returns Validation error message" do
        expect(json["message"]).to include("Validation failed:")
      end
    end
  end
  #Update action
  describe "PUT api/v1/assets/id" do
    context "Valid request with correct id" do
      #gottcha user_id from params is a string so change it integer for single_asset_to_update
      before { put "/api/v1/assets/#{single_asset.id}", headers: headers, params: single_asset_to_update }
      it "responds with status 200" do
        expect(response).to have_http_status(200)
      end
      it "return updated object" do
        #has to be float and string
        expect(json["message"]["amount"]).to eq(single_asset_to_update["asset"][:amount].to_f.to_s)
      end
    end
    context "Invalid request with incorrect id eg: 45" do
      #should be handled by frontend not to occur
      before { put "/api/v1/assets/45", headers: headers, params: single_asset_to_update }
      it "responds with status 404 not found" do
        expect(response).to have_http_status(404)
      end
      it "return error message" do
        #has to be float and string
        expect(json["message"]).to match("Sorry, record not found.")
      end
    end
    context "Invalid request with incorrect User Id eg: 5" do
      #should be handled by frontend not to occur
      before { put "/api/v1/assets/#{single_asset.id}", headers: headers, params: wrong_user_id_to_update }
      it "responds with status 422 not found" do
        expect(response).to have_http_status(422)
      end
      it "returns update error " do
        #has to be float and string
        expect(json["message"]).to match("Validation failed: User must exist")
      end
    end
  end
  #Delete action
  describe "DELETE api/v1/assets/id" do
    context "Valid request with correct id" do
      before { delete "/api/v1/assets/#{single_asset.id}",
        headers: headers, params: single_asset_to_update }
      it "responds with status 200" do
        expect(response).to have_http_status(200)
      end
      it "return updated object" do
        #has to be float and string
        expect(json["message"]).to include("deleted")
      end
    end
    context "Invalid request with incorrect Id eg: 5" do
      #should be handled by frontend not to occur
      before { delete "/api/v1/assets/2", 
        headers: headers, params: wrong_user_id_to_update }
      it "responds with status 404 not found" do
        expect(response).to have_http_status(404)
      end
      it "return error message" do
        #has to be float and string
        expect(json["message"]).to match("Sorry, record not found.")
      end
    end
  end
end
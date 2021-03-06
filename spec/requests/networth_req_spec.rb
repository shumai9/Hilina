# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'API V1 networth Controller', type: :request do
  let!(:user) { create(:user) }
  let(:headers) do
    { 'Authorization' => token_generator(user.id) }
  end
  let(:invalid_headers){{ 'Authorization' => token_generator(65) }}
  let(:no_token){{ }}
  let!(:data){
      5.times do
        create(:asset, user_id: user.id);
        create(:commitment, user_id: user.id)
      end
    }
  
  describe 'GET api/v1/networth' do
    let(:net){ Networth.create!(user_id: user.id) }
    context "when user have data and sends valid request" do
      before { get '/api/v1/networth', headers: headers }
      it "should responds with status 200" do
        expect(response).to have_http_status(200)
      end
      it "returns an object with asset and commit as keys" do
        expect(json["subtotal"].keys).to eq(["asset", "commit"])
      end
      it "returns networth" do
        expect(json["main"]["current_networth"].to_f).to eq(net.current_net.to_f)
      end
    end
  end
end

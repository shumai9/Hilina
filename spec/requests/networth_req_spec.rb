# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'API V1 networth Controller', type: :request do
  let!(:user) { create(:user) }
  let(:headers) do
    { 'Authorization' => token_generator(user.id) }
  end
  let(:invalid_headers){{ 'Authorization' => token_generator(65) }}
  let(:no_token){{ }}
  let!(:networth){ create(:networth, user_id: user.id)}
  #Index action
  describe 'GET api/v1/networth' do
    context "when valid request with correct user id" do
      before { get '/api/v1/networth', headers: headers }
      it "should responds with status 200" do
        expect(response).to have_http_status(200)
      end
      it "displays networths" do
        expect(json["net"]["total_amount"]).to eq("0.0")
      end
    end
  end
end
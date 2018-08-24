require 'rails_helper'

RSpec.describe "Networth", type: :request do
  describe "GET /networth" do
    it "works! (now write some real specs)" do
      get networth_path
      expect(response).to have_http_status(200)
    end
  end
end

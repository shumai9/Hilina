require 'rails_helper'

RSpec.describe "TotalAssets", type: :request do
  describe "GET /total_assets" do
    it "works! (now write some real specs)" do
      get total_assets_path
      expect(response).to have_http_status(200)
    end
  end
end

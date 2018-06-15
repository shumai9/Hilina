require 'rails_helper'

RSpec.describe "TotalCommitments", type: :request do
  describe "GET /total_commitments" do
    it "works! (now write some real specs)" do
      get total_commitments_path
      expect(response).to have_http_status(200)
    end
  end
end

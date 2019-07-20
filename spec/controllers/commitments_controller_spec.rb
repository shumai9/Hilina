require 'rails_helper'

RSpec.describe Api::V1::CommitmentsController, type: :controller do
  context 'When anuthorized GET request to api/v1/commitments#index' do
    before { get 'index'}
    it 'responds with status 422' do
      expect(response).to have_http_status(422)
    end
    it "responds with error message of Unprocessable Entity" do
      expect(response.message).to match(/Unprocessable Entity/)
    end
  end
end

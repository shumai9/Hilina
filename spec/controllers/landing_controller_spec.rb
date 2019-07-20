require 'rails_helper'

RSpec.describe LandingController, type: :controller do
  context 'When user sends a GET to landing#index' do
    before { get 'index'}
    it 'responds with status 200' do
      expect(response).to have_http_status(200)
    end
  end
end

require 'rails_helper'

RSpec.describe SiteController, type: :controller do
    describe "GET #index" do
    it "returns a success response" do
       get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end
end

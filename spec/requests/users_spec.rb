# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users signup', type: :request do
  let(:user) { build(:user) }
  let(:headers) { valid_headers.except('Authorization') }
  let(:valid_attributes) do
    attributes_for(:user, password_confirmation: user.password)
  end
  let(:empty_attributes) do
    {user: {user_name: '', first_name: '',last_name: '', email: '', password: ''}}
  end
  # User signup test suite
  describe 'POST /signup' do
    context 'when valid request' do
      before do
        post '/signup',
        params: { user: valid_attributes }.to_json,
        headers: headers
      end

      it 'creates a new user' do
        expect(response).to have_http_status(201)
      end

      it 'returns success message' do
        expect(json['message']).to match(/Account created successfully/)
      end

      it 'returns an authentication token' do
        expect(json['auth_token']).not_to be_nil
      end
    end

    context 'when valid request but empty data field' do
      before { post '/signup', params: empty_attributes.to_json, headers: headers }

      it 'does not create a new user' do
        expect(response).to have_http_status(422)
      end
      it 'returns failure message' do
        expect(json['message']).to include("can't be blank")
      end
    end
  end
end

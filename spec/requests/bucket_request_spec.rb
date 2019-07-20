# # frozen_string_literal: true

# require 'rails_helper'

# RSpec.describe 'Create Bucket', type: :request do
#   let!(:user) { create(:user) }

#   let(:headers) do
#     { 'Authorization' => token_generator(user.id) }
#   end

#   let(:new_valid_buket) { build(:bucket, user_id: user.id) }

#   let(:param) do
#     {
#       title: new_valid_buket.title,
#       author: new_valid_buket.author,
#       user_id: new_valid_buket.user.id
#     }
#   end

#   before { post '/v1/bucket', params: param, headers: headers }

#   context 'When authenticated user POST to v1/bucket a bucket is created' do
#     it 'responds with status 201 when created' do
#       expect(response).to have_http_status(201)
#     end
#     it 'assigned bucket id when persited' do
#       expect(json['id']).not_to be_nil
#     end
#     it 'ensures user_id in bucket created matches user_id' do
#       expect(json['user_id']).to eq(user.id)
#     end
#   end

#   context 'When authenticated user GET to v1/bucket a bucket is returned' do
#     before { get '/v1/bucket', headers: headers }
#     it 'responds with status 200' do
#       expect(response).to have_http_status(200)
#     end
#     it 'ensures bucket list is returned' do
#       expect(json).not_to be_nil
#     end
#   end
# end

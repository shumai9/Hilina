require 'rails_helper'

RSpec.describe Asset, type: :model do
  it {should validate_presence_of(:asset_name)}
  it {should validate_presence_of(:user_id)}
  it {should validate_presence_of(:acquired)}
  it {should validate_presence_of(:ceased)}
end

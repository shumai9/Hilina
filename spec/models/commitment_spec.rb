require 'rails_helper'

RSpec.describe Commitment, type: :model do
  it {should validate_presence_of(:commitment_name)}
  it {should validate_presence_of(:user_id)}
  it {should validate_presence_of(:acquired)}
  it {should validate_presence_of(:ceased)}
end

# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Networth, type: :model do
  let!(:user) { create(:user) }
  let!(:assets_1){ create(:asset, user_id: user.id)}
  let!(:assets_2){ create(:asset, user_id: user.id)}
  let(:sum_of_asset) { assets_1.amount.to_f + assets_2.amount.to_f}

  let!(:comit_1){ create(:commitment, user_id: user.id)}
  let!(:comit_2){ create(:commitment, user_id: user.id)}
  let(:sum_of_commits) { comit_1.amount.to_f + comit_2.amount.to_f}
  let(:net){ sum_of_asset - sum_of_commits}
  let(:data){ Networth.create(user_id: user.id) }
  
  it { should validate_presence_of(:user_id) }
  describe "method Subtotal" do
    context "When a user with assets and commitments" do
      it "returns the total amount of assets " do
        expect(data.subtotal[:asset]).to eq(sum_of_asset)
      end
      it "returns the total amount of commitments " do
        expect(data.subtotal[:commit]).to eq(sum_of_commits)
      end
    end
  end
  describe "method Current_net" do
    context "When sum of assets and sum of commitments as object is given" do
      it "returns current net worth as a difference between Asset - Commit" do
        expect(data.current_net).to eq(net)
      end
    end
  end
end

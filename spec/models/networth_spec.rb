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

  let(:asset_data){ Asset.where(user_id: user.id) }
  let(:commit_data){ Commitment.where(user_id: user.id) }
  let(:total_asset){ Networth.get_total_amount(asset_data)}
  let(:total_commit){ Networth.get_total_amount(commit_data)}
  let(:current_net) { Networth.current_networth( {asset: total_asset, commit: total_commit} ) }
  
  it { should validate_presence_of(:user_id) }
  describe "class method Get_total_amount" do
    context "When a user has created assets and commitments" do
      it "returns the total amount of assets " do
        expect(total_asset).to eq(sum_of_asset)
      end
      it "returns the total amount of commitments " do
        expect(total_commit).to eq(sum_of_commits)
      end
    end
  end
  describe "class method Current_networth" do
    context "When sum of assets and sum of commitments as object is given" do
      it "returns current net worth as a difference between Asset - Commit" do
        expect(current_net).to eq(total_asset - total_commit)
      end
    end
  end
end

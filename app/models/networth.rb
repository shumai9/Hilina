class Networth < ApplicationRecord
  belongs_to :user
  def initialize
    @assets = total_assets


  def calc_networth
    return assets - commitments
  end
end

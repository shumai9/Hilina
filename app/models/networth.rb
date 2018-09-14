

class Networth < ApplicationRecord
  belongs_to :user
  @assets = Asset.all
  @commitments = Commitment.all
  
  def calc_networth
    return @assets.amount - @commitments.amount
  end
end

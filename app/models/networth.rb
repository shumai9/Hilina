class Networth < ApplicationRecord
  belongs_to :user
  validates_presence_of :user_id

  @assets = Asset.all
  @commitments = Commitment.all
  
  def calc_networth
    return @assets.amount - @commitments.amount
  end
end

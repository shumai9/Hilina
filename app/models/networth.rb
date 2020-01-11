class Networth < ApplicationRecord
  belongs_to :user
  validates_presence_of :user_id
  def calc_networth
    return @assets.amount - @commitments.amount
  end
end

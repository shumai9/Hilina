class Networth < ApplicationRecord
  belongs_to :user
  validates_presence_of :user_id

  # after_initialize :default_values
  # def default_values
  #   #self.bluh = bluh
  # end

  # def initialize(user_id)
  #   @user_id= user_id
  #   # @asset = Asset.all.where(user_id: @user_id)
  #   # @comit = Commitment.all.where(user_id: @user_id)
  #   # @total_assets = get_total_amount(@asset)
  #   # @total_commitment= get_total_amount(@comit)
  # end
  #attr_reader :total_assets, :total_commitment
  
  def self.get_total_amount(collection)
    sum = collection.map{ |item| item.amount.to_f }
    sum.reduce(:+)
  end
  
  def self.current_networth(total)
    net = total[:asset] - total[:commit]
  end
end

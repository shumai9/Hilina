class Networth < ApplicationRecord
  belongs_to :user
  validates_presence_of :user_id

  def initialize(attributes={})
    super
    if attributes
      @subtotal = { asset: get_total_amount( Asset.all.where(
          user_id: attributes[:user_id] )),
        commit: get_total_amount( Commitment.all.where(
          user_id: attributes[:user_id])) }
      @current_net = @subtotal[:asset] - @subtotal[:commit]
    end
  end
  attr_reader :subtotal, :current_net 
  
  def get_total_amount(collection)
    sum = collection.map{ |item| item.amount }
    #sum.reduce(:+) gives errors with empty []
    sum.inject(BigDecimal.new(0)) do |total, val|
      total += val
    end
  end
end
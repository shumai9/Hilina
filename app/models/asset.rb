class Asset < ApplicationRecord
  # thing that brings in money or value changed to cash
  belongs_to :user

  
  def total_assets
    return sum(@user.amount)
  end 
end

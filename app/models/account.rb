class Account < ApplicationRecord
  belongs_to :user
  has_one :total_asset
  has_one :total_commitment
end
 

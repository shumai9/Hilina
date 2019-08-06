class Asset < ApplicationRecord
  # thing that brings in money or value changed to cash
  belongs_to :user
  validates_presence_of :asset_name, :user_id, :acquired, :ceased 
end

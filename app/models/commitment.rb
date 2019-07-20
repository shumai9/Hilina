class Commitment < ApplicationRecord
  validates_presence_of :commitment_name, :user_id, :acquired, :ceased 
  belongs_to :user
end

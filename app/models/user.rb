class User < ApplicationRecord
  validates_presence_of :first_name, :last_name, :user_name,
   :email, :password_digest
  has_secure_password 
  has_many :assets
  has_many :commitments
  has_one  :networth
end

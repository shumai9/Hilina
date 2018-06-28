class User < ApplicationRecord
  validates_presence_of :first_name, :last_name, :birth_date
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :account
  has_one :total_asset, through: :account
  has_one :total_commitment, through: :account
end

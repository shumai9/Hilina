# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples: 
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@usr = User.create( 
  :first_name => Faker::Name.first_name,
  :last_name => Faker::Name.last_name,
  :user_name => Faker::Movies::StarWars.character,
  :email => Faker::Internet.email,
  :password => "password"
)
@netwoth = Networth.create(
  :user_id => @usr.id,
  :total_amount => 0,
  :total_current_value => 0,
  :current_networth => 0
)
  #assets = ['Faker::Device.model_name', 'Faker::Construction.heavy_equipment']
  #comit = ['Faker::Device.model_name', 'Faker::Construction.heavy_equipment']
5.times do 
  @asset = Asset.create(
    :user_id => @usr.id,
    :asset_name => Faker::Vehicle.make,
    :asset_type => "financial_assets",
    :amount => Faker::Number.number(5),
    :acquired =>Faker::Date.between(2.year.ago, Date.today),
    :ceased =>Faker::Date.between(2.year.ago, Date.today) 
  )
  @commits = Commitment.create(
    :user_id => @usr.id,
    :commitment_name =>Faker::Name.first_name ,
    :commitment_type =>"financial_commitment" ,
    :amount => Faker::Number.number(5),
    :acquired => Faker::Date.between(2.year.ago, Date.today),
    :ceased => Faker::Date.between(2.year.ago, Date.today)
  )
  p @usr.id #=>3
end




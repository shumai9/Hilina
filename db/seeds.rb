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
  :user_name => Faker::Movies::StarWars.character
  :email => Faker::Internet.email,
  :password => "password"
)
@asset = Asset.create(
  :user_id => @usr.id
  :asset_name => Faker::Name.first_name
  :asset_type => Faker::Name.first_name
  :amount => Faker::Name.first_name
  :acquired =>Faker::Name.first_name 
  :ceased =>Faker::Name.first_name 
)
@commits = Commitment.create(
  :user_id => @usr.id
  :commitment_name =>Faker::Name.first_name 
  :commitment_type =>Faker::Name.first_name 
  :amount => Faker::Name.first_name
  :acquired => Faker::Name.first_name
  :ceased => Faker::Name.first_name
)

@netwoth = Networth.create(
  :user_id => @usr.id
  :total_amount => 0
  :total_current_value => 0
  :current_networth => 0
)




FactoryBot.define do
  factory :user do
    user_name { Faker::Superhero.name }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    password { Faker::PhoneNumber.phone_number }
  end
end

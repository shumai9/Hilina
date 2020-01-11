FactoryBot.define do
  factory :asset do
    asset_name { Faker::Currency.name  }
    asset_type { ['financial', 'non-financial'].sample }
    amount { Faker::Number.number(digits: 10) }
    acquired { Faker::Date.in_date_period }
    ceased { Faker::Date.in_date_period }
  end
end
FactoryBot.define do
  factory :commitment do
    commitment_name { Faker::Currency.name  }
    commitment_type { ['financial', 'non-financial'].sample }
    amount { Faker::Number.number(digits: 6) }
    acquired { Faker::Date.in_date_period }
    ceased { Faker::Date.in_date_period }
  end
end
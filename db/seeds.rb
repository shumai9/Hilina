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
    :birth_date => Faker::Date.birthday(18, 60),
    :email => Faker::Internet.email,
    :password => "password"
  )

@acc = Account.create( total_assets: 0, total_commitments: 0, networth_state: 0, user_id: @usr.id)



@asst = TotalAsset.create(
        :financial_assets => Faker::Boolean.boolean(0.5), 
        :non_financial_assets => Faker::Boolean.boolean(0.5),
        :cash => Faker::Number.decimal(8, 2),
        :current_account => Faker::Number.decimal(8, 2),
        :savings_account => Faker::Number.decimal(8, 2),
        :business_market_value => Faker::Number.decimal(8, 2),
        :bullion_value => Faker::Number.decimal(8, 2),
        :employer_pension => Faker::Number.decimal(8, 2),
        :securities => Faker::Number.decimal(8, 2),
        :retirement_funds => Faker::Number.decimal(8, 2),
        :life_insurance => Faker::Number.decimal(8, 2),
        :motor_vehicle => Faker::Number.decimal(8, 2),
        :jewelery => Faker::Number.decimal(8, 2),
        :furniture => Faker::Number.decimal(8, 2),
        :real_estate => Faker::Number.decimal(8, 2),
        :office_equipment => Faker::Number.decimal(8, 2),
        :collectible => Faker::Number.decimal(8, 2),
        :fine_art => Faker::Number.decimal(8, 2),
        :clothing => Faker::Number.decimal(8, 2),
        :appliance => Faker::Number.decimal(8, 2),
        :date_acquired => Faker::Date.between(2.year.ago, Date.today),
        :account_id => @acc.id
      )

@comit = TotalCommitment.create(
        outstanding_bill: (Faker::Number.decimal(8, 2)),
        credit_card_charge: (Faker::Number.decimal(8, 2)),
        medical_bill: (Faker::Number.decimal(8, 2)),
        rent: (Faker::Number.decimal(8, 2)),
        repair_bill: (Faker::Number.decimal(8, 2)),
        auto_installment_loan: (Faker::Number.decimal(8, 2)),
        personal_loan: (Faker::Number.decimal(8, 2)),
        peer_to_peer_loan: (Faker::Number.decimal(8, 2)),
        home_mortgage: (Faker::Number.decimal(8, 2)),
        rental_property_loan: (Faker::Number.decimal(8, 2)),
        small_business_loan: (Faker::Number.decimal(8, 2)),
        college_loan: (Faker::Number.decimal(8, 2)),
        date_acquired: (Faker::Date.between(2.year.ago, Date.today)),
        :account_id => @acc.id        
      )


# user = Account(Asset + Commitment)



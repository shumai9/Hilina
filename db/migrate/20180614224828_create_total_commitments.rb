class CreateTotalCommitments < ActiveRecord::Migration[5.2]
  def change
    create_table :total_commitments do |t|
      t.decimal :outstanding_bill, precision: 12, scale: 2
      t.decimal :credit_card_charge, precision: 12, scale: 2
      t.decimal :medical_bill, precision: 12, scale: 2
      t.decimal :rent, precision: 12, scale: 2
      t.decimal :repair_bill, precision: 12, scale: 2
      t.decimal :auto_installment_loan , precision: 12, scale: 2
      t.decimal :personal_loan, precision: 12, scale: 2
      t.decimal :peer_to_peer_loan, precision: 12, scale: 2
      t.decimal :home_mortgage, precision: 12, scale: 2
      t.decimal :rental_property_loan, precision: 12, scale: 2
      t.decimal :small_business_loan, precision: 12, scale: 2
      t.decimal :college_loan, precision: 12, scale: 2
      #to help the app to track it on real time.
      t.datetime :date_acquired, null: false
      t.datetime :date_ceased
      t.integer :account_id, foreign_key: true     

      t.timestamps
    end
  end
end

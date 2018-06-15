class CreateTotalAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :total_assets do |t|
      #catagories
      t.boolean :financial_assets, default: false 
      t.boolean :non_financial_assets, default: false 
      
      #cash assets 
      t.decimal :cash, precision: 12, scale: 2
      t.decimal :current_account, precision: 12, scale: 2
      t.decimal :savings_account, precision: 12, scale: 2
      
      #invested
      t.decimal :business_market_value, precision: 12, scale: 2
      t.decimal :bullion_value, precision: 12, scale: 2 #gold_or_silver
      t.decimal :employer_pension, precision: 12, scale: 2
      t.decimal :securities, precision: 12, scale: 2  #stocks, Bonds)
      t.decimal :retirement_funds, precision: 12, scale: 2
      
      #pre-paid expenses
      t.decimal :life_insurance, precision: 12, scale: 2
      
      # initail values
      t.decimal :motor_vehicle, precision: 12, scale: 2
      t.decimal :jewelery, precision: 12, scale: 2
      t.decimal :furniture, precision: 12, scale: 2
      t.decimal :real_estate, precision: 12, scale: 2
      t.decimal :office_equipment, precision: 12, scale: 2
      t.decimal :collectible, precision: 12, scale: 2
      t.decimal :fine_art, precision: 12, scale: 2
      t.decimal :clothing, precision: 12, scale: 2
      t.decimal :appliance, precision: 12, scale: 2
      # t.belongs_to :user, index: true, foreign_key: true

      #to help the app to track it on real time.
      t.datetime :date_acquired, null: false
      t.datetime :date_ceased
      t.integer :account_id, foreign_key: true
      
      t.timestamps
    end
  end
end

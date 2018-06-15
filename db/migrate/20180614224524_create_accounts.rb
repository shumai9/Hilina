class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.integer :total_assets
      t.integer :total_commitments
      t.integer :networth_state
      t.integer :user_id, foreign_key: true

      t.timestamps
    end
  end
end

class CreateNetworths < ActiveRecord::Migration[5.2]
  def change
    create_table    :networths do |t|
      t.references  :user, foreign_key: true
      t.decimal     :total_amount, precision: 12, scale: 2 
      t.decimal     :total_current_value, precision: 12, scale: 2
      t.decimal     :current_networth, precision: 12, scale: 2
      t.timestamps
    end
  end
end

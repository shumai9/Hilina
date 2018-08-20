class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table    :assets do |t|
      t.references  :user, foreign_key: true
      t.string      :asset_name, null: false
      t.string      :asset_type
      t.decimal     :amount, precision: 12, scale: 2
      t.datetime    :acquired, null: false
      t.datetime    :ceased
      t.timestamps
    end
  end
end

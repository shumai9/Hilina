# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_14_230800) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.integer "total_assets"
    t.integer "total_commitments"
    t.integer "networth_state"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "total_assets", force: :cascade do |t|
    t.boolean "financial_assets", default: false
    t.boolean "non_financial_assets", default: false
    t.decimal "cash", precision: 12, scale: 2
    t.decimal "current_account", precision: 12, scale: 2
    t.decimal "savings_account", precision: 12, scale: 2
    t.decimal "business_market_value", precision: 12, scale: 2
    t.decimal "bullion_value", precision: 12, scale: 2
    t.decimal "employer_pension", precision: 12, scale: 2
    t.decimal "securities", precision: 12, scale: 2
    t.decimal "retirement_funds", precision: 12, scale: 2
    t.decimal "life_insurance", precision: 12, scale: 2
    t.decimal "motor_vehicle", precision: 12, scale: 2
    t.decimal "jewelery", precision: 12, scale: 2
    t.decimal "furniture", precision: 12, scale: 2
    t.decimal "real_estate", precision: 12, scale: 2
    t.decimal "office_equipment", precision: 12, scale: 2
    t.decimal "collectible", precision: 12, scale: 2
    t.decimal "fine_art", precision: 12, scale: 2
    t.decimal "clothing", precision: 12, scale: 2
    t.decimal "appliance", precision: 12, scale: 2
    t.datetime "date_acquired", null: false
    t.datetime "date_ceased"
    t.integer "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "total_commitments", force: :cascade do |t|
    t.decimal "outstanding_bill", precision: 12, scale: 2
    t.decimal "credit_card_charge", precision: 12, scale: 2
    t.decimal "medical_bill", precision: 12, scale: 2
    t.decimal "rent", precision: 12, scale: 2
    t.decimal "repair_bill", precision: 12, scale: 2
    t.decimal "auto_installment_loan", precision: 12, scale: 2
    t.decimal "personal_loan", precision: 12, scale: 2
    t.decimal "peer_to_peer_loan", precision: 12, scale: 2
    t.decimal "home_mortgage", precision: 12, scale: 2
    t.decimal "rental_property_loan", precision: 12, scale: 2
    t.decimal "small_business_loan", precision: 12, scale: 2
    t.decimal "college_loan", precision: 12, scale: 2
    t.datetime "date_acquired", null: false
    t.datetime "date_ceased"
    t.integer "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "birth_date", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

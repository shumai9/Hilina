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

ActiveRecord::Schema.define(version: 2018_08_15_221235) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.bigint "user_id"
    t.string "asset_name", null: false
    t.string "asset_type"
    t.decimal "amount", precision: 12, scale: 2
    t.datetime "acquired", null: false
    t.datetime "ceased"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_assets_on_user_id"
  end

  create_table "commitments", force: :cascade do |t|
    t.bigint "user_id"
    t.string "commitment_name", null: false
    t.string "commitment_type"
    t.decimal "amount", precision: 12, scale: 2
    t.datetime "acquired", null: false
    t.datetime "ceased"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_commitments_on_user_id"
  end

  create_table "networths", force: :cascade do |t|
    t.bigint "user_id"
    t.decimal "total_amount", precision: 12, scale: 2
    t.decimal "total_current_value", precision: 12, scale: 2
    t.decimal "current_networth", precision: 12, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_networths_on_user_id"
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

  add_foreign_key "assets", "users"
  add_foreign_key "commitments", "users"
  add_foreign_key "networths", "users"
end

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
    t.string "user_name", default: ""
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", default: "", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "assets", "users"
  add_foreign_key "commitments", "users"
  add_foreign_key "networths", "users"
end

class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :title, null: false
      t.text :description
      t.string :image
    end 
  end
end

class Addnametotweets < ActiveRecord::Migration[6.1]
  def change
    add_column :tweets, :name, :string
  end
end

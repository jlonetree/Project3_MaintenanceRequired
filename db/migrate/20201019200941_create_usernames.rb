class CreateUsernames < ActiveRecord::Migration[6.0]
  def change
    create_table :usernames do |t|
      t.integer :score

      t.timestamps
    end
  end
end
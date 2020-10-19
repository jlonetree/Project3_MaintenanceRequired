class CreatePaddleGames < ActiveRecord::Migration[6.0]
  def change
    create_table :paddle_games do |t|

      t.timestamps
    end
  end
end

class CreateChats < ActiveRecord::Migration[6.0]
  def change
    create_table :chats do |t|
      t.string :message
      t.string :image
      t.references :user, foreign_key: true
      t.references :group, foreign_key: true
      t.timestamps
    end
  end
end

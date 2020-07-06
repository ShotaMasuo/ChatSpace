class Group < ApplicationRecord
  has_many :user_groups
  has_many :users, through: :user_groups
  has_many :chats
  validates :name, presence: true, uniqueness: true
  def show_last_chat
    if (last_chat = chats.last).present?
      if last_chat.message?
        last_chat.message
      else
        '画像が投稿されています'
      end
    else
      'まだメッセージはありません'
    end
  end
end

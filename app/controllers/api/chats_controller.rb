class Api::ChatsController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    last_chat_id = params[:id]
    @chats = group.chats.includes(:user).where("id > ?", last_chat_id)
  end
end
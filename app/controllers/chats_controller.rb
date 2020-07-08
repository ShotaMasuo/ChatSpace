class ChatsController < ApplicationController
  before_action :set_group

  def index
    @chat = Chat.new
    @chats = @group.chats.includes(:user)
    @members = @group.users
  end
  
  def create
    @chat = @group.chats.new(chat_params)
    if @chat.save
      respond_to do |format|
        format.json
      end
    else
      @chats = @group.chats.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      @members = @group.users
      render :index
    end
  end

  private

  def chat_params
    params.require(:chat).permit(:message, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
json.message @chat.message
json.image @chat.image_url
json.created_at @chat.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.user_name @chat.user.name
json.id @chat.id
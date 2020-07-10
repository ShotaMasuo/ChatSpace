$(function(){
  function buildHTML(chat){
    if ( chat.image ) {
      let html =
      `
      <div class="message-items" data-chat-id="${chat.id}">
      <div class="over-message">
      <div class="over-message__sender">
      ${chat.user_name}
      </div>
      <div class="over-message__datetime">
      ${chat.created_at}
      </div>
      </div>
      <div class="message-items__message">
      <p>
      ${chat.message}
      </p>
      <img class="message-items__image" src="${chat.image}">
      </div>
      </div>
      `
      return html;
    }else{
      let html =
      `
      <div class="message-items"  data-chat-id="${chat.id}">
      <div class="over-message">
      <div class="over-message__sender">
      ${chat.user_name}
      </div>
      <div class="over-message__datetime">
      ${chat.created_at}
      </div>
      </div>
      <div class="message-items__message">
      <p>
      ${chat.message}
      </p>
      </div>
      </div>
      `
      return html
    };
  }

  let reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    let last_chat_id = $('.message-items:last').data("chat-id");
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/chats",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_chat_id}
    })
    .done(function(chats) {
      // 更新するメッセージがなかった場合は.doneの後の処理が動かないようにする
      if (chats.length !== 0) {
        //追加するHTMLの入れ物を作る
        let insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(chats, function(i, chat) {
          insertHTML += buildHTML(chat)
        });
        //メッセージが入ったHTMLに、入れ物ごと追加
        $('.chat-main__message-list').append(insertHTML);
        $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});
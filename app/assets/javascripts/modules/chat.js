$(function(){

  
  function buildChat(chat){
    if ( chat.image ){
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
    }
  }
  $(".bottom-items").on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(chat){
      let html = buildChat(chat);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit-button').prop('disabled', false);
    })
    .fail(function(){
      alert("送信に失敗しました。")
    })
  });

});
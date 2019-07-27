var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {


  },

  renderMessage: function(message) {
      message.username = message.username || 'not available';
      message['text'] = message['text'] || 'not available';
      message.roomname = message.roomname || 'not available';
      var compiled = _.template(
         "<div class='chat'>" +
         "<div class='username'>username: <%= username %></div>" +
         "<div class='text'>text: <%= text %></div>" +
         "<div class='roomname'>roomname: <%= roomname %></div>" +
         "</div>"
        );
       var html = "";
       html += compiled(message);
       (MessagesView.$chats).append(html);
    }
};







        // ` <div class="username">Username: <%= username %> </div>
        //   <div class="room">Room: <%= roomname %> </div>
        //   <div class="text">Message: <%= text %> </div>
        // `
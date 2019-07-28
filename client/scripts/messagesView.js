var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {


  },

  renderMessage: function(message) {
      // var compiled = _.template(
      //    "<div class='chat'>" +
      //    "<div class='username'>username: <%= username %></div>" +
      //    "<div class='text'>text: <%= text %></div>" +
      //    "<div class='roomname'>roomname: <%= roomname %></div>" +
      //    "</div>"
      //   );
      //  var html = "";
      //  html += compiled(message);
      //  (MessagesView.$chats).append(html);
      Messages.item()
      // .filter(Room.isSelected(message))
      .each(function(message) {
        message['username'] = message['username'] || '';
        message['text'] = message['text'] || '';
        message['roomname'] = message['roomname'] || '';
        var $message = MessageView.renderMessage(message);
        MessagesView.$chats.append($message);
      });
    }
};







        // ` <div class="username">Username: <%= username %> </div>
        //   <div class="room">Room: <%= roomname %> </div>
        //   <div class="text">Message: <%= text %> </div>
        // `
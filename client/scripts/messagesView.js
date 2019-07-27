var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  //   $(document).ready(function() {
  //   $('.submit').on('click', function(event) {
  //     //alert('clicked');
  //      $(MessagesView.$userMessage).prependTo(MessagesView.$chats); // Work on this later
  //   });
  // })
},

  render: function() {
    $(document).ready(function() {

      Parse.readAll(function(data) {
        for (i = 0; i < data.results.length; i++) {
          var obj = data.results[i];
          var compiled = _.template(
            ` <div class="username">Username: <%= obj.username %> </div>
              <div class="room">Room: <%= obj.roomname %> <div>
              <div class="text">Message: <%= obj.text %> </div>
              <div class="timestamp">Posted at: <%= obj.createdAt %> </div>
            `
          );
          $(compiled).prependTo($('#chats'));
        }
      });
    });
  
  }

};
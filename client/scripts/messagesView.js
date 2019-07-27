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

  renderMessage: function() {
    $(document).ready(function() {

      Parse.readAll(function(data) {
        var compiled = _.template(
         "<div class='username'>Username: <%= username %> </div>" +
         "<div class='room'>Room: <%= roomname %> </div>" +
         "<div class='text'>Message: <%= text %> </div>"
          );
         var i, html = "";
         for (i = 0; i < data.results.length; i++) {
            html += compiled(data.results[i]);
         }  
         $("#chats").append(html);

      });
    });
  
  }

};







        ` <div class="username">Username: <%= username %> </div>
          <div class="room">Room: <%= roomname %> </div>
          <div class="text">Message: <%= text %> </div>
        `
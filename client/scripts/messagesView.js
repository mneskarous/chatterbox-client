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

  renderMessage: function(message) {
    console.log(message);
    $(document).ready(function() {
      
      // Parse.readAll(function(data) {
        var compiled = _.template(
         "<div class='username'>username: <%= username %></div>" +
         "<div class='text'>text: <%= text %></div>" +
         "<div class='roomname'>roomname: <%= roomname %></div>" 
          );
         var i, html = "";
         // for (i = 0; i < data.results.length; i++) {
            html += compiled(message);
          console.log(html);
         // }  
         MessagesView.$chats.append(message);

      // });
    });
  
    }

};







        // ` <div class="username">Username: <%= username %> </div>
        //   <div class="room">Room: <%= roomname %> </div>
        //   <div class="text">Message: <%= text %> </div>
        // `
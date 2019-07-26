var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $(document).ready(function() {
    var userMessage = $('#message').val();
    $('.submit').on('click', function(event) {
      //alert('clicked');
       $('#chats').css('font-size', '100px');
    });
  })
},

  render: function() {
  }

};
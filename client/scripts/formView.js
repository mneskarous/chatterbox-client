var FormView = {

  $form: $('form'),
  // $userMessage: $('#message').val(),
  $chats: $('#chats'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var userMessage = $('#message').val();
    var messageObj = {
      username: window.location.search.substr(10),
      text: userMessage,
      roomname: RoomsView.$select.val()
    };
    var compiled = _.template(
      "<div class='chat'>" +
      "<div class='username'>username: <%= username %></div>" +
      "<div class='text'>text: <%= text %></div>" +
      "<div class='roomname'>roomname: <%= roomname %></div>" +
      "</div>"
    );
     var html = "";
     html += compiled(messageObj);
     (MessagesView.$chats).append(html);
    
    
      console.log('click!');
    
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
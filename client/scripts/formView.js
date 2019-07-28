var FormView = {

  $form: $('form'),
  // $userMessage: $('#message').val(),
  // $chats: $('#chats'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: 'lobby'
    };

    Parse.create(message, function() {
      Messages.add(message, MessagesView.renderMessage);
    });


      console.log('click!');

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
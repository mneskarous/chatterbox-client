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
    var userMessage =  $('#message').val();
    var textBox = $('<div></div>');
    $(userMessage).prependTo(textBox);
    (textBox).prependTo(FormView.$chats);
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
var Messages = {

  _data: {},

  items: function() {
    return _.chain(Messages._data);
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.objectId] = message;
    callback();
  },

  update: function(messages, callback = ()=>{}) {
    for (var message of messages) {
      Messages._data[message.objectId] = Messages._conform(message);
    }
    callback();
  },

  _conform: function(message) {
    message.username = message.username || '';
    message.text = message.text || '';
    message.roomname = message.roomname || '';
    return message;
  }

};
var Messages = {

  _data: {},

  items: function() {
    return _.chain(Messages._data)
  }

  add: function(message, callback) {
    Messages._data[message.objectId] = message;
    callback();
  },

  update: function(messages, callback) {
    messages.forEach(function(message) {
      Messages._data[message.objectId] = message;
    });
    callback();
  }

};
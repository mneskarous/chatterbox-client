var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomname) {
    var roomObj = {
      roomname: roomname
    };
    var compiled = _.template(
      "<option><%= roomname %></option>"
    )
    var html = "";
    html += compiled(roomObj);
    (RoomsView.$select).append(html);
  }

};

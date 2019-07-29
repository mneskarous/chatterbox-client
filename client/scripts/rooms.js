var Rooms = {

  _data: new Set,

  selected: '',

  isSelected: function(roomname) {
    return true;
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'lobby';
  },

  update: function(messages) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));
  }


};
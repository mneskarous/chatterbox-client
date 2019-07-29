var MessageView = {

  renderMessage: _.template(`
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>">
          <%- username %>
        </div>
        <div class="text"><%- text %></div>
        <div class="roomname"><%- roomname %></div>
      </div>
    `)

};


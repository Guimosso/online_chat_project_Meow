const socket = new WebSocket('ws://your-websocket-server'); // Replace with your WebSocket server address

socket.addEventListener('message', function(event) {
  const messagesContainer = document.getElementById('messages-container');
  const newMessage = document.createElement('div');
  newMessage.textContent = event.data;
  messagesContainer.appendChild(newMessage);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  if (message !== '') {
    socket.send(message);
    messageInput.value = '';
  }
}

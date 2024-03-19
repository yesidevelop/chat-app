document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");
  
    sendBtn.addEventListener("click", function() {
      const messageText = messageInput.value.trim();
      if (messageText !== "") {
        appendMessage(messageText, true);
        messageInput.value = "";
      }
    });
  
    function appendMessage(message, isUser) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      if (isUser) {
        messageElement.classList.add("user-message");
      } else {
        messageElement.classList.add("other-message");
      }
      messageElement.textContent = message;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
  
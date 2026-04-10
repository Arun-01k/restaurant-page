// ========================
// FIXED CHATBOT - Correct Model Name
// ========================

const GEMINI_API_KEY = "AIzaSyBvdfuZgoCF7oOfLW1VzSL8G3ilw420VHI";   // Your key is already here

const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

let conversationHistory = [];

const cafeInfo = `You are a friendly and helpful assistant for Le Café Français, a cozy French café. 
Be warm, polite, and keep answers short (2-3 sentences maximum).`;

chatToggle.addEventListener('click', () => chatWindow.classList.toggle('hidden'));
closeChat.addEventListener('click', () => chatWindow.classList.add('hidden'));

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = "";

  const typing = addTypingIndicator();

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBvdfuZgoCF7oOfLW1VzSL8G3ilw420VHI`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${cafeInfo}\n\nUser: ${message}`
            }]
          }]
        })
      }
    );

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't understand that.";

    typing.remove();
    addMessage(botReply, 'bot');

  } catch (error) {
    typing.remove();
    console.error("Error:", error);
    addMessage("Sorry, I'm having trouble connecting right now. Please try again.", 'bot');
  }
}

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = sender === 'user' ? 'user-message' : 'bot-message';
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
  const div = document.createElement('div');
  div.className = 'bot-message';
  div.textContent = 'Typing...';
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

// Event Listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

// Welcome message
let firstTime = true;
chatToggle.addEventListener('click', () => {
  if (firstTime && !chatWindow.classList.contains('hidden')) {
    setTimeout(() => {
      addMessage("Hello! 👋 Welcome to Le Café Français. How can I help you today?", 'bot');
    }, 600);
    firstTime = false;
  }
});
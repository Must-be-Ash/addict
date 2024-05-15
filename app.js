// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Live stream setup (assuming you're using a video streaming service)
const videoElement = document.getElementById('live-stream');
videoElement.src = 'YOUR_LIVE_STREAM_URL_HERE'; // Replace with your live stream URL

// Emoji functionality
const emojiInput = document.getElementById('emoji-input');
const sendEmojiButton = document.getElementById('send-emoji');
const emojiDisplay = document.getElementById('emoji-display');

sendEmojiButton.addEventListener('click', () => {
  const emoji = emojiInput.value.trim();
  if (emoji) {
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    emojiElement.textContent = emoji;
    emojiDisplay.appendChild(emojiElement);
    emojiInput.value = '';
  }
});

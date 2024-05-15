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
videoElement.src = 'https://www.youtube.com/embed/xw2z5Yb_W40?si=MwETjPqtWnIhLvV4'; // Replace with your live stream URL

// Emoji functionality
const emojiButtons = document.querySelectorAll('.emoji-button');
const emojiDisplay = document.getElementById('emoji-display');

emojiButtons.forEach(button => {
  button.addEventListener('click', () => {
    const emoji = button.textContent;
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    emojiElement.textContent = emoji;
    emojiDisplay.appendChild(emojiElement);
    
    // Remove the emoji element after animation
    setTimeout(() => {
      emojiElement.remove();
    }, 3000);
  });
});

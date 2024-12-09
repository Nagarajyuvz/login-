document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to demonstrate sound
    const successAudio = new Audio('success-sound.mp3');
    successAudio.play()
      .then(() => {
        console.log('Sound played successfully!');
      })
      .catch((error) => {
        console.error('Error playing sound:', error);
      });
    setTimeout(() => this.submit(), 1000); // Redirect after 1 second
  });
  
new fullpage('#fullPage', {
    autoScrolling: true, // Enable auto-scrolling
    navigation: true, // Show side navigation
    anchors: ['section1', 'section2', 'section3'], // Section anchor names
    navigationTooltips: ['Primera Sección', 'Segunda Sección', 'Tercera Sección'], // Tooltip names
    showActiveTooltip: true, // Highlight active section
    scrollingSpeed: 2000, // Set scroll speed
    controlArrows: false, // Disable slide control arrows
    slidesNavigation: true, // Enable bottom slide navigation
  });

  const video = document.getElementById('playable-video');
  const playPauseButton = document.getElementById('play-pause');
  const muteUnmuteButton = document.getElementById('mute-unmute');
  const fullscreenButton = document.getElementById('fullscreen');
  
  // Play/Pause
  playPauseButton.addEventListener('click', () => {
      if (video.paused) {
          video.play();
          playPauseButton.textContent = '⏸'; // Change to pause icon
      } else {
          video.pause();
          playPauseButton.textContent = '▶️'; // Change to play icon
      }
  });
  
  // Mute/Unmute
  muteUnmuteButton.addEventListener('click', () => {
      video.muted = !video.muted;
      muteUnmuteButton.textContent = video.muted ? '🔇' : '🔊';
  });
  
  // Fullscreen
  fullscreenButton.addEventListener('click', () => {
      if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
      }
  });
  

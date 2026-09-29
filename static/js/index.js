'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.publication-links a[href=""]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });

  const video = document.getElementById('mmhri-video');
  const playButton = document.querySelector('.video-play');
  const watchLink = document.getElementById('watch-video');
  const message = document.getElementById('video-message');
  if (!video || !playButton || !watchLink || !message) return;

  const playVideo = async () => {
    message.hidden = true;
    try {
      await video.play();
    } catch (error) {
      playButton.hidden = false;
      message.textContent = 'Playback could not start. Please use the video controls or open the video directly.';
      message.hidden = false;
    }
  };

  playButton.hidden = false;
  playButton.addEventListener('click', playVideo);
  watchLink.addEventListener('click', () => {
    // Keep native anchor navigation while starting playback within the user gesture.
    playVideo();
  });
  video.addEventListener('play', () => {
    playButton.hidden = true;
    message.hidden = true;
  });
  video.addEventListener('ended', () => { playButton.hidden = false; });
  video.addEventListener('error', () => {
    playButton.hidden = true;
    message.replaceChildren('The video could not be loaded. ');
    const link = document.createElement('a');
    link.href = './mmhri.mp4';
    link.textContent = 'Open or download mmhri.mp4';
    message.append(link);
    message.hidden = false;
  });
});

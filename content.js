chrome.runtime.onMessage.addListener((message) => {
  if (message.type !== "scan-videos") {
    return;
  }

  const videos = [...document.querySelectorAll("video")].map((video) => ({
    src: video.currentSrc || video.src,
    poster: video.poster
  }));

  chrome.runtime.sendMessage({ type: "videos-found", videos });
});
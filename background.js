chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "video-pro-finder",
    title: "Find videos on this page",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "video-pro-finder" && tab?.id) {
    chrome.tabs.sendMessage(tab.id, { type: "scan-videos" });
  }
});
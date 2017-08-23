function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  
  chrome.storage.local.get({
    baseUrl: 'https://cdict.net/q/'
  }, function(items) {
    navigate(items.baseUrl + text);
  });
});
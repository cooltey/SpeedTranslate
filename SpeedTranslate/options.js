// save options
function save_options() {
  var customUrl = document.getElementById("customUrl").value;

  var url = document.querySelector('input:checked').value;
  if (url === 'on') {
    url = customUrl;
  }

  chrome.storage.local.set({
    baseUrl: url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.innerHTML = '<strong> Options Saved </strong>';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

function restore_options() {
  chrome.storage.local.get({
    baseUrl: 'https://cdict.net/q/'
  }, function(items) {
    if (items.baseUrl === 'https://cdict.net/q/') {
      document.getElementById("cdict").checked = true;
    } else if (items.baseUrl === 'https://translate.google.com/#en/zh-TW/') {
      document.getElementById("google").checked = true;
    } else {
      document.getElementById("customCheck").checked = true;
      document.getElementById("customUrl").value = items.baseUrl;
    }
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
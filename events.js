var clearCache = function() {
	chrome.browsingData.removeCache({}, function() {
		alert('cache removed');
	});
};

chrome.commands.onCommand.addListener(clearCache);

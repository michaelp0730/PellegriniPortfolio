'use strict'

// onload function
function onLoad(f) {
    if (onLoad.loaded)                  // If document is already loaded
        window.setTimeout(f, 0);        // Queue f to be run as soon as possible
    else if (window.addEventListener)   // Standard event registration method
        window.addEventListener("load", f, false);
    else if (window.attachEvent)        // IE8 and earlier use this instead
        window.attachEvent("onload", f);
}
// Start by setting a flag that indicates that the document is not loaded yet.
onLoad.loaded = false;
// And register a function to set the flag when the document does load.
onLoad(function() { onLoad.loaded = true; });

// preload images
onLoad (function preloadImages() {
	if (document.images) {
		for (var i = 0; i < preloadImages.arguments.length; i++) {
			(new Image()).src = preloadImages.arguments[i];
		}
	}
});
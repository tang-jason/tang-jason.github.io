---
layout: post
title: "JavaScript execCommand"
date: 2017-02-02
lang: en-us
---

#### {{ page.title }}

Using the `document.execCommand('copy')` to copy the targetted string to clipboard.

### `Example`

```javascript
// constructing clipboard
var copyToClipboard = function(text) {
    // whether or not the specified editor command is supported by the browser
    var isCopySupported = document.queryCommandSupported("copy");

    // if "copy" command is supported. Copy the text to clipboard
    if (isCopySupported) {
        // first we need to create a textarea element and assign the text to it
        var copyTextArea = document.createElement("textarea");
        copyTextArea.value = text;
        document.body.appendChild(copyTextArea);
        copyTextArea.select();

        // try...catch
        try {
            // check to see if execCommand("copy") is supported
            var successful = document.execCommand("copy");

            if (successful) {
                // code here...
            }
            else {
                // code here...
            }
        }
        catch (error) {
            // fallback if browser doesn't support .execCommand("copy")
            // code here...
        }
    }
}

// listening to click event
$(".copyText").on("click", function() {
    copyToClipboard("Text to copy");
});
```


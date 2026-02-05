---
date: '2026-02-05T23:19:17+08:00'
draft: false
title: A bug
---

In the last update I talked about how I figured out how
to send the text the user selected to the side panel. It's
been a while since then and I learned a little more about
the runtime that Chrome exposes to extensions.

There are better ways to send data to the side panel:
1. [Send a message using `chrome.runtime.sendMessage`][1]
2. [Using session storage][2]

I thought these were far superior than the hack I
concocted. And so I set about trying to send the text the
user selected using session storage.

I was met with a curious error message:

```console
Error: `sidePanel.open()` may only be called in response to a user gesture.
```

This didn't make sense to me. Here's what I was doing:

```javascript
await chrome.storage.session.set({
        newNoteParams: {
                textSelection: info.selectionText,
                url,
        }
})

await chrome.sidePanel.setOptions({
        path: 'sidepanels/new-note/index.html',
})

chrome.sidePanel.open({
        tabId: tab.id,
})
```

I was definitely calling `sidePanel.open()` and I was
definitely calling it in response to a user gesture. So
what gives?

Turns out there's a bug in Chrome. Apparently [Chrome
expects the `sidePanel.open()` call to happend within 1ms
of the user doing something][3].

I can stick with my hack but I don't like it. I'll
probably spend too much time thinking about how to send
data to my side panel.

[1]: https://developer.chrome.com/docs/extensions/reference/api/runtime#example-content-msg
[2]: https://developer.chrome.com/docs/extensions/reference/api/storage#session
[3]: https://issues.chromium.org/issues/40929586

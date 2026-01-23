---
title: "Building Take Note"
date: 2026-01-24T00:35:33+08:00
draft: true
---

One of the challenges was figuring out how to pass the
selected text in the tab to the side panel.

First thing I tried is using the `chrome.runtime.sendMessage()`
method but that didn't work.

Then I decided to wing it and try sending the entire text
selection as a query string. I noticed that the path to
the side panel window looks like a URL so that gave me this
idea. And it worked!

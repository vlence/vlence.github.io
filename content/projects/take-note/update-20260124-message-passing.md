---
title: Passing Messa- I Mean Notes
date: 2026-01-24T00:35:33+08:00
draft: false
---

When the user highlights some text, right clicks on it,
and selects the "Take Note" context menu, a side panel
opens with the highlighted text and a form for the user
to type their note.

One of the challenges was figuring out how to pass the
selected text in the tab to the side panel.

First thing I tried is using the `chrome.runtime.sendMessage()`
method but that didn't work.

Then I decided to wing it and try sending the entire text
selection as a query string. I noticed that the path to
the side panel window looks like a URL so that gave me this
idea. And it worked!

![Screenshot of Take Note](images/screenshot-20260124.png)

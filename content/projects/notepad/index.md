---
date: '2026-03-08T23:54:31+08:00'
draft: false
title: 'Notepad'
summary: 'How hard can it be?'
params:
    externalLinks:
    - text: Github
      url: https://www.github.com/vlence/notepad/
    - text: Try it Out
      url: https://vlence.github.io/notepad/
---

Inspired by Microsoft's Notepad, this is my humble attempt at building a
text editor.

It doesn't have Microsoft's bells and whistles, including [an AI co-pilot][ai]
or the ability to [render clickable links][rce], but it is honest work.

I mean, how hard can it be?

## Features

- [x] Open and view file contents
- [x] Change encoding used to parse file contents
- [x] Edit and save file contents
- [x] No AI
- [x] Does not try to follow links automatically
- [x] Font resize
- [ ] ~~Undo button~~
- [ ] ~~Redo button~~
- [ ] Install as PWA

## Known Issues

- Cannot handle files larger than 500KB; try at your own risk
- File upload input field causes Chrome on Android to crash

[ai]: https://www.theregister.com/2025/05/23/microsoft_ai_notepad/
[rce]: https://www.zerodayinitiative.com/blog/2026/2/19/cve-2026-20841-arbitrary-code-execution-in-the-windows-notepad


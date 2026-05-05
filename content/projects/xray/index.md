---
date: '2026-01-25T23:27:50+08:00'
draft: false
title: 'Xray'
Summary: Inspect the binary contents of files.
params:
    externalLinks:
    - text: Github
      url: https://www.github.com/vlence/xray/
    - text: Try it out
      url: https://vlence.github.io/xray/
---

Xray is a simple tool to view the binary contents of
files.

I just wanna look at what's inside files and scratch that
itch to write some code to unwind it.

## Goals

- Intuitive
- Simple to use
- Decode binary contents/structure into human readable form

## Supported MIME Types

`text/*` files are rendered using the plain text renderer
if there is no dedicated renderer. Same for `image/*` and
`video/*` files.

- [x] application/octet-stream
- [x] text/plain
- [ ] application/vnd.apple.mpegurl / application/x-mpegurl (HLS) (Partial support)
- [ ] application/dash+xml (DASH) (Partial support)
- [ ] image/jpeg (Partial support)
- [ ] MP4 and QuickTime (In progress)

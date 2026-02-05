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

Another goal of Xray is to make it simple to understand
the contents of the files. For example when you input a
video file it should be able to list all the video and
audio tracks, along with other metadata.

## Goals

- Intuitive
- Simple to use
- Decode binary contents/structure into human form

## Supported MIME Types

`text/*` files are rendered using the plain text renderer
if there is no dedicated renderer. Same for `image/*` and
`video/*` files.

- [x] application/octet-stream
- [x] text/plain
- [ ] application/vnd.apple.mpegurl / application/x-mpegurl (HLS) (Partial support)
- [ ] application/dash+xml (DASH) (Partial support)
- [ ] image/jpeg (Partial support)

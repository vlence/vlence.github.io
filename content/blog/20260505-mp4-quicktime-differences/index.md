---
date: '2026-05-05T09:02:45+08:00'
draft: false
title: 'Differences Between MP4 & QuickTime'
summary: 'And here I was thinking they would be exactly the same'
---

I've been working on [Xray][xray] and I recently found out that the MP4 spec
is not exactly the same as the QuickTime spec. Well duh, why would you
have a different spec if they're exactly the same, right? For whatever
reason I expected them to only differ in atoms not already defined
by the QuickTime spec but what do you know, there are several boxes in
the MP4 spec that are different to the atoms in the QuickTime spec!

Just in case you're confused, "atoms" and "boxes" mean the same thing.
The QuickTime spec calls them atoms and the MP4 spec calls them boxes.

This blog post will be updated whenever I find any differences.

## meta

This is the first box that I found to be different. While working on Xray
I was testing the QuickTime renderer on .mp4 and .mov files and noticed
that the .mov file wasn't being read correctly. It was obvious that
either too many or too few bytes were being read somewhere. After a few
hours of thinking and a few minutes of refactoring the parser now could
tell me where the misread was happening. And lo and behold, it was the
`meta` atom.

[The QuickTime spec][qt_meta] defines the `meta` atom as a regular atom but
[the MP4 spec][mp4_meta] defines the `meta` box as a full box. The difference is
just 4 bytes; the `version` and `flags` fields.

## mvhd

The movie header box is also slightly different. [MP4 uses 64 bits][mp4_mvhd]
instead of 32 for the `creation time`, `modification time` and `duration`
fields ONLY if `version` is 1.

## keys

[The `keys` atom][qt_keys] is a full atom but [the `keys` box][mp4_keys]
is a regular box with no `version` and `flags` fields.

[xray]: /projects/xray
[qt_meta]: https://developer.apple.com/documentation/quicktime-file-format/metadata_atom
[qt_keys]: https://developer.apple.com/documentation/quicktime-file-format/metadata_item_keys_atom
[mp4_meta]: https://mpeggroup.github.io/FileFormatConformance/?query=%3D%22meta%22
[mp4_mvhd]: https://mpeggroup.github.io/FileFormatConformance/?query=%3D%22mvhd%22
[mp4_keys]: https://mpeggroup.github.io/FileFormatConformance/?query=%3D%22keys%22

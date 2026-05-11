---
date: '2026-05-11T16:02:47+08:00'
draft: false
title: 'JPEG & PNG Parsers'
---

Got bored with the QuickTime/MP4 parser so I decided to switch gears and
start writing parsers for JPEG and PNG images. [The PNG spec][png_spec]
was pretty easy to find but [the JPEG spec][jpeg_spec] wasn't. Anyway I
found them both and started reading them.

JPEG is composed of segments and PNGs have chunks. In principle they're
both very similar; a type, the size, and the data. Actually it's not very
different than the atoms/boxes of MP4 and QuickTime. I guess a good idea
can be pervasive; header followed by data. Well it makes sense to order
data that way. By reading the header first the parser doesn't need to
parse the entire file before it can do something with it.

The JPEG parser is broken currently, I think. My PNG parser surprisingly
worked in the first go. Anyway much of the JPEG segments and PNG chunks
aren't being fully parsed and their metadata extracted so there's still
much work to be done.

All in all it's been fun.

[jpeg_spec]: https://www.w3.org/Graphics/JPEG/itu-t81.pdf
[png_spec]: https://www.w3.org/TR/png-3/

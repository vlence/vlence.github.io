---
date: '2025-07-12T18:49:40+08:00'
draft: false
title: 'Initial Thoughts'
---

The VOPR is very cool. What I think it does is provide
interfaces to time, I/O, etc. as a dependency and expects
applications to be written that way.

Traditionally you simply expect interfaces to these as
part of the standard library and not really as something
that can be swapped out. By treating them as dependencies
the simulator that essentially.

If applications treat these as dependencies then it's
straightforward to swap them out with simulated ones and
thereby run a deterministic simulator. The catch here is
that the app needs to be written from the ground up to be
simulated using these interfaces. This means apps may need
to be re-written.

With my project one of my goals is I want to limit or
completely get around this wherever possible.

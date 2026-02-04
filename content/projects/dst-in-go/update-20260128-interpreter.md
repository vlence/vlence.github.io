---
date: '2026-01-28T23:13:50+08:00'
draft: false
title: Maybe I'm going about it wrong
---

I just had a thought today, more like a train of thought.

One of the goals, a very important one, of this project is
to limit or not require the user to change their codebase
to use the simulator.

I need to simulate time, I/O, scheduling, etc. and to
solve each one I've had to introduce some kind of
interface that ultimately requires the user to change
their codebase. This obviously doesn't line up with my
goals here.

Then I had the thought: why not just write an interpreter
for Go? This way I still have control over scheduling,
time, etc and the user won't need to change their
codebase.

I've never written an interpreter before. I have written
parsers though so I'm hoping that experience will help
here. Maybe I should think some more? I don't know.

Go's standard library already has packages for parsing
Go programs so maybe I should start there.

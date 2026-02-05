---
title: "Deterministic Simulation Testing in Go"
date: 2026-01-23T14:17:58+08:00
draft: false
summary: Inspired by the VOPR in TigerBeetle.
params:
    github: vlence/simtest-go
    externalLinks:
    - text: Github
      url: https://www.github.com/vlence/simtest-go
---

I came across the idea of deterministic simulation testing
when I watched [the conversation between the TigerBeetle
CEO and ThePrimeagen](https://www.youtube.com/watch?v=sC1B3d9C_sI). During the conversation he mentioned
that they built a tool called the VOPR, which would
deterministically inject faults into their application
and test it.

The goal of DST is to uncover novel bugs before they occur
in production. This is achieved by first removing all
sources of randomness in our application. Some sources of
randomness include time, I/O devices, and OS thread
scheduling. When sources of randomness is removed we can
be sure that the application code is executed in the exact
same manner, and in the exact same order, every single
time.

The reason why we want the app to run deterministically
is so that we can trace the exact code path the app took
to encounter a bug. This is powerful because more often
than not we find bugs in production that we simply cannot
reproduce.

The simulation aspect of DST is mainly focused on
simulating the kind of faults we find in the real world:
dropped packets, duplicated packets, high latencies,
something completely unexpected like bit rot, etc. By
simulating these faults we can observe how our app behaves
before it happens in the real world.

## Goals

- Fast
- Require minimal/no changes in source code

## Features & Progress

- [x] Simulated clock
    - [x] Get current time
    - [x] Register callback that is called after at least
    the given amount of time has passed
    - [x] Register callback that is called at regular
    intervals
    - [x] Sleep
    - [x] Cancel timers
- [ ] Simulated I/O
    - [ ] Filesystem
    - [ ] Network
- [ ] Simulated faults
- [ ] Simulated nodes
    - [ ] Scheduler
    - [ ] Network interface
- [ ] Simulator. Tie it all together.

---
date: '2025-10-24T21:23:49+08:00'
draft: false
title: 'Scheduler'
github: vlence/update-20251024-scheduler
---

It has become clear to me that I need to implement a
scheduler as well. We cannot predict in what order
goroutines will execute and how the instructions will
interleave. This is a source of non-determinism and it
needs to be eliminated.

To illustrate assume two goroutines G1 and G2. Both G1 and
G2 contain just two instructions.

```console
Goroutine   Instruction

G1          I1
G1          I2

G2          I1
G2          I2
```

Just in this very simple case there are SIX different
ways these two goroutines could interleave.

```console
    1           2           3

G1, I1  |   G1, I1  |   G1, I1
G1, I2  |   G2, I1  |   G2, I1
G2, I1  |   G1, I2  |   G2, I2
G2, I2  |   G2, I2  |   G1, I2


    4           5           6

G2, I1  |   G2, I1  |   G2, I1
G2, I2  |   G1, I1  |   G1, I1
G1, I1  |   G2, I2  |   G1, I2
G1, I2  |   G1, I2  |   G2, I2
```

If you've ever built concurrent applications you know how
this can end.

I've spent some time and started implementing a basic
scheduler. The scheduler has a concept of jobs. It keeps
two lists, one for the jobs it is currently running and
another for jobs that need to be run in the future. The
queued jobs are executed once the current list of jobs is
completed.

Jobs can be blocked for a number of reasons: I/O, sleep,
etc. The scheduler expects these events to be communicated
with it through channels. It runs jobs in a separate
goroutine and listens for these events. If it hears
nothing and the job completes then we assume the job is
completed. Otherwise the job is marked as blocked and
queued.

I realise this is too simplistic and probably will bite me
in the back.

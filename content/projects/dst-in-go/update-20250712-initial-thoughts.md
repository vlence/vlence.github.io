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
that can be swapped out.

```go
import "time"

func MyFunc() {
    time.Now()
}
```

If instead we treated them instead as dependencies then
a simulator can swap out the implementation.

```go
func MyFunc(clock Clock) {
    clock.Now()
}
```

If we can introduce interfaces for time, I/O, etc. then
we can simulate their behaviour and more importantly
inject some faults.

```go
func FileReader(io IO) {
    io.Read(file) // simulator can inject a fault here
}
```

The first thing that sticks out to me is that I may
need to refactor my code so that the simulator can
do its thing. I'd like to avoid that entirely if
possible.

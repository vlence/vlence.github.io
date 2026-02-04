---
date: '2025-08-22T18:26:49+08:00'
draft: false
title: 'Clocks'
---

I wanted to tackle time simulation first as I began
working on this project. I felt this would be the most
difficult part of the project and also the most
interesting.

Currently we simply import the `time` package and use its
public functions.

```go
import "time"

func main() {
    time.Now()
}
```

What I tried to do with my clock interface is to keep
it very similar to the `time` package's interface. This
way, I believe, users of this project won't need to change
their codebase too much to benefit from a clock that can
be simulated.

```go
// A Clock returns the current time and can create timers
// and tickers. An pplication should use the same clock
// throughout its execution.
type Clock interface {
        Now() time.Time
        NewTimer(d time.Duration) (Timer, <-chan time.Time)
        NewTicker(d time.Duration) (Ticker, <-chan time.Time)
        Sleep(d time.Duration)
}

// A Timer represents an event in the future. This
// interface is kept deliberately similar to the design
// of time.Timer.
type Timer interface {
        Reset(d time.Duration) bool

        Stop() bool
}
```

The way the clock works is simple: it spawns a goroutine
that creates and updates timers, sleeps, and ticks i.e.
moves the clock time forward. This goroutine waits to
receive from specific channels forever.

This design has the nice property that creating timers and
sleeping has the same interface as the `time` package and
even blocks the current goroutine while sleeping.

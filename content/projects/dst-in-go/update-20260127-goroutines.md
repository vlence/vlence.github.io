---
date: '2026-01-27T22:50:53+08:00'
draft: false
title: 'What About Channels?'
---

It's been a hot minute. The project has been sitting on
ice, largely because I've been busy with my day job.

Over the last few months I went back and forth on the
scheduler. At one point I even thought I don't actually
need a scheduler and scrapped whatever I implemented.

No, the scheduler is definitely needed. I definitely need
some way to guarantee Goroutines will execute in some
definite order.

There are several difficulties that I've been trying to
wrestle with in my mind with regard to the scheduler. For
any two Goroutines it doesn't really matter in what order
they run if they don't affect each other i.e. no shared
state. This holds true only for the simplest of programs.

In the general case multiple Goroutines will most likely
affect each other. I was going down a spiral when I was
considering how I'm supposed to order reads and writes
if two Goroutines were reading from and writing to the
same file. I came to the conclusion that it's not my
problem: that's such a strange scenario and the user is
actually supposed to use locks to synchronise such a
setup, assuming they want the operations to be ordered.

That's when I remembered Go has channels. And channels are
used to synchronise Goroutines. If the jobs submitted to
my scheduler sends to channels and/or waits to receive
from channels then the sheduler will be blocked; there is
no way for the scheduler to get this information.

Ouch.

One way out of this hole is to introduce a custom
`Channel` type.

```go
type Channel interface {
    Send(val any)
    Recv() (val any, ok bool)
    TrySend(any) bool
    TryRecv() (val any, closed bool, ok bool)
}
```

We can in theory wrap channels using this interface. The
downside however is that we will lose out on some nice
language features: `<-`, `->`, and `select`.

I don't like this.

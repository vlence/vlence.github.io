---
title: "Man Pages"
date: 2026-01-26T21:02:12+08:00
draft: false
summary: |
    A simple introduction and guide to getting the most
    out of the man pages installed in your system.
slug: man-pages
---

The [man pages project](https://man7.org/mtk/index.html)
has become foundational to the experience of \*nix
systems. If you don't know what it is open up a terminal
and type:

```console
    man man
```

You are greeted with a wall of well-formatted text.
Reading a few lines makes it clear that this is
documentation. This is the documenation of the `man`
program itself.

The `man` program finds and renders the requested manual,
also known as man pages.

## Navigation

If you're not used to using the terminal and programs
built for terminals then it may be a little daunting.
Maybe you tried to scroll using your mousewheel and
nothing happened. The man pages are expected to be
navigated using the keyboard.

The first thing you will learn to do is exit. Press `q`.

You should be back at your terminal now, ready to execute
another command. If you ever get stuck or lost, press `q`
and start over again.

Let's open `man`'s man pages again.

```console
    man man
```

Now that we are armed with the knowledge of `q` we can
continue on to more complex things. The mousewheel is
useless here and we need to use the keyboard to scroll the
text. Press `j`. Did you notice that? We scrolled down. By
one line to be precise.

Now press `k`. We scrolled up by one line.

Scrolling one line at a time is great but what's better is
scrolling by half a page. Press `d`. You just scrolled
down by half a page. Now try `u`. You scrolled up by half
a page. We're getting somewhere.

## What Am I Looking At?

Man pages is a collection of documentation. Typically it
consists of documentation of the programs that is
pre-installed in your system. Installing new packages may
add to your collection of man pages.

## Man Pages Sections

You may be curious to know what documentation *exactly* is
available to you. The first thing you should understand
is that man pages are grouped into sections. In my system
there are 9 sections.

1. General commands
2. System calls
3. C library functions
4. Kernal interfaces
5. File formats
6. Games
7. Miscellaneous info
8. System manager's manual
9. Kernel developer's manual

This information isn't hidden. I got the list above by
reading the man pages of `man`. The ordering of the
sections is important; we will come back to this later.

To list all the man pages available we can run:

```console
    man -k .
```

This runs `man` in apropos mode and only searches for
documenation name and description.

You might notice that the terminal again requires you to
use your keyboard to navigate. Our good friends `j`, `k`,
`d`, `u`, and `q` behave the same way here.

The utility of `man -k` is the ability to filter man pages
based on their name and description. For example if I
want to find all man pages whose names and/or descriptions
contain the word "open" I would do:

```console
    man -k open
```

Earlier we tried `man -k .`. The `.` matches with every
name and description so all man pages are returned.

Instead of typing `man -k` I can type `apropos`:

```console
    apropos open
```

And I will get the same result.

## Different Docs, Same Name

There is a system call called `open`. There is also a
program with the same name. When I run `man open` whose
man pages do I read? Try it out.

At the very top of the man pages you will see it says
"General Commands Manual". This is a hint that we opened
the man pages for `open` in the General commands section.

Recall the list of sections from earlier. General commands
is 1. System calls is 2. And so on. What happened when we
ran `man open` is that `man` opened the first occurence
of man pages for "open", which happened to be in the
General commands section.

How does `man` decide which sections to look into? Reading
`man`'s documentation you will see that it accepts an `-S`
flag. This flag controls which manual sections `man` will
search our documentation in and in what order.

If I know I want to read the docs of the system call
`open` then I can tell man to look only within the system
calls section:

```console
    man 2 open
```

To read the documentation of `open` under General commands
I could've typed:

```console
    man 1 open
```

In case you're wondering, we can limit the output of
`apropos` to a specific section as well. The following
will list all documentation available for system calls:

```console
    apropos -s 2 .
```

You must've noticed that when we ran `man 1 open` the
documentation refered to `open` as "open(1)". This
notation is used throughout man pages. The number in the
parenthesis is the man pages section.

Knowing which section a certain term might belong to helps
narrow down the search for the appropriate documentation.

## I Still Feel Lost

Most man pages sections have an "intro" entry. Try it:

```console
    man 1 intro
```

This entry explains the purpose of that section and
provides a friendly explanation of how to read the
documentation and where to look at next.

If you don't know where to start read the "intro" entry.

## Advanced Navigation

At this stage you are well equipped to browse through the
man pages on your own. I will leave you with some tricks
to navigate the docs faster.

Press `g` to jump to the top of the documentation.

Use `G` (`Shift+g`) to jump to the bottom of the
documentation

Use `<line-number>G` to jump to a specific line. For
example to jump to line 100 type `100` then press `G`
(`Shift+g`).

Use `/<search-term>` to search for terms within the
currently open documentation. For example to search for
the word file press `/`, type "file", and press ENTER.
Press `n` to go to next occurrence of the word and `N`
to go to the previous occurrence.

---
date: '2026-04-25T13:23:24+08:00'
draft: true
title: 'Befriend Your Shell'
summary: Do yourself a favour and learn to use the shell
---

The shell to most people seems mysterious, archaic, and scary even.
This includes programmers as well, and other people who are expected
to have a deep familiarity with computers, one of the tools of their
trade. If you want to get more out of your computer, learn to use the
shell. You'll learn that your computer can do so much more but you simply
never knew.

When you want to learn something it's good to start with its history.

## A Short History

Back in the 60s and 70s computers were just beginning to be affordable
enough for companies to buy them and use them. CPU time was cheap and
memory was expensive. These computers were massive and expensive making
it infeasible to buy one for each employee. Employees would need to find
some way to share the computer and do their jobs.

One way to share a computer would be to decide ahead of time who gets to
use it, when, and for how long. Or you could let the computer do that job
for you; just let everyone connect and the computer could be programmed
to figure out how long each user gets. Computers back then were fast
enough, so they could switch between users very quickly; to the users it
seemed like the computer was reacting to their input in real time.
This is called time sharing.

Each employee would be given a terminal. Terminals were basically just
a screen and keyboard that were connected to the computer. Users typed
in their commands using their keyboard and they would see the characters
they typed in the terminal. If they made any mistakes they would correct
them and once ready they'll press RETURN on the keyboard to execute the
command.

{{<figure
    src="https://1.bp.blogspot.com/-wYHGzSUmniE/XciPF14XG_I/AAAAAAAASkg/uIyBr4AwmNEO2BsFRyM-9MtIWnewzB4-wCLcBGAsYHQ/s1600/Bell_Labs_1960s%2B%252824%2529.jpg"
    alt="A photograph of some Bell Labs employees using terminals"
    link="https://rarehistoricalphotos.com/inside-bell-labs-datacenter-1960s/"
    caption="Some Bell Labs employees using terminals; Photo credit: rarehistoricalphotos.com"
>}}

Today people use the terms "shell" and "terminal" interchangably, but
they're very different things. The terminal waits for the user's input,
sends it to the shell, and prints the shell's output. The shell is what
actually processes the user's input and does something with it, like
running a command.

Terminals are dumb, in the sense that it doesn't execute the user's input;
it sends EVERY key pressed by the user to the shell, one at a time, the
moment it's pressed. When you press the "A" key the terminal sent that
key's code to the shell, the shell processed it and recognised it's the
"A" character, and then sends it back to the terminal for it to print.
In other words you see "A" when you press "A" because the terminal sends
that key press to the shell and the shell tells it to print "A".

## The Shell

Many shell programs exist today. Macs come preinstalled with zsh, Ubuntu
with bash, etc. In practice all of them work based on the same principles
so most of the commands and techniques from one shell port over to the
other. Of course, you should refer to YOUR shell's documentation when in
doubt.

In most \*nix based systems you can find your shell by running

```console
echo $SHELL
```

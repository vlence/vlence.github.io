---
title: "Brief History of The Web"
date: 2023-10-12T15:51:37+05:30
---

We've all used computers and are very grateful for them. They're fast
and do exactly what they're told (programmed) to do. A single computer today
is able to browse the internet, play music and video games, write
documents, all at the same time. It wasn't always so.

When computers were first made they were designed to do only one thing.
If you built a computer that could add two numbers, we call this a program, it could only ever
add two numbers. These computers were massive and often took up entire
rooms of space. They were very expensive too. Over time clever people
figured out how to make a computer do more than just one thing until
we finally had general purpose computers. General purpose computers like
the computers you have at home and your phone are able to run different
programs.

## Networking.

Once computers became general purpose they also became more useful. Now
anyone, not just computer scientists, could use computers. An interesting
fact about this time in history is that computers usually came with a
manual that taught you how to program it. So if you bought a computer
back then you also learned computer programming. This meant if you needed
to do something, like edit a picture, and there wasn't a program already
for it you could write it yourself. Interesting right?

Computers back then weren't very fast compared to today's computers but
they were still fast enough to be useful. Then somebody came up with an
idea - what if we could connect computers together and have them communicate?
If computers can communicate then you could program them to share their
workload and get things done faster! The U.S. Department of Defence thought this was
a great idea and experimented a great deal to make this a reality. Soon
enough we had ARPANET. ARPANET is the internet's grandfather of sorts.

## How does it work?

The internet is really just many computers connected either directly
or indirectly to each other. Your computer at home is connected to your
router at home. Your router is connected to
a server at your ISP's data center. Your
ISP has many servers and all its users, like yourself, are connected to
one of these servers when you connect to the internet. Your ISP is
probably connected to a bigger ISP and/or its competitors. The bigger ISP is probably
connected to an even bigger ISP and/or its competitors and so on. And
just like that all computers connected to the internet are connected
either directly or indirectly to each other. Google.com is just a computer
program running on one of Google's servers somewhere. When you visit
google.com you're really just finding your way through all these different
computers until you get to it.

Thinking about how computers connect and talk to each other at the scale
of the internet is pretty difficult so let's simplify the problem. Let's
think about how just two computers connect and talk to each other.
As you know already, computers understand only 1s and 0s. This means
that we need to somehow get two computers to talk to each other using
1s and 0s. Let's assume that when you connect two computers together,
could be via a cable or something like WiFi, they are immediately able
to exchange 1s and 0s. Great. But this is not very useful.

## Protocols.  

When you speak with someone you would feel quite offended if the other
person spoke over you. In fact if two people speak at the same time it's
difficult to comprehend what's actually being said. To avoid such
confusion we need some rules. We call these rules protocols. The rules
can be simple like:

- When someone is speaking to you wait for them to finish.
- When you speak make sure not to speak for too long and give the other person a chance to respond.
- Once you're both finished shake hands, smile and wish each other a good day.

Computers need protocols too to communicate with each other. The first
protocol that we need is called, aptly, the Internet Protocol or IP. IP
gives computers names. We call these names IP addresses. Imagine trying to
speak with someone who doesn't have a name. It would be difficult! IP
addresses are, you guessed it, 1s and 0s! They're not just any 1s and 0s
however; there is some structure to them. IP addresses are written
as four numbers separated by dots, like <b>12.34.56.78</b>. We call each of
these numbers octets, because each number uses eight bits. And because
each number uses eight bits each number can only be in the range 0-255.
What this means is IP addresses range from <b>0.0.0.0</b> to <b>255.255.255.255</b>.
If someone gives you an IP address and one of the numbers in the IP
address is not between 0-255 they've made a mistake.

<p class="mt-10 bg-slate-300 dark:bg-slate-600 rounded-lg p-4">
    <i>
        What we discussed above is techincally called IPv4. There is another
        version of IP called IPv6. That is a topic for another time.
    </i>
</p>

With IP addresses we can now name computers. This allows us to find them.
When you connect to the internet one of the first things that happen is
your ISP assigns your computer an IP address. This gives your computer a name
so that other computers can talk with your computer. Since other computers
in the network will also have such a name we can begin to communicate with
them. However just like how conversations are incoherent if there are no
rules for speech similarly it is difficult to make sense of all the 1s
and 0s exchanged between computers if there are no rules in place. We
need another protocol.

## TCP.

When we speak with another person how do we know they've heard and
understood what we said? Humans are graced with eyes, a brain, ears, all
of which can be used to make sense of the world around us. Usually when
someone has heard and understood what we said they acknowledge it by
nodding their head, saying "Ok", following up with a question or asking
you to explain what you mean in case they didn't understand. Computers
however don't have eyes, ears and a brain like us to know if the another
computer has received and understood the 1s and 0s sent to them.

Earlier we have assumed that two computers can be connected and share 1s
and 0s with each other. Computers can also have names called IP addresses.
We saw that IP addresses have a structure to them. What if, just hear me
out, the 1s and 0s that we share with computers also had some kind of
structure?

Have you ever written a letter? I have. Usually you start the
letter by writing the name of the recipient and their address, followed
by what you want to say to this person and ending with your own name and
address. That seems like a good structure. We could do something similar.
We can begin our letter of 1s and 0s with the IP address of the recipient,
our own IP address and the size of what we want to say, in bytes.

"Why do we need to mention the number of bytes in our letter?" you ask.
Excellent question. Computers are stupid. If we don't mention the size
of the letter the other computer which receives the letter will not know
when the letter stops. When we say "the letter is ten bytes long" the other
computer now knows that the letter ends after ten bytes. All the other 1s
and 0s it sees now after those ten bytes will be treated as a new letter.
Great, we have successfully sent a letter from one computer to another.
Now, when letter writing was all the rage, people immediately became aware of
an existential dread - how do we know the letter reached and that the other
person has read it? Over time people unanimously agreed that they should
respond to the letter with another letter letting the sender know that
they've received their letter and read it. There were some rude ones out
there who left the letters on read however.

Computers don't feel such existential dread. Actually they don't feel
anything. But I think you would agree that it would be good to know if
the other computer received the message and understood it. Imagine your
computer connected to a printer, which is also a computer of sorts, and
you have no way of knowing if your printer actually understood you want
it to print when you click the "Print" button. Computer scientists, much
like letter writing aficionados, agreed that computers should respond
with an acknowledgement once they've received a message.

The protocol so far can be summarised as follows:
- Send recipient IP address
- Send your own IP address
- Send size of message in bytes
- Send message
- Wait for acknowledgement

The protocol to listen for messages is similar:
- Wait for recipient address
- Wait for senders address
- Wait for size n of message
- Read n bytes as message
- Send acknowledgement

If we can agree that a computer should wait for messages when not
sending messages then we have successfully built a simple communication
protocol for computers. In the real world however this wouldn't work
because it's usually more than two computers connected to the network.
If one computer is sending a very large message it could be that other
computers have to wait a long time to send their message; networks have
limited bandwidth. We are nice people and we don't want to keep other
people waiting so we will make a small change to our protocol. The small
change is to break our message into small pieces and send these small
pieces one by one. Like this even if we send a large message we don't
unnecessarily block someone else's message.

We call these small pieces packets and give each of them a number in order.
First packet gets number 1, next packet gets number 2, and so on. Each
packet will have the recipient IP address, our IP address, the packet's
number, a small part of the message and the size of that small part of
the message. We give each packet a number because it is possible for
packets to get lost and never reach the recipient. If a packet, or two,
is lost the recipient can respond back saying, "Hey I never received
packet x. Please resend it." And then you resend it, instead of leaving
it on read.

This was a very unacademic explanation of the Transmission Control
Protocol or TCP. TCP and IP are more or less the foundation of the
modern day internet and are usually refered to together as TCP/IP.

## The World Wide Web.

With TCP and IP we have the means to address computers and speak with them
in a coherent way. Computers at this time were still largely used by the
academic and scientific community. One such organization is the CERN. Some
time in the 1980s Tim Berners-Lee, who worked at CERN, thought to himself,
"Wouldn't it be nice if we could all share our documents and collaborate
faster?" Even though we had TCP/IP it didn't mean any two computers
connected together could just begin sharing information. Yes TCP/IP gave us
the means to share 1s and 0s, which is information, but these 1s and 0s
mean something specific. It could be a document, a picture, a video, etc.
The recipient must be able to understand these 1s and 0s as a document,
a picture or a video.

Data wasn't very complicated back then. It was mostly text. If you could
make some text bold or italic it immediately added a lot of visual flair to
your otherwise bland documents. And so Tim went about thinking of ways to
share his text documents. Different computers in CERN stored their documents
in different ways. One approach could be to force everyone to use the same
type of computer and documents but that wouldn't be very friendly; nobody
likes a dictator. The second approach was to have a new type of document
which is simple enough to be supported in different computers. This seemed
more viable.

We've all gone to school right? One of the joys of school, at least for me,
was plastering my textbooks with highlights. I liked to highlight text that
I thought was important and would refer to them later. I would use green to
highlight definitions, red to highlight important sections, yellow to
highlight references, blue to ... you get the point. What if we could do
the same with text stored in a computer. What if I could mark a bit of text
as bold and the computer would render that text as bold on the screen?

This turned out to be a powerful idea: Write some text and then markup the
text. Unlike our textbooks we can't highlight digital text using markers.
Instead we need to find a way to markup the text using the text itself.
We call such text HyperText and we write HyperText using HyperText
Markup Language (<abbr>HTML</abbr>). You've been reading HyperText all this
while in fact. This entire website is just HyperText! Consider the following
lines of text:

```html
    This is paragraph 1.
    This is paragraph 2.
```

How does the computer know that they're two paragraphs? Well it doesn't.
Computers are stupid. We need to tell them that they're two paragraphs.
Here is how we can tell the computer this in HTML:

```html
    <p>This is paragraph 1.</p>
    <p>This is paragraph 2.</p>
```

See the funny looking things like `<p>`? These are called
tags. We'll learn more about them later. So now with HTML we have a way to
markup our text and tell the computer what is a paragraph, what is a table,
what is bold text, what is italic text, etc. But does a computer know what
HTML is? No. Computers are stupid. We need to program it to understand HTML.
The great thing about HTML is that it is simple for humans to read and
understand and simple enough to build a program for. You've been using such
a program so far. Web browsers do just that - they get HTML documents from
the internet and render them onto your screen. If you right click this
page and select "View page source" or something of that effect you'll be
presented with a wall of colored text. What you see is largely HTML. Your
web browser reads all of that and turns it into the page you're reading
right now.

Great. So we have HTML and a neat computer program called the web browser
that can read the HTML document and present it in a nice, visual way to you,
the user. But where does this HTML document come from? Well it obviously needs
to come from another computer but how? For this we use something called the
HyperText Transfer Protocol, or <abbr>HTTP</abbr>. HTTP is a simple, text
based protocol. That means we use ordinary text, in English, to transfer
data between computers. This makes it very easy for us humans to understand
what's going on.

Why can't we just use TCP/IP to share HTML documents? Well we are. HTTP is
built on top of TCP/IP. What I mean by that is that the HTTP requests and
responses are sent across computers using TCP/IP. We need another protocol
on top of TCP/IP because we need a way to figure out exactly what is being
shared between computers. TCP/IP allows us to share data between computers
over a network but it doesn't tell the receiving computer what exactly is
being shared. If both computers use HTTP then the receiving computer now
has a way to know what's being shared with it.

<p class="mt-10 bg-slate-300 dark:bg-slate-600 rounded-lg p-4">
    <i>We call HTTP a layer 7 protocol and TCP a layer 4 protocol.</i>
</p>

From all of this we can understand that the computer that shares the HTML
document must know HTTP and the computer that receives the HTML document
must also know HTTP. Again, computers are stupid; they won't magically know
what HTTP is. So we build computer programs to make computers understand HTTP.
HTTP is very simple: one computer makes an HTTP request to an HTTP server,
and the HTTP server responds back with an HTTP response. We generally call
the computer sending the HTTP requests clients and the computer responding
with the HTTP responses the web server. Your web browser is an HTTP client
and whenever you visit a website it's actually making and sending HTTP
requests.

So this is what Tim Berners-Lee did. He designed HTML, built a web server
and an HTTP client. Now him and his colleagues could happily share documents
with each other and experience new levels of productivity. This was such a
great invention that other academics were interested in it. Soon enough
colleges were trying out and using this technology in their campuses, large
organizations were, it spread like wild fire. Most people were building
their own web servers and clients back then. This technology also proved to
be simple enough for the average computer user to use and so it very quickly
reached people's homes. People were soon using the web browsers like
Netscape Navigator and accessing the World Wide Web <abbr>(WWW)</abbr>.

Many enterprising individuals saw the potential of this technology and quickly
moved to establish internet-based companies. By the mid 1990s we had the
beginnings of giants like Yahoo, Google and Amazon.

## What's next?

Well what's next is start learning about these technologies! Yes we've
covered a lot on this page but I promise we will go through them one-by-one
in a simple way. We will [start with HTML](../02-html/).

---  
layout: hunter_post  
title: what's the internet??   
permalink: /class4/  
categories: [networking]
tags: [network infrastructure, security, decentralisation]
readings: Ethan Zuckerman, [*The Cute Cat Theory of Digital Activism*](http://www.ethanzuckerman.com/blog/2008/03/08/the-cute-cat-theory-talk-at-etech/)<br> Paul Ford, [*i had a couple of drinks and woke up with 1000 nerds*](https://medium.com/message/tilde-club-i-had-a-couple-drinks-and-woke-up-with-1-000-nerds-a8904f0a2ebf)
description: So i sent you a http request... but where did it go?? welcome to the weird and wonderful world of the internet protocol. in this class we'll unpeel some layers of abstraction that keep the internet looking like it's working great all the time (it's actually a big big mess), learn about media archaeology and network forensics.
assignment: Using some of the tools and techniques we've discussed in class, discover something about your own local internet system.
assignment-due: 03/01
---  

> "While many have debated the origins of the Internet, it’s clear that in many ways it was built to withstand nuclear attack. The Net was designed as a solution to the vulnerability of the military’s centralized system of command and control during the late 1950’s and beyond. For, the argument goes, if there are no central command centers, then there can be no central targets and overall damage is reduced." Alex Galloway, *Protocol*, 2001

> The myth persists that the Net was built to withstand the blast of an atomic bomb. But that was the military-run Arpanet of the 1970s, not the corporate-run Internet of today. “What’s basically wrong is we are centralized,” explains Dr. Peter Salus, Internet historian and author of Casting the Net. “We have violated the constraints that the Department of Defense had in 1967.” [*Wired* in 1997](https://www.wired.com/1997/08/50-ways-to-crash-the-net/)

{{page.description}}

### reading discussion
How do you imagine the internet?  
Do you think governments should be able to intercept phone communications?  
How might the internet be different if it wasn't developed by the military?

### lecture: the internet is just other peoples' computers  


**some ideas**  
  [a series of tubes](https://www.youtube.com/watch?v=f99PcP0aFNE)  
  [whatever *this* is](https://d2w9rnfcy7mm78.cloudfront.net/4354078/large_8e4b5e5b62f7005f6167d810a719a21c.png?1559062215?bc=1)  
  [what shape is the internet?](https://noahveltman.com/internet-shape/)
  [an incredibly 90s animation of how the internet works](https://www.youtube.com/watch?v=x9XWxD6cJuY)


**precursors**  
We talked already about the origins of HTTP at CERN, with Tim Berners-Lee. However, precursors for the internet as we know it go back a long way before that. HTTP sits on top of a vast set of infrastructure that allowed messages to be sent in the first place, derived from the military protocol [ARPANET](https://www.darpa.mil/about-us/timeline/modern-internet) [network map](https://upload.wikimedia.org/wikipedia/commons/b/bf/Arpanet_logical_map%2C_march_1977.png)<br>

<img src="/assets/SRI-van.gif" alt="van" width="500px"/>

The SRI [Packet Radio Van](http://ed-thelen.org/comp-hist/CORE-3-1-SRI-TCP-IP.html), was involved in the first TCP/IP transmission (1977). This was used to test a connection between wireless packet radio, and the wired ARPANET network -> an *interconnection* between dissimilar networks.

>It was the clear differences between the wire-based ARPANET and the radio-based packet radio (and eventually satellite networks) that led Kahn, then heading the networking efforts at ARPA, and Cerf at Stanford University, to design the first end-to-end protocol that would span dissimilar packet networks. 

Ironically, the highest-bandwidth data transfer for most instances *remains* driving a truck full of hard drives from place to place. <br>

**Internet Protocol suite**  
The stucture of the internet is wildly complex, and operates on a number of different levels. For example, the correct functioning of an undersea cable, a router, and a HTTP request might all be critical to a website working as expected, but it's clear that *how* each of these are meant to work (and work together) occupy very different areas of concern.

These 'areas' are typically formalised into a layered diagram or 'stack', where each sucessive layer works with an abstraction of the layer that preceded it. Each layer solves a different 'problem', and relies on the other layers working correctly. This gives an overview of what each different part of the 'stack' is meant to be doing, and how it relates to the one beneath it.

The layers are structured so that the representation of data in each is standardised. This means that what's underneath could be replaced by something totally different, and the stuff on top would keep working the same. This is what allows us to switch so easily between working on WiFi vs a LAN vs a cellular network, for example: all of these are different kinds of *link layer*, but to the stuff on top (the URLs we speak to, the HTTP requests we make) everything still looks the same.

What's cool is this also works for people: at every layer, the stuff below just looks like a black box: you put an email in, you get an email out -> send a packet in, get a packet out. It's the same for the stuff above, too: the wires you send an image down don't know any more about the image than you do about being a big piece of copper in the ground: all the business of making sure information arrives in one piece is dealt with further up.

What is a protocol? In it's simplest sense, a protocol is simply a formalised way of doing things: a set of rules, arrangements and agreements that define a set of expected behaviours. It is protocols . The thing about protocols is that they're simultaneously very dull, and wildly interesting, as they define a huge amount of how we communicate with one another. Thing is, most of what makes the internet work is not wires or computers or 5G or high-tech, but *bureacracy*. Internet people like proposing joke protocols in very formal language, like this one for [controlling coffee pots](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol), or [doing IP traffic with pidgeons](https://en.wikipedia.org/wiki/IP_over_Avian_Carriers). ("IPoAC has been successfully implemented, but for only nine packets of data, with a packet loss ratio of 55% (due to operator error),and a response time ranging from 3,000 seconds (≈54 minutes) to over 6,000 seconds (≈1.77 hours).")

There's actually a lot of different protocol suites, all with slightly different perspectives on how everything connects together. The other major one are the OSI protocols ('open systems interconnect') which also describe how things like images and ASCII get rendered on the screen. The 'internet protocols' are actually a fairly small subset of how all computers can be connected together. 

{: reversed="reversed"}  

4. *application layer*  
This layer sends and receives data for particular applications. The HTTP requests you made this week took place on the application layer. This is the layer where you browse websites (HTTP), send emails (SMTP), and where website domain names are resolved to IP addresses (DNS). Networked processes take place via *ports* -- we'll talk about these in depth next week (servers!), but they're a way of sorting out which application data should go to. When your computer is connected to the internet, it's listening for email traffic (SMTP) on one 'port' (port 25), and HTTP traffic on another (port 80).  

3. *transport layer*  
The transport layer is responsible for taking in data at one end of the network, and ensuring it gets to the other side in one piece. It defines *host-to-host* (rather than *node-to-node* communications) TCP stands for 'transmission control protocol', and UDP stands for Universal Datagram Protocol. TCP dates back to the 1970's. TCP ensures that packets of data are delivered without error, and in the right order. This can be really important! When you send an image, for example, it's normally far too big to get sent across a network all at once. Instead, you need to break it down into small chunks (packets) and send the chunks one by one. How do we make sure they all arrive in the right order? TCP sets up an end-to-end connection between the communicating computers, also checking for errors and missing packets, and re-requesting them if they don't arrive. 
<!-- For some other kinds of connections (particularly ones that don't need to be very reliable), some computers use UDP, which is much much faster. UDP takes a scattergun approach: the packets just get sent out into the ether, and hopefully turn up at the other end in roughly the right order. Because it doesn't require a stable connection, UDP can also *broadcast* data, sending a message to all devices on a network. -->

2. *internet layer*  
This is the layer that routes different packets across networks. The transport layer above defines the start and end-point of communication, but the packets sent from one computer to another might need to make many 'hops' in order to get to their destination. Importantly, the Internet Protocol does *not* provide reliable transmission of packets. The job of TCP is to make this all *seem* reliable, by compensating for packets that were dropped, or arrived in the wrong order. This is why TCP/IP is often said to be the backbone of the network.
<!-- 
The internet layer 
routes things across network boundaries.
    TCP   -->
  
1. *link layer*  
The link layer is the physical and logical connection between nodes in a network. For example, protocols for how data gets sent via WiFi or Ethernet exist on this layer. This layer is all about how we get from one *node* to another: here a node could be a computer, or a router, a phone or a cell tower. These protocols don't care where the data goes afterward, and are instead concerned with how to get it to the next 'step' specified in the packet header that got written by the internet layer.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/IP_stack_connections.svg/700px-IP_stack_connections.svg.png" width="400">

At each successive layer of the stack, some more information gets added to the data you're already sending. Why is this? As we go down the stack, we're getting closer and closer to communicating our message by sending some ones and zeroes down a wire. When we get there, we'll need a lot of other pieces of information: like, where the ones and zeroes are headed? Who are they for? Which wire should they be sent down? What is their return address? How can I check these are the *right* ones and zeroes?

Instructions get *more detailed* as we go down. TCP doesn't care about the next node the packet is going to, just what comes out the other end. 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/UDP_encapsulation.svg/700px-UDP_encapsulation.svg.png" width="400">

  
**physical layer**  
The 'physical layer' isn't explicitly part of the Internet Protocol suite (though it *does* get described by OSI), but it's worth talking about here, and featured some in your readings too. This is the layer of cables, lasers and radio waves, where data gets transmitted as ones and zeroes, rather than packets, frames or requests. Every single communication on the internet passes through this layer, as does everything you do with your computer.  
    [the laying of the cable](https://www.loc.gov/pictures/resource/pga.00117/)  

The physical layer can be very fragile! [Like when a Georgian woman accidentally cut off the internet for Armenia](https://www.theguardian.com/world/2011/apr/06/georgian-woman-cuts-web-access), or how sharks remain a huge threat to global connectivity. <br>


**internet and environment**  
As you read in Everest Pipkin's piece about data centers, the internet uses a huge amount of energy to run the way it does. A couple of projects that engage this in an interesting way are:  
  [DEFOOOOOOOOOOOOOOOOOOOOOREST](http://www.janavirgin.com/CO2/DEFOOOOOOOOOOOOOOOOOOOOOREST.html)  
  [low tech magazine](https://solar.lowtechmagazine.com/2018/09/how-to-build-a-lowtech-website/)  

One of the biggest controversies in contemporary computer manufacturing (alongisde the use of exploitative labour in factories producing these products) is the *minerals* used to produce them. These are linked to long histories of extractive colonialism, such as the Victorian extraction of [gutta percha](https://qz.com/785119/the-forgotten-tropical-tree-sap-that-set-off-a-victorian-tech-boom-and-gave-us-global-telecommunications/). 
Contemporary examples of this are 'conflict minerals' such as [tantalum](https://en.wikipedia.org/wiki/Tantalum) and [coltan](https://en.wikipedia.org/wiki/Coltan_mining_and_ethics), which are extracted under terrible conditions in the DRC, and have been fuelling local conflicts there for decades. The production of [lithium](https://en.wikipedia.org/wiki/Lithium#Production) (for Lithium-ion) batteries has also been the subject of recent controversy, as the surge in battery production (esp with the growth of electric car companies like Tesla) is using up worldwide Lithium stocks very rapidly.

**wireless networking**  
Wireless networking is one of the weirder ends of physical layer communications, as it relies on a very finite resource: the electromagnetic spectrum. The [FCC spectrum](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/United_States_Frequency_Allocations_Chart_2016_-_The_Radio_Spectrum.pdf/page1-6300px-United_States_Frequency_Allocations_Chart_2016_-_The_Radio_Spectrum.pdf.jpg) defines, but this kind of deliniation of, well, physics can cause some really weird stuff to happen, like the problem with 5G where it [interferes with measurements reliant on the resonant frequency of water molecules](https://www.buzzfeednews.com/article/danvergano/5g-is-going-to-screw-up-weather-forecasts-meteorologists?bftwnews&utm_term=4ldqpgc#4ldqpgc)  

>"You can’t just tell water molecules to change the channel, or use another frequency." Jordan Gerth, University of Winsconsin-Madison 

There's also a bunch of weird projects people have done around detecting wireless networks:  
  [wardriving](https://en.wikipedia.org/wiki/Wardriving) [warchalking](https://en.wikipedia.org/wiki/Warchalking)  
  [flagellum machinam](http://fii.to/pages/flagellation-machine.html) [video](https://www.youtube.com/watch?v=WqAG1WsZHtY&feature=emb_title)  

**mapping it out**  
The internet is, well, really hard to map (it's just big). The last time someone *actually managed* to map all of the internet was in the 1990s -- since then it's got really really hard:  
  [map](http://map.jodi.org)  
  [critical atlas of the internet](http://internet-atlas.net)  
  [submarine cable map](https://www.submarinecablemap.com) [timelapse](https://qz.com/657898/this-map-shows-the-explosive-growth-of-underwater-cables-the-power-the-global-internet/)  
  [traceroute](https://www.mediacollege.com/internet/troubleshooter/traceroute.html) [weird routes](https://dyn.com/blog/internetwide-nearcatastrophela/) [singapore->bangalore](https://cms.qz.com/wp-content/uploads/2016/07/pingmap1v7.jpg?quality=75&strip=all&w=1240&h=690&crop=1)  

**packet sniffing**  
Packet sniffing is a fun way to see things that are happening on your network, but it's one to be careful with too! In general, these tools are used mostly by network administrators debugging issues with their network, though they can be used to do some sneaky stuff too...  
  [wireshark](https://www.wireshark.org)  
  [nmap](https://www.howtogeek.com/423709/how-to-see-all-devices-on-your-network-with-nmap-on-linux/)  

**hacking**
  [printers](http://hacking-printers.net/wiki/index.php/Main_Page) [PRET](https://github.com/RUB-NDS/PRET)  

**spoofing**  
  [nsa surveillance](https://www.aclu.org/issues/national-security/privacy-and-surveillance/nsa-surveillance) [Edward Snowden](https://en.wikipedia.org/wiki/Edward_Snowden)  
  *julian oliver*  
    [stealth cell tower](https://julianoliver.com/output/stealth-cell-tower.html) [PRISM](https://julianoliver.com/output/the-beacon-frame.html) [transmediale debacle](https://hyperallergic.com/109546/transmediale-festival-shuts-down-nsa-imitators/)  
  [data pools](https://ahprojects.com/datapools/) [skylift](https://ahprojects.com/skylift/)

**we talk about *the internet*, but there are many internets**<br>
  [borders](https://qz.com/735314/the-murky-world-of-international-law-is-threatening-to-break-up-the-internet/) [choke points](https://qz.com/780675/how-do-internet-censorship-and-surveillance-actually-work/) ['enemies of the internet'](https://en.m.wikipedia.org/wiki/Internet_censorship_and_surveillance_by_country)  
  [chinternet](https://en.m.wikipedia.org/wiki/Internet_censorship_in_China) [the 'great firewall'](https://en.m.wikipedia.org/wiki/File:Topology_of_the_Chinese_firewall.svg) [blind spot](https://anthology.rhizome.org/blind-spot) [bullet time](https://logicmag.io/china/bullet-time/)  
  [the Egyptian "killswitch"](https://en.wikipedia.org/wiki/Internet_in_Egypt#2011_Internet_shutdown)<br>
  [runet](https://www.bbc.com/news/technology-50902496)  
  [uk 'default filtering'](https://en.m.wikipedia.org/wiki/Internet_censorship_in_the_United_Kingdom)  
  tor  [autonomy cube](https://paglen.com/?l=work&s=cube)  

**local internet**  
  [NYC Mesh](https://www.nycmesh.net)  
  [piratebox](https://piratebox.cc)  
  [internet connectivity by motorcycle](https://web.archive.org/web/20031217120037fw_/http://www.daknet.net/demo.htm)  

### in class exercise  
Sending packets. We'll emulate an internet network together over physical space, decomposing an image into packets and routing it over a network. 

Rules:
* all the packets are transmitted *face-down* with header information on the top and the data on the bottom.
* without TCP, packets must be transmitted in the order they came in
* routers are trying to do the job as fast as possible, and don't care about the order of the data.
* unlabelled packets get 'dropped' by the network if you try and pass them. packet loss can only be resolved by TCP, or by reloading the page. 

Exercises:

1. ping:
send a packet across the network. If the receiving computer is on and awake, send back a packet with '200', also across the network.

2. changing network topology, now a choice of routers:
re-arrange the network so that there's a choice of routers, and try the ping task again. 

3. images without TCP:  
Computer 1 makes a request for an image from computer 2, perhaps it wants to see this picture of a frog. First of all, a GET request has to be made. After that, the image must be returned. However! The image doesn't all come in one piece

4. image with TCP:  
Now we're allowed to use TCP to control the packet transmission. The TCP clients sit on the ports of the computer, and when a request comes through they set up an agreement with each other about how the data should be ordered. The TCP client adds information to the packet headers, to allow the TCP on the other end to decode it, and re-arrange the pieces in order.

rules for routers:  
your limit is bandwidth — how many packets you can pick up in each hand (your limit is 2). you have no idea what order they’re meant to be in, and you don’t care — all you care about is where they’re meant to go. you have to write the 'address' of each packet in the header. You're trying to pass the packet to whichever router will be able to handle the information fastest. 

you need to change the headers in each packet to decide where it should be going next. this isn’t the end address, but the intermediate step: instructions for the next router.

rules for tcp:  
you’re trying to make sure the packets are in the right order every time. Initially this involves setting up communication, and labelling the packets to make sure they appear in the right order.

rules for computers:  
you send and receive the data through your HTTP port. It’s up to you to initiate protocols, and you can choose to 'reload' a page if you don't get what you expect.

### assignment  
*due {{page.assignment-due}}*<br>
{{page.assignment}}
do your own media archaeology/forensics  
use the tools we have (or find some other ones)  
You don't need to write any code for this week's homework (though you can if you like!). This is a great opportunity to try a technology you're curious about, or go on an adventure. Documentation is really important this week, and should be the bulk of what you produce!
  
Precaution: some of the tools we've looked at today are powerful, and some uses of them are of shady legality. Don't (for example) try and hack into someone else's computer unless you have their permission. 

examples:
* when connecting to the wifi in different places, record how many other devices are also connected to the networks.
* look at where your packets are routed at different times of day
* go on a journey to your local data center (if you tell them it's for a class in advance, they might let you in!)
* have a look through Networks of New York and go hunting for similar features in your neighbourhood
* join the NYC Mesh! (if you're currently paying for wifi this will also save you $$)

You're also welcome to spend the week diving deeper into one of the things we've discussed in class, or in the readings. Be sure to write thorough notes!

Before next week (if you haven't already), please install NodeJS and the Node Package Manager (npm).

**Ideas+Resources:**  
  Neal Stephenson [*Mother Earth Mother Board*](https://www.wired.com/1996/12/ffglass/)  
  Randall Monroe [*Google's Data Centers on Punch Cards*](https://what-if.xkcd.com/63/)  
  Ingrid Burrington [*Networks of New York*](http://s3.amazonaws.com/arena-attachments/1388507/bbdfbb27e1ff2233f62ade8393077549.pdf?1509584728)  
  [NYC Internet Master Plan](https://tech.cityofnewyork.us/wp-content/uploads/2020/01/NYC_IMP_1.7.20_FINAL-2.pdf)  
  [Museum of Wifi](http://museumofwifi.com)  
  Trevor Paglen [*Eagle Eye Photo Contest*](https://www.photocompete.com/test511/2015/04/23/eagle-eye-photo-contest/)  
  [NYC Mesh](https://www.nycmesh.net)  
  [networks.land](http://networks.land/reference/physical/)

## reading
{{page.readings}}

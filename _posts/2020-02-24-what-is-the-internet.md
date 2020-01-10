---  
layout: post  
title: what's the internet??   
permalink: /class4/  
categories: [networking]
tags: [network infrastructure, security, decentralisation]
readings: Ethan Zuckerman, [*The Cute Cat Theory of Digital Activism*](http://www.ethanzuckerman.com/blog/2008/03/08/the-cute-cat-theory-talk-at-etech/)<br> Paul Ford, [*i had a couple of drinks and woke up with 1000 nerds*](https://medium.com/message/tilde-club-i-had-a-couple-drinks-and-woke-up-with-1-000-nerds-a8904f0a2ebf)
description: So i sent you a http request... but where did it go?? welcome to the weird and wonderful world of the OSI protocol. in this class we'll unpeel some layers of abstraction that keep the internet looking like it's working great all the time (it's actually a big big mess), learn about media archaeology and network forensics.
assignment: Using some of the tools and techniques we've discussed in class, discover something about your own local internet system.
assignment-due: 03/02
---  

{{page.description}}

### reading discussion and crit
show us your api calling websites!

what are all the readings about, how did they make you feel?  
  
### lecture: the internet is just other peoples' computers  
  
[what shape is the internet?](https://noahveltman.com/internet-shape/)  

[life sharing](http://0100101110101101.org/life-sharing/)  
  
**'the cloud'**  
  
**precursors**  
ARPANET  
[bell labs plan 9](https://9p.io/sys/doc/9.pdf)  

  
**OSI protocol**  
  
{: reversed="reversed"}  

  7. *application layer*  
    FTP HTTP SMTP DNS  
  
  6. *presentation layer*  
    MIDI MPEG GIF  
  
  5. *session layer*  
    TCP/IP  
  
  4. *transport layer*  
    UDP  
  
  3. *network layer*  
    routers  
  
  2. *data link layer*  
    ethernet wifi  
    frames: MAC and LLC  
  
  1. *physical layer*  
    fibre optics coaxial cables wifi  
    *minerals*  
      [gutta percha](https://qz.com/785119/the-forgotten-tropical-tree-sap-that-set-off-a-victorian-tech-boom-and-gave-us-global-telecommunications/) [tantalum](https://en.wikipedia.org/wiki/Tantalum) [coltan](https://en.wikipedia.org/wiki/Coltan_mining_and_ethics) [lithium](https://en.wikipedia.org/wiki/Lithium#Production)

**internet and environment**  
  [DEFOOOOOOOOOOOOOOOOOOOOOREST](http://www.janavirgin.com/CO2/DEFOOOOOOOOOOOOOOOOOOOOOREST.html)  
  [low tech magazine](https://solar.lowtechmagazine.com/2018/09/how-to-build-a-lowtech-website/)  

**wifi**  
  [flagellum machinam](http://fii.to/pages/flagellation-machine.html) [video](https://www.youtube.com/watch?v=WqAG1WsZHtY&feature=emb_title)  
[bandwidth]() [FCC spectrum]() [5G]() [wtf?!](https://www.buzzfeednews.com/article/danvergano/5g-is-going-to-screw-up-weather-forecasts-meteorologists?bftwnews&utm_term=4ldqpgc#4ldqpgc)  

**mapping it out**  
  [map](http://map.jodi.org)  
  [critical atlas of the internet](http://internet-atlas.net)  
  [submarine cable map](https://www.submarinecablemap.com) [timelapse](https://qz.com/657898/this-map-shows-the-explosive-growth-of-underwater-cables-the-power-the-global-internet/)  
  [traceroute](https://www.mediacollege.com/internet/troubleshooter/traceroute.html) [weird routes](https://dyn.com/blog/internetwide-nearcatastrophela/) [singapore->bangalore](https://cms.qz.com/wp-content/uploads/2016/07/pingmap1v7.jpg?quality=75&strip=all&w=1240&h=690&crop=1)  

**packet sniffing**  
  [wireshark](https://www.wireshark.org)  
  [nsa surveillance](https://www.aclu.org/issues/national-security/privacy-and-surveillance/nsa-surveillance) [Edward Snowden](https://en.wikipedia.org/wiki/Edward_Snowden)  
  *julian oliver*  
    [stealth cell tower](https://julianoliver.com/output/stealth-cell-tower.html) [PRISM](https://julianoliver.com/output/the-beacon-frame.html) [transmediale debacle](https://hyperallergic.com/109546/transmediale-festival-shuts-down-nsa-imitators/)  

**media archaeology**  
  internet archive [died in your arms tonight](https://www.youtube.com/watch?v=JsyWM3EALEw&feature=youtu.be)  

**other internets**  
  [borders](https://qz.com/735314/the-murky-world-of-international-law-is-threatening-to-break-up-the-internet/) [choke points](https://qz.com/780675/how-do-internet-censorship-and-surveillance-actually-work/) ['enemies of the internet'](https://en.m.wikipedia.org/wiki/Internet_censorship_and_surveillance_by_country)  
  [chinternet](https://en.m.wikipedia.org/wiki/Internet_censorship_in_China) [the 'great firewall'](https://en.m.wikipedia.org/wiki/File:Topology_of_the_Chinese_firewall.svg) [blind spot](https://anthology.rhizome.org/blind-spot) [bullet time](https://logicmag.io/china/bullet-time/)  
  [runet](https://www.bbc.com/news/technology-50902496)  
  [uk 'default filtering'](https://en.m.wikipedia.org/wiki/Internet_censorship_in_the_United_Kingdom)  
  tor  [autonomy cube](https://paglen.com/?l=work&s=cube)  


**local internet**  
  nyc mesh  
  piratebox  

### in class exercise  
We'll send some packets and have a look inside!

### assignment  
*due {{page.assignment-due}}*<br>
{{page.assignment}}
do your own media archaeology/forensics  
use the tools we have (or find some other ones)  
  
precaution: lots of the tools we've looked at today are powerful, and some uses of them are of shady legality. Don't! try and hack into someone else's computer without their express permission, 

Ideas:
Randall Monroe [*Google's Data Centers on Punch Cards*](https://what-if.xkcd.com/63/)

## reading
{{page.readings}}

---  
layout: hunter_post  
title: any requests?  
permalink: /class3/  
categories: [HTTP]
tags: [history, network infrastructure, security]
description: this week we'll talk about requests and APIs, and some moments in internet history. We'll learn to use some command line tools, and talk about some interesting uses of data.
assignment: make a website that interfaces to a remote API, and displays the information in a novel form.
assignment-due: 02/23
readings: Everest Pipkin, [*It was raining in the data center*](https://medium.com/s/story/it-was-raining-in-the-data-center-9e1525c37cc3)<br>Julian Oliver, [*Stealth Infrastructure*](https://rhizome.org/editorial/2014/may/20/stealth-infrastructure/)
---  

>*"Not everyone on the web is looking for practical information. Some look to remove the fork from the dinner table and set it into a frame of their own devising. Some pay homage to the fork as it is. Some treat the web not as a shopping mall, but as a spiritual realm."*  

>-- Kevin Bewersdorf, *Spirit Surfing*  


>*By now the word "hypertext" has become generally accepted for branching and responding text, but the corresponding word "hypermedia", meaning complexes of branching and responding graphics, movies and sound – as well as text – is much less used. Instead they use the strange term "interactive multimedia": this is four syllables longer, and does not express the idea of extending hypertext.*

>-- Ted Nelson, *Literary Machines*  

### review  
go through some card sorting solutions. what worked and what didn't? what was hard and what wasn't? Is there a solution you're excited to show us? is there anything that we should revise or that you'd like clearing up?  

### lecture: get a load of this api  

**HTTP**  
HTTP (the HyperText Transfer Protocol) is how we get files from one place to another on the internet. It's the foundation for internet data exchange, and functions according to *requests* made

The phrase 'hypertext' was coined by [ted nelson](http://www.hyperland.com/Tedpage-D285). The word ['hyperlink'](https://en.wikipedia.org/wiki/Hyperlink) also comes from the same root. Importantly, unlike Nelson's original vision, hyperlinks go only one way, rather than two. 

Ted is [deeply unhappy](https://web.archive.org/web/20071009230444/http://www.disenchanted.com/dis/technology/xanadu.html) with the way the internet has gone, and for a (very) long time has been working on a piece of software called [xanadu](http://xanadu.com/xUniverse-D6), which he intends to realise the ['two way, visible connections'](https://www.youtube.com/watch?v=hMKy52Intac) he originally envisioned in describing hypertext.

I almost got you all to read [computer lib](http://worrydream.com/refs/Nelson-ComputerLibDreamMachines1975.pdf) and still really heavily recommend it. [are.na](https://are.na) list Ted's work as a big inspiration behind their platform, and talk about his influence in [this interview](https://walkerart.org/magazine/counter-currents-are-na-on-ted-nelsons-computer-libdream-machines). Here's [Ted talking to Cab Broskoski](https://www.youtube.com/watch?v=PPBeHDxcVSA) (founder of are.na) at the Decentralised Web Summit in 2018! Other characters that will make an appearence later this semester, like [Bret Victor](http://worrydream.com), also draw inspiration from his work.

**Addresses**  
HTTP requests function on the basis of the 'client-server' model: you have a computer, a 'client', that makes a request to a 'server'. The server has something you want (a website, pictures of frogs, tweets, etc), and you have to make a HTTP request to get it. You're actually making this request to a [URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL) -- a Uniform Resource Locator. 

Net artists JODI have made some nice works playing with URLs as a medium. Check out [IDN](http://idn.jodi.org), and [you-talking-to-me](http://you-talking-to-me.com).

**requests**  
When you make a request, it's normally formatted as one of these four types (normally really just the top two):  
  GET  
  POST  
  HEAD  
  PUT  

This presentation gives a good breakdown of what goes on under the hood of a [HTTP request](https://robrich.org/slides/anatomy_of_a_web_request/#/9).

[**status codes**](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)  
HTTP status codes are how a web resource reports on how a HTTP request went. These are really useful when it comes to debugging issues, as different returned numbers mean different things. These are managed by a body called [IANA](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority), the Internet Assigned Numbers authority.

Here are a few common ones:  
  1xx information  
  2xx success 200 🎉 201 204  
  3xx redirection  304  
  4xx client error  400 401 403 404  
  5xx server error  500 502  

**requesting from the command line**  
When we want to make a HTTP request just from our terminal, there's a really useful tool called [cURL](https://curl.haxx.se). It can be a bit daunting the first time you try it, so we're going to use it a bunch in class. There's not a ton of accessible curl tutorials, but [this one](https://gist.github.com/joyrexus/85bf6b02979d8a7b0308) can be a helpful guide. Here's a [cheat sheet](https://devhints.io/curl) for a reminder, you can also type `curl --help` into the command line.

**requesting from code**  
When we want to make a HTTP request as part of a website, we do this using a Javascript module. There are a few different ways to do this: this guide has a [comparison between ajax, axios and fetch ](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/). [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is the most modern of these, and the one I tend to recommend. It's *not supported* by internet explorer (NB this is a theme you'll notice as we go along...)

Testing these on localhost isn't always so straightforward though: this is because of a security feature attached to [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) -- cross-origin resource sharing. It's to protect you from evil sites trying to steal information from your cookies (good), but it also means that friendly sites get blocked too. You get an error like ` No 'Access-Control-Allow-Origin' header is present on the requested resource.` [This article](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9) gives a good breakdown of why these errors occur. There are two ways to get around this:

* if you're comfortable using [node.js](https://nodejs.org/en/) (or a framework like React or Angular), then use node to run your app. include the line `const fetch = require("node-fetch")` at the top of the file, and run `npm install -g node-fetch` on your computer. This software will run a small server, which will handle the request before it gets passed to the client. This solution is known as a proxy.
* use CORS-anywhere: just put `https://cors-anywhere.herokuapp.com/` on the beginning of your url: this will act as a 'proxy' for the request, and add in a header that will stop the browser from freaking out. It's a really convenient solution if you don't want to run your own proxy.

**API**  
Some URLs are intended not to contain a webpage at the other end, but instead some kind of data. These are called 'endpoints', and the way you access them is called an API. This means that, when you send a request to that endpoint, rather than getting a lump of HTML back, you'll instead get something you want (normally some kind of object!).

Many APIs require [keys or tokens](https://stackoverflow.com/questions/1453073/what-is-an-api-key) to access them. It's rare you have to pay for a key for basic usage: they're normally there so if you use the service a lot they can ask you to pay for it. Google Cloud has a [guide](https://cloud.google.com/endpoints/docs/openapi/when-why-api-key) as to why they get used. Keys should be private! Be careful with them. As a rule of thumb, if a key is not linked to your credit card the worst that can happen is that you get banned from a service if someone takes your key and over-uses it. However, keys for things like AWS can have wayyyyy more serious consequences if they get leaked.

*warning: don't commit your key/secret to github*  


**formatting**  
We get requests back in all sorts of different ways, but the most common one is [JSON](https://www.json.org/json-en.html). This is 'Javascript Object Notation', and we met it last week when we made some objects. Other forms of data we can get are [XML](https://en.wikipedia.org/wiki/XML)and [YAML](https://yaml.org), which are worth knowing about (though less frequent from APIs).

[Oh my god i just did a request and got this huge pile of crap from the internet, how on earth do i read this? => 'pretty printing'](https://stackoverflow.com/questions/352098/how-can-i-pretty-print-json-in-a-shell-script).  


**waiting**  
To understand how to make a request in Javascript, you need to understand a little about how asynchronous code works. Why is this? HTTP requests require your code to wait until a resource responds with a particular value. This is often fast, but it's not instantaneous! We can't just treat it like adding numbers together.

Thus, if parts of your code depend on a HTTP request being made *before* they run, then you need to wait for the result of the request. We can do this in a couple of ways:  
  [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
  [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)  

Error handling: (or -- 'I wanna write some nice JS')  
  [try/catch](https://www.w3schools.com/js/js_errors.asp)  

**HTTPS**  
  [TLS](https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security)  
  [public key encryption (cool diversion, we could be here for ages...)](https://en.wikipedia.org/wiki/Public-key_cryptography)  
  [HTTPSEverywhere](https://www.eff.org/https-everywhere)  


**what can i ask for?**  

  *weather*  
    [darksky](https://darksky.net/dev/docs) [aeris weather](https://www.aerisweather.com)  
    [lovely weather we're having](https://glander.itch.io/lovely-weather-were-having)  
    [weather gradient](http://weathergradient.com)  
    [wind around the world](https://www.synopticoffice.com/project/the-wind/)  

  *opening times*  
    [google places api](https://developers.google.com/places/web-service/intro)  
    [istheapplebeesondelcoparkdriveinthesuburbsofdaytonopenrightnow.com](http://istheapplebeesondelcoparkdrinthesuburbsofdaytonopenrightnow.com)  
    [the artist is present](http://www.pippinbarr.com/games/theartistispresent/TheArtistIsPresent.html)  

  *twitter*  
    [twitter api](https://developer.twitter.com)  
    [bots bots bots](https://botwiki.org/bots/twitterbots/)  
    [cheap bots, done quick](http://cheapbotsdonequick.com)  
    [pentametron](https://twitter.com/pentametron)  
    [other orders](https://lav.io/projects/other-orders/)  
    [emoji tracker](http://emojitracker.com)  
    [tweetfeels (involves a little bit of python)](https://github.com/uclatommy/tweetfeels)  

  *chatbots*  
    [dialogflow](https://dialogflow.com/docs/reference/agent/)  

  *are.na*  
    [are.na api](https://dev.are.na/documentation)  
    [mac.are.na](https://mac.are.na)  
    [community garden](https://garden-for-the-book.are.na) [plants](https://www.are.na/are-na-review/community-garden-s9wioauhmh4)  

  *video*    
    [youtube](https://developers.google.com/youtube/v3/) [next youtube recommendation](https://github.com/pnbt/youtube-explore)  
    [default filename TV](http://defaultfile.name)  

  *astrology*  
    [horoscope-api (free)](https://github.com/sumitgohil/horoscope-api)  
    [astrology-api ($$$ but free 14-day trial)](https://www.astrologyapi.com)  

  *other*  
    [dominos](https://www.npmjs.com/package/dominos) [3 Degrees of Separation from the Military-Industrial-Prison-Data-Surveillance State](http://linkedd.s3.amazonaws.com/index.html)    
    [apilist](https://apilist.fun)  
    [venmo](https://www.vicemo.com)  

*notes:*   
the steps for authenticating to google api can be surprisingly tricky and poorly documented... if you're wanting to play with a google project, let me know and I can walk you through it!  

### class exercise:  
pick an api and make a http request from the command line!  

### assignment  
*due {{page.assignment-due}}*<br>
{{page.assignment}}

Your webpage should experiment with how the data from the API is displayed. How are you expected to use this information? How does your page change when the data from the API changes? What kind of experience do you want to engender in the person seeing this webpage?

### readings  
{{page.readings}}

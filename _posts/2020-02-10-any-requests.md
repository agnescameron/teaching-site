---  
layout: post  
title: any requests?  
permalink: /class3/  
categories: [HTTP]
tags: [history, network infrastructure, security]
description: this week we'll talk about requests and APIs, and some moments in internet history. We'll learn to use some command line tools, and talk about some interesting uses of data.
assignment: make an interface to a remote API.
assignment-due: 02/24
readings: 
---  

>*"Not everyone on the web is looking for practical information. Some look to remove the fork from the dinner table and set it into a frame of their own devising. Some pay homage to the fork as it is. Some treat the web not as a shopping mall, but as a spiritual realm."*  
>-- Kevin Bewersdorf, *Spirit Surfing*  

<!--more-->

### review  
go through peoples' card sorting solutions. what worked and what didn't? what was hard and what wasn't? is there anything that we should revise or that you'd like clearing up?  
  
### lecture: get a load of this api  
  
**HTTP**  
  [hyperlinks](https://en.wikipedia.org/wiki/Hyperlink)  
  [who is ted nelson](http://www.hyperland.com/Tedpage-D285) and [why is he unhappy](https://web.archive.org/web/20071009230444/http://www.disenchanted.com/dis/technology/xanadu.html)  
  [xanadu](http://xanadu.com/xUniverse-D6) [computer lib](http://worrydream.com/refs/Nelson-ComputerLibDreamMachines1975.pdf) [-> are.na](https://walkerart.org/magazine/counter-currents-are-na-on-ted-nelsons-computer-libdream-machines)  
  
**Addresses**  
  [the World Wide Web]  
  URI  
  URL  
  IP  
  [IDN](http://idn.jodi.org)  
  
**requests**  
  GET  
  POST  
  HEAD  
  PUT  
  
**FT**  
  
**HTTPS**  
  SSL  
  [public key encryption (cool diversion, we could be here for ages...)](https://en.wikipedia.org/wiki/Public-key_cryptography)  
  certificates  
  HTTPSEverywhere  
  
[**status codes**](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)  
  [IANA](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority)  
  1xx information  
  2xx success 200 🎉 201 204  
  3xx redirection  304  
  4xx client error  400 401 403 404  
  5xx server error  500 502  
  
**cURL**  
  [all about cURL](https://bagder.gitbook.io/everything-curl/cmdline) [cheat sheet](https://devhints.io/curl)
  
**formatting**  
  [JSON](https://www.json.org/json-en.html) [XML](https://en.wikipedia.org/wiki/XML) [YAML](https://yaml.org) [which one?](https://stackoverflow.com/questions/3951047/xml-vs-yaml-vs-json) [???](https://stackoverflow.com/questions/1726802/what-is-the-difference-between-yaml-and-json)
}
  
**API**  
  [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)  
  RPC  
  [which one?](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/)  
  [keys](https://stackoverflow.com/questions/1453073/what-is-an-api-key) [usage](https://cloud.google.com/endpoints/docs/openapi/when-why-api-key) *warning: don't commit your key/secret to github*

**waiting**  
  try/catch  
  async/await  
  
**what can i ask for?**  
  
  *weather*  
    [darksky](https://darksky.net/dev/docs) [open weather map](https://openweathermap.org/api) [aeris weather](https://www.aerisweather.com)  
    [lovely weather we're having](https://glander.itch.io/lovely-weather-were-having)  
    [weather gradient](http://weathergradient.com)

  *maps*  
    openStreetMap mapbox [google maps](https://developers.google.com/maps/documentation/javascript/tutorial)  
    [land lines](https://lines.chromeexperiments.com) [documentation](https://medium.com/@zachlieberman/land-lines-e1f88c745847)  
  
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
    [community garden](https://garden-for-the-book.are.na) [plants](https://www.are.na/are-na-review/community-garden-s9wioauhmh4)
  
  *video*    
    [youtube](https://developers.google.com/youtube/v3/)  
    [default filename TV](http://defaultfile.name)  

  *astrology*  
    [horoscope-api (free)](https://github.com/sumitgohil/horoscope-api)  
    [astrology-api ($$$ but free 14-day trial)](https://www.astrologyapi.com)

  *other*  
    [dominos](https://www.npmjs.com/package/dominos) [3 Degrees of Separation from the Military-Industrial-Prison-Data-Surveillance State](http://linkedd.s3.amazonaws.com/index.html)
  
*notes:*   
the steps for authenticating to google api can be surprisingly tricky and poorly documented... if you're wanting to play with a google project, let me know and I can walk you through it!  
  
### class exercise:  
pick an api and make a http request from the command line!  

### assignment  
{{page.assignment}}

Your webpage should experiment with how the data from the API is displayed. How are you expected to use this information? What if you did something different with it? How does your page change when the data from the API changes?

### readings  


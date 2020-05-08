---  
layout: parsons_post  
title: final class
permalink: /lab16/  
categories:   
tags:  
assignment: 
description: making websites in the world!
assignment-due:
readings: 
---  

## making websites in the world!

Wow, you did it!

You're all (of course) well within your rights to leave this class and promptly forget everything you learned. However! You all now hold *more than* all of the tools that you need to make anything on the web.

The things I'm going to cover (briefly) today could all have their own classes dedicated to them, and are intended as starting points! One of the hardest things in making things for the web is not knowing about the tools at your disposal: this is to give you an overview of those.

### how do I buy a domain name

So, you want to make a website with the domain name `gary.energy`? (sick) 

Let's look at the domain I use for [my personal website](https://dcc.godaddy.com/control/agnescameron.info/settings). I bought my domain from [GoDaddy](https://godaddy.com), which is not the most ethical of hosting websites (they were involved in some shady [anti-net-freedom](https://www.bbc.com/news/technology-16320149) stuff a while back), so you might also want to try something like Google Domains. Wherever you buy your domain from, the processes will be pretty similar.

Like your websites, my personal website is hosted on GitHub pages, though it used to be hosted somewhere else. Domain names are used to point to the location of something on the web. What's cool about them is that you can change the location of the thing (in this case, when I changed the server that my site was hosted on), and so long as you tell the people managing the domain name where you moved your site to, the name will still work.

This process is called 'managing DNS', where DNS stands for 'Domain Name Services'. There's a really sweet [cartoon](https://howdns.works/) that explains DNS in detail, but in essence it's a big list that maps IP addresses (the location of a server on the internet) to domain names. (you don't need to know this to add a domain name to your site, but it's pretty sweet and a great bit of crazy-scale internet bureacracy that somehow keeps the world turning)

**ok but like, what do I actually *do***

If you want to add a domain to a GitHub pages site, then take a look at the following tutorials:

You want the 'configuring an Apex domain' part of [this tutorial](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain): this is instructions for how to configure custom domains on GH Pages specifically. For services like GitHub pages, where there are many sites on the same server, you need to tell GitHub about your domain name to successfully link it.

Once you get to step 4 in the first tutorial, follow [this guide](https://uk.godaddy.com/help/add-an-a-record-19238) for how to configure Apex domains on GoDaddy specifically. This will show you how to add what's called a 'DNS record' that will tell browsers that go to your URL where to look for all your files. In this part, you add in the IP address of GitHub's servers, and 'point' your domain at it.

### are there other ways to make websites than github pages?

Yes! GitHub pages is actually a *very recent* service in the grand scheme of things. We chose it for this class because it's 1) free, 2) involves you learning about git (sorry), and 3) actually, relatively convenient.

Some of you have used Glitch, others of you have used Cyberduck to upload files to a server. You might also have heard about Netlify, which is similar to GitHub pages but has a bunch more features. All that you're doing, in all of these cases, is putting some files on a server, somewhere. Before it was on GitHub pages, my website was on a server that I rented for around $100/year from a company called JustHost.

### what is a server?

The problem with the word 'server' is that people use it to mean a lot of different things. You can make a server right now, on your computer (if you want to, check out these notes from my other class). And this really will make a web server! But only as long as your computer is running, and people know which IP address to go to. (it *is*, however, very fun and very do-able to get an old computer and set it up as a web-server)

Servers are just other people's computers set up to return files whenever anyone asks for them! Your websites exist on a server as 'static sites': that means that the server serves them, but the sites themselves don't change anything about the information on the server. If you wanted to link a website with a database, or a CMS (that wasn't airtable), then you would need to use a server to do it. There's plenty of services that set this up for you, but at their core they're just computers with files on.

### what is a HTTP request?

HTTP requests are the backbone of the web. Whenever anyone types a URL into a browser, that browser is going to make a HTTP request to that URL. In return (if the page exists), the server sends a response and dumps a bunch of HTML back in the browser.

Browsers are set up to handle HTTP requests by displaying files: when you load these files you see them as a website. But you can make a HTTP request in other places, like in code or from your command line.

Let's try getting a website in a HTTP request, using curl. Curl is a command-line application, and it's great for testing requests out. Let's try getting the wikipedia page for ['egg as food'](https://en.wikipedia.org/wiki/Egg_as_food)

The url for 'egg as food is': https://en.wikipedia.org/wiki/Egg_as_food, and so we type in:

```
curl "https://en.wikipedia.org/wiki/Egg_as_food"
```

Now, that's a big mess, but we can put it into a file and have a look at it:

```
curl "https://en.wikipedia.org/wiki/Egg_as_food" > egg.html
```


### what's an API?

APIs are special services you can make HTTP requests to, that instead of giving you a big mess of HTML will give you *an object*, that you can do things to! 

are.na has [an api](https://dev.are.na/documentation) which cab mentioned yesterday, which allows you to use are.na in other places on the web. Gary and I did this for a website we made for the Sakiya foundation, where we load in an [are.na channel into their website](https://sakiya.org/). In this case, we just add links to a number of pdfs, but we could also do stuff like:

* use this to host images
* store text in blocks
* use multiple channels to structure a site

Let's see what that request looks like in `curl`:

```
curl "https://api.are.na/v2/channels/week-2-readings/contents"
```

oof! It's not HTML, but it's still pretty messy. Let's have a go at 'pretty-printing', for which we'll use a tool called `jq`

```
curl "https://api.are.na/v2/channels/week-2-readings/contents" | jq
```

And what about in Javascript itself? Curl only works on the command line, so here we can use something called [`fetch`](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data). 

```
fetch("https://api.are.na/v2/channels/week-2-readings/contents").then(result => result.json()).then(data => console.log(data))
```

So -- could you make a website out of text that you put in are.na? [Yes! People have! People do! They're very nice!](https://www.are.na/are-na/powered-by-are-na)


### what is a CMS?
In a broader sense, what these sites are doing is using are.na as a *content management system*, or CMS. These are services that allow people to edit a website without writing code: like how xianyu wanted a tool to add emojis to her object without having to edit them directly.

Most CMSs (and you can buy them, and you can even write them!) require you to use a server, which costs money! If you're making a website for a client, this can be something you get them to pay for (especially if they want to edit the site in the future). If you want to do it for free, however, you can use things like are.na, or [Airtable](https://airtable.com) (which we use as the CMS for our studio site).

### what are frameworks?

This is quite a big question, and really just to make you aware of them. I know lots of really good professional web developers who *don't* use frameworks, and some that do but don't use them for everything.

'Javascript Frameworks' are ways of writing Javascript applications. Though it's not really thought of as a 'framework' per se, jQuery is a good example: it's a library that allows you to write Javascript in a special syntax. 

If you try and get a job as a front-end web developer, you might see particular frameworks requested as particular skills. A really common one right now is [ReactJS](https://reactjs.org/), which was first written by developers at Facebook.

### solving code problems by yourself (you are never truly by yourself!)

[**Stack Overflow**](https://stackoverflow.com/)

This site is the shit. It's so so good. I love it so much. There is no knowledge that it can not impart to you, you simply need to know how to ask.

A key advantage to the web being so big, and having so many websites is that there is a near 100% chance that someone has tried to solve the same, or similar problem as you (or got the same errors).

For example, when looking at the last assignment, you might have been wondering the best way to filter an array of objects. If you google 'how to filter an object array js' (the 'js' part tells the search engine it's javascript), check out the first answer.

You can also *ask* questions on StackOverflow if you can't find an answer (though do make sure they haven't been asked already, first).

### life advice

1. Make things for your friends, and for your mum. (this also applies to non-web work). If you leave this class with any feeling that you'd want to make websites, then text 3 friends now, and ask them if they'd like a website for their birthday. The best way to learn to code is to put yourself in a position where you have to write code. Friend websites are a wonderful opportunity to experiment, and explore new ideas, with a very forgiving but honest audience.

2. Nothing ever works first time, nobody really knows what they're doing, it's amazing that anything on the internet works at all because 80% of it has been copy-pasted from StackOverflow. The possibilities are endless! You know more than enough to make great websites! You have all already made great websites! The more you make, the better they'll get!

3. A lot of 'being good at code' is really 'knowing what's possible with code'. It's really easy to learn to code if you're surrounded by developers, partly because they'll help you but mostly because you get a feel for what can be done with just a few lines! While most of you might not be in that kind of environment, you should all remember that anything that websites do, you can do too with a little JS!

4. The other bit of 'being good at code' is 'knowing how to ask good questions'. This comes from practice, but the [Stack Overflow Good Question Guide](https://stackoverflow.com/help/how-to-ask) is a great place to start.

5. If you're into it, try finding work with people who have been coding for a long time. You'll learn so much by working on projects with people that know more than you do. Ask them questions! They were you once, and they will help! At some point, it becomes such a pleasure to read someone else's good solution to a problem... 




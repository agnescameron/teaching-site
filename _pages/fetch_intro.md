---
layout: hunter_post
title: Guide to Fetch
permalink: /fetch_intro/
---

<style>
body {background-color: #ffb399;}
</style>


Fetch is one way of performing a HTTP request with Javascript. HTTP requests are what we were looking at last class: a way of getting data from an external resource. When we make a HTTP request from the command line, we use cURL (which we used a bunch in class) — ‘fetch’ is just a way of doing the same job, but in Javascript, so we can use the information as part of a webpage.

so: remember what happens when we make a HTTP request with cURL to a weather API: (the numbers at the end are our latitude and longitude — change these to get the weather in a different place)

```
curl "https://api.darksky.net/forecast/c0d72b078c4f27a37169a2a3638dad3e/42.3601,-71.0589"
```

typing that into your command line will print a bunch of JSON data out. if you want to be able to read it (and you’re able to download jq or already have it installed), try:

```
curl "https://api.darksky.net/forecast/c0d72b078c4f27a37169a2a3638dad3e/42.3601,-71.0589" | jq
```

all this does is print the same information, but in a way that’s easier to read.

so, fetch! How does one fetch? most explanations of fetch you find online are a bit confusing, as they reference existing methods of executing HTTP requests in Javascript. That’s not because it’s any more complicated, but it is a lot more recent, so most people reading those documents have already been using other methods to execute HTTP requests. But — after you’ve read this email, the Mozilla Documentation will be helpful.

In order to get the same data we just got using cURL, we can use the following piece of code. This also appears in the file I sent everyone in class (though I think maybe some people didn’t get it cause email blocks messages with Javascript attachments </3 ):

```
fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c0d72b078c4f27a37169a2a3638dad3e/42.3601,-71.0589")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
```

what is this doing? well, the first part, the fetch with the URL we saw before, is doing what cURL did. note that we added this ‘cors-anywhere’ url before it. This is explained in the notes from the last class.

We then have this thing called .then - this allows us to wait for our data to arrive! This turns out to be really useful, as until we’ve got our data, we can’t do any of the next steps, and if we don’t make Javascript wait then it will just keep on going and give us lots of errors. I’m not going to explain asynchronous programming in greater detail here because there’s some great documentation online.

So, what happens is, it gets the data, it takes a second to translate it into something our browser will understand (think about how we used jq to print data earlier). We do this using the .json() method -> this will send whatever mashed-up, weird data that the fetch request got first, and will make it so our computers can read it.

then — we can do whatever we like with it! The code above will just print it out, the code below will do the same thing, but it'll do it by passing that data to a separate function, called `printData`, which just prints whatever we give it.

```
function printData(data){
  console.log(data);
}

fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c0d72b078c4f27a37169a2a3638dad3e/42.3601,-71.0589")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    printData(myJson)
  });
```

So, last part: how do we use this data? The Dark Sky API, which we’re making a request to, will give us some ideas about what kind of data we expect. We can use the dot notation to extract particular values from this data.

Here’s a link to an example on GitHub, which you can download and play with. This is a simple site, which changes colour according to the weather forecast. If the weather today is warmer than 60 degrees, the site is orange. If it’s between 50-60, it’s yellow, all the way down to below 20, which is a dark blue. It also shows the number in the front end. To play around with this, try entering different latitude and longditude values in the URL. What's the weather like in Murmansk (68.96, 32.94)? Cairo (30.05, 31.22)? 

Feel free to adapt this code to get yourself started if you’re having trouble!



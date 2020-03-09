---  
layout: hunter_post  
title: collecting knowledge  
permalink: /class6/  
categories: [jQuery]
tags: [diagrams, sorting]
description: A class about structuring knowledge. We'll talk about objects, data, libraries and scraping.
assignment: Curate a data-set, .
readings: Emily Scott [*Climate Change and Representational Breakdown*](https://averyreview.com/issues/16/archives-of-the-present-future)<br>Christine Schranz [*Commons for the Cartography -- how Social Computing Changes the Design of Interfaces*](https://interfacecritique.net/journal/volume-1/schranz-commons-for-the-cartography)
assignment-due: 03/15
---  

> *The class name of an object creates a vocabulary for discussing a design. Indeed, many people have remarked that object design has more in common with language design than with procedural program design. We urge learners (and spend considerable time ourselves while designing) to find just the right set of words to describe our objects, a set that is internally consistent and evocative in the context of the larger design environment.*  
> Kent Beck, [*A Laboratory For Teaching Object-Oriented Thinking*](http://worrydream.com/refs/Beck%20-%20%20A%20Laboratory%20For%20Teaching%20Object-Oriented%20Thinking.pdf)

> *Garden as though you will live forever*  
> William Kent  

{{ page.description }}

HTTP endpoint testing: what's everyone serving?! [Add your IPs to the google sheet, like last week.](https://docs.google.com/spreadsheets/d/1Geq0eVsVNMHlhbMsSgQ6eXJzn8NPMJuBecdh-K2EpmE/edit#gid=0)

**how to get ip**

If you're using a mac, copy and paste this line into your terminal:

```
ipconfig getifaddr en0
```

If you're using windows, try this:  
1. 'select the Start button , start typing View network connections, and then select it in the list'
2. Select the HunterNet network connection, and then, in the toolbar, select View status of this connection. (You might need to select the chevron icon to find this command.)
3. Select Details.
4. Your PC's IP address appears in the Value column, next to IPv4 Address.


## lecture: storing, sorting and scraping

Over the next two weeks, we'll be looking at acquiring, structuring and arranging data on a website. This is a really common thing web programmers need to do: get some data, transform it, and display it on a webpage. This week, we're going to look at how to get, sort and structure data: next week we'll cover the skills needed to make it into a website.

**'data'**

This is a class about data. You've heard a lot about data! Data is [big](https://en.wikipedia.org/wiki/Big_data). It's the ['new oil'](https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data), it's stored in *Data Centers*, and incessantly scraped from us.

But what *is* data? In the sense that we're going to think about it, data here is a structured representation of knowledge. This class is half a tutorial on different ways to manage data as objects, but I've also collected some resources on different approaches to structuring and sorting data, included below.

**objects**  

One of the more powerful ways of dealing with data comes from using 'Object Oriented Programming' techniques. Some of you might have encountered debates around the relative merits of ['Object Oriented' vs 'Functional' programming](https://www.codenewbie.org/blogs/object-oriented-programming-vs-functional-programming). These represent different philosophies of programming, and are useful for performing different kinds of tasks... it's not really that one is better than the other, but they [can be useful for different things]((http://blog.fogus.me/2013/07/22/fp-vs-oo-from-the-trenches/)  ). As it turns out, the things we're going to do in this class (making webpages from information, simulation) are pretty object-friendly, and, incidentally, OOP is the only thing I'm formally required to teach you in this class... 

Object oriented programs are written in terms of 'Objects' -- related data and code, which represent information about things we want to model. We've met objects already in this class, but now is a good time to revisit them: remember JavaScript *Object* Notation?

If you're left with some questions after this class, I highly recommend going through the [MDN Object Oriented Javascript Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS), upon which some of this class is based.

[**JSON**](https://www.json.org/json-en.html)  

We've met JSON before, but here's a [guide](https://www.tutorialspoint.com/json/json_quick_guide.htm) if you want to revisit it, and a [validator](https://jsonformatter.curiousconcept.com) to check that your JSON is written right (browsers are picky). JSON stands for 'Javascript Object Notation', and is the way we construct objects in JS (as well as our main tool for sending data from place to place). 

Objects can be a pretty intuitive way of thinking about things in terms of their *properties* and *methods*. For example, consider fruit. Fruits have names, colours, flavours and textures -- all properties of 'fruit' objects. They also come with particular affordances: one would *eat* a fruit, or *slice* a fruit, but not do those things to a pair of socks, or a small stone.

We could formalise this as an object:

```
const banana = {
	name: banana,
	colour: yellow,
	slice: function() {
		console.log('b / a / n / a / n / a')
	}
}
```

```
const watermelon = {
	name: watermelon,
	colour: pink,
	slice: function() {
		console.log('w / a / t / e / r / m / e / l / o / n')
	}
}
```

It's a little tricky to slice a fruit on a computer...

**object methods**

*Methods* are functions that belong to objects. In our fruit example, each `fruit.slice()` method just chopped up the name of the fruit, and printed it. This is a silly example, but in general methods can be a really powerful way of dealing with kinds of data. For example, our 'person' object can have a method called greeting.

```
const person1 = {
  name: ['Bob'],
  age: 32,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
};
```

**!keyword alert!** -> in this class we'll meet a few new JS keywords. These are reserved words in JS (words that you're *not* allowed to name your variables, for example) which perform specific actions.

The `this` keyword is the first one we'll meet today. Essentially, `this` stands in for `this object that we're currently doing something to`. It crops up all over JS, and it can be a really useful tool for writing interactive code. In this case, it'll get the property of the object we're currently using.

If we add `person1.greeting()` to our code, let's see what we get!

What if we add a second person?

```
const person2 = {
  name: ['Angela'],
  age: 21,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
};
```

Now, try `person1.greeting()`, then `person2.greeting()`. In each case, the `this` keyword selects the name of the person we're thinking about.

What would we need to add to the greeting function to get the person's age too?

**constructors**

A *constructor function* is something we can use to create an instance of an object.

```
function Person(name) {
  this.name = name;
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  };
}
```
Now, we're going to do the same thing we did before, but instead of having to write out a new person every time, we *construct* them:

```
let person1 = new Person('Bob');
let person2 = new Person('Angela');
```

This is already saving us a lot of code, and we only had two people! Imagine how much easier this is gonna make things when we have lots more.

**ES6 classes**

If you've learned OOP in other languages, you might have noticed that so far our JS works a little differently. In particular, the 'constructor function' is what Javascript uses to create a 'class'. However, in newer JS (ES6+), there is support for classes! They can be pretty nifty if you're wanting to make much more complex objects, so we'll take a look at them here.

Classes take in something called a 'class constructor': this will set up the object's properties. The object methods are then defined in terms of the object properties: notice that you don't need the `function` keyword to create methods here, but `this` crops up a *lot*.

```
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}
```

Javascript frameworks like React make a lot of use of these kinds of classes to create websites in terms of re-useable components.

**sorting things**  
  [regression analysis](https://en.m.wikipedia.org/wiki/Regression_analysis) [clustering](https://en.wikipedia.org/wiki/K-means_clustering)  
  [openCV](https://opencv.org) [openCV JS](https://docs.opencv.org/3.4/d5/d10/tutorial_js_root.html)  

**classifying language**  
  [history](https://en.wikipedia.org/wiki/Unicode#Origin_and_development)  
  [consortium](https://home.unicode.org) [table](https://unicode-table.com/en/#basic-latin)  
  [ghost characters](https://www.dampfkraft.com/ghost-characters.html)  
  [i can text you a pile of poo, but i can't write my name](https://modelviewculture.com/pieces/i-can-text-you-a-pile-of-poo-but-i-cant-write-my-name)  
  [noto typeface](https://www.google.com/get/noto/)  

**finding things**  
  [wtf is a knowledge graph](https://hackernoon.com/wtf-is-a-knowledge-graph-a16603a1a25f) [semantic networks](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Semantic_Net.svg/640px-Semantic_Net.svg.png) [google knowledge graph](https://googleblog.blogspot.co.uk/2012/05/introducing-knowledge-graph-things-not.html) [the underlay](https://underlay.mit.edu)  
  *search engines*    
    [google]() [duckduckgo]() [yandex](https://yandex.com)  
    [inside search](https://blog.google/products/search/)  
  *reverse image search*  
    [tineye](https://tineye.com) [~searchFace~ findClone](https://www.bellingcat.com/resources/how-tos/2019/02/19/using-the-new-russian-facial-recognition-site-searchface-ru/)  
  [can i help you find something](http://rostenwoo.biz/index.php/abouthaystacks)  
  ['people search'](https://docs.google.com/spreadsheets/d/1nDWmjCBvQE6N1TDv6RvAjo6oeSCRCIiWjG7502OG48I/edit#gid=0)  

**archives**  
  [TDKL](http://www.tkdl.res.in)  
  [cyberfeminist index](https://docs.google.com/spreadsheets/d/1q_ZlbZhstBTfnZL4QP11ebivXgsvrf8shuG-QX146nw/edit?usp=sharing)  
  *of books*  
 [bookcase history](http://www.harvarddesignmagazine.org/issues/43/before-billy-a-brief-history-of-the-bookcase)  
 [sitterwerk catalog](https://www.sitterwerk-katalog.ch/books)  
 *of the internet*  
    [the internet archive](https://archive.org/index.php) [one terabyte of the kilobyte age](https://blog.geocities.institute) [can the internet be archived?](https://www.newyorker.com/magazine/2015/01/26/cobweb)  
  [i'm google](https://dinakelberman.tumblr.com)  


**collections**  
  [*corpora*](https://github.com/dariusk/corpora)  
    [vegetable cooking times](https://github.com/dariusk/corpora/blob/master/data/foods/vegetable_cooking_times.json) [female classical guitarists](https://github.com/dariusk/corpora/blob/master/data/music/female_classical_guitarists.json) [tarot](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json) [pokemon](https://github.com/dariusk/corpora/blob/master/data/games/pokemon.json) [saints](https://github.com/dariusk/corpora/blob/master/data/religion/christian_saints.json)  
  [pokemon](https://github.com/fanzeyi/pokemon.json)  
  [wordnik](https://developer.wordnik.com/docs)  
  [gun deals](https://docs.google.com/spreadsheets/d/1UioHw4TSPUh1P4fRiVhuw9m66FTXNVL06s-2Tihal_o/edit#gid=0)
  [*data gardens*](https://github.com/everestpipkin/datagardens)
    [sephora reviews that mention crying sobbing or tears](https://github.com/everestpipkin/datagardens/tree/master/students/khanniie/5_newDataSet)  
  *museum data collections*
    [natural history museum (uk)](https://data.nhm.ac.uk)
  [syrian archive](https://syrianarchive.org/en/collections) [violations documentation center in syria](http://www.vdc-sy.info/index.php/en/martyrs)  
  [police brutality](https://www.theguardian.com/us-news/ng-interactive/2015/jun/01/the-counted-police-killings-us-database)  
  [library of missing datasets](http://mimionuoha.com/the-library-of-missing-datasets/)  
  [*data.gov*](https://www.data.gov)
    [maritime](https://www.data.gov/maritime/) [climate](https://catalog.data.gov/dataset?groups=climate5434&#topic=climate_navigation)
  [nyc census data](https://popfactfinder.planning.nyc.gov/#12.25/40.724/-73.9868)

**data forensics**
  [public by default](https://publicbydefault.fyi)  
  [forensic architecture](https://forensic-architecture.org) [killing in umm al hiran](https://forensic-architecture.org/investigation/killing-in-umm-al-hiran)  

**scrape it yourself**

'Scraping' is a technique for collecting data from a website. It can be used for all sorts of purposes, though is particularly relevant to forms of data journalism. It's also a fun and relatively easy way to amass a lot of data!

We won't spend a huge amount of time on this in class, mostly because there are a load of great tutorials online. However, just to give you an idea of some of the power of what you can do with a scraper, I'll quickly go through [this tutorial on scraping with node](https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/).

We're going to cover jQuery next week, so don't worry if some commands look unfamiliar to you.

Scraping resources and tutorials:  
  [with node](https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/) [with python](https://hackernoon.com/web-scraping-tutorial-with-python-tips-and-tricks-db070e70e071) [cURL to python request](https://curl.trillworks.com)  
  [social media data collection tools](http://socialmediadata.wikidot.com)
  [metascraper](https://metascraper.js.org/#/)  

### in class assignment 
We're going to start making a website that will display different vegetable cooking times. Next week we'll work on presentation and arrangement, but this week we're interested in sorting and searching our data, and turning it into a set of objects with methods.

To play along with this assignment, download [this folder](https://github.com/agnescameron/hunter-vegetables) from github. You can either download it as a zip, or type 

```
git clone https://github.com/agnescameron/hunter-vegetables.git
cd hunter-vegetables
```

Our dataset is based on Darius Kazemi's scraped vegetable cooking times dataset.

**1. See the data**
First up, we want to look at the data. The quickest way to try this out is just to print something to the console. As our data is stored in an array, we can use the [forEach iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach). If you've used for loops before this can be a slightly neater way of doing the same thing. It will go thtough each element in turn, and perform some function on that element. ForEach is structured as a *anonymous function*: a function that gets created and destroyed just to perform a particular task. Depending on the task it's performing, the function might take arguments. In the case of `forEach`, we always get the array element (here we've called it `element`), and the number of that element in the array `index`.

Right now, let's just try printing out our vegetable names.

```
vegTimes.forEach( function(element, index) {
	console.log(element.name);
  console.log(index);
})
```

check your console: can you see the veg? Next up, we're going to put the veg on the page directly. You should see in the HTML that we have an element called `vegbox`: let's try putting stuff in that:

```
vegTimes.forEach( function(vegetable, index) {
	document.getElementById('vegbox').innerHTML += vegetable.name + '<br>';
})
```


**2. Search the data**
Say we wanted to get an element with a particular name. This is something we want to do pretty often with JSON, and we're going to do it in stages.

First up, we're going to write a simple function called `searchVegetables()`. This will go through our array of vegetables and check to see if any match.

```
function searchVegetables(vegetableName){

  vegTimes.forEach( function(element, index) {
    if (element.name === vegetableName){
      console.log('I got ', element.name)
    }
  })
}
```

But -- wait up! Some of the names in our data are things like 'Whole Turnips'. If someone just searched for 'Turnips' they wouldn't get anything. We can use a nice method for this (JS objects have methods, remember!!) called [string.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

try it out in the console:

```
searchVegetables('Spinach');
searchVegetables('Zucchini');
```

```
function searchVegetables(vegetableName){

  vegTimes.forEach( function(element, index) {
    if (element.name.includes(vegetableName)){
      console.log('I got ', element.name)
    }
  })
}
```

How about making the information more useful?

```
function searchVegetables(vegetableName){

  vegTimes.forEach( function(element, index) {
    if (element.name.includes(vegetableName)){
      console.log(("in the microwave " + veg.name + " takes " + veg.microwaved + " minutes")
    }
  })
}
```

Ok... nice! but, we should probably let our users know if a vegetable doesn't exist in the data set either. To do that, we need to introduce a variable to store our vegetable. If a vegetable is found in the array, we'll print that -- if not, it'll be undefined, and we can say we couldn't find it.

```
function searchVegetables(vegetableName){

  let veg;

  vegTimes.forEach( function(element, index) {
    if (element.name.includes(vegetableName)){
      veg = element;
    }
  })

  if (veg === undefined){
    console.log("no vegetable by that name in our data set!");
  }

  else {
    console.log("in the microwave " + veg.name + " takes " + veg.microwaved + " minutes");
  }
}
```

Nice. This is a pretty good function, and we can check it out from the command line, to make sure it works as expected:

```
searchVegetables('Spinach');
searchVegetables('Socks');
```

What we want to do now is to be able to call it from our index file! So, uncomment 


We want to take in the contents of our input element, and output the results 
```
function search() {
  const vegName = document.getElementById('vegSearch').value;
  const message = searchVegetables(vegName)
  document.getElementById('vegResult').innerHTML = message;
}
```

**3. Built in object methods**
There are some existing methods in JS that can perform searches too! There's a whole load, and [they're worth checking out]((https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230)).

```
const veg = vegTimes.filter(element => element.name.includes(vegetableName))
```

Will return an array of all the elements that have that vegetable name

**4. Give the objects methods**
Now: our data is actually already pretty nicely organised, but what would happen if we wanted to give our objects methods. For example, perhaps we have a method 'microwave', which will print the microwaving instructions as a feature of the object.

What we want to do is *extend* our object prototype by adding a method. We know that our objects have a current structure:

```
   let spinach =  
   {
      "name": "Spinach",
      "steamed": "5 to 6",
      "microwaved": "3 to 4",
      "blanched": "2 to 3",
      "boiled": "2 to 5",
      "other": "Stir-fry 3"
    }
```

and we want to add a method:

```
"instruction": function() {
  console.log("in the microwave " + this.name + " takes " + this.microwaved + " minutes");
}
```

We can do this with:
```
  spinach.instruction = function() {
  console.log("in the microwave " + this.name + " takes " + this.microwaved + " minutes")
```


### assignment  
*due {{page.assignment-due}}*<br>
{{page.assignment}}

Your curated (scraped/embellished) dataset should be composed of objects with properties and methods (e.g. not just a list of single words), formatted as an array of objects. Think about how you might sort the data, using:

* making your dataset into a set of objects with methods
* using different modes of classification
* links between different groups of objects

The sorting part you can do either as a webpage, or just using the command line. Don't worry about making it look pretty yet! We'll be using this dataset as the basis for next week's assignment, so make sure it's something you can have a few different perspectives on. You're more than welcome to creat your own set of objects, but make sure you have enough to do something interesting next week.

How to get a data set? A few ways. As simple as a HTTP request, but if you're interested in scraping you could also try that.

**resources**
[Object Playground](http://www.objectplayground.com/)  
[useful object methods](https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230)

---  
layout: hunter_post  
title: collecting knowledge  
permalink: /class6/  
categories: [jQuery]
tags: [diagrams, sorting]
description: A class about structuring knowledge. We'll talk about objects, data, libraries, scraping and the politics of taxonomy.
assignment: Curate a data-set, and come up with some diverse ways to sort it.
readings: Emily Scott [*Climate Change and Representational Breakdown*](https://averyreview.com/issues/16/archives-of-the-present-future)<br>Clayton Aldern [*Cartographers Without Borders*](https://logicmag.io/justice/cartographers-without-borders/)
assignment-due: 03/15
---  

> *The class name of an object creates a vocabulary for discussing a design. Indeed, many people have remarked that object design has more in common with language design than with procedural program design. We urge learners (and spend considerable time ourselves while designing) to find just the right set of words to describe our objects, a set that is internally consistent and evocative in the context of the larger design environment.*  
> Kent Beck, [*A Laboratory For Teaching Object-Oriented Thinking*](http://worrydream.com/refs/Beck%20-%20%20A%20Laboratory%20For%20Teaching%20Object-Oriented%20Thinking.pdf)

> *Garden as though you will live forever*  
> William Kent  

{{ page.description }}

HTTP endpoint testing: what's everyone serving?! [Add your IPs to the google sheet, like last week.](https://docs.google.com/spreadsheets/d/1Geq0eVsVNMHlhbMsSgQ6eXJzn8NPMJuBecdh-K2EpmE/edit#gid=0)

on mac: 

## lecture: storing, sorting and scraping


**'data'**

This is a class about data. You've heard a lot about data! It's the 'new oil'... 

But what *is* data? In the sense that we're going to think about it, data here is a structured representation of knowledge. This class is half a tutorial on different ways to manage data as objects, but I've also collected some resources on different approaches to structuring and sorting data.

**objects**  

One of the more powerful ways of dealing with data comes from using 'Object Oriented Programming' techniques. Some of you might have encountered debates around the relative merits of ['Object Oriented' vs 'Functional' programming](https://www.codenewbie.org/blogs/object-oriented-programming-vs-functional-programming). These represent different philosophies of programming, and are useful for performing different kinds of tasks... it's not really that one is better than the other, but they [can be useful for different things]((http://blog.fogus.me/2013/07/22/fp-vs-oo-from-the-trenches/)  ). As it turns out, the things we're going to do in this class are pretty object-friendly, and, incidentally, OOP is the only thing I'm formally required to teach you. 

Object oriented programs are written in terms of 'Objects' -- related data and code, which represent information about things we want to model. We've met objects already in this class, but now is a good time to revisit them: remember JavaScript *Object* Notation?

[**JSON**](https://www.json.org/json-en.html)  
  [guide](https://www.tutorialspoint.com/json/json_quick_guide.htm)  
  [validator](https://jsonformatter.curiousconcept.com)  

**constructors**
A *constructor function* is something we can use to create an instance of an object. 

If you've learned OOP in other languages, you might notice that JS works a little differently. In particular, the 'constructor function' is a kind of class

```
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```


**object prototypes**

**databases**  
One of the main things people use servers for is to manage bundles of data. We're not going to spend a while dwelling on these here, but they're usedul to know about. While there have been a million-and-one '[*SQL*](https://en.wikipedia.org/wiki/SQL)  
    [mySQL](https://www.mysql.com) [PostgreSQL](https://www.postgresql.org) [noSQL?](https://en.wikipedia.org/wiki/NoSQL)  



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
  [with node](https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/) [with python](https://hackernoon.com/web-scraping-tutorial-with-python-tips-and-tricks-db070e70e071) [cURL to python request](https://curl.trillworks.com)  
  [social media data collection tools](http://socialmediadata.wikidot.com)
  [metascraper](https://metascraper.js.org/#/)  

### in class  
We take a data set and sort it a number of different ways.

Exploring: iterators, searching, objects, arrays and maps. We also experiment with writing an object method.

### assignment  
*due {{page.assignment-due}}*<br>
{{page.assignment}}

Your curated (scraped/embellished) dataset should be composed of objects with properties (e.g. not just a list of single words), formatted as a .JSON file. Think about how you might sort the data, using:

* using different modes of classification
* links between different groups of objects

The sorting part you can do either as a webpage, or just using the command line. Don't worry about making it look pretty yet! We'll be using this dataset as the basis for next week's assignment, so make sure it's something you can have a few different perspectives on.

How to get a data set? A few ways. As simple as a HTTP request, but if you're interested in scraping you could also try that.

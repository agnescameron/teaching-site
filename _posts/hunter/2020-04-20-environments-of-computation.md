---  
layout: hunter_post  
title: what's this 
permalink: /class11/  
tags: 
readings: bret victor, Nicky Case [*how to simulate the universe in 134 easy steps*](https://blog.ncase.me/how-to-simulate-the-universe-in-134-easy-steps/)
description: welcome to scope!
assignment: start developing your final project in earnest, and document your progress as you go along. start by thinking about the basic infrastructure. do you need a server? What requests will you make? Can you build a minimal prototype that performs most of these tasks? for next week, you should also have installed [IPFS](https://docs.ipfs.io/guides/guides/install/)
assignment-due: 04/26
---  

creation of space with computation online and off
situate ideas about computers within ideas about systems and spaces and cybernetics

### check in
Everyone presents their final project plans in detail.

We now have 4 classes left before the final crit, and I'm going to use them to explore some code ideas that people wanted to cover, by building minimal simulations that use some of these, along with some notes. This week is scope and arrow functions. I'll also talk a bit about some different inspirations for each week's class.

### lecture: questions of scope

In this class, we're going to take a closer look at *scope* in Javascript: when and how different variables are made available in a program. We'll discuss the difference between global and local scopes, talk about `this` and function invocation, and we'll also cover modules.


[**scope basics**](https://scotch.io/tutorials/understanding-scope-in-javascript#toc-why-scope-the-principle-of-least-access)

Javascript has 2 kinds of scope: *global* scope (where a variable is accessible anywhere in the code), and *local* scope (where a variable can only be accessed in a specific context).

consider the following:

A)
```
function printFruit() {
	const fruit = apple;
	console.log(fruit)
}

printFruit()
```

B)
```
const fruit = apple;

function printFruit() {
	console.log(fruit)
}

printFruit()
```

C)
```
function printFruit() {
	const fruit = apple;
}
console.log(fruit)

printFruit()
```

D)
```
function printFruit(fruit) {
	console.log(fruit)
}

printFruit('apple')
```

Functions A) and B) both work, but in A), the scope of `fruit` is *local*, and in B), the scope of `fruit` is *global*. The code in C) does *not* work: `fruit` is scoped locally, and so cannot be used outside the function.

In function D), fruit is used as an *argument* to the function. Function arguments are also only scoped locally: trying to log `fruit` outside of `printFruit` here will get the same result as C).

Which is better? In general, it's always best not to create global variables unless you have to. D) is the best solution here, as it allows us to call the function with a different argument each time, while using only local scope.

This relates to the [principle of least privelege](https://en.wikipedia.org/wiki/Principle_of_least_privilege), a computer science term for giving processes access *only* to the specific pieces of information that they need. In our case, well-scoped code is more efficient, easier to read and debug, and less likely to break.

For more on scope, [this blog post](https://scotch.io/tutorials/understanding-scope-in-javascript) has a really good overview.


[**the this keyword**](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)

What is *this*? We've seen it around before, often when we execute event methods:

In Javascript, `this` is pretty slippery as the rules for how it's defined change depending on how something is called. We won't look at all of these today ([this blog post](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/) has a really good overview) 

The `this` keyword refers to the current scope that the function is operating in.

**function invocation**  

**strict mode**

[**arrow functions**](https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html)

Arrow functions are a special kind of 'anonymous function'. There's a number of reasons that programmers like them, 

core syntax:

```
(argument1, argument2... ) => {
	//some code
}
```

If arrow functions are written inline, you can also leave out the curly brackets. If you do this, the results of the expression are what is returned by the function. Consider the following:

```
const add = (a, b) => a + b;
```
this function takes 2 arguments (`a` and `b`) and returns their sum. 

In an arrow function, the 'this' that exists inside the arrow function is also the 'this' outside the arrow function. 

What's neat is that I can return results directly from 

whereas an anonymous function


**when is an arrow function a great idea?**

1. *lists*

You have a list of things! An arrow function is ideal!

arrow function + array method = a great combo


2. *promise chains*

Arrow functions are also really useful in promise chains (and, indeed, we've already met them in `fetch` requests).


**when is an arrow function *not* a great idea?**

Things like event methods, where the function context is important. In particular, using in combination with things like jQuery's `this` keyword (where `this` refers to a DOM element) are generally best to use with functions. For example:

A)
```
$('div').click(() => {console.log($(this).attr('class'))} )
```

B)
```
$('div').click(function(){ console.log($(this).attr('class')) })
```

A) will return `undefined`, whereas B) will return the class of the `div`. This is because the arrow function here will be scoped for the *outer* scope: e.g. `this` is the `window` (which has no attribute `class`), whereas the anonymous function in B) will have `this` as the scope of the particular div.

**modules**

Each module has its own top-level scope, making them a really effective way of handling scope in Javascript. Things have to be explicitly imported and exported between modules to 

**using modules on localhost**
In order to test modular Javascript on `localhost`, you need to set up a server. This is because most browsers don't allow access to the local filesystem (for security reasons), and the way that modules are imported in JS will throw the following CORS error:

```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///path/to/file (Reason: CORS request not http).
```

The solution to this is to make a small HTTP server to serve your site. Have a look at `index.js` in the files to see it in action (and if you need a reminder of how HTTP servers work, go to [week 5]('https://webdevelopm.net/class5'))

This error doesn't occur when you host it online (as the files are being hosted *by* a server automatically), so you can just use the `docs/` folder like a normal static site.

(for those of you that have used react, this is basically react does for you)

**importing and exporting**

**spatial memory**  
  [memex](https://d2w9rnfcy7mm78.cloudfront.net/1369043/original_b888c6b8e3b634fb81dbdc1683458226.jpg?1508997923?bc=1)
  [memory palace](https://en.wikipedia.org/wiki/Method_of_loci)

**turtles**  
  [mindstorms](http://worrydream.com/refs/Papert%20-%20Mindstorms%201st%20ed.pdf)  
  [turtles online](https://turtleacademy.com/playground)  

**embodiment**
  [augmenting human intellect](https://www.dougengelbart.org/content/view/138)

**physical computing**  
  [painted earth](https://studiomoniker.com/projects/painted-earth)  
  [burble](https://umbrellium.co.uk/products/burble/)  
  [berlin key (via dan taeyoung)](https://www.are.na/dan-taeyoung/the-berlin-key-social-locks)

**collective intelligence**
  [placeastone.nl](https://studiomoniker.com/projects/place-a-stone)  
  [conditional design workbook](https://studiomoniker.com/projects/conditional-design-workbook)  
  [/r/place](https://draemm.li/various/place-atlas/) [twitch plays pokémon](https://en.wikipedia.org/wiki/Twitch_Plays_Pokémon)  
  [Bellingcat](https://www.bellingcat.com) [Europol stop child abuse images](https://www.bellingcat.com/news/2019/12/17/two-europol-stopchildabuse-images-geolocated-part-ii-cambodia/)

**second-order cybernetics**
  [thermostats](https://www.are.na/block/2967691)  

**participation**  
  [social resource project for tennis clubs](http://stephenwillats.com/work/social-resource-project-tennis-clubs/)
  [conversation is a cybernetic technology](https://arena-attachments.s3.amazonaws.com/4425709/75f4ffd2c8c73551f1214a9c53909491.pdf?1559967933) [tools of collective intelligence](https://urbanomnibus.net/2019/09/tools-of-collective-intelligence/)  


**pattern languages**  
  

**'smart' cities**  
  [the architecture machine group](https://arena-attachments.s3.amazonaws.com/5784079/679e129c74aa087a9b40fd7d66a3d9ff.pdf?1577377138) [soft architecture machines](https://www.pangaro.com/cmucode2019/negroponte-softarchitecturemachines.pdf) [SEEK](http://cyberneticzoo.com/robots-in-art/1969-70-seek-nicholas-negroponte-american/)  
  [the fun palace](https://www.bcchang.com/transfer/articles/2/18346584.pdf)  
  [sidewalk labs](https://www.sidewalklabs.com)
  [local codes](https://publicknowledge.sfmoma.org/local-codes-forms-of-spatial-knowledge/) [interfacing urban intelligence](https://placesjournal.org/article/interfacing-urban-intelligence/)  
  [smart enough?](https://smartenoughcity.mitpress.mit.edu)

**dynamicland**  
  [seeing spaces](http://worrydream.com/SeeingSpaces/)  

### in class assignment

1. 

2. rewrite X as an arrow function

3. add a new module called 'people', that exports an array of people. 

4. once you've got people importing properly, add some people into the park randomly at the same time the plants are generated.

5. write a function that moves the people around every n seconds.

### assignment
*due {{page.assignment-due}}*<br>
{{page.assignment}}

**What kind of things should I be thinking about?**
At this point, you should be refining a model of the system that you're building. While (likely) more complex than the system you're simulating, Francis Tseng and Fei Liu's documentation for their project [*Humans of Simulated New York*](https://frnsys.com/hosny/)

### readings
{{ page.readings }}


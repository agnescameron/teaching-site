---  
layout: hunter_post  
title: what's this 
permalink: /class11/  
tags: 
readings: bret victor, Nicky Case [*how to simulate the universe in 134 easy steps*](https://blog.ncase.me/how-to-simulate-the-universe-in-134-easy-steps/)
description: welcome to scope!
assignment: start developing your final project in earnest, and document your progress as you go along. start by thinking about the basic infrastructure. What requests will you make? Can you build a minimal prototype that performs most of these tasks? come to next class with *at least* one aspect of the system prototyped.
assignment-due: 04/26
---  

### check in
Everyone presents their final project plans in detail.

We now have 4 classes left before the final crit, and I'm going to use them to explore some code ideas that people wanted to cover, by building minimal simulations that use some of these, along with some notes. This week is scope, arrow functions and modules. 

I've made a demo simulation that we'll develop over the next couple of weeks, which includes a number of different ideas. It's a simulation of foraging for herbs in the park, which I've been doing over the past few weeks. So far, it's pretty simple (you just pick herbs and put them in a bag), but will become more complex as we add in different ideas.

The code for this demo can be downloaded [here](https://github.com/agnescameron/foraging-sim), or using:

```
git clone https://github.com/agnescameron/foraging-sim.git
cd foraging-sim
```


### lecture: questions of scope

In this class, we're going to take a closer look at *scope* in Javascript: when and how different variables are made available in a program. We'll discuss the difference between global and local scopes, talk about `this` and function invocation, and we'll also cover modules.

We're onto the kind of code that, if you've been comfortable with the material covered so far, this is a good time to think about and improve the way you write code. Modular syntax can be a really useful tool in writing larger and more efficient, elegant projects, and hopefully can also save you a lot of time!

If you've found the class material so far challenging, however, you don't *need* to use any of these ideas to make your final projects. However, it's good to know about them, and these notes aren't going to go anywhere.

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

**returning**

Because variables are locally scoped in functions, when we want to get a locally scoped variable *out* of a function, we need to `return` it.


A)
```
function add(a, b){
	const sum = a + b;
}

add(10, 11)
console.log(sum)
```

B)
```
function add(a, b){
	return a + b;
}

const sum = add(10, 11)
console.log(sum)
```

In the above example, A) doesn't work, because `sum` is locally scoped to the function. B) uses the `return` keyword, allowing the function to 'return' a value: in this case, the sum of the 2 numbers. By declaring the function result equal to a variable, the value calculated *inside* the function can now be used elsewhere.

[**the this keyword**](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)

What is *this*? We've seen it around before, often when we execute event methods:

```
$('div').click(function(){ console.log($(this).id) })
```

In JQuery, `this` refers to the DOM element that is tied to the event listener. Using `$(this)` selects the object that was interacted with, and can be used to manipulate its properties. JQuery's `this` is actually a little special, as we'll see below.

More generally in Javascript, `this` is pretty slippery as the rules for how it's defined change depending on how something is called. We won't look at all of these today, but [this blog post](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/) has a really good overview. 

The `this` keyword refers to the current context that the function is operating in. In most normal function invocations in Javascript, `this` refers to the Global context.

```
function printThis(){
	console.log(this);
}

console.log(this);
printThis();
```

Will print the *same* context each time.

For object methods, this is different:

```
const myObject = {
  printThis: function() {
    console.log(this);
  }
};
const message = myObject.printThis();
```

Now, it prints the name of the object method, instead of the function.

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
this function takes 2 arguments (`a` and `b`) and returns their sum. This is a much more syntactically elegant version of what we had above.

Arrow functions *do not have* their own execution context: it's simply inherited from wherever the function is called. Thus, `this`, and any arguments, will be the *same* as in the parent function.

**when is an arrow function a great idea?**

1 *lists*

If you have a list, an arrow function is ideal!

arrow function + array method = a great combination:

```
const words = ['hello', 'WORLD', 'Whatever'];
const lowercaseWords = words.map(word => word.toLowerCase());
console.log(lowercaseWords);
```

Remember that [list of useful array methods](https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230) from a few weeks back? All of these use arrow functions.

2 *promise chains*

Arrow functions are also really useful in promise chains (and, indeed, we've already met them in `fetch` requests). Here's the `fetch` request [from the notes](https://webdevelopm.net/fetch_intro/).

```
fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c0d72b078c4f27a37169a2a3638dad3e/42.3601,-71.0589")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
```

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

[**ES6 modules**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

Each module has its own top-level scope, making them a really effective way of handling scope in Javascript. Things have to be explicitly imported and exported between modules to use them, meaning there is far less confusion caused by global variables.

Some JS frameworks, like Node, and React and Vue all use modules by default: browser compatibility for modules, however is quite recent (and is still not supported by Internet Explorer).

For this part of the tutorial, we're going to look at the simulation demo. For an alternate (and more extensive) tutorial, [MDN's JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) notes are really good.

In order to use a JS file as a module in HTML, use the following syntax:

```
	<script type="module" src="assets/js/park.js"></script>
```

This will include the 'top-level' JS module `park.js` in my HTML.

(NB: importing jQuery as an ES6 module is [a little fiddly](https://stackoverflow.com/questions/34338411/how-to-import-jquery-using-es6-syntax) and I haven't done it here, instead included it above the `park` script in a regular script tag.)

**importing and exporting**

Let's open up `park.js`. At the top, we can see the following line:

```
import { plants } from './lib/plants.js';
```

This imports a variable named plants, from another JS file. Note that `plants.js` is never included in the HTML file! Instead, it's imported as a separate module.

If we look inside `plants.js`, we see the following:

```
export const plants = [
	//plant info
]
```

Let's create a new variable inside `plants.js` (say, `vegetable`):

```
const vegetable = 'carrot'
```
If we try and log both `plants` and `vegetable` in the main code, we see the following: `plants` is printed successfully, but `vegetable` is undefined. Vegetable is *global* in `plants.js`, but that scope is *not transferred* to `park.js`. Instead, we need to explicitly export and import it:

`plants.js`:
```
export const vegetable = 'carrot'
```

`park.js`:
```
import { plants, vegetable } from './lib/plants.js';
```

**exporting functions**

Just like variables, functions can also be exported. Try exporting this from `plants.js`

```
export function printPlant(plant) {
	console.log(plant)
}
```

**strict mode**

Modules automatically use `strict mode`, a mode in Javascript that adds in some rules to prevent ambiguous and buggy code. [This guide](https://yuiblog.com/blog/2010/12/14/strict-mode-is-coming-to-town/) gives a summary of all of the rules that exist in strict mode: the main one that causes errors when you start working in strict mode is that you aren't allowed to use a variable without declaring it first.

In vanilla JS, it's possible to (though very inadvisable) to do:

```
num = 3
```

This will create a *globally scoped variable* (even if this statement appears *inside* a function) called `num`, equal to 3. If you do this in a module, it'll give you an error. (this is one of the reasons that JS programmers prefer modules)

If we add such a line to our `printPlant` function from before:
```
export function printPlant(plant) {
	console.log(plant)
	vegetable = 'carrot';
}
```

We see the following:
```
ReferenceError: assignment to undeclared variable
```

**using modules on localhost**
In order to test modular Javascript on `localhost`, you need to set up a server. This is because most browsers don't allow access to the local filesystem (for security reasons), and the way that modules are imported in JS will throw the following CORS error:

```
Cross-Origin Request Blocked: 
The Same Origin Policy disallows reading the remote 
resource at file:///path/to/file 
(Reason: CORS request not http).
```

The solution to this is to make a small HTTP server to serve your site. Have a look at `index.js` in the files to see it in action (and if you need a reminder of how HTTP servers work, go to [week 5]('https://webdevelopm.net/class5'))

This error doesn't occur when you host it online (as the files are being hosted *by* a server automatically), so you can just use the `docs/` folder like a normal static site.

### in-class assignment

The code for this assignment can be downloaded [here](https://github.com/agnescameron/foraging-sim), or using:

```
git clone https://github.com/agnescameron/foraging-sim.git
cd foraging-sim
npm install
```

To run the code, do:

```
node index.js
```

To complete this assignment, you should *each* try the code out, but you should work on the problems collectively, and make sure that everyone is on the same page. If one person is stuck and you understand, try helping them before you call me over.

1. As a group, go through the code. To ensure you understand how it works, try the following:
	* check that the code is running on `localhost:3000`
	* instead of rendering the plant symbols in the main screen, make the code render the names of the plants
	* change the color of *one* of the plants to red, by editing the `plants.js` module
	* print the name of each plant every time a plant is clicked on (note: you *do not* need to add a new function for this, look at the functions that are already there)

	If your group has issues with these, call me over and I will help.

2. Create a new module, `people.js`, that contains an array of objects called `people`. Each person in the array should be represented by an objecy, with a name, and an emoji that represents them. Import this array into `park`, and randomly add people at the same time as the plants are grown. Use the `plants` module as a guide.

3. Replace the contents of `countPlants` (line 12) with a *single-line arrow function*. `countPlants` takes in the name of a plant, and calculates the number of plants of that type in the bag. (clue: have a look at the `filter` array method)

4. instead of having it as a global variable, make `bag` into its own module, and import it into `park`. (if you get stuck, [this stack overflow question](https://stackoverflow.com/questions/34862600/global-variables-alternative) should help)

5. replace `countPlants` with a function that calculates the totals for *all* of the plants in the bag, again using an arrow function (clue: have a look at the `reduce` array method). This function should return an array, each element of which should be an object containing the plant name, and the number of that plant. Display *this* information in the bag display, rather than the current list.

### assignment
*due {{page.assignment-due}}*<br>
{{page.assignment}}

**What kind of things should I be thinking about?**
At this point, you should be refining a model of the system that you're building. While (likely) more complex than the system you're simulating, Francis Tseng and Fei Liu's documentation for their project [*Humans of Simulated New York*](https://frnsys.com/hosny/)

### readings
{{ page.readings }}


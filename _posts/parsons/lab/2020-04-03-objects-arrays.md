---  
layout: parsons_post  
title: objects and arrays
permalink: /lab11/  
categories:   
tags: [JSON, XML] 
assignment: 
description: In this class we'll explore how to store, transform and transmit knowledge in the form of objects and arrays. We'll also take a first look at 'iterators'
tutorial: JSON
assignment-due: 
readings: Kent Beck, [*A Laboratory For Teaching Object-Oriented Thinking*](http://worrydream.com/refs/Beck%20-%20%20A%20Laboratory%20For%20Teaching%20Object-Oriented%20Thinking.pdf)
---  

> *The class name of an object creates a vocabulary for discussing a design. Indeed, many people have remarked that object design has more in common with language design than with procedural program design. We urge learners (and spend considerable time ourselves while designing) to find just the right set of words to describe our objects, a set that is internally consistent and evocative in the context of the larger design environment.*  
> Kent Beck, [*A Laboratory For Teaching Object-Oriented Thinking*](http://worrydream.com/refs/Beck%20-%20%20A%20Laboratory%20For%20Teaching%20Object-Oriented%20Thinking.pdf)

{{page.description}}


## in-class exercises

1. In your groups, decide on a collection of objects you're interested in. They could be real or imaginary, physically present with you, or somewhere else. These objects should all have *shared properties from which they can be differentiated*: in the fruit example, we could use color to tell them apart, but we could also use taste. Take at least 5 such objects, and compose them as an array of JSON objects. Use [this guide to JSON syntax](https://www.w3schools.com/js/js_json_syntax.asp) to help you.

Here is the fruit example for guidance:

```
var fruits = [
	{
		name: "blueberry",
		color: "blue",
		flavor: "tart",
		shape: "round"
	},

	{
		name: "banana",
		color: "yellow",
		flavor: "sweet",
		shape: "curved"
	}
]
```

2. Once you have your array of JSON objects, try displaying them on a page. Start by trying to log them to the console in a `for` loop. Once you have that working, try appending them as HTML elements, using the Flexbox code below.

3. Once you have a working page, everyone in the group should commit the code to git, and link to each other's pages.

4. (extension) On your own pages, experiment with different ways of arranging your elements: you could try out different designs, or use information about the objects themselves (e.g. colour) to change the CSS properties of the element. 

## notes: object orientations

<iframe width="939" height="587" src="https://www.youtube.com/embed/PyY3Ys3Z7fU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hi friends, excited to see you all again on friday, and to explore this new format. Here are some notes!

Let's recap first what we've learned about Javascript so far:

* we can use Javascript to modify the Document Object Model, an ordered representation of HTML and CSS that your browser creates when it renders a page
* Javascript code is often written in terms of re-usable blocks of code called *functions*
* functions take in input in terms of *variables*, and produce an output based on what the code inside them does

(we learned some other stuff too, but these is the important bits for now)

This class is about arrays, iteration and about Javascript Object Notation (JSON). These are ways of storing and transmitting information that are central to the Javascript language (arrays exist in other languages, but JSON is a JavaScript thing).

If any of the sections below are unclear (or you'd rather see some different examples), I've linked the corresponding W3Schools notes in each title. 

To play along with these examples, open up a web browser and paste them into the console!

### [Variables](https://www.w3schools.com/js/js_variables.asp)
A variable is like an 'empty box' used to store a piece of information. We've encountered these already in functions: in the function below, `topping1` and `topping2` are both variables created by the function to store the pizza toppings the function gets called with.

```
function makePizza(topping1, topping2) {
	console.log("hi yeah yeah I'd like to order a large pizza with ", topping1, topping2)
}
```

When we call the function `makePizza`, we *pass* those variables to the function using the round brackets.

```
makePizza("anchovies", "parsons school of design")
```

Will cause the line below to print to the command line:

```
hi yeah yeah I'd like to order a large pizza with anchovies and yeah also some parsons school of design
```

Variables can also exist outside of functions. In order to make them exist, we need to *declare* them, which we do with the keyword `var`. `var` is a heads-up to the browser that a variable is coming, and it means we can store values in our code without having to type them out in full each time.

The code below will do the same thing as calling the function we had before:

```
var topping1 = "anchovies"
var topping2 = "parsons school of design"
console.log("hi yeah yeah I'd like to order a large pizza with", topping1, topping2)
```

The variable `topping1` *stores* the value `"anchovies"`, and the variable `topping2` stores `"parsons school of design"`. Until you tell the browser otherwise, those are the values those variables will contain!

### Arrays
Arrays give us a way of storing multiple values inside a single variable. Neat! (is it? turns out: yes)

One nice thing about being able to store multiple values is that, if you have a group of related variables, you can move them around together rather than storing each one in a separate variable. This gets useful when we want to handle a lot of things at once. Consider our earlier function. What if, instead of two toppings, we had 5?

To write these as an array, we still use `var`, but to collect all the values together we wrap them in square brackets, separated by commas:

```
var toppings = ["anchovies", "parsons school of design", "parsley", "cheese", "pencils"]
```

Now, if we want to use the array in our code, we could try:

```
console.log("hi yeah yeah I'd like to order a large pizza with ", toppings)
```

This prints:

```
hi yeah yeah I'd like to order a large pizza with (5) ["anchovies", "parsons school of design", "parsley", "cheese", "pencils"]
```

This is... OK, but not quite what we want. Ideally, we'd like to get each separate array *element*, then use it in our code. Luckily, arrays have a way to do this called the array *index*. The index is just the number of that element in the array. Indexes count up from 0: so, anchovies is at position 0, and pencils is at position 4. *not 5!!*

To select an element from an array, use the name of the array (in this case, `toppings`), followed by a square bracket containing the index of the element that we want. So: `toppings[0]` is `"anchovies"`, and `toppings[3]` is `"cheese"`.

To use this in our code:

```
console.log("hi yeah yeah I'd like to order a large pizza with", toppings[0], toppings[1], toppings[2], toppings[3], toppings[4])
```

### Iteration

This is nice, but what if the array of toppings had a different number of elements each time? Let's find out. Another person is ordering a pizza, and *their* toppings array is as follows:

```
var toppings = ["spaghetti", "cornflakes", "cheese", "melon", "Abba", "chicken"]
console.log("hi yeah yeah I'd like to order a large pizza with", toppings[0], toppings[1], toppings[2], toppings[3], toppings[4])
```

This will print:

```
hi yeah yeah I'd lile to order a large pizza with spaghetti, cornflakes, cheese, melon, Abba
```

Chicken is at `toppings[5]`, so never gets printed! What happens if we have a shorter array than we're expecting?

```
var toppings = ["honey", "scrambled eggs"]
console.log("hi yeah yeah I'd like to order a large pizza with", toppings[0], toppings[1], toppings[2], toppings[3], toppings[4])
```

We get:

```
hi yeah yeah I'd like to order a large pizza with honey scrambled eggs undefined undefined undefined
```

Oof! Oh no! Now the last 3 elements of our array have *not been defined*, our browser freaks out and doesn't know what to do. This is a really common problem in Javascript: we want to do something to some things (here, print them one by one), but we can't be sure what the things are, or how many we have. Variables take care of the first part, as they allow us to use *different* values in the same code. But: how do we account for different numbers of things? The answer is *iterators*.

Iterators are made for doing things to groups of objects, or for performing some action an indeterminate number of times. They are pretty simple, but they are what allow us to do some pretty complex things. Alongside functions, iterators are a really important building block in writing Javascript.

The most general kind of iterator is something called a ['for loop'](https://www.w3schools.com/js/js_loop_for.asp). These allow us to run the *same code* in a loop several times on different values, without having to manually write it out each time. For loops all look like this:


```
for(var i=0; i<6; i++){
	console.log(i)
}
```

What is this doing? Let's take a look inside the for loop's round brackets.
* first up: we create a variable called `i`, and set it equal to zero
* next: this is our *condition*. This tells the browser that, so long as `i` has a value less than 6, it should run this code.
* last: `i++` -- this is a short way of telling the browser to add 1 to the value of `i` every time the loop runs

This will print:

```
0
1
2
3
4
5
```
In our console. It stops before it ever gets to 6!

Let's try this out on our array:

```
var toppings = ["spaghetti", "cornflakes", "cheese", "melon", "Abba", "chicken"]

console.log("hi yeah yeah I'd like to order a large pizza with")
for(var i=0; i<6; i++){
	console.log(toppings[i])
}
```

Selects the element at position `i` each step. So, when `i=0`, in the first step, we get `toppings[0]`, which is `spaghetti`. When `i=5`, we get `chicken`:

```
hi yeah yeah I'd like to order a large pizza with
spaghetti
cornflakes
cheese
melon
Abba
chicken
```

What if we add an element to our array? The whole point of having a for loop was to be flexible, remember? Turns out, we can use the method `toppings.length`. This will give us the *length* of the array.

```
console.log("hi yeah yeah I'd like to order a large pizza with")
for(var i=0; i<toppings.length; i++){
	console.log(toppings[i])
}
```

This is pretty ok! But we've been putting a lot of stuff in the console now, so how about we try making some stuff that visitors to our website can see instead? For *this*, we're going to make a super-simple html page, and link it to a javascript file called `main.js`. Let's also include jQuery to make our lives easy.

```
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script type="text/javascript" src="main.js"></script>
</head>
<body>

<div id="ingredients"></div>

</body>
</html>
```

Next, instead of printing stuff to the console in our for loop, let's try adding it to our page! We're going to use jQuery to do this:

```
for(var i=0; i<toppings.length; i++){
	$('#ingredients').append(toppings[i])
}
```

check it out!

### ForEach

Because we're using arrays, however, there are also some 'built-in' methods we can use that make our code pretty light-weight. The [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method is one of a family of Javascript 'array methods' that lets us write an anonymous function to handle our elements:

```
toppings.forEach(function(topping) {
		$('#ingredients').append(topping)
	})
```

This follows a similar pattern to our jQuery `click` function from last week. It uses an *anonymous function*, inline, that takes in the variable *element*. For each element in the array `toppings`, it will run this code on that element. This does exactly the same thing as our for loop, but it's a bit neater!

Why don't we have a go at doing something a little more interesting. Remember flex-boxes from a few weeks ago? Let's make one!

```
<style type="text/css">
	#ingredients {
		display: flex;
	}
</style>
```
Now, let's switch up our function so that it's adding divs to our page!

```
toppings.forEach(function(topping) {
		$('#ingredients').append("<div>" + topping + "</div>")
	})
```

Now, we get out a page full of flex-boxes. Sweet! Well. kind of ugly... We can style it though: let's add to the style, and give all the divs a class.

```
	.box {
		border: 2px;
		margin: 5px;
		padding: 10px;
	}
```
```
toppings.forEach(function(topping) {
		$('#ingredients').append("<div class=box>" + topping + "</div>")
	})
```

### Objects
Arrays are pretty cool, and honestly do a lot of useful work in Javascript. However, when it comes to *structured data* -- collections of things that exist in a hierarchical manner -- then we want to use something a bit more ordered. The way we do this is using Javascript Object Notation [(JSON)](https://www.json.org/json-en.html). An object you have *all met already* is the DOM, or the Document Object Model. This stores a representation of the page as a set of structured relations: each part of the page has particular properties, which in turn have their own sub-properties.

We're going to think about objects as *representations of things in terms of their properties*. To explain how objects work, we're going to think about fruit. If you were trying to explain how to tell the difference between different fruits, you might refer to the color, flavor and shape of the fruit. For example:

> "A banana is yellow, sweet and curved, whereas a blueberry is blue, tart and round"

To represent this information in JSON, we can do the following:

```
var blueberry = {
	color: "blue",
	flavor: "tart",
	shape: "round"
}

var banana = {
	color: "yellow",
	flavor: "sweet",
	shape: "curved"
}
```

Now, when we want to know the properties of a fruit, we can get them using *dot notation*. This is something you've encountered before when you were getting parts of the DOM, and it works no different here.

```
console.log(banana.color)
```

prints `yellow`. Try getting the flavor of the blueberry!

We can use these properties in our functions. For example, let's make a function called `describeFruit()`:

```
function describeFruit(fruit) {
	console.log("this fruit is", fruit.color, "and tastes", fruit.flavor)
}
```

If we call the function:

```
describeFruit(banana)
```
Prints: `this fruit is yellow and tastes sweet`

That's it for now! Have a play with this code and see you all in class, where we'll do some assignments together!

Last of all: we can arrange these into an array! So, if you try:

```
var fruits = [blueberry, banana]
console.log(fruits[1].color)
```

What would you expect to get?




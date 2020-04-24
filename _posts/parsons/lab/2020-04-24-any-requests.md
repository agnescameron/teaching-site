---  
layout: parsons_post  
title: work session 
permalink: /lab14/  
categories:   
tags:  
assignment: 
description: pair programming and debugging on final projects
assignment-due:
readings: 
---  

## tutorial: arrays and objects tips n tricks

Let's recap:  
All of you by now (yes, you!) have collected an *array of objects*. Each of your objects in your object-arrays has a number of properties. Some of these properties are equal to *strings* (like `'potato'` or `'In the end, I knew that I was in love with his pot-plants, more than I was in love with him...'`), some are *numbers* (like `5`), some are equal to *arrays* (like `['spoons', 'spoons', 'spoons']`), and some are equal to *yet more objects*, with their own properties, etc etc.

We know that we can
- put objects in arrays (all of you have an array of objects)
- put objects in objects
- put arrays in objects

Objects are great for:
- storing structured information about a single 'thing' in terms of its properties

Arrays are great for:
- storing multiple related things
- filtering, searching, sorting and manipulating those things

Thus, arrays of objects are good for:
- storing a set of related objects, all of which have particular properties
- using array methods to filtering, searching, sorting and manipulating those things in terms of their properties

A reminder of the requirements for your final project:
- your page must display an object collection
- it must display the objects in *at least* 3 different ways
- if we add an element to your object collection (with the same properties as the objects that are currently there), the page *should not* break, and that object *should* be displayed

In this class, I'll go through a bunch of array tips and tricks that will allow you to very effectively manipulate your elements! We'll be using our old friend, the fruit array:

```
var fruits = [
	{
		"name": "blueberry",
		"color": "blue",
		"flavor": "tart",
		"shape": "round"
	},

	{
		"name": "banana",
		"color": "yellow",
		"flavor": "sweet",
		"shape": "curved"
	},

	{
		"name": "pineapple",
		"color": "yellow",
		"flavor": "tangy",
		"shape": "columnar"
	},
]
```


### picking random elements from arrays

We want a random fruit! Let's recall `array.length`, the array method that lets us get the length of any array. What's nice about this is that it works however many elements are in the array, so you can avoid having to hard-code values (important for your final project's third requirement).

If we want to pick a random fruit, what we really want to do is randomly pick an index in our array that's somewhere between 0, and the length of fruits.

If we use `Math.random()`, this will give us a random number between 0 and 1. If we multiply `Math.random()` by `fruits.length`, this will give us a random number betwee 0, and the length of `fruits`. This is pretty good, but it'll give us a *decimal* (called a `float` in code-speak) where we want a whole number. We also want to round *down*, as we don't want the actual length of the array, as the elements start from 0.

So, to put it all together:

```
var randomFruit = fruits[Math.floor(Math.random()*fruits.length)]
```

### finding things in arrays

[**array.includes**]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes))

Check if an array includes an element. Note that you have to use the *exact* value of the element you're trying to select.

```
var fruit = {
	"name": "blueberry",
	"color": "blue",
	"flavor": "tart",
	"shape": "round"
},

var fruitName = "blueberry"


fruits.includes(fruit) //true
fruits.includes(fruitName) //false
```

[**array.indexOf**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

This gives us the *location* of an element in an array

```
var fruit = {
	"name": "blueberry",
	"color": "blue",
	"flavor": "tart",
	"shape": "round"
},

fruits.indexOf(fruit) //0
```

[**array.filter**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

What if we wanted to find *objects with a particular property* in an array? We'd want to use `array.filter` (`array.includes` is gonna match the *whole* thing, not part of the thing).

These are in the notes from last class too:

```
var filteredArray = fruits.filter(fruit => fruit.color === 'yellow');
```

This uses something called an arrow function, which is short and sexy, but we can also happily write it like this:

```
var filteredArray = fruits.filter(function(fruit){ return fruit.color === 'yellow' });
```

In both cases, `filteredArray` is a new array that contains *just the entries for which the statement was true*.

### doing something to each element in an array

We know from a few classes ago now about the `for` loop, which is a nifty beast that is 1) totally correct and valid Javascript, and 2) universally usable. `forEach` is a slightly more lightweight way of doing the same job, but I'll stress that everything that can be done with `forEach`, and more, can be done with a `for` loop. Your code will get much shorter though.

The thing with `forEach`’s syntax is that, unlike in a for loop, you’re creating a new variable, and that variable stores one element of an array at a time, not a whole array.

So, if i have an array fruits = [apple, banana, orange] , and I write the following:

```
fruits.forEach(function(fruit){
    console.log("I like " + fruit.name)
})
```

In other words, `fruit` here stores the value of each array element in turn, then the `forEach` loop runs code on them. Will print the name of each element in turn. *What I call the variable will not change how the function works!!*


### selecting parts of arrays

If we want to copy a part of our array, we can use the `array.slice()` method. This will copy from a beginning index, to an end index (which, if not specified, will automatically be the end of the array).

```
var fruits2 = fruits.slice(0) // gets the whole array
var fruits3 = fruits.slice(1, 2) //gets the elements from 1 to 2
var fruits4 = fruits.slice(-1) // gets the last element in the array
```


### [sorting things in arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

The sort function is pretty neat, but takes a bit of getting used to. It's probably the most complicated thing we'll cover today. What I would say is that it makes most sense in cases where you have some *numerical* value, or you'd like to sort things in alphabetical order. Sorting by things where the category is otherwise quite subjective (e.g. "I'd like to sort these by colour in order of the rainbow"). One way to get around this is, if you have multiple metrics along which you'd like to sort your objects, give each object a numerical value.

For example, I'd like to sort my fruit by deliciousness. This is obviously subjective (we'd all come up with different answers, let alone a poor browser), so I will add in some scores to help us along:


```
var fruits = [
	{
		"name": "blueberry",
		"color": "blue",
		"flavor": "tart",
		"shape": "round",
		"deliciousness": 6
	},

	{
		"name": "banana",
		"color": "yellow",
		"flavor": "sweet",
		"shape": "curved",
		"deliciousness": 8
	},

	{
		"name": "pineapple",
		"color": "yellow",
		"flavor": "tangy",
		"shape": "columnar",
		"deliciousness": 10
	},
]
```

Syntax:

The simplest way to use sort is to use its default functionality: simply `array.sort()`

```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);
// expected output: Array [1, 100000, 21, 30, 4]
```

Notice that the second output doesn't get sorted in terms of the value, but just the number it started with. This will be *no good* for our fruits array! It'll score pineapple the lowest, when it is clearly the highest-tier fruit. *eugh* (we also have an array of objects!)

However, we're also allowed to make up our *own* sorting rules, instead of following the default ones. Like `filter`, this way of thinking can take a little bit of getting used to. We're going to run a small function *inside* the `sort`, and whatever that function returns *for two adjacent elements of the array* will determine what order they come in:

```
array.sort(comparisonFunction(a, b))
```

The rules (from Mozilla):

- If `compareFunction(a, b)` returns less than 0, sort a to an index lower than b (i.e. a comes first).
- If `compareFunction(a, b)` returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
- If `compareFunction(a, b)` returns greater than 0, sort b to an index lower than a (i.e. b comes first).

So: what if we wanted to sort our items numerically?

Let's put this into practice to get a *real* numerical sort on our `fruits`:

```
//sort by deliciousness
fruits.sort(function(a, b) {
  if (a.deliciousness > b.deliciousness) {
    return 1;
  }
  if (a.deliciousness < b.deliciousness) {
    return -1;
  }
  return 0;
});
```

If fruit `a` is *more* delicious then fruit `b`, it'll get bumped up the array. If it's *less* delicious, it'll get bumped down. And, if neither of these things are true, it'll retain the same position.

We can actually write this out in a much shorter way using an *anonymous function*

`fruits.sort(function(a, b){
	return a - b
})`

Here, if `a > b`, it'll `return > 0` (so `a` will get bumped up). And vice-versa for `a < b`.

If we wanted to sort *alphabetically* (e.g. by name, or another string property), we still use `>` and `<` symbols (lol, JS), though we can no longer use subtraction.

```
//sort alphabetically
fruits.sort(function(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
```

### adding elements to arrays

This is pretty simple and sweet (`sort` now seems like an unpleasant fever dream...)

I have another fruit, and I want to stick it onto the end of my array:

```
var papaya = {
	"name": "papaya",
	"color": "orange",
	"flavor": "delicate",
	"shape": "squash shaped",
	"deliciousness": 9
}
```

To add it to fruits, I simply do:

```
fruits.push(papaya)
```

Question for the audience: *did the variable have to be called papaya?*

### removing elements from arrays

Removing elements from arrays is always a little tricky to remember, as there is *not actually a dedicated function to remove a single element from an array*. `array.delete` is probably not your friend here!!! It will remove the value of and information about that element, but it will leave an empty space in the array, and it won't change the index of any of the other elements.

The method you probably *want* to use is `splice` (not to be confused with `slice`)! Say I wanted to rid the following array of the element `"kiwi"`. First, I need to find where `"kiwi"` is located, for which I'm going to use `fruits.indexOf`, like above:

```
var fruits = ["apple", "banana", "pear", "kiwi", "orange", "plum"]
var index = fruits.indexOf("kiwi")
```

What happens when we delete?

```
fruits.delete(index)

///this gives us ["apple", "banana", "pear", undefined, "orange", "plum"]
```

To remove, we use:

```
fruits.splice(index, 1)

///this gives us ["apple", "banana", "pear", "orange", "plum"]
```

This removes 1 element, from the position in the array.


## we are now extremely powerful!!

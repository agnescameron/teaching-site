---  
layout: parsons_post  
title: object orientations 
permalink: /lab13/  
categories:   
tags:  
assignment: 
description: this week we'll cover some more great material on objects and arrays
tutorial: cURL.
assignment-due:
readings: 
---  

## lecture: object orientations

Today is mostly for refreshing things that you'd like another look over, but also to add some funky object and array methods that'll make your life easier.

ask the audience: what would everyone want a refresher on?

<img src="../../assets/crayfish.png" width="500px"><br><br>

**objects in objects**

Think back to our fruit object array. It's all very well and good, but perhaps we want to store some more complex fruit meta-data without it gumming up all of our info. Let's just think about banana and blueberry:

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
	}
]
```

Perhaps, instead of just 'shape' and 'color', we might have a number of physical attributes, such as robustness (e.g. in transit) and size. In the interest of neatness, we could gather them into an object that nests *inside* our existing fruit object, with the parent property `physicalAttributes`. (note: gary is a heathen and puts spaces in his object properties, but that doesn't mean that you have to)


```
var fruits = [
	{
		"name": "blueberry",
		"color": "blue",
		"flavor": "tart",
		"physicalAttributes": {
			"shape": "round",
			"robustness": "delicate",
			"size": "small"
		}
	},

	{
		"name": "banana",
		"color": "yellow",
		"flavor": "sweet",
		"physicalAttributes": {
			"shape": "curved",
			"robustness": "delicate",
			"size": "large"
		}
	}
]
```

This is totally legal and pretty good practice (just remember to close all of your brackets correctly!). If we wanted to get one of these properties, we'd use dot notation to get them:

```
console.log('a ' + fruits[1].name + ' is ' + fruits[1].physicalAttributes.shape + ', ' + fruits[1].physicalAttributes.robustness + ' and ' + fruits[1].physicalAttributes.size)
```

There's another, perhaps even more useful thing we can do though, which is to nest *arrays* within objects. Perhaps you have a property -- say, recipes -- for which there might be multiple values. There is, after all, more than one thing you can do with a banana. Instead of having properties like `recipe1`, `recipe2` (very bad idea), this object property can be an array instead:


```
var fruits = [
	{
		"name": "blueberry",
		"color": "blue",
		"flavor": "tart",
		"physicalAttributes": {
			"shape": "round",
			"robustness": "delicate",
			"size": "small",
			"density": "low"
		},
		"recipes": ["blueberry pancakes", "oatmeal with blueberries", "blueberry jam"]
	},

	{
		"name": "banana",
		"color": "yellow",
		"flavor": "sweet",
		"physicalAttributes": {
			"shape": "curved",
			"robustness": "delicate",
			"density": "high"
		},
		"recipes": ["banana bread", "banana ice cream", "bananas on toast", "banana pudding"]
	}
]
```

Notice the comma after the end of the `physicalAttributes` curly braces! The rule is that every value in a JSON object (apart from the final one) is followed by a comma, whether it's a string, an array or an object!

What we've got here is an array of objects, where each object contains an array... and the arrays have different lengths! Let's try looking inside these using a for loop:

```
for(var i=0; i<fruits.length; i++){
	console.log('with ' + fruits[i].name + ' I can make:')
	for(var j=0; j<fruits[i].recipes.length; j++){
		console.log(fruits[i].recipes[j])
	}
}
console.log('wow! what a lot of recipes!')
```
What's going on here:
* we have the outer loop, iterating (with the number `i`) over the array of fruits
* we have the inner loop, that gets *the array of recipes from each fruit*, and then 

**iterating over objects**

What if we wanted to list the physical attributes, just like we listed the recipes? Turns out, we *can't* do the following:

```
for(var i=0; i<fruits.length; i++){
	console.log(fruits[i].name + ' has the following properties:')
	for(var j=0; j<fruits[i].physicalAttributes.length; j++){
		console.log(fruits[i].physicalAttributes[j])
	}
}
console.log('wow! what a great set of attributes these fruits have!')
```

That's because `physcialAttributes` isn't an array, it's an object!

If we want to iterate over an object's properties, we instead need to use a [`for... in` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in). This will get each of the properties, 

```
for(var i=0; i<fruits.length; i++){
	console.log(fruits[i].name + ' has the following properties:')
	for (var key in fruits[i].physicalAttributes) {
	    console.log(key + ": " + fruits[i].physicalAttributes[key]);
	}
}
```

A `for... in` loop allows us to create a variable `key`, which will hold each of our properties

If you're thinking 'this looks kind of inelegant, and not quite the correct way to use an object...' well, kind of! In general, it's a good idea to use objects for named properties that you'd like to query, and arrays for lists of items. However, there are also times where you need to iterate over objects, and it's good to know how. 


**searching**

Our array of objects is getting kind of complex now, and what would be really great is if we could search it. For instance, perhaps I'd like to find all the fruits that are a particular color.

In order to do this, I'm going to use an *array method*. Methods are just special functions that belong to objects (if we have time this class, I can also show you how to write your own). Arrays have a bunch of super useful built in methods that will save you a lot of time (and for loops) to know about! There is a great list (+ examples) [here](https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230).

In this case, I'm going to use a method called `filter`. Filter will 'filter' an array based on a particular criterion, that you specify in the method, and give you an array that *only contains* objects that meet the criterion. In this case, I'm going to extend the array a bit so that we have another yellow fruit.

```
var fruits = [
	{
		"name": "blueberry",
		"color": "blue",
		"flavor": "tart",
		"physicalAttributes": {
			"shape": "round",
			"robustness": "delicate",
			"size": "small",
			"density": "low"
		},
		"recipes": ["blueberry pancakes", "oatmeal with blueberries", "blueberry jam"]
	},

	{
		"name": "banana",
		"color": "yellow",
		"flavor": "sweet",
		"physicalAttributes": {
			"shape": "curved",
			"robustness": "delicate",
			"density": "high"
		},
		"recipes": ["banana bread", "banana ice cream", "bananas on toast", "banana pudding"]
	},

	{
		"name": "pineapple",
		"color": "yellow",
		"flavor": "tangy",
		"physicalAttributes": {
			"shape": "columnar",
			"robustness": "tough",
			"density": "high"
		},
		"recipes": ["upside-down cake", "pineapple surprise"]
	}
]
```

The line of code we're going to use to filter the array looks like this:

```
var filteredArray = fruits.filter(fruit => fruit.color === 'yellow');
```

This uses the `filter` method, returning the fruits where `fruit.color === 'yellow'` is true. If we run it in our console, `filteredArray` will be of length 2: it will contain `banana` and `pineapple`.

Try changing the values to `blue` and `red`: how many objects are in filteredArray now?

Now, we want to wrap this in a function, so we can search for fruits with different colors.

```
function searchByColor(color) {
	var filteredArray = fruits.filter(fruit => fruit.color === color);
	return filteredArray;
}
```

Try `searchByColor('yellow')`.

### Tutorial: {{page.tutorial}}

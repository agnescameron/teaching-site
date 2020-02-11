---
layout: hunter_post
title: javascript concepts
permalink: /js_101/
---

<style>
body {background-color: #ffb399;}
</style>


In each of these examples, we’re going to look at the example I covered in class, where I made an array of students, assigned them a favourite food, then picked one at random. This is *strongly related* to this week's assignment, where we have an array of cards, and we want to randomise them and then deal them out.

If you're unfamiliar with these ideas, I recommend you 'play along' with the examples: make an `index.html` file with a generic html template, and in the same directory, a file called `main.js`, including `main.js` in `index.html` using the script tag.


Your `index.html` file should look something like this:
```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>

</body>
  <script src="main.js"></script>
</html>
```

If you'd rather try a different format than this, the [first 6 JS classes on CodeAcademy](https://www.codecademy.com/learn/introduction-to-javascript) are a great interactive tutorial that will get you up to speed.

## 1: Javascript variables
In programming languages, variables give us a way of storing and labelling values. 

### the 'var' keyword
The simplest way to use a variable in Javascript is using the keyword `var`. When we use `var`, what we're telling the program is we're creating a new place to put something. 

For example:

```
var number = 10;
console.log(number);
```

Will print `10` to the command line (`console.log()` tells Javascript: 'print something to the console'). We have set the variable 'number' to the value 10. If you're running this yourself, open up the web inspector on `index.html`, and you should see it!

Once you've made a variable once, you don't need to make it again, and you can do things to it. For example:

```
var number = 10;
number = 6;
console.log(number);
```
Will print `6` to the command line. You can also change variables relative to themselves, so, for example:

```
var number = 10;
number = number-1;
console.log(number);
```
Will print `9`.

Numbers aren't the only kind of variable we can have in Javascript: we can also use strings of text (these are referred to as strings). Strings always come in quotation marks, so the program knows they're not a variable! e.g.

```
var text = "i had such a nice lunch today";
```

### arrays
If we want to deal with more than one variable at once, sometimes it makes sense to arrange them into something called an 'array'. This is particularly useful for lists of things.

For example, we could represent the people in the class as an array (for the purposes of this description, the only people in the class are vincent, mert, peter and dale)

```
var people = ["vincent", "mert", "peter", "dale"];
```

In arrays, values are separated by commas, and, like before, strings have to be in quotation marks. If we want to get a particular value from an array, we use something called an 'index', which gives us the value at a particular position. Arrays are indexed starting at 0 *not* 1, so:

```
console.log(people[0]);
```
Will print `vincent`, but:

```
console.log(people[4]);
```
Will give us an error like 'people[4] is undefined'. ono??! Why?! It's because our array elements are indexed 0, 1, 2, and 3. There is no element `people[4]`, and so the browser gets upset when we try to print it.

For more on arrays, [read this](https://www.w3schools.com/js/js_arrays.asp).

### objects
Arrays are great, but they can't always organise all the information we have. For example, it's all very well to know that these people are in the class, but what if I also wanted to know their favourite foods?

Objects give us a way of collecting together a number of *properties* that define a 'thing.' so, instead of just having a list of names, I can make a list of objects. In this case, my objects are *students*. Students are things with properties: these students have the properties `name` and `food`.

If we make a single object, it would look like this:

```
var student = {
  "name": "vincent",
  "food": "banana"
}
```

To look inside an object, we typically use something called 'dot notation'. Dot notation allows us to select a single property of an object, and get its value.

```
console.log(student.food);
```

Will print `banana` to the console.

But our class has more than one student in it!

Objects are great, because, like any other Javascript variable, we can put them in an array. So: we can represent our class as an *array of students* (which is, literally, true, though I think you were lying about the favourite foods).

```
var students = [
  {
    "name": "vincent",
    "food": "banana"
  },
  {
    "name": "mert",
    "food": "apples"
  },
  {
    "name": "peter",
    "food": "pineapples"
  },
  {
    "name": "dale",
    "food": "apple pie"
  },
]
```

The same ideas that applied to arrays before still apply. After declaring this array of objects, we can do:

```
console.log(students[2]);
```

Will print:

```
  {
    "name": "peter",
    "food": "pineapples"
  },
```

We can also use the dot notation *with* the array notation:

```
console.log(students[1].food);
```
Will print `apples`. Nice. I love apples.

For more on objects, [read this](https://www.w3schools.com/js/js_objects.asp).

## 2: Loops

Loops are a quick way of applying the same code to every element in an array or an object. There are lots of different kinds of loops, but the ones that you use most commonly are for loops. For loops always follow the same structure: 

```
for(var i=0; i<10; i++){
  // code goes here
}
```
* the `for` keyword tells the computer that you're about to run in the for loop. 
* `(var i=0; i<10; i++)` does a few things. It creates a new variable `i` at the start of the loop. Then, it tells the computer to add 1 to it every time the loop runs, while it is less than 10 (when it gets to 10, the code won't run any more, and the program will move onto the next thing).
* the curly braces `{ }` we'll meet again in a minute. These are used to enclose pieces of code that will be doing the work in this loop. They're also used to contain the code in functions. This code will run 10 times.

So, if we have

```
for(var i=0; i<10; i++){
  console.log(i);
}
```
This will print `0 1 2 3 4 5 6 7 8 9` to the terminal (it won't print 10, as 10 is not 'less than' 10). We can also do something more complicated, for instance:

```
for(var i=0; i<10; i++){
  i=i*2;
  console.log(i);
}
```
will print `0 2 4 6 8 10 12 14 16 18 20`.

Now we have nearly enough information to print all the elements in our array `students` from the example before. As our array has only 4 elements in it, we *could* do this:

```
for(var i=0; i<4; i++){
  console.log(students[i]);
}
```

However! If the array changes in length, we'd have to go back and change the counter in the for loop to match every single time. We don't want to do that, so instead we can get the length of the array using the `length` property. This will give us the length of the array.

```
for(var i=0; i<students.length; i++){
  console.log(students[i]);
}
```

will print:

```
  {
    "name": "vincent",
    "food": "banana"
  }

  {
    "name": "mert",
    "food": "apples"
  }

  {
    "name": "peter",
    "food": "pineapples"
  }

  {
    "name": "dale",
    "food": "apple pie"
  }
```

If we just want the names, we can do:

```
for(var i=0; i<students.length; i++){
  console.log(students[i].name);
}
```

which will print:
```
vincent
mert 
peter 
dale
```

## 3: Functions
Now we're able to print the names of our students, what we want to do is to be able to pick one at random. In order to do this repeatedly, we want to write a function.

Functions are pieces of code that we're able to re-use in different parts of the program. A for loop is really just a special kind of function that comes built in to Javascript, and functions follow a very similar syntax.

This is an example of a typical 'function declaration': the part of the code that defines what the function does.

```
function myFunction( <variables> ) {
  // code goes here
}

```

* the word `function` tells the program it's looking at a function rather than anything else (this is like writing `var`)
* `myFunction` is the name of the function, which can be anything we like
* the `variables` here are variables that our function is going to use. Sometimes we don't need to pass the function any variables because they already exist. Other times, the function might work differently depending on the variables that we include here.
* like in the for loop, we put the code we want to run inside the function

Functions don't run by themselves: when we want a function to run, we need to call it from somewhere in the code, passing it the variables we want it to use.

```
myFunction( <variables> );
```

To see this working, we can define a really simple function, `multiplyByTwo`. `multiplyByTwo` will take in a number as a variable (we call this the 'argument' of the function) and output 2x that number. So:

```
function multiplyByTwo( number ){
  number = number*2;
  console.log(number);
}

multiplyByTwo(3);
multiplyByTwo(4);
```

Will print:

```
6
8
```

to the command line.

We can also make a function 'return' a variable instead of just printing something. This lets us continue to use the variable after the function has changed it.

```
function multiplyByTwo( number ){
  number = number*2;
  return number;
}

var multiplied = multiplyByTwo(3);
console.log(multiplied);
```

Will print `6` to the console.

### randomness
For our function, we want to pick an element at random from the array. In this case, that means randomly picking an index value, between 0 and the length of our array (currently 4). The way we generate random numbers in javascript is using a function called `Math.random()` which randomly outputs a decimal number between 0 and 1.

```
console.log( Math.random() );
```
Will print something like 0.1215 or 0.7573719, you get the idea. 

If we want to have a bigger range, we just multiply:

```
console.log( Math.random()*4 );
```
will print a random decimal between 0 and 4.

In order to select an element from our array, though, we don't want a decimal: we want an integer. To do this, we use another function, `Math.floor()`. This will round our number *down* to the nearest integer. In order to select a random integer between 0 and the length of our array, we do:

```
console.log( Math.floor(Math.random()*students.length) );
```
This will print 0, 1, 2, or 3 randomly each time.

So, to print a random student's name, we can do:

```
var index = Math.floor(Math.random()*students.length);
console.log( students[index].name );
```

### putting it together
Now we have a code to get a random student's name, we just need to wrap it inside our function. As the array of students stays the same, and exists outside the function, we don't need to pass it as a variable: the things inside the function already know about it.

Instead, we can just turn this into a function, get it to retun the student object, and call it from the main code:

```
function randomStudent() {
  var selectedStudent = students[Math.floor(Math.random()*students.length)];
  console.log(selectedStudent.name, selectedStudent.food);
}

randomStudent();
```

This will print a random student's name and favourite food to the console. Sweet!

## 4: Javascript and the DOM
The last thing we want to be able to do is to link this functionality to the interface. For this, we need two things: 
* when the function we wrote should be called
* where to put the result

### event listeners
Event listeners are often the first time people encounter Javascript, and they are an easy way of producing an output in response to a user interaction. Many of these listeners can be set simply as HTML attributes, that will fire when the user performs an action.

in our HTML, we need to add this line:

```
<button onClick='randomStudent()'>random student</button>
```

This will render a button in the webpage, that will call the function `randomStudent` in the Javascript file every time someone clicks the button. When you click, if `randomStudent` is the same, you should see the name and food in the console, as before.

### DOM manipulation
The very last thing we need is to be able to see it. To do this, add an element next to your button (or wherever else you want it on the page):

```
<span id="student"> </span>
```

This span doesn't have anything in it yet: that's intentional, as we're going to fill it using Javascript. In order to do this, we need the Javascript to be able to find the element on the page. We do this by referencing the DOM, which in JS is referred to as `document`.

```
document.getElementById("student");
```
Will select all HTML elements with `id="student`. Next, we need to change the contents of the span, and fill it with our student instead. We use a property called [`innerHTML`](https://www.w3schools.com/jsref/prop_html_innerhtml.asp), which lets us put HTML inside of existing HTML elements.

So now, instead of printing to the console like we did earlier, this function will now change the text on the page.

```
function randomStudent() {
  var selectedStudent = students[Math.floor(Math.random()*students.length)];
  document.getElementById("student").innerHTML = selectedStudent.name;
}
```

Now when we click the button, if everything's set up right, we should see the student's name on the page. 

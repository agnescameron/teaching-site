---  
layout: parsons_post  
title: browser extensions
permalink: /lab7/  
categories:   
tags: 
assignment: 
description: We learn how to make a browser extension, and how to write more complex javascript. we'll talk about strategies for debugging.
tutorial: Browser Extensions 101
assignment-due:
readings: 
---  

**covid-19 update**

we are learning to use Zoom. 

<img src="https://d2w9rnfcy7mm78.cloudfront.net/6384387/original_7f2dd8cf5880901ef4b5b8bf54ecf030.png?1583515056?bc=0" width="500px">

Let's talk about how we want to organise this class going forward.

## lecture: producing larger coding projects

In this lecture, we're going to introduce two really powerful ideas: one code-based, and one conceptual. First, we'll look at *iterators* -- tools in Javascript for allowing us to repeat the same instruction multiple times, which will let us realise much more complex and exciting projects. We're also going to talk about iterators *again* next week when we cover objects, so think of this as a friendly taster.

After that, we're going to look at debugging tactics. Good debugging is essential to realising larger coding projects -- and indeed, most of getting better at writing code is really just getting better at resolving bugs. This can be frustrating and un-rewarding when you first have to do it, but you'll be surprised how rapidly things get easier as you learn the source of common issues.

We'll cover both of these from the perspective of our browser extensions. To get you all started for this week, I'll send round a 

### iterators


### debugging

This is by far the most important skill you will develop in this class! By now, all of you have probably encountered some kind of 'bug'. You wrote some code, and it didn't behave as you expected. Or -- you tried to commit your work to git and you got an error instead. What did you do to solve it?

'Debugging' refers to the process of finding and resolving issues in code. The word 'debugging' is attributed to Admiral Grace Hopper, one of the first programmers of the Harvard Mark I computer, and comes from when computers were the size of rooms, and relied on many tiny moving parts. Engineers would joke that there were 'bugs' in their code, preventing the machines from working.

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg" width="600px">

Debugging is an essential skill in software development, and encompasses a range of approaches to determine why a problem might be occurring (these days unlikely real bugs, though there was a [pidgeon in CERN](https://www.theguardian.com/science/2009/nov/06/cern-big-bang-goes-phut) a couple of years ago). While there are many different tactics and techniques for debugging, they may be characterised more generally by:

* a process of elimination: finding all the possible sources of the problem, and slowly narrowing them down
* reproducing a small, simple version of the error
* attempting to explain the error to someone else (🐥)

Part of learning how to debug code is also learning how to write code that's easy to debug. The golden rule:

*every time you add new functionality, test thoroughly that it works then commit it to your git before adding anything else or changing it*

This way, your application develops in stages, and you do not lose functionality by making mistakes. In particular, it helps with the process of elimination: testing after each change means that you know which change might have been the source of the error.

**general debugging tips**

**1. console debugging**

If things aren't working as expected, the first thing you should do is open up your browser console, and read what's there. First of all: is there anything in red? If so: is that message relevant to *your* code. Below are some console error messages that you might encounter:


<img src="../../assets/debugging1.png" width="500px"><br><br>
This is a pretty standard error, and it's telling us that we're missing a closing `}`, perhaps on a function. 

Another common one is the error message `unexpected token '{'`. This is a little more cryptic, but generally means that we're missing the `()` from a function declaration. E.g.

```
function doSomething {

}
```
is wrong, but:

```
function doSomething() {
	
}
```
is right.

<img src="../../assets/debugging4.png" width="500px"><br><br>
This is a really common error in Javascript when you forget to put quotation marks around a string. When the browser reads the line, it thinks you're talking about a variable, and it gets stressed when it can't find it.

<img src="../../assets/debugging5.png" width="500px"><br><br>
This one is saying 'resource not found'! It means that we've tried to load a file that the browser can't find. In this case, it's a good idea to look at where the browser's looking for the thing we want it to see. In this case, it's looking in the wrong folder for .... the image i tried to add just above!

<img src="../../assets/debugging6.png" width="500px"><br><br>
This guy, however, doesn't seem to have much to do with us: instant.page doesn't appear anywhere in our code, and is probably an error that the website is having itself. Most large websites will have a number of errors in the console associated with different things happening on the page.


**2. elimination**
Perhaps you have a problem, but there's no error in the console to help you figure it out. 


**3. looking online**

Online forums like Stack Overflow are invaluable in solving issues with your code. Normally, instead of searching stack overflow directly however, I run a google search with a short description of my problem, which will throw up relevant resources. Learning how to structure these searches is a big part of getting better at debugging: it's normally a good idea to include 

**browser-extension-specific debugging**

Below, we'll go through some common issues that you might encounter when trying to debug a browser extension, going from really simple, through to some that are much harder to solve. I encountered *all of these* while making a browser extension to show you all in class.

Google Chrome makes it much easier to debug browser extensions, so for this reason we're going to add them to Chrome. Chrome and Firefox extensions both have exactly the same extension structure, though Chrome is much more likely to let you know when there are issues!


**1. Have you reloaded the extension?**
This sounds obvious, but probably added at least 10 minutes worth of head-scratching to the process, as I would change code and repeatedly look at the browser, only to see it not change. You *don't* need to remove and re-add the extension each time, but you *do* need to use the little refresh button to make sure the code updates.

<img src="../../assets/refresh.png" width="500px"><br><br>

**2. is someone else's Javascript interfering with yours?**


**3. on more complex sites, browser elements aren't what you think they are**


**4. 'lazy loading' issues**
Many of the sites you use day-to-day use something called 'lazy loading' to load content. For high-performance sites with lots of images and other media, this can be really usedful for showing the user *some* of a page before everything has loaded. However, they make life very difficult for browser extensions!

Consider are.na:

The frog extension we used before won't load in the same way!




## Tutorial: {{page.tutorial}}

## Resources

**how-tos**  
[How to add style to a browser extension](https://medium.com/@charlesdouglasosborn/how-to-add-style-and-webfonts-to-a-chrome-extension-content-script-css-47d354025980) 

**examples**  
[Activist themed browser extensions](https://www.are.na/omayeli-arenyeka/activist-themed-browser-extensions)

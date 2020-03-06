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

we are learning to use Zoom. Let's talk about how we want to organise this class going forward.

<img src="https://d2w9rnfcy7mm78.cloudfront.net/6384387/original_7f2dd8cf5880901ef4b5b8bf54ecf030.png?1583515056?bc=0" width="400px">

**debugging**

This is by far the most important skill you will develop in this class! By now, all of you have probably encountered some kind of 'bug'. You wrote some code, and it didn't behave as you expected. Or -- you tried to commit your work to git and you got an error instead. What did you do to solve it?

'Debugging' refers to the process of finding and resolving issues in code. The word 'debugging' is attributed to Admiral Grace Hopper, one of the first programmers of the Harvard Mark I computer, and comes from when computers were the size of rooms, and relied on many tiny moving parts. Engineers would joke that there were 'bugs' in their code, preventing the machines from working.

<img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg" width="400px">

Debugging is an essential skill in software development, and encompasses a range of approaches to determine why a problem might be occurring (these days unlikely real bugs, though there was a [pidgeon in CERN](https://www.theguardian.com/science/2009/nov/06/cern-big-bang-goes-phut) a couple of years ago). While there are many different tactics and techniques for debugging, they may be characterised more generally by:

* a process of elimination: finding all the possible sources of the problem, and slowly narrowing them down
* reproducing a small, simple version of the error
* attempting to explain the error to someone else (🐥)

Part of learning how to debug code is also learning how to write code that's easy to debug. The golden rule:

*every time you add new functionality, test thoroughly that it works then commit it to your git before adding anything else or changing it*

This way, your application develops in stages, and you do not lose functionality by making mistakes. In particular, it helps with the process of elimination: testing after each change means that you know which change might have been the source of the error.


**general debugging tips**

1. console debugging

If things aren't working as expected, the first thing you should do is open up your browser console, and read what's there. First of all: is there anything in red? If so: is that message relevant to *your* code. Below are 2 console error messages 



2. elimination



3. looking online

Online forums like Stack Overflow are invaluable in solving issues with your code. Normally, instead of searching stack overflow directly however, I run a google search with a short description of my problem, which will throw up relevant resources. Learning how to structure these searches is a big part of getting better at debugging: it's normally a good idea to include 

**browser-extension-specific debugging**

Below, we'll go through some common issues that you might encounter when trying to debug a browser extension, going from really simple, through to some that are much harder to solve. I encountered *all of these* while making a browser extension to show you all in class, 


**fun with cursors**

Over the past few weeks, I've been collecting an are.na channel of [websites that use cursor position](https://www.are.na/agnes-cameron/websites-that-use-cursor-position) to do different things to the page. It can be fun to mess with your user's sense of space and motion: like Yotam Hadar's [Yale Exhibition site](http://old.yotamhadar.com/media/misc/painting2015/), which requires quite a lot of thought before you're able to navigate it.

There's the potential to do some pretty complex things with the information that the webpage collects about your interactions with it. Take Studio Moniker's [ClickClickClickClick](https://clickclickclick.click) project...



### Tutorial: {{page.tutorial}}
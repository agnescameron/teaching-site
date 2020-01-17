---
layout: parsons_post
title: syllabus
permalink: /parsons_syllabus/
---

## what is interaction?
If a computer is a tool for thinking with, then the web is a place to
share your thoughts with others. In this class we'll think about the networked interface as a unique means of representation, speculation, and communication.

This class seeks to give a broad, nuanced and critical understanding of
what it means to design for the web today. A core aim is for you to develop appreciation of the web as a *medium* in its own right: a creative and communicative tool that encapsulates a unique set of affordances. It has a history that long predates the computer, intertwined with printed media, the postal system, libraries and the military.

This class is structured around a
series of projects that inform different approaches towards
web design, and together will
stretch and challenge you. These projects are
contextualised by readings and lectures that give a theoretical and
technical basis to the material covered, and discussed in studio during
structured critiques.

## class goals

## course overview

### studio

Date | Theme | Assignment | Reading 
----- | ----- | ----- | ----- | {% for post in site.posts reversed %}{% if post.path contains 'parsons' and post.path contains 'studio' %}
{{ post.date | date: "%m/%d" }} | [**{{post.title}}**]( {{post.url}} )  <br> {{ post.description}} |  {{post.assignment}}  <br> {% if post.assignment-due %} *due: {{post.assignment-due}}* {% endif %} | {% for reading in post.readings %}{{ reading }} {% endfor %} | {%endif%}{%endfor%}

### lab

Date | Theme | Assignment | Reading 
----- | ----- | ----- | ----- | {% for post in site.posts reversed %}{% if post.path contains 'parsons' and post.path contains 'lab' %}
{{ post.date | date: "%m/%d" }} | [**{{post.title}}**]( {{post.url}} )  <br> {{ post.description}} |  {{post.assignment}}  <br> {% if post.assignment-due %} *due: {{post.assignment-due}}* {% endif %} | {% for reading in post.readings %}{{ reading }} {% endfor %} | {%endif%}{%endfor%}

## structure of the course


### presenting work
All classwork is presented through personal websites, that you will use to document your progress. 

### group work


### on the readings

### on grades

### studio classes


### lab classes
Each week, bring to lab a website you find interesting or appreciate. You should present a short summary of how it's structured, and how the code works, which will also be documented on your blogs.

There are also sometimes readings associated with the lab: when these are set, they will be short, and seek to provide a variety of perspectives on the art and craft of programming, both on the web and off. When a reading is set, we will discuss it during the introduction to the following week.



### on asking questions
A vitally important part of learning how to write code (and, indeed, learning how to learn to write code) is learning the art of asking good questions. We'll talk in class about how to ask questions well. Whenever you ask questions about the code you're writing, you should be putting thought into how to make it a good question.

At some point during the semester you might use a platform like [Stack Overflow](https://stackoverflow.com) to ask a question about some code you’re struggling with. Take a screenshot of the question and replies, and write a short discussion of how you think it went: whether the interaction was helpful, whether you had to follow up etc etc.

## policies

### academic integrity

From 'writing code', in [academic integrity at MIT](https://integrity.mit.edu/handbook/writing-code):

>*“Writing code is similar to academic writing in that when you use or adapt code developed by someone else as part of your project, you must cite your source. However, instead of quoting or paraphrasing a source, you include an inline comment in the code. These comments not only ensure you are giving proper credit, but help with code understanding and debugging.”*

>*“You should not simply re-use code as the solution to an assignment. Like academic writing, your code can incorporate the ideas of others but should reflect your original approach to the problem.”*


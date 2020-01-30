---  
layout: parsons_post  
title: building the house 
permalink: /lab2/  
categories:   
tags:  
assignment: Using just HTML, experiment with 10 different ways to format a recipe.
description: We will use this class to re-visit the basics of HTML, and to make sure our Github Pages websites are working.
tutorial: HTML structure and hierarchy
assignment-due: 02/07
readings: chapters 1-8 (they're like 1 page!!) [*TIL HTML J4F*](https://arena-attachments.s3.amazonaws.com/5977940/0219aa5e5048b2ea8151c40e4136325a.pdf?1579792954)
---  

{{page.description}}

Why is writing HTML like building a house? Structure is important! It's a system of layout and typesetting that should be understood and appreciated in its own right, before we more onto using frameworks like CSS to move things around.

**class plan:**  
* 30 minutes -- show and tell
* 15 minutes -- html lecture
* 30 minutes -- github pages revisited, setting up file structure  
~ break ~
* 45 minutes -- html tutorial and class exercise
* 20 minutes -- this week's assignment

### show and tell: personal websites
Show and tell -- talk about Laurel's text, your plans for your websites, and the websites you discovered this week. What did you think of the reading? Did you do things in a different order? How did you relate what you learned to what you did in the prototyping class yesterday?

### lecture: HTML and markup

**markup languages**  
  [marking up](https://en.wikipedia.org/wiki/Markup_language)  
  [marking down](https://en.wikipedia.org/wiki/Markdown)  
  *elements*  
    [document structure](https://en.wikipedia.org/wiki/HTML_element#Document_structure_elements)  
    [the box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)  
    [RIP](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink)  


**document structure**  
  [page structure](https://www.w3schools.com/html/html_intro.asp)  
  [DOM tree](https://www.w3schools.com/js/js_htmldom.asp) [more detail](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcourses.cs.washington.edu%2Fcourses%2Fcse190m%2F10su%2Flectures%2Fslides%2Fimages%2Fdom_tree.gif&f=1&nofb=1)  

**HTML**  
  [complete list of html tags](https://eastmanreference.com/complete-list-of-html-tags)  
  [html attributes](https://en.wikipedia.org/wiki/HTML_attribute)

**block elements**  
  [block elements](https://en.wikipedia.org/wiki/HTML_element#Block_elements)  

**inline elements**  
  [inline elements](https://en.wikipedia.org/wiki/HTML_element#Inline_elements)  

***pure* HTML**  
  [/r/spartanweb](https://old.reddit.com/r/SpartanWeb/)  
  [links.net](http://links.net)  
  [writing html in html](http://john.ankarstrom.se/html/)  
  [pure html are.na channel](https://www.are.na/laurel-schwulst/pure-html)  

### Tutorial: {{page.tutorial}}

We will re-visit Github pages first to make sure everyone is on board (help your friends!). After that, we'll make the file structure that will house this week's assignment.

If we have time left at the end of the class, we'll also start adding some HTML to our personal websites. Using the prototypes you made last class, start to plan a layout.

### Assignment:

{{page.assignment}}<br>

This week's assignment will follow on from themes introduced in your studio class concerning *layout*, *navigation*, and *legibility*, and from the theme of *hierarchy* explored in this week's lab. We will take a recipe for [*Borscht*](https://en.wikipedia.org/wiki/Borscht) -- a Ukranian beetroot soup that has itself been remixed and reworked thousands of times -- and experiment with laying it out in different ways.

You will use your Github repository to record each of these assignments, which we will go over in class. Each assignment should be done in a separate HTML file, which should live in a folder called 'assignments'. In the 'assignments' folder, there should also be an 'index.html' page that links to each of these pages. On your class homepage, there should be a link to this 'assignments/index.html' page. (neat, you just made a website!)

**Step 0 (optional, but recommended):**<br>
Make the borscht (it's delicious). While you make it, think about the points at which you find yourself reaching for the recipe again. How do you read the recipe differently before and after you've cooked it? Did you miss any steps? Is this recipe well-designed? Did you adapt it at all? (if you make an alternative borscht in this step, you may use that recipe as the basis for the next two steps).

If you don't make the borscht (or even if you do, perhaps while it is simmering), look at [some other recipes](https://www.are.na/agnes-cameron/recipe-exercise) and think: does this recipe work in this format? What is the trade-off for convention and novelty here? Are there some types of recipes that work better one way than another? What does it mean for a recipe to *work*? What other kinds of rules and instructions follow these kinds of structural conventions? What would it mean if a recipe was a conversation? Or IKEA instructions? Or like a table with chairs around it, indicating where you should sit?

Record answers to these questions as part of your documentation.

**Step 1:**<br>
In addition to using `html`, `head`, `title` and `body` elements, using only the elements:

* `<p>`
* `<br>`
* `<em>`
* `&nbsp;`

lay out the borscht recipe in 5 different ways. Save each of these as a separate HTML file. You may re-arrange the text, but not add or delete anything, and re-arranging should complement different arrangements, not replace them.

Think about how different configurations, spacings and emphases create a different idea of space and time in the recipe.

**Step 2:**<br>
Using the HTML elements from the previous step, and in addition

* `<ul>`, `<ol>`, `<li>`
* `<div>`
* `<span>`
* `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
* `<a>`

lay out the borscht recipe in 5 more ways. Link elements may link to other parts of the text, but not outside.

Think about the hierarchy and links between the different elements: what kinds of hierarchies confer different meaning to the text?

You may *not* use any CSS for either of these exercises. This includes using the `<style>` tag, which is just CSS but without a separate file.

*This assignment involves doing and it involves thinking. Both of these processes (sketches, notes, thoughts), along with anything you struggled with, should be documented as a separate HTML page on your website (formatting totally up to you), that is linked to the main page.*

This assignment was inspired by a conversation with [Lucy Siyao Liu](https://www.liulucy.com/info), and takes structural inspiration from [Laurel Schwulst](http://laurelschwulst.com)'s exercise [25 Variations](http://veryinteractive.net/projects/variations).

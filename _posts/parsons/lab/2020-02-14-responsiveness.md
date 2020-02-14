---  
layout: parsons_post  
title: remodelling the house
permalink: /lab4/  
categories:   
tags:  
assignment: 
description: In this session, we'll start to explore the principles of responsive web design, looking at ways that sites can change depending on the environment they're in. 
tutorial: flexbox, grids
assignment-due: 
readings: watch [*Learn Javascript in just 5 minutes*](https://www.youtube.com/watch?v=c-I5S_zTwAc)
---  

> *"Text is responsive"*  
> -- Laurel Schwulst

> *"You dumbass. You thought you needed media queries to be responsive, but no. Responsive means that it responds to whatever $^%^@) screensize it's viewed on."*  
> -- http://motherfuckingwebsite.com

{{page.description}}

### intro
[sandwich alignment](https://i0.wp.com/flowingdata.com/wp-content/uploads/2017/05/Sandwich-alignment-chart.jpg?w=1200&ssl=1)

c s s s s s s i p e s:

* what was weird?
* what was hard?
* what felt good?
* what happened that you didn't expect?
* did your impression of any elements change?

[css is weird](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)  

### lecture: responsive design

It's worth saying that not all responsive design has to be terribly fancy (indeed, many [very simple sites](http://motherfuckingwebsite.com) fill lots of responsiveness criteria, just being vanilla HTML and CSS!). What we're going to talk about today are tools that can help you realise more complex ideas across a range of different screens, but it's always worth figuring out what works for your site and content first.

Developing on her comment about text, Laurel also talks about ideas of going 'with' rather 'against' [the grain](https://www.youtube.com/watch?v=NZqYh-6c0m8) of the web: the web has a way of arranging things and a natural [flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) to it. 

Remember, CSS is declarative! It's a language of suggestion rather than control. Browsers have the control here -> we're not 'describing steps to achieve an outcome', we're declaring an end goal we want the browser to achieve. This way of thinking can be really helpful: it's the same reason you get no 'errors', as such: it can look how you don't want it, but it will always run. In the end: if you over-define, the browser will not make the right decision...

**layout history**  
Way back in the olden days of web design, sites could have either [fixed](https://mdn.github.io/css-examples/learn/rwd/fixed-width.html) or [liquid](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html) layout (like this site, lol). 

For simple sites these are fine, but they get less ideal if you 1) want to have more than one main block of text and/or 2) stray very far from the size of the browser it was designed for. In the early days of mobile, developers would make a *separate* version of the site just for mobile screens, where users would be redirected if the window was below a certain size (these have addresses like "m.example.com").

**responsive design**  
The term 'responsive design' was coined by web designer Ethan Marcotte in 2010, and refers to a kind of design that adapts itself to different screens, without needing to be specified at lots of different breakpoints, or render different pages for different screens.

Responsive design relies on 3 major techniques:
* media queries: how to figure out what kind of display you're on
* flexible grids: multi-column layout, flexbox and grids
* fluid images: min- and max-width properties

Many ideas in responsive design are concerned with how to make the elements on your page change relative both to the changing screen, and to one another. They require you to be a bit smarter in designing the rules for how your components should interact together, and consider the page in terms of relationships, rather than fixed values.

**min and max width**  
Min and max width are really useful for defining fluid images and columns. 

[multicol]() is one of the first forms of 'flexible grid' layout

[flexbox](https://www.w3schools.com/css/css3_flexbox.asp)  

[css grid]()  


**measurements**  
The article [px-em-%-pt-keyword](https://css-tricks.com/css-font-size/) has a really good run-down of the different units and what they mean for text.  

* keyword -- small, medium and large (surprising consistency across browsers, not recommended for anything flexible)
* px -- accurate, will be the same number of pixels whatever you do
* em -- these are a little more abstract: 1em is the current font-size of the HTML element that you're in. These also allow you to define other measurements *relative to* the size of your fonts. This is the basis for an approach known as [component-level sizing](https://www.sitepoint.com/power-em-units-css/)
* % -- percentages give you a font size *as a percentage* of the font size of the parent div. This is a neat way to get fonts to scale relative to one another.
* pt -- pt is *only used for print CSS*! Don't use these for screen display: cross browser results vary wildly. It's done relative to whatever the browser thinks an inch is... pt are accurate for paper the same way px are accurate for browsers

The idea of 'cascading' is important here: both % and em *inherit* values from a the font-size property of a parent, meaning that, if you set it up right, changing the value of the top-level font can change all the values on the page according to the same ratio. It can allow you to be very effective with media specifications without having to write lots of redundant code, and is worth experimenting with!

**the display property**  
The ['display' property](https://css-tricks.com/almanac/properties/d/display/) determines if and how an element is displayed. It's the basis for defining whether elements feature in more complex kinds of layout formations (like grids and flexboxes), but it can also define things like whether an element is 

Note: Setting the display property of an element only changes *how* the element (or the element's children) is displayed, NOT what kind of element it is. So, an inline element with `display: block;` is not allowed to have other block elements inside it.

The first 3 settings we're going to look at are *inline, block, and inline-block*. (there are 20 possible values of display! we will not look at them all here).

* inline elements like spans can have padding and margins set, but no width or height. These will *not* cause a newline
* elements with property *block* can have a width and a height, and will cause a newline
* elements with property *inline-block* behave like inline elements, but they can have a width and a height too!

**hiding things -- an aside**  
There's a few cases where hiding things can be really useful, particularly in responsive design! There are two ways to do it:

* display: none -- this will make it like the div was never there...
* visibility: hidden -- this will keep the space where the div was, but the content becomes invisible

**CSS grids**  
CSS grids, in their simplest sense, are a bunch of boxes in another box. (So are flex-boxes!) In order to become a grid, the *outer* box needs to have the property `display: grid` set. 

Grids allow us to define rows and columns where our content sits. Columns can be defined with the property `grid-template-columns`, and rows with the property `grid-template-rows`, These grids can be fixed-width:

```
.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

This will create 3 columns, each of width 200px, where my divs will sit.

But perhaps we want our columns to change width when the page changes. We can use flexible length units to define these columns:

```
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Or perhaps, we'd like to mix and match!

```
.grid-container {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

How do we deal with rows?

Because the rows have been created automatically (just by defining columns!) we can't specify `grid-template-rows` in the same way. Instead, we need to use `grid-auto-rows`, which will automatically set the row height . The catch? If we don't know how many rows we have, we can't use `fr` as a unit.

```
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

One of the most useful properties of grids is that they allow you to place items of different shapes and sizes relative to the grid layout. Using the `grid-column-start` and `grid-column-end` properties, it's possible to tell the browser to map out part of the grid for particular boxes. 

```
.grid-box1 { 
  grid-column-start: 1; 
  grid-column-end: 4; 
  grid-row-start: 1; 
  grid-row-end: 3; 
}

.grid-box2 { 
  grid-column-start: 1; 
  grid-row-start: 3; 
  grid-row-end: 5; 
}
```

If you want grid practice, particularly of this part, [css grid garden](https://cssgridgarden.com) is a great tutorial.

Just as in typesetting, we're able to define *gutters* for our grids. This is done with the `column-gap` and `row-gap` property, or `grid-gap` if they're the same.

This is not all there is to know about grids! For a longer and more thorough guide the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) have a lot of good info. Questions such as 'can I put a grid in a grid?' will be answered.

Both Chrome and Firefox come with Grid-Inspector tools that let you look in detail at how a grid is laid out!

**flexboxes**  
Flexboxes, just like grids, are created by putting some boxes inside another box. Like before, the *outer* box needs to have the property `display: grid` set. This outer box is called the *flex grid-container*.

Flexbox is interesting as it deals with layout *one dimension at a time* -- either in terms of rows or in terms of columns, using the `flex-direction` property. That means: if you want your boxes to be arranged left-to-right (then make new lines when they run out of room), set `flex-direction` to row. If not, set `flex-direction` to column. (to go backwards, `row-reverse` or `column-reverse`). This direction is called the *main axis*. The other axis (at 90 degrees) is called the *cross axis*.

```
.flex-grid-container {
	display: flex;
	flex-direction: row;
}
```

To wrap our boxes onto multiple lines (or multiple columns, if our main axis is columns), we set the `flex-wrap` property in the parent grid-container. If we set it to `no-wrap`, our boxes would shrink to fit the width of the grid-container, and expand in the cross axis if their contents was too large.

```
.flex-grid-container {
	display: flex;
	flex-wrap: wrap;
}
```

Flexboxes also give us a way of distributing leftover space on lines to our boxes. By setting the property `flex-grow` in the inner boxes, we can control how much each box grows to fill the space.

```
.flex-box1 { 
	flex-grow: 1;
}

.flex-box2 { 
	flex-grow: 2;
}
```

**media queries**  
[Media queries](https://www.w3schools.com/css/css3_mediaqueries.asp) allow you to specify things like a device's type and characteristics. These can include things like whether the page is intended for print or screen (HTML is just typesetting, remember!), and more specific parameters, like screen resolution and [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport) width.  

To test out media queries, and what your site looks like on different screens, go into your browser's 'responsive design mode'. In Chrome and Firefox, this is a little phone icon in the corner of the console (cmd-alt-i), in Safari, go to Develop > Enter Responsive Design Mode. 

**breakpoints**  
Breakpoints are the points at which your site will 'break' into another orientation. These are defined by the CSS media query.

Every site is unique, and there isn't necessarily a 'correct' set of breakpoints to aim for -- this will depend on a lot of other things than just the size of the screen you want to deal with. This [guide](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/), however, has some good tips for choosing breakpoints based on the screens you expect to be viewing your site.  

To get started, try the typical values listed [here](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp), and try the [demo](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_mq_breakpoints).

**layout generators**  
  [grid layout generator](https://css-grid-layout-generator.pw)  
  [flexbox generator](https://loading.io/flexbox/)  

**accessibility**  
  [w3c](https://www.w3.org/standards/webdesign/accessibility) [web content accessibility guidelines](https://www.w3.org/TR/WCAG21/)  
  [understanding WCAG](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG) [in HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) [in JS and CSS](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScripts)  

**things to watch out for**  
[Mobile viewports](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/) are notoriously annoying to configure correctly, due to the way different phones will overlay different kinds of navigation toolbars at the top and bottom of the page, and scrollbars on the side. 

In addition to considering mobile devices in 'portrait mode', make sure you include provision for 'landscape' too!

*Don't* use grids and flexboxes together! Not only is it horribly confusing for you (and anyone that has to read your code), but it's uneccesary, and will confuse the people using the site, too. They're fundamentally different ways of looking at the same problem (how to arrange your objects on a page)

### Tutorial: {{page.tutorial}}

**tutorials**  
* [flexbox froggy](http://flexboxfroggy.com)
* [css grid garden](https://cssgridgarden.com)

**resources:**
* [the display property](https://css-tricks.com/almanac/properties/d/display/)  
* [learn css grid](https://learncssgrid.com)  
* [complete guide to grid](https://css-tricks.com/snippets/css/complete-guide-grid/)  

**general CSS resources:**
* [W3schools](https://www.w3schools.com/css) -- consistent+extensive introductions to most features in CSS, good for reference. Their [selectors](https://www.w3schools.com/css) guide is particularly extensive.  
* [CSSTricks](https://css-tricks.com) -- really good for specific CSS resources and explanations. Useful code snippets too!  
* [Mozilla Developer Notes](https://developer.mozilla.org/en-US/docs/Web/CSS) -- good for reference, and also understanding a feature in the context of other web developments, the theory of the language, and the history of the web. (*why* is this thing like this?)

### in-class assignment
Use responsiveness to tell a joke! By controlling properties such as visibility and ordering, use pure CSS to tell a joke as a page resizes.
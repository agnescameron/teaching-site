---  
layout: parsons_post  
title: remodelling the house
permalink: /lab4/  
categories:   
tags:  
assignment: 
description: In this session, we'll start to explore the principles of responsive web design, looking at way to change a site depending on the environment that displays it. 
tutorial: flexbox, grids
assignment-due: 
readings: watch [*Learn Javascript in just 5 minutes*](https://www.youtube.com/watch?v=c-I5S_zTwAc)
---  


{{page.description}}

Why is responsive web design so important?


### lecture: responsive design
 
**layout history**  
Way back in the olden days of web design, sites could have either [fixed](https://mdn.github.io/css-examples/learn/rwd/fixed-width.html) or [liquid](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html) layout (like this site, lol). Neither of these is ideal if you stray very far from the size of the browser it was designed for. In the early days of mobile, developers would make a *separate* version of the site just for mobile screens, where users would be redirected if the window was below a certain size (these have addresses like "m.example.com").

**responsive design**  
The term 'responsive design' was coined by web designer Ethan Marcotte in 2010, and refers to a kind of design that adapts itself to different screens, without needing to be specified at lots of different breakpoints, or render different pages for different screens.

Responsive design relies on 3 major techniques:
* media queries: 
* flexible grids: multi-column layout, flexbox and grids
* fluid images: min- and max-width properties

Many ideas in responsive design are concerned with how to make the elements on your page change relative both to the changing screen, and to one another. They require you to be a bit smarter in designing the rules for how your components should interact together, and consider the page in terms of relationships, rather than fixed values.

**min and max width**

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

**media queries**  
[Media queries](https://www.w3schools.com/css/css3_mediaqueries.asp) allow you to specify things like a device's type and characteristics. These can include things like whether the page is intended for print or screen (HTML is just typesetting, remember!), and more specific parameters, like screen resolution and [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport) width.  

**breakpoints**  
Breakpoints are the points at which your site will 'break' into another orientation. These are defined by the CSS media query.

Every site is unique, and there isn't necessarily a 'correct' set of breakpoints to aim for -- this will depend on a lot of other things than just the size of the screen you want to deal with. This [guide](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/), however, has some good tips for choosing breakpoints based on the screens you expect to be viewing your site.  

To get started, try the typical values listed [here](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp), and try the [demo](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_mq_breakpoints).

**the display property**


**CSS grids**  


**fluid grids**  

**flexboxes**  
  [The display property](https://css-tricks.com/almanac/properties/d/display/)

**parallax**  
  [parallax scroll](https://www.w3schools.com/howto/howto_css_parallax.asp)  
  [wildflowers garden](http://wildflowers.garden/garden5.php)  

**responsive design tools**  
  [grid layout generator](https://css-grid-layout-generator.pw)  
  [flexbox generator](https://loading.io/flexbox/)  

**accessibility**  
  [w3c](https://www.w3.org/standards/webdesign/accessibility) [web content accessibility guidelines](https://www.w3.org/TR/WCAG21/)  
  [understanding WCAG](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG) [in HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) [in JS and CSS](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScripts)  

**things to watch out for**  
[Mobile viewports](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/) are notoriously annoying to configure correctly, due to the way different phones will overlay different kinds of navigation toolbars at the top and bottom of the page, and scrollbars on the side. 

In addition to considering mobile devices in 'portrait mode', make sure you include provision for 'landscape' too!

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
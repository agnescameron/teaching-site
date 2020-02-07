---  
layout: parsons_post  
title: painting the house
permalink: /lab3/  
categories:   
tags:  
assignment: using just HTML and CSS, take last week's recipe and explore 10 more variations
description: making a webpage with `<style>`
tutorial: CSS combinators and selectors, the Box Model
assignment-due: 02/14
readings: Shay Howe [*Writing Your Best Code*](https://learn.shayhowe.com/html-css/writing-your-best-code/)  
---  

<blockquote style="font-family: Times"><i>"As a new face it should, by the grace of God and the art of man, have been broad and open, gen­er­ous and ample; instead, by the vice of Mam­mon and the mis­ery of the machine, it is big­oted and nar­row, mean and puri­tan."</i></blockquote>
<blockquote>Stanley Morison, imagining William Morris on Times New Roman</blockquote>

{{page.description}}

**CSS**  
CSS is what you use to tell a web browser how to display a webpage. 'CSS' stands for 'Cascading Style Sheets': they define rules of presentation that are applied in [stages](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works), as the browser composes the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction). The DOM is how the webpage gets represented in the memory of the computer that loaded it.

The ['cascading'](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) means that the order in which you apply CSS rules matters: when two rules apply to the same element, the one that was declared last is used.

**CSS and HTML**  
CSS is always defined relative to an HTML structure. In particular, to get CSS rules to apply to particular parts of the DOM, we use [*selectors*](https://www.w3schools.com/css/css_selectors.asp) and [*combinators*](https://www.w3schools.com/Css/css_combinators.asp). These can be pretty powerful [but!](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector) there are some limitations. For lots of practice, [CSS dinner](http://flukeout.github.io/) is a pretty good tutorial.

It's also possible to select HTML elements according to [*attributes*](https://www.w3schools.com/css/css_attribute_selectors.asp). Attributes are used in HTML to define properties of an element that don't necessarily relate to style: for example, all links that link to a .pdf file could be styled differently to elements that link to a .jpg.

**positioning**  
One of the main things CSS allows us to do is change how things on the page get positioned. This can be one of the most complex CSS concepts when you first start to learn, as there are quite a few rules involved, and things can behave counter-intuitively.

To understand how these rules work, this guide to [the position property](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning) by Mozilla is really thorough, and contains a lot of useful information. For some slightly more complex concepts, this document on [identifying the containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) is really helpful when you're trying to figure out why something isn't behaving like it should.

**the box model**  
We'll revisit this next week, but [the box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) is pretty central to understanding good css layout. A lot of CSS involves putting boxes inside other boxes and next to even more boxes. The box model defines:

* margins: how these boxes get spaced relative to one another
* padding: how the stuff inside the box gets spaced relative to the edges of the box
* borders: how thick the border surrounding the box is
* top, right, bottom, left: how the box gets spaced reative to the box it's sitting inside

The box model is also affected by HTML: the *display* property we encountered last week (that decides if an element is a [block](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) or an [inline](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) element) will change how the box gets arranged relative to other boxes.

**colours in CSS**  
  [named colours](https://www.w3schools.com/colors/colors_groups.asp)  
  *encodings*  
    [HEX](https://www.w3schools.com/colors/colors_hexadecimal.asp) [RGB](https://www.w3schools.com/colors/colors_rgb.asp) [not yet! CMYK](https://www.w3schools.com/colors/colors_cmyk.asp)  
  [colour picker](https://www.w3schools.com/colors/colors_picker.asp)  
  [randomcolour.com](http://randomcolour.com)  
  [colourbox](https://www.colorbox.io)  
  [gradient generator](https://cssgradient.io)  
  [Laurel Schwulst's Decade in Internet](https://rhizome.org/editorial/2020/jan/06/laurel-schwulsts-decade-in-internet/)  

**fonts, fonts, fonts**  
  [web typography history](https://en.wikipedia.org/wiki/Web_typography)  
  [web safe fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp)  
  [lots and lots of open source fonts](https://www.are.na/frederic-brodbeck/open-source-typefaces)  
  [google fonts](https://fonts.google.com)  
  [free font library](http://typotheque.luuse.io)  

**unicode**  
  [noto](https://www.google.com/get/noto/)  

**css shapes**  
  [shapes](https://css-tricks.com/the-shapes-of-css/)  
  [shapes and text wrapping](https://www.w3.org/TR/css-shapes-1/)  
  [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)
  [simpsons in css](https://pattle.github.io/simpsons-in-css/)  

**debugging**  
  [console and CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)  
  document.designMode='on' [document.body.style](https://www.w3schools.com/jsref/dom_obj_style.asp)  
  [google console tools](https://developers.google.com/web/tools/chrome-devtools/console) [mozilla](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console)  
  [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)  

**other cool CSS bits**  

  [bud uglly](http://budugllydesign.com/index.html)  

[a thought](https://twitter.com/karagates/status/1222385354298122240?s=20)  

### Tutorial: {{page.tutorial}}

### Assignment: 

{{page.assignment}}

Make sure you read the instructions correctly 👀

This week's assignment is a continuation of last week's! You will now format the same recipe 10 *more* ways, using CSS in addition to HTML. In all cases, you may *only* use the HTML tags that were allowed at the end of last week's assignment. To recap, those are:

the essentials:
* `html`
* `head`
* `title`
* `body`

plus:
* `<p>`
* `<br>`
* `<em>`
* `&nbsp;`
* `<ul>`, `<ol>`, `<li>`
* `<div>`
* `<span>`
* `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
* `<a>`

*no `<img>`, and no external links! Link elements may link to other parts of the text, but not outside.*


**Step 1**

Lay out the recipe 5 different ways, using the allowed HTML, and only the following CSS properties:

* `padding`
* `border`
* `margin`
* `position`
* `display`
* `float`
* `top, right, bottom, left`
* `height, width`

The goal of this part is to focus on positioning elements using CSS. Think of different ways you can make parts of the recipe relate to one another. The passage of time! The beets! Experiment with space and possibly try a very tall page or a very wide page.

**Step 2**

Lay out the recipe 5 more ways. In addition to the CSS and HTML properties allowed in the previous step, you can use any of the following CSS properties:

* `font-style`
* `font-weight`
* `font-size`
* `font-family`
* `text-align`
* `line-height`
* `letter-spacing`
* `text-transform`

The goal of this part is to focus on typography using CSS. Experiment with hierarchy and scale in the document, and the ideas that are expressed in different typefaces and alignments.

Just as before, document your work as you go along. How are you thinking about the problem at hand? This assignment was inspired by a conversation with [Lucy Siyao Liu](https://www.liulucy.com/info), and borrows its form from [Laurel Schwulst](http://laurelschwulst.com)'s exercise [25 Variations](http://veryinteractive.net/projects/variations).

### reading

{{ page.readings }}

Don't just read this week's reading, but take its suggestions on board! Perhaps write a bit in your documentation this week about any aspects of your code that you changed after you read this. (NB -- changing code to improve it is a process called 'refactoring', and it's a very important and necessary part of professional web development).





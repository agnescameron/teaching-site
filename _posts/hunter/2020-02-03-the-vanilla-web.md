---  
layout: hunter_post  
title: the vanilla web  
permalink: /class2/  
categories: [JS, HTML, CSS]  
tags: [net art, basics]
description: you've been there! you've seen it! you've done that! (or have you?). here we'll revisit the basic tools that we use to make work for the web, and talk about some higher level concepts and tools to improve the quality of code. We'll discuss web standards, net art, and the power of pure html.
assignment: make a website that shuffles a deck of cards using (at least) 2 different approaches
assignment-due: 02/09
readings: Alex Galloway, [*Jodi's Infrastructure*](https://www.e-flux.com/journal/74/59810/jodi-s-infrastructure/) <br> Ted Nelson (in *Software* p16), [*The Crafting of Media*](http://worrydream.com/refs/Burnham%20-%20Software%20-%20Information%20Technology,%20Its%20New%20Meaning%20for%20Art.pdf)
---  

>*"Unicode is big. But the web is infinitely big. Like a fractal with its endless regress of complexity, a new web page can always be inserted between two existing ones, creating an infinitely large system."*

>-- Alex Galloway, *JODI's Infrastructure*

{{page.description}}

### review: homework + check in  
* 4 people up on the randomiser
* show the websites and talk about interacting with the browser console
* talk about the readings

general: how does everyone feel about pace/assignments etc? any concerns or questions?

### lecture: JS, HTML, CSS revisited  
Playing along with the lecture: optionally setup a blank html webpage, linked to a JS and a CSS page.

like this:  
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

**HTML**  
Why is writing HTML like building a house? Structure is important: you have to lay the foundations before you start decorating, and be careful when you want to add an extension! A little HTML can go a long way, and getting it right can save you hassle later on.  

HTML is a [*markup* language](https://en.wikipedia.org/wiki/Markup_language) -- a term that has roots in the time where graphic designers would ['mark up'](https://d2w9rnfcy7mm78.cloudfront.net/6070156/original_17632a9701772b08332e102180c7ef7c.png?1580747254?bc=0) a typewritten or handwritten document with instructions to the people that would typeset it.  

One of the more important concepts in HTML is page structure: the idea that elements on the page follow a nested hierarchy.  
  [page structure](https://www.w3schools.com/html/html_intro.asp)  
  [DOM tree](https://www.w3schools.com/js/js_htmldom.asp) [more detail](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcourses.cs.washington.edu%2Fcourses%2Fcse190m%2F10su%2Flectures%2Fslides%2Fimages%2Fdom_tree.gif&f=1&nofb=1)  

In HTML, *elements* refer to the different tags that can be used to house information on the page. Some tags contain text (these require an 'open' and a 'close' tag), others are 'empty', and instead have their contents set as an [attribute](https://en.wikipedia.org/wiki/HTML_attribute) (img tags work like this).

[Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) do not generally force a new line to begin (and are therefore useful elements to feature *within* a block of text). By contrast, [block elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) are elements that typically 

The ['normal flow'](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow) describes the relationship between inline and block elements on a page. The [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) can be set in CSS to change between block elements and inline elements.

other:  
    [form elements](https://www.w3schools.com/html/html_form_elements.asp)  
    [RIP](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink)  
  [complete list of html tags](https://eastmanreference.com/complete-list-of-html-tags)  

***pure* HTML**  
It's possible to make a totally functional website using HTML only, and this can be a really useful exercise to re-visit ideas like hierarchy and page structure. A nice recent example is [special.fish](https://special.fish).

  [/r/spartanweb](https://old.reddit.com/r/SpartanWeb/)  
  [links.net](http://links.net)  
  [writing html in html](http://john.ankarstrom.se/html/)  
  [pure html are.na channel](https://www.are.na/laurel-schwulst/pure-html)  
  [kill styles results page](https://www.are.na/laurel-schwulst/kill-styles)  

**CSS**  
CSS is what you use to tell a web browser how to display a webpage. 'CSS' stands for 'Cascading Style Sheets': they define rules of presentation that are applied in [stages](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works), as the browser composes the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction). The DOM is how the webpage gets represented in the memory of the computer that loaded it: it's the `document` that gets referenced when we write Javascript to manipulate it (more on this later).

As we saw in the last link, CSS is always defined relative to an HTML structure. In particular, to get CSS rules to apply to particular parts of the DOM, we use [*selectors*](https://www.w3schools.com/css/css_selectors.asp) and [*combinators*](https://www.w3schools.com/Css/css_combinators.asp). These can be pretty powerful [but!](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector) there are some limitations. For lots of practice, [CSS dinner](http://flukeout.github.io/) is a pretty good tutorial.

Important concepts in CSS:  
  [the box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)  
  [colours](https://www.w3schools.com/colors/colors_picker.asp) [randomcolour.com](http://randomcolour.com)  
  [fonts](https://www.w3schools.com/Css/css_font.asp)  
  [shapes](https://css-tricks.com/the-shapes-of-css/)  
  [animations](https://www.w3schools.com/css/css3_animations.asp)  

*Responsiveness*: This is something that's really important to designing websites that you expect people to use across a number of different screens. We'll touch on this at other points, but in general responsiveness can be achieved [in HTML](https://www.w3schools.com/html/html_responsive.asp) and [in CSS](https://www.w3schools.com/css/css_rwd_mediaqueries.asp).

Features, features, features:  
  [bud uglly](http://budugllydesign.com/index.html)  

A warning: CSS functions essentially as a set of instructions for a web browser to interpret. Aaaaand -- not all browsers interpret things the same. Standards set by the [w3c consortium](https://www.w3.org/standards/) are meant to regulate this, but if you're making a site you know needs to work cross-browser, [caniuse](https://caniuse.com) can be really useful.

**JS**  
Javascript is the *only* programming language that natively runs in the browser. There are lots of ways of taking other languages and turning them into JS (things like Typescript, or Python's Flask are good examples), but: if you're writing code for the web, it's likely in JS.

On a regular webpage, Javascript code needs to interact with the document in order to be visible to the person using the page. It also needs to be *included* in the document, or the browser won't know to run it: loose JS won't run by itself. Some of the most basic uses of JS on the web are in [DOM manipulation](https://www.w3schools.com/js/js_htmldom_document.asp) and [events](https://www.w3schools.com/js/js_events.asp).  

Javascript is also a programming language in its own right, and frameworks like Node allow you to run it without needing a webpage. All of the following features apply both to the Javascript you'll run on the web and locally.  
  [variables](https://www.w3schools.com/js/js_variables.asp)  
  [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
  [objects](https://www.w3schools.com/js/js_objects.asp) (we'll revisit these in week 7)  

[*Loops and iteration*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) are some of the most common forms of algorithm in Javascript, and some of the most useful for the web. They allow us to perform an action multiple times, with only a few lines of code.

Common loop forms:  
    [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)  [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/do...while)  [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/while)  [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)  [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)

[Functions](https://www.w3schools.com/js/js_functions.asp) give us a way of abstracting processes into discrete blocks, which we can call at different points in the code.

[randomness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) is also important! We'll use this a lot this week.

**writing nicer javascript**  
Javascript can be a great programming langauge for beginners because it's very forgiving: you can make lots of mistakes and the code won't break. However, as you get more advanced, that lack of strictness that made it easy also mean that a lot of JS that gets written is a *hot hot mess*. One thing that can help improve your code a lot is to look at [patterns and antipatterns](https://code.tutsplus.com/tutorials/the-essentials-of-writing-high-quality-javascript--net-15145): these are 'good' and 'bad' conventions for solving particular problems. While they all work, the patterns are generally simpler, more efficient, easier to read, and less likely to cause bugs.

[Scope](https://scotch.io/tutorials/understanding-scope-in-javascript) is a pretty central idea to writing effective code in any language, and JS is no different. It can also be one of the most confusing concepts, and the source of many errors in more complex projects. The *scope* of a variable defines the parts of a program that can access it. A variable declared within a *function* is scoped *to that function*, while a variable set at the start of a file is scoped to the whole document. The principal of least scope is a good one to apply.  

Javascript is less well-known as ECMAScript You don't need to include any of these ideas for your code to work, but they can improve the structure and understanding of your code. We'll cover these in greater detail throughout the semester. Every so often, a new version is released that improves on the old versions (this is also true for HTML and CSS!). People got quite excited about [ES6](https://www.w3schools.com/Js/js_es6.asp) because it introduced a lot of new features that meant it was easier to write good Javascript. How do I install it, you ask? It's installed already...

Cool ES6 features:  
  [let vs const](): instead of using *var* to declare a new variable, you can now use *let* and *const*. In short: 'const' is a variable you don't plan to change, and 'var' is one that you do. Can you use *var*, *let* and *const* in the same file? yes. should you? no! (consistency is key here...)  
  [array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)  
  [oo, strict mode](https://www.w3schools.com/js/js_strict.asp)  

**browsers**  
  [how browsers work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) [rolling your own](https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html)  
  [the web stalker](https://anthology.rhizome.org/the-web-stalker)  

**but surely it can't be this simple??**  
Your readings this week should have touched on this too, but it's worth noting that almost every website you would want to make, can be made with these basic tools. Here are some gems:  
  [a useful reminder](http://motherfuckingwebsite.com)  
  [making as thinking](http://jon-l.com/making-as-thinking/)  
  [my boyfriend came back from the war](http://www.teleportacia.org/war/)  
  [jodi.org](http://wwww.jodi.org)  
  [html energy](http://html.energy)  
  [form art](https://sites.rhizome.org/anthology/form-art-competition.html)  

### in class tutorial:  
shuffling the class! arrays, loops and basic DOM manipulation

### in class assignment:  
Every group gets a different pack of cards. Together, come up with algorithms for sorting, dealing and arranging them, and act them out. Write the algorithm down and give it to another group.

These algorithms must be written in pseudocode: you could concievably adapt this to write for a computer without much effort. If you want to 'remember' things, they must get stored somewhere (you can use a piece of paper...) In all situations, you should seek to perform the 'algorithm' in the fewest possible moves. Ace is high. 

**first task**  
Deal out the whole deck, sorting into red and black.

**second task**  
Perform a [faro shuffle](https://en.wikipedia.org/wiki/Faro_shuffle) on the deck. This is a shuffling technique where the deck is split exactly in half, and the cards are then alternated perfectly.

**third task**  
Deal 5 cards each to 4 players, without dealing any spades.

**fourth task**  
Deal two hands of 5 cards each: one hand will have only cards lower than the first card dealt to that hand. The other will have only cards higher than the first card to that hand.

**fifth task**  
Deal out four hands of 5 cards each. Each hand should contain at least one pair. Try and do this in the minimum number of cards.

### assignment:
*due {{page.assignment-due}}*<br>
{{page.assignment}}

Criteria:
* conservation of matter: once a card has been dealt, it can't be dealt again (unless it gets shuffled into the pack)
* '2 different approaches' means significantly different approaches to the task, not just the same functions dealing 2 decks of cards.

Once you've got the basics down, try something a bit more exciting. Make it deal Texas hold'em! Add some graphics! What happens when a card is dealt? Can you stack the deck in your favour? Try a sorting algorithm! Can you make something really weird? How the cards are shuffled, dealt, and displayed, and what kind of cards they are is up to you. Write about your experience in this week's documentation.

Use this assignment to practice something you're unsure of, or to gain a new skill: so, if you're looking to revisit some CSS, try displaying the cards on screen (you could even draw them out with [CSS shapes](https://css-tricks.com/the-shapes-of-css/)). Alternately, this could be a great opportunity to play with some functions. 

**other decks**  
  [hwa-tu/hanafuda](http://www.sloperama.com/gostop/cards.html)  
  [spanish deck](https://en.wikipedia.org/wiki/Spanish_playing_cards)  
  [tarot](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json)  
  [pokemon](https://api.pokemontcg.io/v1/cards)  
  [magic the gathering](https://mtgjson.com)  

**dealing**  
  [poker game variants](https://en.m.wikipedia.org/wiki/List_of_poker_variants)  
  [solitaire](https://en.wikipedia.org/wiki/Patience_(game))  
  [box kite](https://en.wikipedia.org/wiki/Box_Kite_(solitaire))  

### resources for this week

**HTML refs**  
  [complete list of html tags](https://eastmanreference.com/complete-list-of-html-tags)  

**CSS refs**  
  [CSS dinner (practice selectors and combinators)](http://flukeout.github.io/)  
  [flexbox froggy](http://flexboxfroggy.com)  
  [grid garden](https://cssgridgarden.com)  

**functions and loops in JS**  
  [loops guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)  

**resources from last week**  
  [terminal commands](https://github.com/melaniehoff/Peer-to-Peer-Folder-Poetry/blob/master/radical-networks.md#-bash--terminal-commands)  
  [simple git commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

### readings:
{{page.readings}}

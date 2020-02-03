---  
layout: hunter_post  
title: the vanilla web  
permalink: /class2/  
categories: [JS, HTML, CSS]  
tags: [net art, basics]
description: you've been there! you've seen it! you've done that! (or have you?). here we'll revisit the basic tools that we use to make work for the web, and talk about some higher level concepts and tools to improve the quality of code. We'll discuss web standards, net art, and the power of pure html.
assignment: make a website that shuffles a deck of cards using (at least) 2 different approaches
assignment-due: 02/10
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
playing along with the lecture: optional setup

**HTML**  
  [marking up](https://en.wikipedia.org/wiki/Markup_language)  
  [marking down](https://en.wikipedia.org/wiki/Markdown)  
  [page structure](https://www.w3schools.com/html/html_intro.asp)  
  [DOM tree](https://www.w3schools.com/js/js_htmldom.asp) [more detail](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcourses.cs.washington.edu%2Fcourses%2Fcse190m%2F10su%2Flectures%2Fslides%2Fimages%2Fdom_tree.gif&f=1&nofb=1)  
  *elements*  
    [inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) [block elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) [the 'normal flow'](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)  
    [html attributes](https://en.wikipedia.org/wiki/HTML_attribute)  
    [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)  
    [RIP](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink)  
  [complete list of html tags](https://eastmanreference.com/complete-list-of-html-tags)  

***pure* HTML**  
  [/r/spartanweb](https://old.reddit.com/r/SpartanWeb/)  
  [links.net](http://links.net)  
  [writing html in html](http://john.ankarstrom.se/html/)  
  [pure html are.na channel](https://www.are.na/laurel-schwulst/pure-html)  
  [kill styles results page](https://www.are.na/laurel-schwulst/kill-styles)  

**CSS**  
  [how css works](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works) [the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)  
  [the box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)  
  [colours](https://www.w3schools.com/colors/colors_picker.asp) [randomcolour.com](http://randomcolour.com)  
  [fonts](https://www.w3schools.com/Css/css_font.asp)  
  [shapes](https://css-tricks.com/the-shapes-of-css/)  
  [animations](https://www.w3schools.com/css/css3_animations.asp)  
  [selectors](https://www.w3schools.com/css/css_selectors.asp) [combinators](https://www.w3schools.com/Css/css_combinators.asp) [but!](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector)  
  [bud uglly](http://budugllydesign.com/index.html)  

**JS**  
  [DOM manipulation](https://www.w3schools.com/js/js_htmldom_document.asp)  
  [variables](https://www.w3schools.com/js/js_variables.asp)  
  [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
  [objects](https://www.w3schools.com/js/js_objects.asp) (we'll revisit these in week 7)  
  [*loops and iteration*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)  
    [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)  [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/do...while)  [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/while)  [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)  [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
  [functions](https://www.w3schools.com/js/js_functions.asp)  
  [events](https://www.w3schools.com/js/js_events.asp)  
  [randomness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)  

**writing nicer javascript**  
  [scope](https://scotch.io/tutorials/understanding-scope-in-javascript)  
  [ES6 syntax](https://www.w3schools.com/Js/js_es6.asp)  
    [let vs const]()   
 [patterns and antipatterns](https://code.tutsplus.com/tutorials/the-essentials-of-writing-high-quality-javascript--net-15145)  
  [oo, strict mode](https://www.w3schools.com/js/js_strict.asp)  

**browsers**  
  [how browsers work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) [rolling your own](https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html)  
  [the web stalker](https://anthology.rhizome.org/the-web-stalker)  
  *responsiveness*  
    [in HTML](https://www.w3schools.com/html/html_responsive.asp) [in CSS](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)  

**web standards**  
  [w3c](https://www.w3.org/standards/)  
  [caniuse](https://caniuse.com)  

**unicode**  
  [history](https://en.wikipedia.org/wiki/Unicode#Origin_and_development)  
  [consortium](https://home.unicode.org) [table](https://unicode-table.com/en/#basic-latin)  
  [ghost characters](https://www.dampfkraft.com/ghost-characters.html)  
  [i can text you a pile of poo, but i can't write my name](https://modelviewculture.com/pieces/i-can-text-you-a-pile-of-poo-but-i-cant-write-my-name)  
  [noto typeface](https://www.google.com/get/noto/)  

**but surely it can't be this simple??**  
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

These algorithms must be written in pseudocode: you could concievably adapt this to write for a computer without much effort. In all situations, you should seek to perform the 'algorithm' in the fewest possible moves. Ace is high. 

**first task**
Deal out the whole deck, sorting into red and black.

**second task**
Perform a [faro shuffle](https://en.wikipedia.org/wiki/Faro_shuffle) on the deck. This is a shuffling technique where the deck is split exactly in half, and the cards are then alternated perfectly.

**third task**
Deal 5 cards each to 4 players, without dealing any spades.

**fourth task**
Deal two hands of 5 cards each: one hand will have only cards lower than the first card dealt to that hand. The other will have only cards higher than the first card to that hand.

**fifth task**
Deal out four hands of 5 cards each. Each hand should contain at least one pair. 

### assignment:
*due {{page.assignment-due}}*<br>
{{page.assignment}}

Criteria:
* conservation of matter: once a card has been dealt, it can't be dealt again (unless it gets shuffled into the pack)
* '2 different approaches' means significantly different approaches to the task, not just the same functions dealing 2 decks of cards.

Once you've got the basics down, try something a bit more exciting. Make it deal Texas hold'em! Add some graphics! What happens when a card is dealt? Can you stack the deck in your favour? Try a sorting algorithm! Can you make something really weird? How the cards are shuffled, dealt, and displayed, and what kind of cards they are is up to you. Write about your experience in this week's documentation.

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


**functions and loops in JS**
  [loops guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)  
  []

**resources from last week**
  [terminal commands](https://github.com/melaniehoff/Peer-to-Peer-Folder-Poetry/blob/master/radical-networks.md#-bash--terminal-commands)  
  [simple git commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

### readings:
{{page.readings}}

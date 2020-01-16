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
4 people up on the randomiser  
show the websites and talk about interacting with the browser console  
talk about the readings  
go around everyone and ask where they think they're at with html/css/js  

### lecture: JS, HTML, CSS revisited  

**HTML**  
  [marking up](https://en.wikipedia.org/wiki/Markup_language)  
  [marking down](https://en.wikipedia.org/wiki/Markdown)  
  *elements*  
    [document structure](https://en.wikipedia.org/wiki/HTML_element#Document_structure_elements)  
    [the box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)  
    [block elements](https://en.wikipedia.org/wiki/HTML_element#Block_elements) [inline elements](https://en.wikipedia.org/wiki/HTML_element#Inline_elements)  
    [RIP](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink)  
  [*puuure html*](https://www.are.na/laurel-schwulst/pure-html)  
    [links.net](http://links.net) [writing html in html](http://john.ankarstrom.se/html/)  

**CSS**  
  [how css works](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works) [the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)  
  [fonts](https://www.w3schools.com/Css/css_font.asp)  
  [shapes](https://css-tricks.com/the-shapes-of-css/)  
  [animations](https://www.w3schools.com/css/css3_animations.asp)  
  [selectors](https://www.w3schools.com/css/css_selectors.asp) [combinators](https://www.w3schools.com/Css/css_combinators.asp) [but!](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector)  
  [bud uglly](http://budugllydesign.com/index.html)  

**JS**  
  [variables](https://www.w3schools.com/js/js_variables.asp)  
  [loops](https://www.w3schools.com/js/js_loop_for.asp)  
  [functions](https://www.w3schools.com/js/js_functions.asp)  
  [objects](https://www.w3schools.com/js/js_objects.asp)  
  [events](https://www.w3schools.com/js/js_events.asp)  
  [DOM manipulation](https://www.w3schools.com/js/js_htmldom_document.asp)  

**writing nicer javascript**  
  [scope](https://scotch.io/tutorials/understanding-scope-in-javascript)  
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


### in class assignment:
Every group gets a different pack of cards. Together, come up with algorithms for sorting, dealing and arranging them, and act them out. Write the algorithm down and give it to another group.

### assignment:
*due {{page.assignment-due}}*<br>
{{page.assignment}}

Criteria:
* once a card has been dealt, it can't be dealt again (unless it gets shuffled into the pack)
* '2 different approaches' means significantly different approaches to the task, not just the same functions dealing 2 decks of cards.

Once you've got the basics down, try something a bit more exciting. Make it deal Texas hold'em! Add some graphics! What happens when a card is dealt? Can you stack the deck in your favour? Try a sorting algorithm! Can you make something really weird? How the cards are shuffled, dealt, and displayed, and what kind of cards they are is up to you.

**other decks**  
  [hwa-tu/hanafuda](http://www.sloperama.com/gostop/cards.html)  
  [spanish deck](https://en.wikipedia.org/wiki/Spanish_playing_cards)  
  [tarot](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json)  
  [pokemon](https://api.pokemontcg.io/v1/cards)  
  [magic the gathering](https://mtgjson.com)  

### readings:
{{page.readings}}

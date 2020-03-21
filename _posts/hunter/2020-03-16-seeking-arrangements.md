---  
layout: hunter_post  
title: seeking arrangements  
permalink: /class7/  
description: This class is about the use and misuse of maps, charts, and graphs as tools of arranging, ordering and representing ideas. We will use JQuery and other libraries to arrange the data we gathered last week, thinking about different approaches to representation. 
assignment: using jQuery (and anything else you choose), display the data set you collected last week in a few different ways.
readings: Brandur [*Learning from Terminals to Design the Future of User Interfaces*](https://brandur.org/interfaces) <br> Alexis Madrigal, [*The Lost Ancestors of Ascii Art*](https://www.theatlantic.com/technology/archive/2014/01/the-lost-ancestors-of-ascii-art/283445/)
assignment-due: 03/22
---  
<!-- maybe cybernetics lib here?? orit halpern beautiful data kind of thing??? -->


> *While the language of vision perseveres, it is important not to assume a direct correlation between vision as a sense and visualization as an object and practice. Married initially to psychology, and now digital computation and algorithmic logic, the substrate and content of this practice has often had little to do with human sense perception or the optic system. Moreover, with the rise of emphasis on haptic interactions and interactivity, visualizations also often take multisensorial modes. Vision cannot be taken, therefore, as an isolated form of perception, but rather must be understood as inseparable from other senses.*  
> Orit Halpern, *Beautiful Data*

{{page.description}}

# before class:

Please go through the following tutorial in your own time before class! If you're not able to, let me know. 

## tutorial: 


Here's a video of me going over the tutorial, to play along at home.

<iframe width="724" height="453" src="https://www.youtube.com/embed/Cfww14n67yI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This week we're going to be looking at arranging our data-sets using jQuery. I'll be going through the tutorial using the vegetable cooking times data-set from last week. I've simplified it a bit to make this part easier!* To get the files, download [this folder](https://github.com/agnescameron/hunter-vegetables) from github. You can either download it as a zip, or type 

```
git clone https://github.com/agnescameron/hunter-vegetables.git
cd hunter-vegetables
```

into your terminal. The files you're interested in are `index.html`, `veg.js` and `main.js`

**NB: if you try and make this code run on the veg.js file from last week, it won't! Download the new version!**

<code>&ast;</code> (if anyone's curious as to *how* I simplified the file, it was using a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), which can be found [here](https://github.com/agnescameron/hunter-vegetables/blob/master/.scripts), along with the original file. regexs are really cool and powerful tools for searching/replacing, and if you wanna learn more about them hmu.)

**jQuery**

First thing we're going to try out is adding jQuery to our files.

jQuery was first introduced in 2006, and is an extension of the Javascript language. It's designed to make it much easier to navigate the DOM than Javascript by itself, and it's extremely popular. I'd recommend using it on really any site where you're going to be integrating Javascript to manpulate the DOM.

[Adding jQuery to your project](https://www.w3schools.com/jquery/jquery_get_started.asp) is super simple. All you need is to include this line in the header of your HTML:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

This requests the jQuery file from Google, and adds it to your page just like a normal Javascript file. You can also download the file [here](https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js), and add it to your code just like you would a normal JS file.

So: let's add it into the HTML.

In order to check that we've loaded it in correctly, we'll want to try and run a simple line of jQuery. 

```
$(document).ready(function(){
	console.log('hello!')
}); 
```
This is a really common pattern in jQuery, and one we'll use a bunch.

* The `$` tells the browser that the next line of code is going to be jQuery. You need this, otherwise it'll just think you want to use normal Javascript, and won't understand your code
* `(document)` refers to the DOM -> just like when we use `document` in `document.getElementById`
* `.ready(function(){ }`: `ready` is a method of `document`, that triggers when the document has loaded. This is really useful for code that requires elements to have loaded into the page first! The `function() { }` syntax is one of the anonymous inline functions we've been meeting as we go along: these are really common in writing good jQuery!

Open up the HTML page in your browser, and take a look at the console. You should see:

```
hello!
```

If you get an error along the lines of `$ is not defined`, this means that your jQuery *has not loaded properly*. This is probably for 2 reasons: either you're missing the tag in your HTML, *or* your jQuery file is being loaded after the JS file that's calling it. Remember: browsers read through files one at a time, so if you want to use jQuery in a file, that file needs to get included *after* the line incliding the jQuery file. (so: just always put jQuery at the top of the `<head>`)


**jQuery and the DOM**

jQuery's main feature is making it much, much easier to interact with DOM elements. Last week, if we wanted to add some text to the div `vegbox`, we had to do:

```
document.getElementById('vegbox').innerHTML = 'hello, vegetable'
```

Now, we can achieve the same thing with much less:

```
$('#vegbox').html('hello, vegetable')
```

Neat! Notice that, now, our selector for id is the same as in CSS, a `#` symbol (fun fact: originally called an [Octothorpe](https://en.wikipedia.org/wiki/Number_sign#Other_names_in_English)). This is true for classes, types and pseudo-classes (like `:hover`) too!

so, to get a `div` element you'd use `$('div')`, and to get an element with a class, you'd use `('.classname')`

Let's try an iterator! First, we need something to iterate on, so let's add a couple more elements to the page. Just a couple of empty `div`s should do for now. Give each one an id tag.

```
<div id="something"></div>
<div id="something else"></div>
```
Remember our `forEach` iterator from last week? This is *super similar*:

```
$('div').each(function() {
	console.log($(this).attr('id'))
})
```

This will:

* select each `div` on the page
* for each `div`, it will get the attribute (eg, HTML attributes like `id` `class` `src` etc) `id`, then print it. It selects the divs individually using the `this` keyword, which just means 'this thing that we're thinking about right now in the scope of this function'


**adding page elements**

jQuery also gives us the ability to *make* page elements. We can do this using vanilla JS too, but, just like selecting stuff, jQuery irons out a lot of annoyances and makes our life a lot easier.

Go through and delete all the divs you just made in the HTML. Now, use jQuery to add a new one:

```
$('body').append("<div> eating peanuts </div>")
```

This appends a div containing some text onto your page body. Perhaps we want to do something a bit more elaborate than this! Let's try making a new div with some attributes:

```
let newDiv = $('<div/>', {
    id: 'peanuts',
}).html("love them peanuts")

$('body').append(newDiv)
```

This looks pretty different, but it's actually nearly the same as before. 

* we create a variable called `newDiv`, which will hold our new element
* we invoke jQuery with the `$` sign (important, the browser needs to know we're using jquery)
* we use `$('<div/>', {id: 'peanuts'})` to create a `div` element, with attributes *contained in a JSON object*. This is equivalent to writing `<div id=peanuts> </div>`, but it means that we can really easily incorporate variables into our HTML attributes, something we'll want later
* we change the `html` property of the new element to include some text. We did this earlier, and all it does is adds stuff inside the div
* finally, we append to the body like before. remember: every line of jQuery gets a new `$` symbol!

Open up your page and make sure it worked! You should see some text in the top left that says `love them peanuts`.

So, now we're rolling with jQuery, we can start incorporating some of the object code from last week.

Remember our friend `forEach`? Let's make some divs with it:

```
vegTimes.forEach( function(element, index) {
	let vegDiv = $('<div/>', {
    	id: element.name
	}).html(element.name)

	$('body').append(vegDiv)
})
```

jQuery can also be used to style elements! This is also pretty convenient, as it allows you to basically write CSS (with the slight caveat that everything that's not a variable needs to get put in quotation marks).

Let's take a look at our vegetable list: each of the objects has a property `color`: what if we wanted to use that as a variable?

Just as we can change the HTML inside the div using the `.html()` method, jQuery has a corresponding `.css` method that lets us 

```
vegTimes.forEach( function(element, index) {
	let vegDiv = $('<div/>', {
    	id: element.name
	})
	.html(element.name)
	.css({"background-color": element.color})

	$('body').append(vegDiv)
})
```


**the joy of flexbox**

A really common task in web development is to have an unknown number of objects (products in a store, projects in a portfolio, recipes in a collection...) and to display them in a visually-consistent, responsive manner.

There are lots of ways to do this, but the two main ones are CSS grid and Flexbox. Today we'll look at flexboxes, but if you want some more notes on grids and other techniques, notes from the ['responsiveness' week](https://webdevelopm.net/lab4/) in my parsons class go into a lot more depth.


Flexbox is interesting as it deals with layout *one dimension at a time* -- either in terms of rows or in terms of columns, using the `flex-direction` property. That means: if you want your boxes to be arranged left-to-right (then make new lines when they run out of room), set `flex-direction` to row. If not, set `flex-direction` to column. (to go backwards, `row-reverse` or `column-reverse`). This direction is called the *main axis*. The other axis (at 90 degrees) is called the *cross axis*.

Flexboxes are created by putting some boxes inside another box. The outer box is what makes the boxes flexboxes: we make it a flexbox by setting the `display` property to `flex`.


In order to test out a flexbox, let's make a `flex-container`, and put some divs inside it! First, add a div with class `flex-container` to your HTML. This will be where our flexboxes will go. 

```
<div class="flex-container"></div>
```

Now: open up your `style.css` file for the first time! Add in the line:

```
.flex-container {
	display: flex;
	flex-direction: row;
}
```

Now, let's add some boxes! The code can stay pretty much the same as before, but instead of appending to the body, we're going to append to the `flex-container` itself!

```
vegTimes.forEach( function(element, index) {
	let vegDiv = $('<div/>', {
    	id: element.name
	})
	.html(element.name)
	.css({"background-color": element.color})

	$('.flex-container').append(vegDiv)
})
```

Load the page and check it out!

You should see something like this:

<img src="../../assets/flex1.png" width="500px"><br><br>

So far, so unimpressive.

To wrap our boxes onto multiple lines (or multiple columns, if our main axis is columns), we set the `flex-wrap` property in the parent grid-container. If we set it to `no-wrap`, our boxes would shrink to fit the width of the grid-container, and expand in the cross axis if their contents was too large. See [this guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items) for more wrapping details.

```
.flex-container {
	display: flex;
	flex-wrap: wrap;
}
```

Now, we get this:

<img src="../../assets/flex2.png" width="500px"><br><br>

This still isn't that exciting, but we're now able to style the boxes. Let's add in some new information too:

```
vegTimes.forEach( function(element, index) {
	let vegDiv = $('<div/>', {
    	id: element.name
	})
	.html(element.name + '<br>' + element.other)
	.css({"background-color": element.color, "padding": "30px"})

	$('.flex-container').append(vegDiv)
})
```

<img src="../../assets/flex3.png" width="500px"><br><br>

This is starting to look kind of nice! If we want to add more CSS to the boxes, we could give them all a class. Because `class` is a reserved word in JS, we need to use `"class"` in quotation marks here... annoying, but otherwise does what it looks like!

```
vegTimes.forEach( function(element, index) {
	let vegDiv = $('<div/>', {
    	id: element.name,
    	"class": "vegetable"
	})
	.html(element.name + '<br>' + element.other)
	.css({"background-color": element.color})

	$('.flex-container').append(vegDiv)
})
```

and then you can modify the CSS however you like: play around with some properties!

```
.vegetable {
	padding: 30px;
	font-family: helvetica;
	border: 2px solid black;
	margin: 3px;
}

.vegetable:hover {
	padding: 60px;
}
```

There's *loads* of other things you can do with flexbox: if this seems like something you'd be into, I *highly* recommend the tutorial [flexbox froggy](https://flexboxfroggy.com/).

**other arrangements**

Another thing we can do is arrange things using the position property. This can be particularly interesting for data which is numerical. For example, perhaps we wanted to make a webpage that plotted the time needed to steam a vegetable against the time it takes to microwave it.

```
vegTimes.forEach( function(element, index) {
	let vegDiv = $('<div/>', {
    	id: element.name,
	})
	.html(element.name)
	.css({"position": "absolute", "left": 50*element.steamed, "top": 50*element.microwaved})

	$('body').append(vegDiv)
})
```

Here, we position the elements based on the time it takes to cook them. In order to make this kind of positioning work, we need to change the `position` property of the div to `absolute`. This allows us to position in a fixed way, relative to the parent (in this case, the page body).

This gives us an output that should look something like this:

<img src="../../assets/jquery1.png" width="500px"><br><br>

But! Notice that the quickest-cooking vegetables get positioned in the top left, not the bottom left! This is because webpage coordinate systems have their (0,0) in the top *left* corner, rather than the bottom left, like most graphs we would look at. We can rectify this, by *subtracting* the position from the height of the viewport.

We can get the height of the viewport using `$(document).height()`: this gets the current height of the document object.

```
vegTimes.forEach( function(element, index) {
	let vegDiv = $('<div/>', {
    	id: element.name,
	})
	.html(element.name)
	.css({"position": "absolute", "left": 50*element.steamed, "top": $(document).height() - 50*element.microwaved})

	$('body').append(vegDiv)
})
```

ta-da! If you're bored, try adding axis labels

# in class:

### check in
What data did peple scrape? And what did you think of the readings?

## lecture: representing knowledge

**charts**  
  *co-ordinate systems*  
    [cartesian](https://en.wikipedia.org/wiki/Cartesian_coordinate_system) [polar](https://en.wikipedia.org/wiki/Polar_coordinate_system)  
  [phase diagrams](https://en.wikipedia.org/wiki/Phase_diagram)  
  [*political compasses*](https://www.politicalcompass.org)  
    [culture wars](https://disnovation.org/doc/OCW_70x100_RVB.pdf) [recipe collection](http://backseatfrying.net) [meme collection](https://www.are.na/francis-tseng/political-compasses-other-matrices)
  [*alignment charts*](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f54a1ef4-d1f9-4b49-a36e-0eb100c586b9/d6fe4d8-2c0448e6-4ab0-4264-8e45-c0e910c283f2.png/v1/fill/w_1280,h_1280,q_75,strp/dnd_alignment_chart_by_nederbird-d6fe4d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mNTRhMWVmNC1kMWY5LTRiNDktYTM2ZS0wZWIxMDBjNTg2YjkvZDZmZTRkOC0yYzA0NDhlNi00YWIwLTQyNjQtOGU0NS1jMGU5MTBjMjgzZjIucG5nIiwid2lkdGgiOiI8PTEyODAiLCJoZWlnaHQiOiI8PTEyODAifV1dfQ.13y42x2TFBUFPS_VaC-V1hHmHegJmBDYPzn3CcxfQOs) [sandwiches](https://d2w9rnfcy7mm78.cloudfront.net/1002651/original_bd71d77187eda7eb3b258c395a1c1555.jpg?1493767565?bc=1) [meta-alignment chart](https://xkcd.com/2251/)  
  [smells](https://d2w9rnfcy7mm78.cloudfront.net/1542772/original_e9e99eb67b032ba9f93b5c2eb8a9283c.jpg?1514607880?bc=1)  
  [*trilemmas*](https://www.are.na/yas-nos/trilemma)  
    [good/fast/cheap](https://d2w9rnfcy7mm78.cloudfront.net/4566845/large_c2bfd22f3b1d95dc8145b2b55e60778d.png?1562238091?bc=1) [energy](https://d2w9rnfcy7mm78.cloudfront.net/4570751/original_bbccabefd685dfab651a289e32a0e29d.png?1562319235?bc=1)  

**maps**  
  *map libraries*  
    [openStreetMap](https://www.openstreetmap.org) [mapbox](https://www.mapbox.com) [google maps](https://developers.google.com/maps/documentation/javascript/tutorial)  
  *map visualisation*  
  [stamen](https://stamen.com)  
  *counter mapping*  
    [bill bunge](https://civic.mit.edu/2013/08/07/the-detroit-geographic-expedition-and-institute-a-case-study-in-civic-mapping/) [native land](https://native-land.ca) [queering the map](https://www.queeringthemap.com) [conquer and divide](https://conquer-and-divide.btselem.org) [white collar crime risk zones](https://whitecollar.thenewinquiry.com)  
  [geogoo](http://geogoo.net)  
  [land lines](https://lines.chromeexperiments.com) [documentation](https://medium.com/@zachlieberman/land-lines-e1f88c745847)  
  [oyvind fahlstrom](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2mpxrrcad19ou.cloudfront.net%2Fitem_images%2F292036%2F8257791_fullsize.jpg&f=1&nofb=1)  

**mind maps**  
  [*patrick gunkel*](http://ideonomy.mit.edu/gunkel.html)  
    ["bio-evolution did not seek to optimise the taste of natural foodstuffs"](http://ideonomy.mit.edu/mapsandlists-set1/pic022.html) [network relationships](http://ideonomy.mit.edu/mapsandlists-set1/pic049.html) [universes](http://ideonomy.mit.edu/mapsandlists-set2/pic028.html)  
  [bureau d'etudes](https://bureaudetudes.org) [world government](https://bureaudetudes.org/wp-content/uploads/2014/02/WG2013ang.pdf) [the 8th sphere](https://bureaudetudes.org/wp-content/uploads/2014/06/the-8th-sphere-EN.pdf)  
  [anatomy of an ai](https://anatomyof.ai)  
  *tools*  
    [scapple](https://www.literatureandlatte.com/scapple/overview) [coggle](https://coggle.it) [kinopio](https://kinopio.club) [nototo](https://www.nototo.app)  

**visualisations**  
  *clustering*  
    [butterflies](https://marian42.de/butterflies/?0.04443,0.25659,11)  
  [stranger visions](https://deweyhagborg.com/projects/stranger-visions)  
  [VFRAME](https://ahprojects.com/vframe/)  
  [officer involved](https://theintercept.co/officer-involved/) [fatal migrations](https://projects.theintercept.com/fatal-migrations/)  
  [nyt air pollution](https://www.nytimes.com/interactive/2019/12/02/climate/air-pollution-compare-ar-ul.html)  

**visible connections**  
  [are.na](https://are.na)  
  [roam research](https://roamresearch.com)  
  [the music maze](http://static.echonest.com/LabyrinthOfGenre/GenreMaze.html)  

**unlikely connections**
  situationists
  oulipo
  [relational aesthetics](https://en.wikipedia.org/wiki/Relational_art#cite_note-13)

**metaphors**
[back when we thought the internet was like a city](https://www.citylab.com/life/2013/03/back-when-we-thought-internet-was-city/4943/) [deleted city](http://deletedcity.net)

**JQuery**  
  [add jQuery to your project](https://www.w3schools.com/jquery/jquery_get_started.asp)  
  *tools*
    [selectors](https://www.w3schools.com/jquery/jquery_selectors.asp) [events](https://www.w3schools.com/jquery/jquery_events.asp) [traversing](https://www.w3schools.com/jquery/jquery_traversing.asp)  
  [jQuery patterns](https://learn.jquery.com/code-organization/concepts/)  

[**javascript iterables**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)  
  [foreach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)  
  [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)  

**drawing libraries**
  [html5 canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)  
  [processing js](http://processingjs.org) -> [p5 js](https://p5js.org)  
  *networks*  
  *graphs*  
    [d3.js](https://d3js.org)  
  *blobs*  
    [paper.js](http://paperjs.org) [staggering beauty](http://www.staggeringbeauty.com)  
  *3d*  
    [babylon.js](https://www.babylonjs.com)  

### in-class exercise
In this exercise, we'll make a start on the week's assignment together to walk through issues and talk about our ideas for the week. 

1. Take the data-set that you obtained last week. First, try running through these elements in a simple loop, appending them as elements to a page using jQuery. 

2. After you've all got that working, try something more complex: perhaps positioning, or adding CSS

3. Once everyone in the group has done that, think about about the *kind of data* that you have. How might you think about displaying it? make some sketches, and talk about them as a group.

4. Together, pick *one* of the sketches, and break it down into the steps required to make it. 

### assignment
*due {{page.assignment-due}}*<br>
{{page.assignment}}

Can you see patterns and relationships in the data? How do you link between different ideas? When you display the data a particular way, does it give you something you didn't expect? What does it feel like to explore your data set?

If you don't want to use the data set you collected last week, feel free to use one of the ones we've explored in class.

**inspiration**  
 [yale aids memorial project](http://yamp.org)  
 [conquer and divide](https://conquer-and-divide.btselem.org)  
 [net art anthology](https://anthology.rhizome.org)  
 [future expansion -- a building about buildings](http://future-expansion.com/#img)  
 [CAVS](http://act.mit.edu/cavs)  
 [backseat frying](http://backseatfrying.net)  
 [radical essex](http://www.radicalessex.uk/list/)  
 [diagrams of thought](https://www.are.na/martin-murphy/diagrams-of-thought)  


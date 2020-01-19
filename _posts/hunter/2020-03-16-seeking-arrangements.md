---  
layout: hunter_post  
title: seeking arrangements  
permalink: /class7/  
description: This class is about the use and misuse of maps, charts, and graphs as tools of arranging, ordering and representing ideas. We will use JQuery and other libraries to arrange the data we gathered last week, thinking about different approaches to representation. 
assignment: using jQuery (and anything else you choose), display the data set you collected last week in a few different ways.
readings: Marvin Minsky [*Why programming is a good medium for expressing poorly understood and sloppily-formulated ideas*](http://worrydream.com/refs/Minsky%20-%20Why%20programming%20is%20a%20good%20medium%20for%20expressing%20poorly%20understood%20and%20sloppily-formulated%20ideas.pdf)<br> Brandur [*Learning from Terminals to Design the Future of User Interfaces*](https://brandur.org/interfaces)
assignment-due: 03/23
---  
<!-- maybe cybernetics lib here?? orit halpern beautiful data kind of thing??? -->


> *While the language of vision perseveres, it is important not to assume a direct correlation between vision as a sense and visualization as an object and practice. Married initially to psychology, and now digital computation and algorithmic logic, the substrate and content of this practice has often had little to do with human sense perception or the optic system. Moreover, with the rise of emphasis on haptic interactions and interactivity, visualizations also often take multisensorial modes. Vision cannot be taken, therefore, as an isolated form of perception, but rather must be understood as inseparable from other senses.*  
> Orit Halpern, *Beautiful Data*

{{page.description}}

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

### in class exercise
with pens and paper, and in groups of 2 or 3, explore different ways to map your data-sets. Discuss together how different forms of representation contribute to different forms of understanding. How might someone who understands one data-set understand another in terms of it?

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


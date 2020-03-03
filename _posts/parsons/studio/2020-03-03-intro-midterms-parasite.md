---  
layout: parsons_post  
title: introduction to midterm assignment
permalink: /studio13/  
categories:   
tags:  
assignment: Use the console editing tools (javascript and CSS) to create sketches for your parasite. Document your ideas on your class site.
description: the parasite project
assignment-due: 03/05
readings: 
---  

{{page.description}}

## midterm assignment: the parasite

Over the next two weeks, you will learn the basics of JQuery selectors, javascript functions and json objects. This will give you the rudimentary tools to select and manipulate elements on a webpage, as well as to store and transform data in the form of objects.

For this midterm, we ask you to be a parasite. A parasite is a creature that "eats alongside", who hijacks the functions of a host organism and reappropriates them for a different purpose. 

Choose a website and analyse its affordance, functions and context. In what ways does its aesthetic, functional and socio-cultural embodiment give meaning to its content or experience?

Using a combination of JQuery, JS functions and JSON objects, subvert the purpose of this website to create a different narrative and experience. 

This could be:
 
* Making a small, safe haven in an otherwise adversarial or forbidding website (e.g. a U.S. immigration page). 

* Taking a website designed for advertisement and propaganda and revealing its deceptions, or using them to sell your own product.

* Using one of the short stories we have read as your new narrative material, and using the navigation of an existing website to reimagine the story. Kafka, perhaps?

Requirements:
* Your parasite should *actively* engage with the fabric of the site(s) it exists within. For example -- it might take in user input instead of the site, or co-opts some kind of infrastructure on the page. A simple overlay is not enough

* Your parasite should incorporate the web technologies and techniques we've discussed so far: Jquery, javascript, HTML, CSS.

## Things you can do through console:

**easy ones: alert**

	alert(“hello”)

**Live edit page content**

	document.designMode=“on”
	-OR- 
	document.body.contentEditable="true"

## DOM properties

![Remember the DOM?](https://www.kirupa.com/html5/images/DOM_js_72.png)

[Here are all the DOM properties you can play with.](https://www.w3schools.com/jsref/prop_node_outertext.asp)

**setting style**

	element.style.backgroundColor = "red"

**e.g. change style.background property for the whole body**

	document.body.style.backgroundImage=‘url(“https://cdn.mos.cms.futurecdn.net/rqoDpnCCrdpGFHM6qky3rS-1200-80.jpg”)’

**setting innerHTML**

	element.innerHTML = "put something new inside those tags!"

**setting outerHTML**

	element.outerHTML = "<h1>new text AND new tags!</h1>"

**removing with remove()**

	var element = document.getElementById('thiselement'); 
	element.remove();

**simulating a click event**

	document.getElementById("clickhere").click()

**blur**

	document.body.style.filter="blur(10px)"

## DOM selectors

**getElementById selector**

	document.getElementById('*id-here*').style.border="solid 1px red"

Only works for <code>#id</code> objects

**getElementsByClassName selector**

	document.getElementsByClassName('*className-here*').style.border="solid 1px red"

Only works for <code>.class</code> objects

**querySelector**

	document.querySelector(" <CSS SELECTOR HERE> ")

*returns first instance*

## FOR LOOP alert! (<code>alert('for loop time!')</code>)

**querySelectorAll**

	document.querySelectorAll(" <CSS SELECTOR HERE> ")

*returns an array*

## Examples

**Use querySelectorAll with a for loop to change all imgs to something**

	var imgs = document.querySelectorAll("img");

	for (var i = 0, l=imgs.length; i < l; i++) {
    imgs[i].src="https://cdn.mos.cms.futurecdn.net/rqoDpnCCrdpGFHM6qky3rS-1200-80.jpg" };

**use document.getElementByClassName to change innerHTML**

	document.getElementsByClassName('m-bannerMessage__content')[0].innerHTML = "get lost!" 

**remember, querySelectorAll can take CSS selectors**

	var h1text = document.querySelectorAll("p, h1, h2"); // CSS selectors

	for (var i = 0, l = h1text.length; i < l; i++) {
    h1text[i].innerHTML = "you smell!";
	};



![Hitchhiking](https://media.wired.com/photos/59548a16267cf6013d251bd9/master/w_1064,c_limit/GettyImages-128953967.jpg)

![Michael Rakowitz, paraSITE](https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2014/06/Rakowitz_Shelter-469x287.jpg)

![Parasitic Architecture](https://4.bp.blogspot.com/-LY9gFD071z0/Wm7uWRNzj5I/AAAAAAAABXg/nJgAwCp33qAUMpDa6I9LluUv24DR3RRzgCLcBGAs/s1600/parasitic-architecture-43.jpg)

![Parasitic Architecture](https://1.bp.blogspot.com/-_wvlr1-6CpU/Wm7uVJaN4jI/AAAAAAAABXU/wdc4RQjSZZAwfhQ3PNs6Ns258UT5Q_G0wCLcBGAs/s1600/parasitic-architecture-33.jpg)

![Parasitic Architecture](https://2.bp.blogspot.com/-frvYeiiu000/Wm7uXBIspvI/AAAAAAAABXo/ua9m6p4jRwcUbBU79KspozIs-ZaViCraQCLcBGAs/s1600/parasitic-architecture-5.jpg)

![Parasite fish](http://www.divephotoguide.com/images/lightboximage/m/1391022554.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/yjw_DuNkOUw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


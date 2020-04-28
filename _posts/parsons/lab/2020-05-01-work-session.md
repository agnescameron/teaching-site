---  
layout: parsons_post  
title: refactoring
permalink: /lab15/  
categories:   
tags:  
assignment: 
description: pair programming and debugging on final projects
assignment-due:
readings: 
---  

{{ page.description }}

## Intro to refactoring

Currently, most of you will have code that populates the page when it loads, that looks something like:

```
for(var i=0; i<objArray.length; i++){
	
	var newDiv = $('<div/>', {
		'class': someClass
	}).html(objArray[i].something)

	$(page).append(div)
}
```

You might have some other things that sort and classify your objects, but a question that's come up a lot has been along the lines of... 'how do I use different bits of code to do different things'

## you can wrap it in a function!

```
function populatePage(sortedArray){
	
	//gets rid of whatever was there before
	$(page).html('')

	for(var i=0; i<sortedArray.length; i++){
		
		var newDiv = $('<div/>', {
			'class': someClass
		}).html(sortedArray[i].something)

		$(page).append(div)
	}

}
```

now, we can call this function with different arrays! When the page first loads, we can call it with the original array, just like before:

```
populatePage(objArray)
```

But, say we want to sort the array, or change it in some way?

```
var objArray2 = objArray.sort()
populatePage(objArray2)
```

now we can populate the page again, but with a different array!

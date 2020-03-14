---  
layout: parsons_post  
title: parasite groupwork 
permalink: /studio16/  
categories:   
tags:  
assignment: 
assignment-due: 
readings: 
---

{{page.description}}

**What is a browser extension?** 

A browser extension is basically just a package of code that talks to the browser, allowing you to make modifications to any website you're visiting, or the inner workings of the browser itself. 

For example, an extension might add a custom theme to a webpage, allow you to save parts of the page to a collection elsewhere (like are.na's extension), or something even more complex, like alter the way your browser communicates with servers elsewhere, for example blocking ads, or even confusing websites that track your interactions. You can also add a button to the browser toolbar with a popup menu for whatever you want to show. Here are a few examples of some very different extensions: 

- [Bylines](https://www.are.na/kira-simon-kennedy/bylines), an extension that displays a "paywall" style popup when you've read 10 articles by male writers.
- [TrackMeNot](http://trackmenot.io/), an extensions that foils surveillance and data-profiling by obfuscating the user's movements — hiding your web searches in a cloud of false searches and disguising the patterns.
- [nCage](https://chrome.google.com/webstore/detail/ncage/mpnfndnehgmmonhfcfdnaemdeokofgaf?hl=en), an extension that changes every image on the website to one of Nicholas Cage.
- [Textbook](https://bengrosser.com/projects/textbook/), an extension that strips facebook of images.
- [Clippy](https://chrome.google.com/webstore/detail/clippy-the-paperclip-assi/fmbcdhjmhddnnpeomknikdbboejbhdcl?hl=en-US), an extension that adds Microsoft Clippy, one of Microsoft's most reviled creations, to your browser interface as a useless animated digital assistant.
- [Jailbreak the Patriarchy](https://chrome.google.com/webstore/detail/jailbreak-the-patriarchy/fiidcfoaaciclafodoficaofidfencgd?hl=en-US), an extension that swaps gendered words on the page.

[Here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions) is a page with an introduction to other things you can do with extensions.

Within the scope of this assignment, you are asked to use the skills you've learnt so far to create a browser extension that takes a "host" website and alters its meaning or purpose by parasitism. Using Javascript, jQuery, HTML and CSS, you can dramatically or subtly manipulate one or multiple pages of a website.

Think of the browser extension simply as a javascript package. We've already had a lot of practice writing javascript and jQuery into the browser's console. By manually inputting it into console, you can check if your code works, line by line, and work out how to intervene in the host page through by examining web inspector. 

However, the console is really a place for debugging, or testing a few lines of code. Once you are comfortable with the code you are using to interact with the browser, you should start composing your code in a javascript (.js) file, which will be packaged into your extension.

**The Anatomy of an Extension**

<img src="https://media.prod.mdn.mozit.cloud/attachments/2016/08/03/13669/580d39a7d9899ed648e36ba6aeee65c2/webextension-anatomy.png" style="width: 400px">

[Detailed Mozilla page here.](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)

Remember, an extension is just a bunch of code and other files (like images) packed up in a way that your browser understands. 

The most important file in the extension folder is **manifest.json**. A .json file is a Javascript Object Notation file that stores information as "attribute-value pairs". Think of the metadata for a song, which might have attributes like "artist", "album name" and "year", each corresponding to a different value. Use the manifest.json file we created from the [Mozilla walkthrough](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) as a guide.

**manifest.json** is the metadata for the extension, which  tells the extension what to do with different files and scripts (e.g. HTML, CSS, JS, images) and when to use them (e.g. when the browser URL matches a certain page). It also contains information like "icons" (the location of the browser extension icon), and the description of the extension as shown by the browser. 

As you can see [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json), there are many more things you can do in manifest.json, and many different rules you can set to determine how and when your scripts act upon the data served by the browser, or the browser interface itself.

Let's look at just one important attribute in **manifest.json** that you will need to use:

	 "content_scripts": [ 
	    {
	      "exclude_matches": ["*://developer.mozilla.org/*"],
	      "matches": ["*://*.mozilla.org/*"],
	      "js": ["jquery-3.4.1.min.js", "borderify.js"]
	    },
	    {
	      "exclude_matches": ["*://developer.mozilla.org/*"],
	      "matches": ["*://*.mozilla.org/*"],
	      "js": ["jquery-3.4.1.min.js", "borderify.js"]
	  ],

In this case, the attribute "content_scripts" is an [ *array* ], as indicated by the square brackets <code>[ ]</code>. This means "content_scripts" is itself a list of { *json objects* }, as indicated by the squiggly brackets <code>{ }</code>. Each of these objects can take a number of different attributes — let's take a look at these line by line:

      "exclude_matches": ["*://developer.mozilla.org/*"],

Your script doesn't apply to the developer subdomain of mozilla.org. 

      "matches": ["*://*.mozilla.org/*"],

Your script will apply to anything other [subdomain or subdirectory](https://www.hotdesign.com/marketing/best-practices-for-blogs-subdirectory-vs-subdomain/) of mozilla.org. 

*Here, the * asterisk represents a wildcard in the URL path you are matching. For more ways to use match patterns, [see here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/match_patterns).*

      "js": ["jquery-3.4.1.min.js", "borderify.js"]

The location of javascript files you want to apply. These will load in order, so if the jquery library file is loaded after another file that uses a jquery expression ($) then it will not work!

Because "content_scripts" is an array (a list), you can add multiple objects, each representing a rule about what .js, .css or .html files will be loaded, and what pages will be matched or excepted by the rule. This way, you can get your extension to apply different scripts to different pages. [Here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) is a list of all the things you can do with the "content_scripts".



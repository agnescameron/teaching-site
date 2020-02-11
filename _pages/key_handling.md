---
layout: hunter_post
title: key handling in serverless apps
permalink: /key_handling/
---


### Step 1: good key hygiene and .gitignore
Even if you don’t want to go through the other steps here, it’s a good habit to put your keys into a separate file (e.g. keys.json) and import them into your code from there. If you want some nicer JS to do this, you can use modules to export your keys (however, this will require you to put all your js in strict mode). If you’re using a node JS app, or a framework like React or Angular, you can use an environment variable, as described here. The final step here will eventually use an environment variable too

There’s a platform called Netlify that does the same job as Github pages, but allows you to store keys as part of the environment, in something called a lambda function.

### Step 2




If you’re interested in 

 These can be a bit fiddly to set up, but if you’re interested in learning how to use them I’m happy to give you some sample code to get you started! 



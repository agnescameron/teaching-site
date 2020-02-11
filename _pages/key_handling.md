---
layout: hunter_post
title: key handling in serverless webapps
permalink: /key_handling/
---
<style>
body {background-color: #ffb399;}
</style>

NB -- these are instructions for what are called 'serverless' sites. ['Serverless'](https://en.wikipedia.org/wiki/Serverless_computing) here doesn't actually mean 'no server', it just means that you're not involved in the setup of the server, and it's handled by the cloud. GitHub Pages is one such serverless app!

### Step 1: good key hygiene and .gitignore
Even if you don’t want to go through the other steps, it’s a good habit to put your keys into a separate file (e.g. keys.js) and import them into your code from there. This means that you can still use git to version your code, without ever putting your keys online. 

If you want some nicer JS (ES6) to do this, you can use [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) your keys (however, this will require you to put all your js in strict mode). If you’re using a node JS app, or a framework like React or Angular, you can use an [environment variable](https://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js), as described here. The final step here will eventually use an environment variable too, so it can be a nice thing to get used to using.

Add the file where you store the keys to your [.gitignore](https://help.github.com/en/github/using-git/ignoring-files) file: this will tell git not to add that file to GitHub, even when you use `git add .`.

### Step 2: setting up a serverless app with Netlify

There’s a platform called [Netlify](https://docs.netlify.com) that does the same job as Github pages, but allows you to store keys as part of the environment, in something called a lambda function. To start using it, you can link it to any of your GitHub repositories.

It also has the nice feature of being able to [configure build options](https://docs.netlify.com/configure-builds/), allowing you to run more complex apps like node and React with the same command you'd use to compile it from the command line.

### Step 3: Netlify Lambdas

So: we still have the issue that if we want to use our key, we'd have to put it in a public git repository 

### Step 4: 



If you’re interested in 

 These can be a bit fiddly to set up, but if you’re interested in learning how to use them I’m happy to give you some sample code to get you started! 



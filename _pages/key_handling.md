---
layout: hunter_post
title: key handling in serverless webapps
permalink: /key_handling/
---
<style>
body {background-color: #ffb399;}
</style>

NB -- these are instructions for what are called 'serverless' sites. ['Serverless'](https://en.wikipedia.org/wiki/Serverless_computing) here doesn't actually mean 'no server', it just means that you're not involved in the setup of the server, and it's handled by the cloud. GitHub Pages is one such serverless app! The other, more traditional solution to this problem is just to use your own server. This can get expensive, but [Heroku](https://www.heroku.com) have a free tier that we'll play with later in the class.

### Step 1: good key hygiene and .gitignore
Even if you don’t want to go through the other steps, it’s a good habit to put your keys into a separate file (e.g. keys.js) and import them into your code from there. This means that you can still use git to version your code, without ever accidentally putting your keys online. 

If you want some nicer JS (ES6) to do this, you can use [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) your keys (however, this will require you to put all your js in strict mode). If you’re using a node JS app, or a framework like React or Angular, you can use an [environment variable](https://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js) to store your keys, as described here. (we'll also use environment variables later on!)

Add the file where you store the keys to your [.gitignore](https://help.github.com/en/github/using-git/ignoring-files) file: this will tell git not to add that file to GitHub, even when you use `git add .`.

### Step 2: setting up a serverless app with Netlify
The platform [Netlify](https://docs.netlify.com) plays a similar role to Github pages, but allows you to store keys as part of the environment, in an anonymous function called a lambda function. To start using it, make an account and you can link it to any of your GitHub repositories -- there's instructions on the site.

It also has the nice feature of being able to [configure build options](https://docs.netlify.com/configure-builds/), allowing you to run more complex apps like Node, Angular and React with the same command you'd use to compile them from the command line.

### Step 3: Netlify Lambdas

So: we still have the issue that if we want to use our key, we'd have to put it in a public git repository in order to make it appear on our site (Netlify builds from a git repository). This is still no good! However, this is where the lambda functions come in.

We can configure Netlify so it stores our API keys as secret environment variables on their servers, then makes requests with them when we want to get data from our API. In order to access these variables, we need to use an anonymous function called a lambda function. These can be a little fiddly to set up: [this](https://medium.com/@pailee.wai/hiding-serverless-apps-api-keys-and-secret-key-by-using-netlify-and-netlify-lambda-68c7e4a16a44) guide is OK (I haven't found any *great* resources for this honestly), but I did this pretty recently so if you've gone through this tutorial and are still having some issues, feel free to ask me questions.





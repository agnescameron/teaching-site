---
layout: page
title: syllabus
permalink: /syllabus/
---

## what is web programming?
This class seeks to give a broad, nuanced and critical understanding of what it means to make work for the web today. It is structured around a series of open-ended projects that inform different approaches towards web programming, and programming more generally, and together will stretch and challenge your existing skills. These projects are contextualised by readings and lectures that give a theoretical and technical basis to the material covered. 

In order to take this class, you must have already taken Web Production II and Creative Code (MEDP 234 and 331), and be comfortable programming in Javascript, HTML, and CSS. 

## class goals

* develop fluency Javascript and JQuery, and have an understanding of common web development workflows
* understand how the web is structured, and use this understanding to inform more complex projects
* think critically, experimentally and imaginatively about the web
* become familiar with the command line and the console
* understand how and where to include libraries and modules in your code
* through readings and exercises, develop and realise your own ideas about what the web should look like
* learn about simulation techniques, and how they can be used to model complex systems
* understand the web as situated within a history and geography of computation, and be aware of its broad effects and manifestations


## course overview

<!-- automated one -->

Date | Theme | Assignment | Reading 
----- | ----- | ----- | ----- | {% for post in site.posts reversed %}
{{ post.date | date: "%m/%d" }} | [**{{post.title}}**]( {{post.url}} )  <br> {{ post.description}} |  {{post.assignment}}  <br> {% if post.assignment-due %} *due: {{post.assignment-due}}* {% endif %} | {% for reading in post.readings %}{{ reading }} {% endfor %} | {%endfor%}

## structure of the course
This course is entirely project-based. this means no exams -- but also this does mean that almost all of your grade is dependent on consistent, imaginative and thoughtful work on the weekly assignments. Considered together, these will give you a broad portfolio that demonstrates a range of skills and techniques. The assignments for this course consist of six 1-week assignments, two 2-week assignments, and a final project. Each of these will address a different form and set of ideas, though there are links between all of them, and you are welcome to use these to explore one continual theme.

This class is not about having perfect code each week, and I would not expect you to. Publish and document whatever you have as you go along, so I can see your thoughts evolving as you go. That said, consistently incomplete, poor-quality or overly-simple solutions will definitely affect your grade. If you’re struggling, email me before saturday night at the latest, and turn up to office hours on Monday / make alternative arrangements, and we can work on getting you back on track. Don’t leave everything till the night before!

Each week, I expect you to write a short paragraph or two (100-250 words) on what you struggled with, what you enjoyed, your thoughts on the readings and notes for yourself, as part of an ongoing 'blog' on your site. This will be really useful to you as you revisit your work, and try and remember what you did and how you did it! It’s totally ok if things don’t always work out, but it’s not ok if you make no effort. git affords me a unique opportunity to distinguish between these things: be honest about what you did and what you need help with. 

I want you to make this class useful to you, so feel free to adapt assignments to suit your interests (though talk to me about it first). These tasks are deliberately open ended, but if you’re struggling for inspiration you are more than welcome to use one of the example problems that I’ve set. If you’d like to look further afield, the are.na channel [an idea for a website](https://www.are.na/ian-mcdonald/an-idea-for-a-website) is a great start.

### presenting work
All classwork is presented through personal websites, that you will use to document your progress. come to each class with the assignment finished, on your website, and prepared to talk about it. I will randomise you each week, and if picked you’ll have a 5 min slot to talk about your week and what you found out, and people can ask you questions (we’ll talk to 4 people a week).

There is no point in taking this class if you don’t do the homework: this is how you develop the skills you need to work on the web! Missing one of these unannounced will bring your grade down by a half point each time. (you can make it back up (once) if you publish within the week).

### group work
You may choose to work on any of the weekly projects in a group of not more than two students -- and it's encouraged you try this at least once in the semester. Do bear in mind that group projects will not just be marked on the quality of the work (which should exceed the scope of a solo attempt), but on how well you have worked together (to be recorded in the git commit history).

### on the readings
Readings for this class come in two types: preparational, and inspirational (I'll indicate which is which). The preparational ones will set the tone for the start of the next class, and you should come having read and thought about them, as we'll use them as the basis for the initial discussion. The inspirational readings are there to provide different perspectives on the previous class, or the assignment you're doing. They might be particularly helpful if you find yourself getting bogged down in something, or lacking ideas. 

*In both cases, notes on the readings should feature in your blog posts as you think about each week's assignment.* As we go along you might want to swap the 'inspirational' readings with something else you find inspiring -- that's fine, but do also write about what you read. Readings are always 'due' the next scheduled class.

### on grades
Grades for this class are assigned accordingly:

40% homework assignments
10% documentation (on your blog, inc readings, homework, final project)
20% contributions in class (readings, critiques, questions, in class assignments etc.)
30% final project

### on frameworks
Personally, I find that web development frameworks like React, Angular and others take some of the joy out of programming for the net, in the sense that they require a lot more infrastructure than just throwing some HTML and Javascript up and seeing what sticks. They are also extremely useful for certain tasks, and widely used in industry. We’ll go through some popular frameworks in class so you know what they are, and where they’re used.

If you’d like to use one such framework for any or all of your projects, I am happy to talk through it with you, though I would expect you to be reasonably self sufficient and confident with the material already being covered. I would encourage you to try it for a homework or two before deciding to use for final project. I am most familiar with React, but more than happy to help you with other frameworks if you give me fair warning.

### on computers
You can use any computer to do this class! However: you will benefit from using the same device consistently (to maintain installed software). If you can bring your own laptop to class, it's a good idea. If using Hunter's computers, it'll make your life easier if you can keep to the same operating system.

### structure of each class
This will vary, but roughly:

* 1 hour class discussion. show+critique due or in-progress assignments, talk about the readings, reflect on learnings/challenges from the past week.

* 10min break (get a snack?)

* 1h lecture

* 30min in-class exercise/activity

* 10min wrap up and discussion

* 10min homework for this week.

### on asking questions
We'll talk in class about how to ask good questions about your code.

At some point during the semester you might use a platform like [Stack Overflow](https://stackoverflow.com) to ask a question about some code you’re struggling with. Take a screenshot of the question and replies, and write a short discussion of how you think it went: whether the interaction was helpful, whether you had to follow up etc etc.

## policies

### academic integrity
Hunter College regards acts of academic dishonesty (e.g., plagiarism, cheating on examinations, obtaining unfair advantage, and falsification of records and official documents) as serious offenses against the values of intellectual honesty. Over this class, we will learn when it is appropriate to include technologies by others (for example, in the form of libraries), vs when that technology needs to be credited.

From 'writing code', in [academic integrity at MIT](https://integrity.mit.edu/handbook/writing-code):

>*“Writing code is similar to academic writing in that when you use or adapt code developed by someone else as part of your project, you must cite your source. However, instead of quoting or paraphrasing a source, you include an inline comment in the code. These comments not only ensure you are giving proper credit, but help with code understanding and debugging.”*

>*“You should not simply re-use code as the solution to an assignment. Like academic writing, your code can incorporate the ideas of others but should reflect your original approach to the problem.”*

### accessibility
In compliance with the American Disability Act of 1990 (ADA) and with Section 504 of the Rehabilitation Act of 1973, Hunter College is committed to ensuring educational parity and accommodations for all students with documented disabilities and/or medical conditions. It is recommended that all students with documented disabilities (Emotional, Medical, Physical, and/or Learning) consult the Office of Accessibility located in Room E1124 to secure necessary academic accommodations. For further information and assistance, please call (212) 772-4857/TTY (212) 650-3230. If you have registered with the Office of Accessibility, please let me know at the start of the term.

### attendance
The success of this class involves your presence and participation. As such, it is important that you are here, and on time. **You will not be penalised for one absence**, so long as you notify me in advance. Two absences will reduce your grade one step (A -> A-), three absences reduce two steps. More than that will have a serious impact on your grade.
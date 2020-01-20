---
layout: parsons_post
title: syllabus
permalink: /parsons_syllabus/
---

## what is interaction?
If a computer is a tool for thinking with, then the web is a place to
share your thoughts with others. In this class we'll think about the networked interface as a unique means of representation, speculation, and communication.

This class seeks to give a broad, nuanced and critical understanding of
what it means to design for the web today. A core aim is for you to develop appreciation of the web as a *medium* in its own right: a creative and communicative tool that encapsulates a unique set of affordances. It has a history that long predates the computer, intertwined with printed media, the postal system, libraries and the military.

This class is structured around a
series of projects that inform different approaches towards
web design, and together will
stretch and challenge you. These projects are
contextualised by readings and lectures that give a theoretical and
technical basis to the material covered, and discussed in studio during
structured critiques.

### learning outcomes


## course overview

Date | Theme | Assignment | Reading {% assign counter = 1 %}
----- | ----- | ----- | ----- | {% for post in site.posts reversed %}{% if post.path contains 'parsons' %}
W{{counter}} <br>{{ post.date | date: "%m/%d" }} <br> {% if post.path contains 'studio' %}*studio*<br>	{% else %}*lab*<br> {% assign counter = counter | plus: 1 %}{% endif %}  | [**{{post.title}}**]( {{post.url}} )  <br> {{ post.description}} <br> {% if post.tutorial %} **Tutorial:** {{post.tutorial}} {% endif %} |  {{post.assignment}}  <br> {% if post.assignment-due %} *due: {{post.assignment-due}}* {% endif %} | {% for reading in post.readings %}{{ reading }} {% endfor %} | {%endif%}{%endfor%}

### studio

### lab
The lab will complement what you are learning in the studio, both in giving you the skills to address the assignments, and in appreciating and engaging with code as a medium in its own right.

There are also sometimes readings associated with the lab: when these are set, they will be short, and seek to provide a variety of perspectives on the art and craft of programming, both on the web and off. When a reading is set, we will discuss it during the introduction to the following week.


### lab classes
Each week, bring to lab a website you find interesting or appreciate. You should present a short summary of how it's structured, and how the code works, which will also be documented on your blogs.


### on asking questions
A vitally important part of learning how to write code (and, indeed, learning how to learn to write code) is learning the art of asking good questions. We'll talk in class about how to ask questions well. Whenever you ask questions about the code you're writing, you should be putting thought into how to make it a good question.

At some point during the semester you might use a platform like [Stack Overflow](https://stackoverflow.com) to ask a question about some code you’re struggling with. Take a screenshot of the question and replies, and write a short discussion of how you think it went: whether the interaction was helpful, whether you had to follow up etc etc.


## policies

### on grades
Grades in this class are non-negotiable. As a corollary of that, we will grade your work regularly, to give you feedback on progress, and to inform an idea of what high quality work looks like in this context. If you are concerned about a grade you have received for an assignment, by all means come and talk to us: the grade won't change but we will give you some thoughts on how to improve.

A student’s final grades and GPA are calculated using a 4.0 scale. Please note that while both are listed here, the 4.0 scale does not align mathematically with the numeric scale based on percentages of 100 points.

**A**, 95-100: Work of exceptional quality, which often goes beyond the stated goals of the course A-, 90-95: Work of very high quality

**B+**, 87-90: Work of high quality that indicates higher than average abilities

**B**, 83-87: Very good work that satisfies the goals of the course

**B-**, 80-83: Good work

**C+**, 77-80: Above-average work

**C**, 73-77: Average work that indicates an understanding of the course material; passable. Satisfactory completion of a course is considered to be a grade of C or higher.

**C-**, 70-73: Passing work but below good academic standing

**D**, 60-70: Below-average work that indicates a student does not fully understand the assignments; Probation level though passing for credit

**F**, 0-60: Failure, no credit


**Grade of W**
The grade of W may be issued by the Office of the Registrar to a student who officially withdraws from a course within the applicable deadline. There is no academic penalty, but the grade will appear on the student transcript. A grade of W may also be issued by an instructor to a graduate student (except at Parsons and Mannes) who has not completed course requirements nor arranged for an Incomplete.


**Grade of Z**
The grade of Z is issued by an instructor to a student who has not attended or not completed all required work in a course but did not officially withdraw before the withdrawal deadline. It differs from an “F,” which would indicate that the student technically completed requirements but that the level of work did not qualify for a passing grade.

**Grades of Incomplete**
The grade of I, or temporary incomplete, may be granted to a student under unusual and extenuating circumstances, such as when the student’s academic life is interrupted by a medical or personal emergency. This mark is not given automatically but only upon the student’s request and at the discretion of the instructor. A Request for Incomplete form must be completed and signed by student and instructor. The time allowed for completion of the work and removal of the “I” mark will be set by the instructor with the following limitations:
Work must be completed no later than the seventh week of the following fall semester for spring or summer term incompletes and no later than the seventh week of the following spring semester for fall term incompletes. Grades of “I” not revised in the prescribed time will be recorded as a final grade of “F” by the Office of the Registrar.


### academic integrity

From 'writing code', in [academic integrity at MIT](https://integrity.mit.edu/handbook/writing-code):

>*“Writing code is similar to academic writing in that when you use or adapt code developed by someone else as part of your project, you must cite your source. However, instead of quoting or paraphrasing a source, you include an inline comment in the code. These comments not only ensure you are giving proper credit, but help with code understanding and debugging.”*

>*“You should not simply re-use code as the solution to an assignment. Like academic writing, your code can incorporate the ideas of others but should reflect your original approach to the problem.”*

### Communication Design Zero Tolerance Attendance Policy
In order to foster a studio learning environment where we all learn from peers and through dialogue, timely and regular attendance is a strict expectation for all Communication Design students. Students who are not present in class are unable to meet the learning outcomes of a Communication Design course.

For classes meeting once a week, students are allowed 2 absences. For classes meeting twice a week, students are allowed 4 absences. Any absence beyond the allowed absences will result in an automatic failure (F) for the course. There are no excused absences. This applies to each and every student.

A student is deemed tardy if a student fails to arrive within 15 minutes past the beginning of class. 2 tardies will result in an automatic absence. A student who arrives an hour past the beginning of class will be deemed absent.


### No Late Work and Missed Critiques
Work that is submitted past the assignment due date will result in an automatic failure for the assignment. For work presented in critique, absence at the critique will result in an automatic failure for the assignment. 


### CD App
Information about upcoming CD Lectures, events from AIGA NY/TDC, the CD Library, and the CD Paper Store can be found on the CD App.

https://cdparsons.glideapp.io/

To install the app on your phone:

For iOS users: 
1. Visit the link in Safari, tap on the "Share" icon located at the bottom of the page
2. Tap the "Add to Home Screen" button
3. Tap the "Add" button at the top right corner of the screen

For Android users:
1. Tap on the notification banner at the bottom of the page (alternatively, you can tap the "Add to Home Screen" option inside the menu at the top right corner of the screen)
2. Tap the "Add" button on the modal


### Mandatory CD Lecture Attendance
Every fortnight, the Communication Design program hosts the CD Lectures Series that brings in practicing designers to share their work and practice with our community. The CD Lecture Series is an important part of achieving an understanding of contemporary design culture.

It is mandatory for students in Core Studio Typography and Core Studio Interaction to attend all lectures. Attendance is recorded. Each missed lecture will be recorded as 1 tardy.

Lecture dates can be found on the CD App (https://cdparsons.glideapp.io/).


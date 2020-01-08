---
title: "Golang: a new favourite"
description: 'Golang is a imperative, concurrent programming language.'
date: '2020-01-07'
image:
tags: ['golang', 'learning']
---

### Introduction
When I first started as a developer I chose to compliment my formal university education with languages, tools, and frameworks that are not taught in class but are broadly used in the workplace. Therefore, the Java, OOP, and UML diagrams I was learning, applicable primarily to backend and Android development, and Python, applicable to automation (we weren't taught libraries and application to data science and ML) was best complimented by frontend technologies.

I therefore chose to pursue proficiency in HTML/CSS, vanilla JS, then frameworks like React and Vue, static site generators like Gatsby, the DOM, http/https, etc. I do find this work enjoyable. Being able to create a UI that engages users and simplifies the task is quite rewarding. However, after spending time in the workplace working on the backend of a system with Java and interaction with a database and other systems, I was intrigued by some more systems/network based technologies.

I was hearing increasingly more about Golang within the developer community and decided that was the way to go. I had no experience of C/C++ so an imperative programming language seemed like a excellent additional understanding to have. 

### The Basics
[Golang.org](https://golang.ord) was my first resource and it did not disappoint. The interactive learning platform has you go step by step through the main features of Go, building on top of each module before it, and allowing you to solve practice questions in the browser with each feature introduction. The first noticeable difference between my experience and Go was the installation and setup process. It is much more explicit than setting up Python (which even comes preinstalled on mac). Additionally, Golang was my first time working in concurrent programming.

#### Concurrency
Concurreny is a programming paradigm. Go is an application of this paradigm. At first read one might assume concurrency and parallel programming are similar or even the same. Concurrent programs can run in parallel, but they don’t have too. The main benefit of concurrent programs is their ability to break up executions into different, independent tasks. These different tasks are run on different execution threads which are stopped and started in synchronization with all the others. It allows you to explicitly structure the execution of your program and pass data between different tasks.

### The Project
I think it is consensus that the best way to learn is to code. Therefore, solidifying my new knowledge into a legitimate project was the next step in my Go journey. After much thought I decided on implementing a CLI program. I often forget commands in the CLI— is it `gatsby develop` or `gatsby start` 

On the command `cheatsheet add` or `cheatsheet ls` the CLI is triggered. On both, a sqlite db is created with SQL locally via a sqlite3 driver for Go available on [Github](http://mattn.github.io/go-sqlite3/). If the command is "add" that means the user wants to add a new entry in the db containing a command. The program then prompts the user to enter the command, the language/tool it's associated with, and a brief explanation (optional). If the command is "ls" a list of the contents of the db are shown in the command-line. I attempted to include many of Go's unique features in this project such as channels and concurrency in order to better grasp the scenarios of when Go is an appropriate language to use.

### Conclusion
I think there are two main reasons I came to easily love Go. 1) The comprehensive docs and 2) the robust, structural, explicit nature of the language.
---
title: "Diving into React"
description: 'React is a popular component-based, declarative library.'
date: '2019-12-21'
image:
tags: ['react', 'web-dev', 'learning']
---

### Overview
We’ve all heard of React. Since Facebook debuted it in 2013, the **library** has been widely adopted by the developer community and industry. It’s component-based, used for building user interfaces and requires additional libraries for routing and interaction with APIs.

I emphasized library in the above paragraph because some (me too at first) thought about it as a framework. A library is just a collection of classes but may still include configuration data, documentation, templates, and type specifications. It leaves the developer more control whereas a framework is more constraining.

### Why is React so popular?
From where I’m standing its a couple things. Unidirectional data flow, intuitive state updating (especially with functional components), JSX, and components. All excellent attributes of React but let’s talk about the non-technical things that make something worth working with.

Popularity means lots of developers, more developers means a large community writing articles and tutorials, making YouTube videos, and answering questions on Twitter and stack overflow. That support system is not only excellent for beginners but also for experienced developers who want to learn one of the many libraries that work with React.

Excellent documentation. Not only is the official Read [tutorial](https://reactjs.org/tutorial/tutorial.html) a great primer, the actual documentation is quite extensive. Good documentation is a rarity but also the very best resource for developers. When a library has good docs (like Gatsby) USE IT.

### How do I get started?
So, after all that reading you must want to start coding. One of the easiest ways to get up and running is something called **create react app**. It contains all the configurations and dependencies you need to get started so you don’t have to worry about setting up the environment. Along with React there are four other main packages that get installed. Let's briefly run through each so you get an understanding of what is happening in the background.

- React-scripts brings in the bulk of dependencies like webpack, babel, postcss, and eslint.  

- Webpack bundles js files and generates static assets ([here](https://survivejs.com/webpack/what-is-webpack/) is a good webpack explainer).  

- Babel transforms your code to make it readable in the browser. Postcss transforms styles with js and supports variables and mixins.  

- Eslint is for linting rules. 

In addition, you'll get node_modules and package.json. After that, it’s all up to you!

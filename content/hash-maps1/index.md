---
title: "Data Structures: Hash Maps Part 1"
description: 'Visualization of a hash map and a few notes. Part 1 of 2.'
date: '2019-01-10'
image: 'hashmap-ex.png'
tags: ['data-structures']
---

A map of a collection of key value pairs. The structure tries to do constant time. 

So **how** do we do this? Reference key value pairs using arrays by transforming keys into array indexes.

a) Address Generation
    - calculating keys
    - uniformly distributes elements
b) Collision Resolution
    - resolves when 2 keys map to the same index

**Rules**: 
- n = # of elements
- N = # of cells

#####**Collision Resolution**: Linear Probing
____
1. find element h[key]
2. probe each consecutive location until:
    a) empty index to add pair
    b) no empty cells

Ex. N = 5, h(key) = kmod5, #s = 10,11,12,15
h(10) = 10/5 = 0
h(11) = 11/5 = 1
h(12) = 12/5 = 2
h(15) = 15/5 = 0 **collision!**
probe until you find an available spot = index 3
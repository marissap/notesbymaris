---
title: "Notes on Python: Enumerate"
description: This post is related to python
date: '2019-06-26'
image: 
tags: ['python']
---

- Enumerate is a python built-in function that gives a list of tuples of the indices and the elements in an iterable
- Before I go into an example of using _enumerate_ let's quickly discuss my use of the word iterable
    - __Iteration__: take each item of something
        - like a loop over a group of elements
    - __Iterable__ and __iterator__ have different and specific meanings in Python
    - __Iterable__ is an object that can be used as a sequence which defines an _iter_ method (which allows loops) or and _next_ method (which accesses each element one at a time)
        - iterable object types includes lists, strings, dictionaries and sets.
        - you can loop over an iterable but you cannot access individual elements directly
        - __Iterator__ is defined in the _iter_ method, you can turn any sequence into an iterable with it
        - when a for loop os executed, the statement calls iter() in the object
- Let's look at some examples:

1. Iterating over a list
```python
    # list of soccer players 
    soccer_players = ["Ronaldo", "Hazard", "Mbappe"]
    
    # intialize the object 
    iterator = iter(soccer_players) 
    
    print(next(iterator)) 
    print(next(iterator)) 
    print(next(iterator))
```
This prints
```
    Ronaldo
    Hazard
    Mbappe
```

2. An iterable Class

```python
    class myIterable(object):
        # initialize a list
        def __init__(self):
            self.list = [42, 3.1415, "Hello World!"]
        # define an iterator
        def __iter__(self):
            return iter(self.list)

    # create an instance of your class
    m = myIterable()
    # loop through class
    for x in m:
        print x

    42
    3.1415
    Hello World!
```

- Okay, back to __ennumerate()__
- It allows you to loop over a collection of items while keeping track of the current item’s index
```python
    soccer_players = ["Ronaldo", "Hazard", "Mbappe"]

    for index, value in enumerate(soccer_players):
        print(f'{index}: {value}') # f' is just a way to embed Python expressions inside string constants (3.6+)
```
This outputs:
```
    0: Ronaldo
    1: Hazard
    2: Mbappe
```

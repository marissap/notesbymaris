---
title: "Enumerate in Python"
description: 'The title is also the description.'
date: '2019-06-26'
image: 
tags: ['python']
---
Enumerate is a python built-in function that create a list of tuples containing the indices and the elements in an iterable. Before I go into an example of using _enumerate_ let's quickly discuss some definitions.

__Iteration__: 
Take each item of something, like looping over a group of elements

__Iterable__: 
An object that can be used as a sequence which defines an _iter_ method (which allows loops) or a _next_ method (which accesses each element one at a time). Iterable object types includes lists, strings, dictionaries and sets. You can loop over an iterable but you cannot access individual elements directly

__Iterator__: defined in the _iter_ method it allows you to turn any sequence into an iterable. When a for loop os executed, the statement calls iter() in the object.

Let's look at some examples:

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

Let's return to the purpose of this note, __ennumerate()__. Ennumerate() allows you to loop over a collection of items while keeping track of the current item’s index. It iterates over the items via a for loop but tracks the index __and__ element instead of just one (depending on your use of range and len).
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

_Note: Python 3_
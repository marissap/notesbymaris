---
title: "Web Dev: Flexbox"
description: Exploring Flexbox, a web layout model of responsive elements within a container.
date: '2019-03-04'
image: 
tags: ['web dev']
---


####Flex container
- Element that contains flex items

####Flex item
- Element in flex container
- all flex items shrink proportionally when the flex container is too small but won’t grow if flex container is big
- To designate an element to a flex container set display to flex or inline-flex

####Justify-content
- spaces elements horizontally
- Flex-start
    - Position in order, from the left, no space in between elements (except margins and borders)
- Flex-end
    - position in order last item starting at the right no space in-between them
- Center
    - Positioned in order, centre, no space
- Space-around
    - Equal space before and after = double space between each
- Space-between
    - Equal space between elements not before or after

####Align-items
- spaces elements vertically
- Flex-start
    - Positioned at top of parent container
- Flex-end
    - Positioned at bottom of parent container
- Center
    - centered
- Baseline
    - Bottom of each item aligned with each other
- Stretch
    - Stretch from top to bottom of parent container

####Flex-grow
- Specify if items should grow to fill a container
- Can grow different flex items at different rates in proportion to each other
- Default value = 0

####Flex-shrink
- specify which elements will shrink and in what proportions
- Default value = 1

####Flex-basis
- specify the width of an item before it stretches or shrinks

        .container {
            display: flex;
        }
        .side {
            flex-grow: 1;
            flex-basis: 100px;
        }
        .center {
            flex-grow: 2;
            flex-basis: 150px;
        }
    
- .side divs will be 100 pixels wide and the .center div will be 150 pixels wide if the .container div has just the right amount of space (350 pixels)
- if the .container div is larger, the .center div will absorb twice as much space as the .side divs


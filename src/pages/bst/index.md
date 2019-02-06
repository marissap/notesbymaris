---
title: "Data Structures: Binary Search Trees"
description: This post is related to data structures
date: '2019-01-10'
image: 'bst.png'
---

Binary Search Trees all nodes smaller than the root are to the left and those larger, to the right. This pattern continues at each node when it is the root.

**Traversing**
- Always traverse INORDER.

**Inserting**
1. ask bigger or smaller than root
2. ask bigger or smaller than next

**Times**
- Balanced
    - insert = O(logn)
    - find = O(logn)
- Unbalanced
    - insert = O(n)
    - find = O(n)
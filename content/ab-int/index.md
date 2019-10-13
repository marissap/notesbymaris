---
title: "Java: Abstract Class v. Interface"
date: '2019-02-21'
image:
tags: ['java']
---

Preliminary discussion, abstraction is about hiding implementation and only showing functionality.
There are abstract classes and methods, let's begin with discussing abstract v concrete.
- Concrete Method: method that has a body, is declared and has code inside
```java
    public boolean bballPlayers() { // this returns true by the way
        if (Lebron > Kevin Durant) {
            return True;
        }
        return False;
    }
```
- Abstract Class: cannot be instantiated, needs to be extended and implemented, it can have CONCRETE methods
- Abstract Method: method delcared without implementation (method signatures)
```java
    public abstract void something();
```

Now to the main event...

Abstract | Interface
--- | ---
includes concrete and abstract methods | full contract (if you implement an interface you must implement **all** methods)
--- | ---
partical contract (must only implement abstract methods) | abstract methods only (this is no longer true in Java 8+, add default to make it concrete)
--- | ---
a class can extend only **one** abstract class | a class can extend **multiple** interface
--- | ---
can define static and instance constants and variables | can only define public static final constants
--- | ---
can implement an interface | cannot extend an abstract class
--- | ---
can implement private and protected methods | **all** methods are public

**Interface**
```java
    public interface Payment {
        public abstract void makePayment(); // no longer have to add the abstract keyword
    }

    public class creditCard implements Payment {
        public void makePayment() {
            // code here
        }
    }
```

**Abstract**
```java
    public abstract class Payment {
        public void encryptPassword() {
            // code here
        }
        public abstract void makePayment();
    }

    public class creditCard extends Payment {
        public void makePayment();

        // note here there is no encryptPassword() method
        // it is INHERITED
    }
```

######So when do we use each?
Abstract: when we want the same functionality in every subclass for a specific operation (concrete method) and different functionality for some other operations (method signature)

Interface: when unrelated classes will implement the interface, specifying the behavior of a particular data type, you want to take advantage of multiple inheritance of type
---
layout: post
title: "C# Three Pillars"
date: 2017-01-31
lang: en-us
---

# {{page.title}}

### `Encapsulation`

Encapsulation helps hide complexity

```csharp
public HelloWorld() { ... }

private string _name;

private List<float> names;
```

### `Inheritance`

Inheritance is a technique where you can define a relationship between two classes such that one class takes on or inherites the memebers of another class. so if class `A` has one method, DoWork, then class B can also have that same method, just by inheriting from class A and not writing any additional code, but reusing the code already in the first class. If class B wanted to have an additional method, it can.

```csharp
public class A
{
    public void DoWork
    {
        // code here...
    }
}

public class B : A
{
    // code here...
}

public class C : B
{
    // code here...
}
```


### `Polymorphism`

Polymorphism == many sharpes.
- One variable can point to different types of objects
- Objects can behave differently depending on their types

```csharp
public class A
{
    public virtual void DoWork()
    {
        // code here...
    }
}

public class B : A
{
    public override void DoWork()
    {
        // optionally call into base...
        base.DoWork();
    }
}
```
---
layout: post
title: "C# - Abstract vs interface"
date: 2017-11-23
lang: en-us
---

### {{ page.title }}

#### `Difference between abstract and interface`.

1. Abstract can have access modifiers whereas interface cannot.
2. Abstract can have field whereas interface cannot.
3. Abstract can have implementation details whereas interface cannot.
4. Abstract can inherit from an abstract class and interface whereas interface can inherit from an interface but not abstract.

#### `Example`
```csharp
// abstract class
public abstract class Customer
{
    // Abstract method (note: Not allow implementation detail)
    public abstract void AbstractPrint();

    // Non-abstract method
    public void NonAbstractPrint()
    {
        Console.WriteLine("I am a non-abstract method.");
    }
}

public class Program : Customer
{
    public static void Main(string[] args)
    {
        // Must provide implementation for 'AbstractPrint' method. Override keyword is needed
        public override void AbstractPrint()
        {
            Console.WriteLine("I am an abstract method.");
        }
    }
}
```

#### `Extra for abstract`

1. The 'abstract' keyword is used to create abstract class.
2. An 'abstract' class is incomplete and hence cannot be instantiated.
3. An 'abstract' class can only be used as base class. (becos it's incomplete which make sense it can only be a base class)
4. An 'abstract' class cannot be sealed (sealed = prevent from being inherited).
5. An 'abstract' class may contains abstract memeber (field, property, method, etc...) but not mandatory.
6. A non-abstract class derived from abstract class must provide implementation detail.


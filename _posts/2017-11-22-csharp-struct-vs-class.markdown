---
layout: post
title: "C# - Struct vs class"
date: 2017-11-22
lang: en-us
---

### {{ page.title }}

Difference between `struct` and class.

1. Struct is a `value` type and class is a `reference` type.
2. Struct stores on the `stack` and whereas class stores on the `heap`.
3. Value type hold their value in memory and whereas reference type hold the refernece to the object in memeory.
4. Value type destroyed immediately after scope is lost and whereas the object reference variable is destroyed when its scope is lost. The actual class object get destroyed later in garbage collector.
5. When you copy a strcut to another struct, a new copy is created and modifications won't affect one another.
6. When you copy a class to another class, it is pointing to the same object in memory. Modifications will be affected one another. 
7. Struct cannot have destructor and class can.
8. Struct cannot have parameterless constructor but class can.
9. Struct cannot inherit from another class but class can. Both struct and class can inherit an interface.
10. Use `sealed` type to prevent class being inherited.

```csharp
// Base class
public class Parent
{
    public void Print()
    {
        Console.WriteLine("Hello world!");
    }
}

// Derived class
public class Customer : Parent
{
    public int ID { get; set; }
    public string Name { get; set; }

    // class can have destructor
    ~Customer() { }

    // class can have parameterless constructor
    public Customer() { }
}

public class Program
{
    static void Main(string[] args)
    {
        // int is vlaue type and stores in memory but get destroyed when its scope is lost.
        // update 'j' will not affect i as they're two different copy in memory.
        int i = 10;
        int j = i
        j = j + 1;

        // Object reference variable 
        Customer C1 = new Customer
        {
            ID = 101,
            Name = "Amelia"
        };

        // Both C1 & C2 pointing to the same memory location in heap.
        Customer C2 = C1;

        // Update its property will afect one another.
        C2.Name = "Jaythan";

        // output: C1 name: Jaythan, C2 anme: Jaythan
        Console.WriteLine($"C1 name: {C1.Name}, C2 anme: {C2.Name}");
    }
}
```  
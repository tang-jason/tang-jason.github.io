---
layout: post
title: "C# - When to use override & new"
date: 2017-08-02
lang: en-us
---

### {{ page.title }}

Method in the child class can have a same method name in the base class. You can specify how the methods interact by using `override` and `new` keywords. `override` extend the base class method, and `new` modifier hides the the child class method that has the same method name as base class.

#### Example

```csharp
// Base class
class Car
{
    public void DescribeCar()
    {
        Console.WriteLine("Four wheels and an engine!");
        ShowDeatils();
    }

    public virtual void ShowDetails()
    {
        Console.WriteLine("Standard transportation!");
    }
}

// Child class
class ConvertibleCar : Car
{
    public new void ShowDetails()
    {
        Console.WriteLine("The roof opens up!");
    }
}

// Child class
class MiniVan : Car
{
    public override ShowDetails()
    {
        Console.WriteLine("Carries 7 people!");
    }
}

class Program
{
    static void Main(string args[])
    {
        var cars = new List<Car>()
        {
            new Car(),
            new ConvertibleCar(),
            new MiniVan()
        }

        foreach (var car in cars)
        {
            car.DescribeCar();
        }
    }
}

/*
Ouput:
Four wheels and an engine!
Standard transportation!

Four wheels and an engine!
Standard transportation!

Four whiles and an engine!
Carries 7 people!
*/
```

More details in [When to use oerride and new keywords](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/knowing-when-to-use-override-and-new-keywords){:target="_blank"}
---
layout: post
title: "C#: Delegate"
date: 2017-03-30
lang: en-us
---

### {{ page.title }}

#### `What is Delegate?`

A delegate is a type safe function pointer. That is, it holds a reference (pointer) to a function.

The signature of the delegate must match the signature of the function the delegate points to, otherwise you get a compiler error. This is a reason delgates are called as type safe function pointers.

A delegate is similar to a class. You can create an instance of it, and when you do so, you pass in the function name as a parameter to the delegate consturctor, and it is to this function the delegate will point to.

Tip to remember delegate syntax: Delegates syntax look very much similar to a method with a delegate keyword.

```csharp
// A delegate just a type safe function pointer. Using delegate gives developers a lot of flexibilites
namespace Delegates
{
    // delegate function
    public delegate void HelloFunctionDelegate(string message);

    class Program
    {
        // method
        static void Hello(string message)
        {
            Console.WriteLine(message);
        }

        // Entry point
        static void Main(string[] args)
        {
            // Instantiate delegate
            // Signature must match the method
            HelloFunctionDelegate del = new HelloFunctionDelegate(Hello);
            del("Hello from delegates"); // output: Hello from delegates
        }
    }
}
```
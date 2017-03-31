---
layout: post
title: "Understand C# Delegate"
date: 2017-03-30
lang: en-us
---

### {{ page.title }}

A delegate is a type that represents references to methods with a particular parameter list and return type. When you instantiate a delegate, you can associate its instance with any method with a compatible signature and return type. You can invoke (or call) the method through the delegate instance.

#### `Delegate Declaration`

```csharp
    // example
    public delegate void CreateFullName(string firstName, string lastName);
```

#### `Full Example`

If you're coming from a JavaScript background, C# delegate is pretty much like `function expression` but in C# way.

JavaScript Function Expression Example:

```javascript
    var add = function (num1, num2) {
        return num1 + num2;
    }
```

C# Delegate Example:

Follow the steps

```csharp
    // step 1: delegate declaration
    public delegate double AddSumDelegate(int num1, int num2);

    class Program
    {
        static void Main(string[] args)
        {
            // step 3: create a delegate instance and pass in the method
            AddSumDelegate addSum = new AddSumDelegate(AddMethod);

            // step 4: invoke addSum method and assign the returned value to 'result'.
            // similar to JavaScript function expression. It assigns the function to variable.
            double result = addSum(4, 5);

            // step 5: print out the result
            Console.WriteLine(result); // output: 9
        }

        // step 2: create a method
        static double AddMethod(int n1, int n2)
        {
            return n1 + n2;
        }
    }
```
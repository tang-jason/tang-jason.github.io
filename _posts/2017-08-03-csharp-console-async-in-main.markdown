---
layout: post
title: "C# - Async in Console App Main"
date: 2017-08-03
lang: en-us
---

### {{ page.title }}

This is one of the few ways that run `async` and `await` within the console application `Main` method which I found very helpful.

#### Example

```csharp
private static List<string> samples;

static void Main(string[] args)
{
    try
    {
        Task.Run(async () => {

            // your await method here...
            samples = await Helper.GetAllSamplesAsync();

        }).GetAwaiter().GetResult();

        foreach (var sample in samples)
        {
            Console.WriteLine($"Sample name: {sample.Name}"); // output: Sample name: Hello-World
        }
    }
    catch (Exception e)
    {
        Console.WriteLine("Failed: " e.toString());
    }
    Finally 
    {
        Console.WriteLine("Closing console app!");
    }
}
```

The `GetAwaiter()` and `GetResult()` methods will return all awaitable result before closing the console app.
---
layout: post
title: "C# - LINQ"
date: 2017-06-06
lang: en-us
---

### {{ page.title }}

Both below are return the same result.

#### `LINQ Query`

```csharp
var bmws = from car in myCars
           where car.Make == "BMW" && car.Year == 2010
           select car;

var orderedCars = from car in myCars
                  orderby car.Year descending
                  select car;
```

#### `LINQ Method`
```csharp
// 'p' is each item in the collection
var bmws = myCars.Where(p => p.Make == "BMW" && p.Year == 2010);

// using OrderByDescending()
var orderedCars = myCars.OrderByDescending(p => p.Year);

// using First()
var firstBMW = myCars.OrderByDescending(p => p.Year).First(p => p.Make == "BMW");

// using TrueForAll()
Console.WriteLine(myCars.TrueForAll(p => p.Year > 2007)); // output: true / false

// ForEach()
myCars.ForEach(p => Console.WriteLine("{0} {1:C}", p.VIN, p.StickerPrice));
myCars.ForEach(p => p.StickerPrice -= 3000);

// Exists()
Console.WriteLine(myCars.Exists(p => p.Model == "745i")); // output: true / false

// Sum();
Console.WriteLine(myCars.Sum(p => p.StickerPrice)); // output: add up all sticker price
```
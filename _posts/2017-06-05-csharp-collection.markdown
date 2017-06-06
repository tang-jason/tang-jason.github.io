---
layout: post
title: "C# - Collections"
date: 2017-06-06
lang: en-us
---

### {{ page.title }}

Differnt ways to creat collections.

#### `ArrayList`
An ArrayList is flexible array which contains a list of objects. YOu can add and remove items from it and it automatically deals with allocating space. If you store value types in, they are boxed and unboxed, which can be a bit inefficient. Also, it is not `not safe`.

```csharp
ArrayList myArrayList = new ArrayList();
myArrayList.Add(car);
```

#### `List<T>`
Leverages generic; it is essentially a `type safe` version of ArrayList. This means there is no boxing or unboxing (which improves performance) and if you attempt to add an item of the wrong type it'll generate a compile error.

```csharp
List<Car> myList = new List<Car>();
myList.Add(Car);
```

#### `Array`
An Array is fixed in size once it is allocate, you can't add items to it or remove items from it. Also, all elements must be the same type. As a result, it is `type safe`, and is also the most efficient of the three in both memory and performance. 

```csharp
int[] myArray = new int[5];
myArray[0] = "hello";
```

#### `Dictionary<TKey, TValue>`

```csharp
Dictionary<string, Car> myDictionary = new Dictionary<string, Car>();
myDictionary.Add(car1.VIN, car1);
myDictionary.Add(car2.VIN, car2);

Console.WriteLine(myDict["v1"].Model);
```

`Initializer`

Two different ways to initilize the collection.

```csharp
// object initializer
Car car1 = new Car() {
    Make = "make 1",
    Model = "model 1",
    VIN = "v1"
};
```

```csharp
// collection initializer
List<Car> myList = new List<Car>() {
    new Car { Make = "make 2", Model = "model 2", VIN = "v2" },
    new Car { Make = "make 2.1", Model = "model 2.1", VIN = "v2.1" }
};
```
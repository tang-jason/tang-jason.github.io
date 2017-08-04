---
layout: post
title: "C# - HashSet Common Methods"
date: 2017-08-03
lang: en-us
---

### {{ page.title }}

HashSet can be use to remove duplicates and union different HashSets. Below are the three basic characteristics that differentiate C# HashSet<T> from other generic and non-generic collections in the .NET framework.

- Searching in `HashSet<T>` is extremely fast because the `Contains` method of the `HashSet<T>` collection uses hash-based searching mechanism to find elements.

- Duplicate elements cannot be added in a `HashSet<T>`. Duplicate elements, if added are internally ignored without giving an errors.

- Indexed based elements access is allowed in a `HashSet<T>`.

#### `HashSet Contains`

```csharp
// Using contains method. Returns bool; true/false
HashSet<string> countries = new HashSet<string> { "usa", "china", "korea", "german" };

Console.WriteLine(countries.Contains("usa")); // output: true
```

#### `HashSet Add`

```csharp
HashSet<string> countries = new HashSet<string> { "usa", "china", "korea", "german" };

countries.Add("france");

foreach (var country in countries)
{
    Console.WriteLine(country); // usa, china, korea, german, france
}
```

#### `HashSet Remove`

```csharp
HashSet<string> countries = new HashSet<string> { "usa", "china", "korea", "german" };

countries.Remove("china");

foreach (var country in countries)
{
    // output: usa, korea, german
}
```

#### `HashSet RemoveWhere`

```csharp
HashSet<string> countries = new HashSet<string> { "usa", "china", "korea", "german", "japan" };

// needs to use lambda. Only 'german' and 'japan" contains 'an'
countries.RemoveWhere(r => r.Contains("an"));

foreach (var country in countries)
{
    Console.WriteLine(country); // output: usa, china, korea
}
```

#### `HashSet UnionWith`

```csharp
HashSet<string> countries = new HashSet<string> { "usa", "china", "korea", "german" };
HashSet<string> countries1 = new HashSet<string> { "usa", "china", "korea", "japan" };

countries.UnionWith(countries1);

foreach (var country in countries)
{
    Console.WriteLine(country); // output: usa, china, korea, german, japan
}

```

#### `HashSet IntersectWith`

```csharp
HashSet<string> countries = new HashSet<string> { "usa", "china", "korea", "german", "japan" };
HashSet<string> countries1 = new HashSet<string> { "usa", "china", "japan" "Taiwan", "Canada" };

countries.IntersectWith(countries1);

foreach ()
{
    // output: usa, china, japan
}
```

#### `HashSet ExceptWith`

```csharp
HashSet<string> countries = new HashSet<string> { "usa", "china", "korea", "german", "japan" };
HashSet<string> countries = new HashSet<string> { "usa", "china", "korea" };

countries.ExceptWith(countries1);

foreach ()
{
    // output: german, japan
}
```
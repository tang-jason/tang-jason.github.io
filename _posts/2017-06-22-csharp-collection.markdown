---
layout: post
title: "C# - Collections"
date: 2017-06-22
lang: en-us
---

### {{ page.title }}

#### `Collection Summary`

Name: `List<T>`

Strength: A growing array


Name: `Queue<T>, Stack<T>`

Strength: For FIFO and LIFO

Name: `HashSet<T>`

Strength: Unique items only

Name: `LinkedList<T>`

Strength: Flexible inserts

Name: `Dictionary<Tkey, Tvalue>`

Strength: Quick look up by key

Name: `SortedSet<T>, SortedList<Tkey, Tvalue>, SortedDictionary<Tkey, Tvalue>`

Strength: Sorted & unique, Sorted & memory efficent, Sorted, fast insert and removals

#### `List<T> Example`

```csharp
List<Employee> employee = new List<Employee>();
employee.Add(new Employee { Name = "John" });
employee.Add(new Employee { Name = "Alex" });
```

#### `LinkedList<T> Example`

```csharp
LinkedList<int> links = new LinkedList<int>();
links.AddFirst(2);
links.AddFirst(3);

var first = links.First;
links.AddBefore(first, 5);

foreach (var link in links)
{
    Console.WriteLine(link); // output: 5 3 2
}
```

#### `Queue<T>`

```csharp
// FIFO data structure
Queue<Employee> line = new Queue<Employee>();
line.Enqueue(new Employee { Name = "A" });
line.Enqueue(new Employee { Name = "B" });
line.Enqueue(new Employee { Name = "C" });

while (line.Count > 0)
{
    var employee = line.Dequeue();
    Console.WriteLine(employee.Name); // output: A B C
}
```

#### `Stack<T> Example`

```csharp
// LIFO data structure
Stack<Employee> stack = new Stack<Employee>();
stack.Push(new Employee { Name = "A" });
stack.Push(new Employee { Name = "B" });
stack.Push(new Employee { Name = "C" });

while (stack.Count > 0)
{
    var employee = stack.Pop();
    Console.WriteLine(employee.Name); // output: C B A
}
```

#### `Dictionary<Tkey, Tvalue> Example`

```csharp
var dict = new Dictionary<string, Employee>();
dict.Add("A", new Employee { Name = "A" });
dict.Add("B", new Employee { Name = "B" });
dict.Add("C", new Employee { Name = "C" });

foreach (var item in dict)
{
    // output: A : A, B : B, C : C
    Console.WriteLine("{0} : {1}", item.Key, item.Value.Name);
}
```
#### `Dictionary<Tkey, Tvalue> Example #2`

```csharp
var dict = new Dictionary<string List<Employee>>();

dict.Add("Sales", new List<Employee>
{
    new Employee { Name = "A" },
    new Employee { Name = "B" },
    new Employee { Name = "C" }
});

dict["Engineering"].Add(new Employee { Name = "D" });

foreach (var department in dict)
{
    foreach (var item in department.Value)
    {
        Console.WriteLine(item.Name); // output: A B C D
    }
}

```

#### `SortedDictionary<Tkey, Tvalue> Example`

```csharp
var sortedDict = new SortedDictionary<string, List<Employee>>();

sortedDict.Add("Sales", new List<Employee>
{
    new Employee {Name = "Tom"},
    new Employee {Name = "Jerry"},
    new Employee {Name = "Heather"}
});

sortedDict.Add("Enginnering", new List<Employee>
{
    new Employee {Name = "Vic"},
    new Employee {Name = "Chris"}
});

foreach (var dep in sortedDict)
{
    // output 1: The count for Engineering is 2
    // output 2: The count for Sales is 3
    Console.WriteLine("The count for {0} is {1}", dep.Key, dep.Value.Count);
}
```
---
layout: post
title: "C#: interfaces"
date: 2017-01-31
lang: en-us
---

# {{ page.title }}

Building an abstract class is one way to define a type to achieve polymorphism, but another approach is to define and `interface`. An interface definition uses the `interface` keyword, and an interface is a type in .NET Framework. Just like the class, struct, and delegate keywords define types, so does interface.

An `interface` is special because it can never contain any implementation details. When you define an interface you're defining an API for an object, that is any object that implements an interface is guaranteed to have the member an interface describes.

- Interfaces contain no implementation details
    - Defines only the signatures of methods, events, and properties
- A type can implement multiple interfaces

```csharp
public interface IWindow
{
    string Title { get; set; }
    void Draw();
    void Open();
}
```

In the example above. Any object that implements IWindow must have a `title` property that is both readable and writeable, it also must have a `draw` method that takes no parameters and returns void, and it must have an `Open` method, also a no parameters and returns void. In some ways an interface is like an abstract type, because in order to create a concrete class that implement this interface, it must implement those three members. But there is one huge difference between an abstract class and interface. When it defines a class, it can only inherit from a single base class, but it can implement as many interfaces as it likes.

Interface allows you to define the API your software needs without defining any of the implementation details, and because any class or struct inherit from any interface, interface are extremely flexible.

### `Interface Summary`

An interface has the follow properties:

- An interface is like an abstract base class. Any class or struct that implements the interface must implement all its members.
- An interface can't be instantiated directly. Its members are implemented by any class or struct that implements the interface.
- Interfaces can contain events, indexers, methods, and properties.
- Interfaces contain no implementation of methods.
- A class or struct can implement multiple interfaces. A class can inherit a base class and also implement one or more interfaces.
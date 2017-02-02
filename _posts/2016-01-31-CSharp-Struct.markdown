---
layout: post
title: "C# Struct"
date: 2017-01-31
lang: en-us
---

#### {{ page.title }}

A `struct` is a value type data type. It helps you to make a single variable hold related data of various data types. The `struct` keyword is used for creating a structure.

Structures are used to represent a record. Suppose you want to keep track of your books in a library. You might want to track the following attributes about each book: title, author, subject, book_id

```csharp
struct book
{
    public string title;
    public string author;
    public string subject;
    public int book_id;
}
```

In your `main` class

```csharp
Book book1;

book1.title = "C# Programming";
book1.author = "John Smith";
book1.subject = "CS";
book1.book_id = 1234;

Console.WriteLine($"Title: {book1.title}. Author: {book1.author}. Subject: {book1.subject}. ID: {book1.book_id}");
```

### `Features of C# Struct`

- Struct can have `method`, `fields`, `indexers`, `properties`, `operator methods`, `events`
- Struct can have defined constructors but not destructor.
- Unlike classes, struct cannot inherit other struct or classes.
- Struct cannot be used as a base for other struct or classes.
- Struct can implement one or more interfaces.
- Struct members cannot be specific abstract, virtual, or protected.


### `Classes vs Struct`

- Class is a reference type and struct is a value type.
- Structs do not support inheritance.
- Structs cannot have default constructor

```csharp
struct Book
{
    private string title;
    private string author;
    private string subject;
    private int book_id;

    public void getValues(string t, string a, string s, int id)
    {
        title = t;
        author = a;
        subject = s;
        book_id = id;
    }

    public void display()
    {
        Console.WriteLine("Title: {0}", title);
        Console.WriteLine("Author: {0}", author);
        Console.WriteLine("Subject: {0}", subject);
        Console.WriteLine("Book ID: {0}", book_id);
    }
}
``` 

In the `Main`

```csharp
Book book1 = new Book();
Book book2 = new Book();

book1.getValues("C Programming", "Nuha Ali", "C Programming Tutorial",6495407);
book2.getValues("Telecom Billing", "Zara Ali", "Telecom Billing Tutorial", 6495700);

book1.display();

book2.display();
```
---
layout: post
title: "C#: Fundamentals"
date: 2016-09-14
lang: en-us
---

# {{page.title}}

#### `C# vs .NET`
C# is a programming language, while .NET is a framework. It consists of a run-time environment (CLR) and a class library that we use for building application.

#### `CLR`
When you compile an application, C# compiler compiles your code to IL (Intermediate Language) code. IL code is platform agnostics, which makes it possible to a take a C# program on a different computer with different hardware architecture and OS and run it. For this to happen, we need CLR. When you run a C# application, CLR compiles the IL code into the native machine code for the computer on which it is running. This process is called Just-in-time Compilation (JIT).

#### `Architecture of .NET Application`
In terms of architecture, an application written with C# consists of building blocks called classes. A class is a container for data (attributes) and method (functions). Attributes represent the state of the application. Method include code. They have logic.

A namespace is a container for related classes. So as your application grows in size, you may want to group the related classes into various namespaces for better maintainability.

As the number of classes and namesapces even grow further, you may want to physically separate related namesapces into separate assembilies. An assembly is a file (DLL or EXE) that contains one or more namespaces and classes. An EXE file represents a program that can be executed. A DLL is a file that includes code that can be re-used across different programs.


### Methods

1. Method define behavior
2. Every method has a 'return' type
3. Mark a method as 'internal' to make it available to all the code inside of the same project
4. Mark a method as 'public' to make it available everywhere
5. Mark a method as 'private' to make it available only to the code inside of the same class
6. Every method has zero or more parameters
7. Every method has a signature

Example:
	
	// 'public' is the access modifer
	// 'void' is the return type
	// 'int butt' is the parameter
	public void KickAss(int butt) 
	{
	  // code here...
	}

C# compiler will throw an error if you have two method identical. You can't have the same method but different signature

	// When you are inside a static member of a type you can only reach other static memebers of that same type.
	// float result
	static void WriteResult(string description, float result) 
	{
	  // code here...
	}

	// legal because the signature is different
	static void Writeresult(string description, int result) 
	{
	  // code here...
	}

Type cast

	// (int) will cast the float to int
	WriteResult("Highest", (int)stats.HighestGrade)

Formatting string

	// string formatting
	Console.WriteLine("{0}: {1}", description, result);
	// this will print out the '$' currency
	Console.WriteLine("{0}: {1:C}", description, result);

### Fields and Properties

1. Fields are variables of a class (Can be read-only)
2. A property can define a get and /or set accessor (Often used to expose and control fields)

Field example

	// convention: lowercase and/or underline prefix for priate use
	private string _name;

Property example

	// Convention: uppercase for public use
	public string Name {
	  get { return _name }
	  set 
	  { 
	    if (!String.IsNullOrEmpty(value)) 
	    {
	      _name = value;
	    }
	  }
	}

Auto-implemented property example

	public string name { get; set; }

### Delegates

1. A variable that references a method
2. A delegate is a type that references methods


	public delegate void Writer(string message);

	// Logger class
	public class Logger()
	{
	  public void WriteMessage(string message)
	  {
	    Console.WriteLine(message);
	  }
	}


	Logger logger = new Logger();
	Writer writer = new Writer(logger.WriteMessage);
	writer("Hello!");
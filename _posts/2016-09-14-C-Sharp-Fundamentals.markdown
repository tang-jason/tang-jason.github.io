---
layout: post
title: "C# Fundamentals"
date: 2016-09-14
lang: en-us
---

# {{page.title}}

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
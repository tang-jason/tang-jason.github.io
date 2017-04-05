---
layout: post
title: "TS: Functions"
date: 2017-04-04
lang: en-us
---

### {{ page.title }}

Examples covered:
- Functions in TS vs. JS
- Parameter types and return types
- Arrow functions
- Function types
- Parameters
    - Optional parameters
    - Default parameters
    - Rest parameters
- Overloaded functions

#### `Functions in TS vs. JS`

TypeScript:
- Types
- Arrow functions
- Function types
- Required and optional parameters
- Default parameters
- Rest parameters
- Overloaded functions

JavaScript:
- No types
- Arrow functions (ES2015)
- No function types
- All parameters are optional
- Default parameters (ES2015)
- Rest parameters (ES2015)
- No overloaded function

#### `Parameter Types and Return Types`

```typescript
function CreateCustomerID(name: string, id: number): string {
    return name + id;
}
```

#### `Arrow Functions`
concise syntax for anonymous functions. "this" is captured at function creation - not invocation. 

```typescript
// normal function
let arr = allBooks.filter(function (book) {
    return book.author == "john smith";
});

// arrow function
// left: parameter(s). right: function body
let arry = allBooks.filter( book => book.author === "john smith" );
```

#### `Arrow Function Syntax`

Function will not accept any parameters, must add an empty set of parentheses.
```typescript
myBooks.forEach( () => console.log("done reading") );
```

Function accept one parameter.
```typescript
myBook.forEach( title => console.log(title) );
```

Function accept multiple parameters.
```typescript
myBook.forEach( (title, idx, arr) => console.log(idx + " - " + title) );
```

Function accept multiple parameters and has more than one line in function body.
```typescript
myBook.forEach((title, idx, arr) => {
    console.log(idx + " - " + title);
    // do more thing here...
});
```
#### `Function Types`

Combination of parameter types and return type. Variables may be declared with function types

```typescript
function PublicationMessage(year: number): string {
    return "Date published: " + year;
}

// this is just a type definition for a function
let publishFunc: (someYear: number) => string;

publishFunc = PublicationMessage;

// it can be written in this way
publishFunc = (year: number): string => { return "Date published: " + year };

let message: string = PublicationMessage(2017);
```

#### `Optional and Default Parameters`

Optional parameters denoted with "?" after parameter name. Must appear after all required parameters. Default parameters may be set to a literal value or an expression.

Optional parameter
```typescript
function CreateCustomer(name: string, age?: number) {  }
```

Default parameter: literal value
```typescript
function GetBookByTitle(title: string = "Learning TypeScript") {  }
```

Default parameter: expression
```typescript
function GetBookByTitle(title: string = GetMostPopularBook()) {  }
```

#### `Rest Parameters`

Collects a group of parameters into a single array.

```typescript
function GetBooksReadForCust(name: string, ...bookIDs: number[]) {  }

let books = GetBooksReadForCust("john", 2, 3, 5, 100);
```

#### `Function Overloads`

One symbol name. Multiple function types. One implementation with type guards.

Function for author
```typescript
function GetTitles(author: string): string[];
```

Function for available
```typescript
function GetTitles(available: boolean): string[];
```

Function for object property
```typescript
function GetTitles(bookProperty: any): string[] {
    if (typeof bookProperty == "string") {
        // get books by author, add to foundTitles
    }
    else if (typeof bookProperty == "bolean") {
        // get books by availability, add to foundTitles
    }

    return foundTitles;
}
```

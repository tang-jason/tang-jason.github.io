---
layout: post
title: "TS: Interfaces"
date: 2017-04-05
lang: en-us
---

### {{ page.title }}

An itnerface is a contract without the implementation details.

Contracts that define types. Compiler enforces the contract via type checking. Collection of property and method definitions.

#### `Duck Typing`

Duck typing is that as long as an object has the shape of an expected type, then it can be used as if it were that type even if it was not explicitly declared to be so.

Examples:
```typescript
interface Duck {
    walk: () => void;
    swim: () => void;
    quack: () => void;
}

let probablyADuck = {
    walk: () => console.log("walking like a duck");
    swim: () => console.log("swimming like a duck");
    quack: () => console.log("quacking like a duck");
}

function FlyOverWater(bird: Duck) { }

FlyOverWater(probablyADuck);
```

#### `Defining an Interface`

It defined with the "interface" keyword. A list properties with their types. 

Example:
```typescript
interface Book {
    id: number;
    title: string;
    author: string;
    pages?: string;
    markDamaged: (reason: string) => void;
}

function PrintBook(book: Book): void {
    console.log(book.title + " by " + book.author);
}

let myBook: Book = {
    id: 5,
    title: "book 5",
    author: "author 5",
    available: true,
    category: Category.Fiction,
    pages: 350,
    markDamaged: (reason: string) => console.log("Damaged: " + reason)
}

// example of `duck typing` in action
PrintBook(myBook);
myBook.markDamaged("Missing back cover");
```

#### `Interfaces for Function Types`

```typescript
function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

// to use in multiple places it would be better to have the type defined in single place.
// function type declaration is a bit different.
interface StringGenerator {
    (chars: string, nums: number): string;
}

// need to match the type signature
let IdGenerator: (chars: string, nums: number) => string;

// the above line can be rewrite to below since they have same function type.
let IdGenerator = StringGenerator;

IdGenerator = CreateCustomerID;
```

Note: when defining a `function interface` you specify the return type by placing a `colon` rather than `arrow`. Reason to use function type to give you ability to use in multiple places.
```typescript
interface DamageLogger {
    (reason: string): void;
}
```

#### `Extending Interface`

```typescript
interface LibraryResource {
    catalogNumber: number;
}

interface Book {
    title: string;
}

interface Encyclopedia extends LibraryResource, Book {
    volume: number;
}

// declare a new variable and give it the type Encyclopedia, it will have all three properties.
let refBook: Encyclopedia = {
    catalogNumber: 1234,
    title: "The book of everything",
    volume: 1
}
```

#### `Class Types`

```typescript
interface Librarian {
    doWork: () => void;
}

// the class will provide the implementation details for the librarian interface.
class ElementarySchoolLibrarian implements Librarian {
    doWork() {
        console.log("Reading to and teaching children...");
    }
}

// create an instace from the ElementarySchoolLibrarian class
let kidsLibrarian: Librarian = new ElementarySchoolLibrarian();

kidsLibrarian.doWork();
```
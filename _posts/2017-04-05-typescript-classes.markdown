---
layout: post
title: "TS: Classes"
date: 2017-04-05
lang: en-us
---

### {{ page.title }}

Class is template for creating objects (blueprint). Provides state storage and behavior. Encapsulates resuable functionality.

- Define types
- Properties and methods
- constructors
- Access modifiers
- inheritance
- Abstract Classes

#### `Constructors`

- In typescript there only be one `constructor` per class.
- Use optional parameters to call different ways.
- Executed by using the "new" keyword.

```typescript
class ReferenceItem {
    constructor(title: string, publisher?: string) {
        // perform initialization here...
     }
}

// instantiate
let encyclopedia = new ReferenceItem("WorldPedia", "WorldPUb");
```

#### `Properties and Methods`

There are different ways of define properties.

```typescript
class ReferenceItem {
    // #1
    numberOfPages: number;

    // #2: custom accessors (getter and setter)
    get editor(): string {
        // custom getter logic hoes here, should return a value
    }

    set editor(newEditor: string) {
        // custom setter logic here...
    }

    printChapterTitle(chapterNum: number): void {
        // print title here...
    }
}
```

#### `Parameter Properties`

```typescript
class Author {
    name: string;
    constructor(authorName: string) {
        name = authorName;
    }
}

// shorthand for creating constructor
class Author {
    constructor(public name: string) { }
}
```

#### `Static Properties`

static members only available on the class, and not on instances of the class. To reference the static members, it has to reference the class itself.

```typescript
class Library {
    constructor(public name: string) { }

    static description: string = "A source of knowledge";
}

let lib = new Library("NY Public Library");
let name = lib.name; // available on instances of the class
let desc = Library.description; // available on the class
```

#### `Access Modifiers`

By default, all members are public of the class. If you have a Java or C# background, because public is not the default.

- Public: Accessible everywhere
- Private: Accessible inside the class
- Protected: Accessible on any subclasses of that class

#### `String Format`
```typescript
class ReferenceItem {
    title: string;
    year: number;

    constructor() {
        console.log("Creating a new ReferenceItem...");
    }

    // must use 'this' keyword when referring to properties and methods in the same class
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }
}
```

#### `Inheritance`

Inheritance is a means for one class to share its member definitions with one or more subclasses.

```typescript
class ReferenceItem {
    title: string;
    printItem(): void { }
}

class Journal extends ReferenceItem {
    constructor() {
        super();
    }

    constributors: string[];
}
```

#### `Abstract Classes`

- Created with the "abstract" keyword. 
- Base classes that may not be instantiated.
- May contain implementation details. 
- Abstract methods are not implemented. Methods must implemented in subclasses.

```typescript
abstract class ReferenceItem {
    private _publisher: string;
    static department: string = "Research";

    constructor(public title: string, protected year: number) {
        console.log("Creating a new ReferenceItem...");
    }

    // must use 'this' keyword when referring to properties and methods in the same class
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }
    
    printItem(): void {
        // call the 'printItem' method from parent
        super.printItem();

        // Encyclopedia printItem method
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
```

#### `Class Expressions`

```typescript
let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}

let myPaper = new Newspaper("The Gazette", 2014);
myPaper.printCitation();
```

Different way to create class expression anywhere a class is expected.
```typescript
class Novel extends class { title: string } {
    mainCharacter: string;
}

let favoriteNovel = new Novel();
favoriteNovel.mainCharacter;
```
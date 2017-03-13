---
layout: post
title: "TypeScript: Get Started"
date: 2017-03-09
lang: en-us
---

### {{ page.title }}

#### `What is TypeScript`?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS.

#### `TypeScript Features`

TypeScript has these key features: 
1. Supports standard JavaScript code
2. provides static typing
3. encapsulation through classes and namespaces
4. support for constructors, properties, functions
5. define interfaces
6. => function support (arrow function/lambdas)
7. intellisense and syntax checking

#### `TypeScript Example`

```typescript
    class Greeter {
        greeting: string;
        
        construtor (message: string) {
            this.greeting = message;
        }

        greet() {
            return "Hello, " + this.greeting;
        }
    }
```

#### `Important Keywords and Operators`

`class`: container for members such as properties and functions

`constructor`: provides initialization functionality in a class

`exports`: export a member from a module

`extends`: extend a class or interface (inheritance)

`implements`: implement an interface

`imports`: import a module

`interface`: defines code contract that can be implemented by types

`namespace`: container for classes and other code

`public / private`: member visibility modifiers

`...`: rest parameter syntax. Allow you to pass a comma separated list of objects or items

`=>`: arrow syntax used with definitions and functions

`<typeName`: < > characters use to cast / convert between types

`:`: separator between variable / parameter names and types

#### `Code Hierarchy`

![typescript code hierarchy](/img/TypeScriptCodeHierarchy.png "TypeScript Code Hierarchy")

#### `Grammar: Type Inference`

```typescript
    // this using type inference to determine that num is going to be of typed 'number'
    // because the initialize number is '2' which typescript will check the type for you. 'type: number'
    var num = 2;

    // the ':' is annotation and 'number' is the type of the variable. Clearly define this is typed number
    // PREFERED WAY
    var num: number = 2

    // type could be any type (any). This could be anything, a number, object, string, etc...
    var any1;

    // type annotation
    var num1: number;

    // type annotation setting the value
    var num2: number = 2;

    // type inference (number)
    var num3 = 3;

    // type inference (number)
    var num4 = num3 + 100;

    // type inference (string)
    var str1 = num1 + 'some string';

    // error
    var nothappy : number = num1 + 'some string';
```

#### `Definitely Typed`

You can find the list of definitely types in the locations below.

1. [GitHub](https://github.com/DefinitelyTyped/DefinitelyTyped){:target="_blank"}
2. [Nuget](https://www.nuget.org/profiles/DefinitelyTyped){:target="_blank"}
3. In Visual Studio => Tools => NuGet Package Manager => Manage NuGet Packages for Solution => Search definitely typed

#### `Using the Defintely Typed in Project`

If you download the definitely types into your project, it will create a folder named `typings` and you can drag and drop the filename.d.ts file to your file. 

```typescript
    /// <reference path="typings/knockout/knockout.d.ts" />
    declare var ko: KnockoutStatic;

    module test {
        var name = ko.observable("John Smith");
        var id = ko.observable(1);
        var guy = {
            id: id,
            fullName: name
        }

        // 'fullName' is a function so () is needed when invoke
        var value: string = guy.fullName();
        console.log(value);
    }
``` 

#### `Any and Primitive Type`

Any: Represents any JavaScript value

```typescript
    // no static type checking
    var data: any;
    var info;
```

Primitive Type: `number`

```typescript
    var age: number = 2; // explicit typing
    var rating = 98.32; // inference
```

Primitive Type: `boolean`

```typescript
    var hasData: boolean = true; // explicit typing
    var isReady = true; // inference
```

Primitive Type: `null`

```typescript
    var num: number = null;
    var str: string = null;
    var isNull: boolean = null;
    var customer: {} = null;
```

Primitive Type: `undefined`

```typescript
    var age: number; // this is a typed number but also 'undefined' because it hasn't set anything yet
    var customer = undefined;
```

#### `Array and Indexers`

```typescript
    var names: string[] = ['John', 'Michael', 'Tom'];
    var firstPerson: string;
    firstPerson = names[0]; // indexer
```

#### `Applying String Array`

```typescript
    function getArrayLength(x: string[]) {
        var len = x.length;
        return len;
    }

    var names: string[] = ['John', 'Michael', 'Tom'];

    var firstPerson: string = names[0];

    console.log(getArrayLength(firstPerson));
```

#### `Object Types`

Examples: Functions, class, module, interface, and literal types

May contain:

1. Properties
    - public or private
    - required or optional
2. Call signatures
3. Construct signatures
4. Index signatures

```typescript
    // object literal
    var square = { h: 10, w: 20 }; // inference
    var shape: object = { x: 10, y: 20 }; // explicit typed

    // function also become object
    var multiply = function (x: number) {
        return x * x;
    };
```

#### `Functions`

```typescript
    // '?' mark next to the w means optional
    var square = function (rect : { h: number; w?: number; }) {
        // check if w is there
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        
        return rect.h * rect.w;
    }

    // explicit set sq1 to number typed
    var sq1: number = square({x: 10});
    console.log(sq1); // output: 100

    var sq2: number = square({x: 10, y: 40});
    console.log(sq2); // output: 400
```

#### `Arrow Function`

Arrow function expression

- compact form of function expression
- omit the function keyword
- have scropt of `this`

```typescript
    var myFunc = function (h: number, w: number) {
        return h * w;
    }

    // arrow function example
    var myFunc = (h: number, w: number) => h * w;
```

Void

- used as return type for function that returns no value

```typescript
    // return void
    var greetMe : (msg: string) => void;
```

#### `Interface`

```typescript
    module test {
        // define interface
        interface SquareFunction {
            // accept a value that being passed in which is a 'number' and return a 'number'
            (x: number): number;
        }

        var squareBasic: SqaureFunction = (num: number) => num * num;
    }
```

Interface can accept 'option'

```typescript
    // interface rectangle
    interface Rectangle {
        h: number;
        w?: number;
    }

    // define a function that uses interface and return a number
    var square: (rect: Rectangle) => number;

    // define a rectangle object with properties
    var rectA = { h: 10 };
    var rectB = { h: 10, w: 40 };

    square = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.h;
        }

        return rect.h * rect.w;
    }

    console.log(square(rectA));
    console.log(square(rectB));
```

```typescript
    // define a 'Person' interface 
    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greeting: (msg: string) => string;
    }

    // create an instance
    var p: Person = {
        name: "John",
        age: 30,
        kids: 0,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years: number) {
            this.ages -= years;
        },
        greeting: function (msg: string) {
            return msg + ", " + this.name;
        }
    }

    var pets = p.calcPets();
    console.log(pets); // output: 0

    p.makeYounger(15);
    var newAge = p.age;
    console.log(newAge); // output: 15

    var msg = p.greeting("Good day to you");
    console.log(msg); // output: Good day to you, John
```

```typescript
    // interface
    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): SessionEval {
        // create array variable
        var ratings: number[] = [];
        
        // create function expression
        var addRating = (rating: number = 5) => {
            ratings.push(rating);
        };

        // create function expression
        var calcRating () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating()); // output: 4.75
```
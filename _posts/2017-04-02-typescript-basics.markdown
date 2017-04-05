---
layout: post
title: "TS: Basics"
date: 2017-04-04
lang: en-us
---

### {{ page.title }}

Basics things like Boolean, Number, String, Array, Enum, Any, Void, var, let, and const.

#### `var`
- Globally available in the function in which it is declared.
- Hoisted to the top of the function.

#### `let and const`
- Only available in the block in which it is declared.
- Not hoisted to the top of the block.

#### `var vs. let`
```typescript
function ScopeTest() {
    if (true) {
        var foo = "use anywhere";
        let bar = "use in this block";        
    }
    console.log(foo); // works
    console.log(bar); // error!!!
}
```

#### `Type Inference`
```typescript
let myString = "hello world";
myString = 40; // Error!!!
```

#### `Adding Type Annotations`

```typescript
let myString: string = "hello world";

function ReturnNumber(): number {
    return 40;
}

let anotherMyString: string = "hello seattle";
```

#### `Enums`
```typescript
// 0, 1, 2
enum Category { Biography, Poetry, Fiction };
```

```typescript
// 1, 2, 3
enum Category { Biography = 1, Poetry, Fiction };
```

```typescript
// 5, 8, 9
enum Category { Biography = 5, Poetry = 8, Fiction = 9 };
```

```typescript
// get enum key or value
enum Category { Biography = 5, Poetry = 8, Fiction = 9 };

let favoriteCategory: Category = Category.Biography;

// 5
console.log(favoriteCategory);

// Biography
let categoryString = Category[favoriteCategory];
```

#### `Arrays`

Can be declared two different ways. Accessed and used much like JavaScript arrays. Declare as an array of "any" to store any type in the same array.

#1:
```typescript
let strArray: string[] = ["hello", "world"];
```

#2:
```typescript
let strArray2: Array<string> = ["hello", "world"];
```

#### `Tuples`

Tuples are the special type of array. Array where types for first few elements are specified. Types do not have to be the same. Addtional elements can be any type from those previously specified.

```typescript
let myTuple: [number, string] = [24, "hello"];

let firstElement = myTuple[0]; // 24
let secondElement = myTuple[1]; // hello

// other elements can have numbers or strings
myTuple[2] = 100;
myTuple[2] = "string here";
```
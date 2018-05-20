---
layout: post
title: "ES6 Tips and Tricks"
date: 2018-05-19
lang: en-us
---

### {{ page.title }}

#### `Enforcing Required Parameter`

Throw an error if the function is called without parameter

```typescript
   let required = () => {
      throw new Error('Missing parameters');
   }

   let add = (a: required(), b: required()) => {
      return a + b;
   }

   console.log(add(1, 2)) // => 3
   console.log(add(1)) // => error! missing parameters
```

#### `Using Reduce to map and filter simultaneously`

The benefit of using reduce comes into play when you want to 'map' and 'filter' together and you have a lot of data to go over.

If you're chaining the 'map' and 'filter'together you're doing the work twice.

```typescript
   let numbers = [10, 20, 30, 40];

   let doubledOver50 = numbers.reduce((finaList, number) => {
      // double each number (i.e: map method)
      number = number * 2;

      // filter
      if (number > 50)
         finalList.push(number);

      return finalList;
   }, [] as number[]);

   console.log(doubledOver50); // => [60, 80]
```

#### `Counting Duplicate Array Items`

```typescript
   let fruits = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

   let count = fruits.reduce((tally, fruit) => {
      tally[fruit] = (tally[fruit] || 0) + 1;
      return tally;
   }, {});

   console.log(count); // => { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
```
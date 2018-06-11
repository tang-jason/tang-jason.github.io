---
layout: post
title: "JS: ES6 Tips and Tricks"
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

#### `Object Destructuring for Array Item`

```javascript
   const csvFile = "2018,John Smith,US,john@email.com,Washington";
   const { 0: year, 1: fullName, 2: country, 3: email, 4: state } = csvFile.split(",");
   console.log(`state: ${state} - country: ${country}`); // => state: Washington - country: US
```

#### `Clearing or Truncating an Array`

```javascript
   // truncating an array
   const numbers = [11, 22, 33, 44, 55];
   numbers.length = 2;
   console.log(numbers); // => [11, 22]

   // clearing an array
   numbers.length = 0;
   console.log(numbers); // => []
   console.log(numbers[2]); // => undefined

   // similar to "number = []". This will create a grabage but in JS grabage collector is not expensive
   number = [];
```

#### `Formatting JSON Code`

```javascript
   const obj = { 
      foo: { bar: [11, 22, 33, 44], baz: { bing: true, boom: 'Hello' } } 
   };

   JSON.stringify(obj, null, 4); // => formatted with indentiation
```

#### `Remove Duplicate Items From an Array`

```javascript
   const removeDupItems = arr => [...new Set(arr)];
   removeDupItems([20, 'bar', 20, 'bar', true, true]); // => [20, 'bar', true]
```


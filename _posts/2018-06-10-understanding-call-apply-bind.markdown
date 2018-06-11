---
layout: post
title: "JS: call(), apply(), bind()"
date: 2018-05-19
lang: en-us
---

### {{ page.title }}

Use `.bind()` when you want that function to later be called with a certain context, useful in events. Use `.call()` or `.apply()` when you want to invoke the function immediately, with modification of the context.

#### `call()`

```javascript
   const findArea = {
      pi: 3.14,
      area: function (r) {
         return this.pi * r * r;
      }
   }

   findArea.area(2); // => 12.56

   // Instead of using pi 3.14, you want to use 3.14159.
   findArea.area.call({pi: 3.14159}, 2); // => 12.56636
```

#### `apply()`

This is similar to `call()` except it's accepting array.

```javascript
   const cylinder = {
      pi: 3.14,
      volume: function (r, h) {
         return this.pi * r * r * h;
      }
   }

   cylinder.volume.apply({pi: 3.14159}, [2, 6]); // => 75.39815999999999

   // call() invoke like this
   cylinder.volume.call({pi: 3.14159}, 2, 6); // => 75.39815999999999
```

#### `bind()`

Bind attaches a brand new this to a given function. In bind’s case, the function is not executed instantly like Call or Apply.

```javascript
   //this is not a instant call
   const newVol = cylinder.volume.bind({pi: 3.14159});

   newVol(2, 6); // => 75.39815999999999
```
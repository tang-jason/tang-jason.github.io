---
layout: post
title: "TypeScript: Classes & Interfaces"
date: 2017-03-12
lang: en-us
---

### {{ page.title }}

#### `Defining the Class`

Classes act as a containers that encapsulate code.

```typescript
    class Car {
        // fields

        // consturctor

        // properties

        // functions
    }
```

#### `Defining Constructor`

Constructor are used to initialize fields.

```typescript
    class Car {
        // field
        engine: string;

        // constructor
        constructor(engine: string) {
            this.engine = engine;
        }
    }
```

```typescript
    // shortway to declare a field
    class Car {
        constructor(public engine: string) { };
    }
```

#### `Defining Functions`

Class members are public by default.

```typescript
    class Car {
        // fields
        engine: string;

        // constructor
        constructor(engine: string) {
            this.engine = engine;
        }

        // functions. No 'function' keyword require in typescript
        start() {
            return "Started " + this.engine;
        }

        stop() {
            return "Stopped " + this.engine;
        }
    }
```

#### `Defining Properties`

Properties act as filters and can have get or set blocks.

```typescript
    class Car {
        // private field
        private _engine: string;

        // constructor
        constructor(engine: string) {
            this._engine = engine;
        }

        // properties
        get engine(): string {
            return this._engine;
        }

        set engine(value: string) {
            if (value == undefined) throw "Supply an Engine!";
            this._engine = engine;
        }
    }
```

#### `Using Complex Types`

We can define complex types and use those inside of classes. `Complex type` is just a class that has its own set of members inside of it. It can be fields, properties, functions.

```typescript
    // define a complex type
    class Engine {
        constructor(public horsePower: number, public engineType: string) { }
    }

    // use inside the class
    class Car {
        // private field
        private _engine: Engine;

        // constructor with complex type
        constructor(engine: Engine) { 
            this._engine = engine;
        }

        // 'GET' property
        get engine(): Engine {
            return this._engine;
        }

        // 'SET' property
        set engine(value: Engine) {
            if (value == undefined) throw "Please supply an engine";
            this._engine = value;
        }

        // method
        start() {
            console.log("Engine started: " + this._engine.engine);
        }
    }

    window.onload = function () {
        // to use, we need to 'new' up the 'Engine' complex type class
        var engine = new Engine(300, "V8");
        var car = new Car(engine);

        console.log(car.engine.engine); // output: V8
        console.log(car.engine.horsePower); // output: 300
        console.log(car.engine.start()); // output: Engine started: V8
    }
```


---
layout: post
title: "TS: Classes & Interfaces"
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

#### `Casting Types`

```typescript
    // we need to convert the 'HTMLTableElement'
    var table : HTMLTableElement = <HTMLTableElement>document.createElement("table");

    // this will fail
    var table : HTMLTableElement = document.createElement("table");
```

#### `Extending Types with TypeScript`

Types can be extended using the TypeScript "extends" keyword.

```typescript
    class ChildClass extends ParentClass {
        constructor() {
            super(); // child class constructor must call base class (super) constructor
        }
    }
```

Type Extension Example

```typescript
    // complex type
    class Engine {
        constructor(public engine: string) { }
    }

    // parent class 
    class Auto {
        engine: Engine;
        constructor(engine: Engine) {
            this.engine = engine;
        }
    }

    // truck derives from Auto
    class Truck extends Auto {
        fourByFour: boolean;
        constructor(engine: Engine, fourByFour: boolean){
            // call base class constructor
            super(engine);

            this.fourByFour = fourByFour;
        }
    }
```

#### `Demon: Extending Types`

```typescript
    // complex type
    class Engine {
        // this will create two fields because of the public keyword
        constructor(public horsePower: number, public engineType: string) { }

        // start function with 'callback' function inside
        start(callback: (startStatus: boolean, engineType: string) => void) {
            // code here for start()
            window.setTimeOut( () => {
                callback(true, this.engineType);
            }, 1000);
        }

        // stop function with 'callback'
        stop(callback: (stopStatus: boolean, engineType: string) => void) {
            window.setTimeOut( () => {
                callback(true, this.engineType);
            }, 1000);
        }
    }

    // 
    class Accessory {
        constructor(public accessoryNumber: number, public title: string) { }
    }

    //
    class Auto {
        private _basePrice: number;
        private _engine: string;
        make: string;
        model: string;
        accessoryList: string;

        // allow user to pass in these values when we "new' up the instance
        constructor(basePrice: number, engine: Engine, make: string, model: string) {
            this._basePrice = basePrice;
            this._engine = engine;
            this.make = make;
            this.model = model;
        }

        // a method return a number type
        calculateTotal(): number {
            var taxRate = .08;
            return this._basePrice + (taxRate * this._basePrice);
        }

        // '...' is rest parameter that acts as array. e.g: addAccessories(new Accessory(), new Accessory(...)) { ... }
        addAccessories(...accessories: Accessory[]) {
            this.accessoryList = "";
            for (var i = 0; i < accessories.length; i++) {
                var ac = accessories[i];
                this.accessoryList += ac.accessoryNumber + " " + ac.title + "<br />";
            }
        }

        // get the accessory list 
        getAccessoryList(): string {
            return this.accessoryList;
        }

        // get the base price
        get basePrice(): number {
            return this._basePrice;
        }

        // set the base price and we do the check before assign the value to _basePrice field
        set basePrice(value: number) {
            if (value <= 0) throw "Price must be >= 0";
            this._basePrice = value;
        }

        // get engine
        get engine(): Engine {
            return this_.engine;
        }

        // set engine
        set engine(value: Engine) {
            if (value == undefined) throw "Please supply an engine";
            this._engine = value;
        }
    }

    // extends from auto
    class Truck extends Auto {
        bedLength: string;
        fourbyFour: boolean;

        constructor(basePrice: number, engine: Engine, make: string, model: string, bedLength: string, fourByFour: boolean){
            // need to call super constructor here
            super(basePrice, engine, make, model);

            this.bedLength = bedLength;
            this.fourByFour = fourByFour;
        }
    }

    // on page load
    window.onload = function () {
        // 'new' up the Truck instance
        var truck = new Truck(40000, new Engine(300, "v8"), "Chevy", "Silverado", "Long Bed", true);
        
        console.log(truck.engine.engineType); // output: v8
        console.log(truck.bedLength); // output: Long Bed
        console.log(truck.calculateTotal().toString()); // output: 43200

        // rest params
        truck.addAccessories(new Accessory(1234, "Sunroof"), new Accessory(4321, "Towing Package"))

        // call the engine start function. In the body we just print out the message
        truck.engine.start( (status: boolean, engineType: string) => {
            console.log(engineType + " was started");
        });
    }
```

#### `Defining Interface`

Interfaces provide a way to define a `contract` that other objects must implement. 

```typescript
    // IEngine Interface defines 2 memebers
    interface IEngine {
        // start() accepts a single parameter named 'callback' and doesn't return any data
        // 'callback' param must be a function that accepts a boolean and a string as params
        start(callback: (startStatus: boolean, engineType: string) => void) : void;

        stop(callback: (stopStatus: boolean, engineType: string) => void) : void;
    }
```

Optional Members in an Interface

```typescript
    interface IAutoOptions {
        engine: IEngine;
        basePrice: number;
        state: string;
        make?: string; // optional
        model?: string; // optional
        year?: string; // optional
    }
```

#### `Implementing an Interface`

Interface provide a way to enforce a "contract"

```typescript
    // make sure we implents all the properties in the interface. 
    class Engine implements IEngine {
        // constructor
        constructor(public horsePower: number, public engineType: string) { }

        // methods
        start(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeOut( () => {
                callback(true, this.engineType);
            }, 1000);
        }

        stop(callback: (stopStatus: boolean, engineType: string) => void) {
            window.setTimeOut( () => {
                callback(true, this.engineType);
            }, 1000);
        }
    }
```

#### `Using an Interface as a Type`

Interfaces help ensure that proper data is passed.

```typescript
    class Auto {
        engine: IEngine;
        basePrice: number;
        // more fields

        constructor(data: IAutoOptions) {
            this.engine = data.engine;
            this.basePrice = data.basePrice;
        }
    }
```

#### `Use Interface to Simplify our Code`

Code with the [ADDED] is where we added the new code in.

```typescript
    // [ADDED]
    // interface: a contract defines things but not implementation level. The implementation level will be up to the class
    interface IEngine {
        start(callback: (startStatus: boolean, engineType: string) => void) : void;
        stop(callback: (stopStatus: boolean, engineType: string) => void) : void;
    }

    // complex type
    class Engine : IEngine {
        // this will create two fields because of the public keyword
        constructor(public horsePower: number, public engineType: string) { }

        // start function with 'callback' function inside
        start(callback: (startStatus: boolean, engineType: string) => void) {
            // code here for start()
            window.setTimeOut( () => {
                callback(true, this.engineType);
            }, 1000);
        }

        // stop function with 'callback'
        stop(callback: (stopStatus: boolean, engineType: string) => void) {
            window.setTimeOut( () => {
                callback(true, this.engineType);
            }, 1000);
        }
    }

    // [ADDED]
    class CustomEngine implements IEngine {
        // start function with 'callback' function inside
        start(callback: (startStatus: boolean, engineType: string) => void) {
            // code here for start()
            window.setTimeOut( () => {
                callback(true, "Custom Engine");
            }, 1000);
        }

        // stop function with 'callback'
        stop(callback: (stopStatus: boolean, engineType: string) => void) {
            window.setTimeOut( () => {
                callback(true, "Custom Engine");
            }, 1000);
        }
    }

    // 
    class Accessory {
        constructor(public accessoryNumber: number, public title: string) { }
    }

    //
    class Auto {
        private _basePrice: number;
        private _engine: IEngine; // [ADDED]
        make: string;
        model: string;
        accessoryList: string;

        // allow user to pass in these values when we "new' up the instance
        constructor(basePrice: number, engine: IEngine, make: string, model: string) {
            this._basePrice = basePrice;
            this._engine = engine;
            this.make = make;
            this.model = model;
        }

        // a method return a number type
        calculateTotal(): number {
            var taxRate = .08;
            return this._basePrice + (taxRate * this._basePrice);
        }

        // '...' is rest parameter that acts as array. e.g: addAccessories(new Accessory(), new Accessory(...)) { ... }
        addAccessories(...accessories: Accessory[]) {
            this.accessoryList = "";
            for (var i = 0; i < accessories.length; i++) {
                var ac = accessories[i];
                this.accessoryList += ac.accessoryNumber + " " + ac.title + "<br />";
            }
        }

        // get the accessory list 
        getAccessoryList(): string {
            return this.accessoryList;
        }

        // get the base price
        get basePrice(): number {
            return this._basePrice;
        }

        // set the base price and we do the check before assign the value to _basePrice field
        set basePrice(value: number) {
            if (value <= 0) throw "Price must be >= 0";
            this._basePrice = value;
        }

        // get engine
        get engine(): IEngine {
            return this_.engine;
        }

        // set engine
        set engine(value: IEngine) {
            if (value == undefined) throw "Please supply an engine";
            this._engine = value;
        }
    }

    // extends from auto
    class Truck extends Auto {
        bedLength: string;
        fourbyFour: boolean;

        constructor(basePrice: number, engine: Engine, make: string, model: string, bedLength: string, fourByFour: boolean){
            // need to call super constructor here
            super(basePrice, engine, make, model);

            this.bedLength = bedLength;
            this.fourByFour = fourByFour;
        }
    }

    // on page load
    window.onload = function () {
        // 'new' up the Truck instance
        var truck = new Truck(40000, new Engine(300, "v8"), "Chevy", "Silverado", "Long Bed", true);
        
        console.log(truck.engine.engineType); // output: v8
        console.log(truck.bedLength); // output: Long Bed
        console.log(truck.calculateTotal().toString()); // output: 43200

        // rest params
        truck.addAccessories(new Accessory(1234, "Sunroof"), new Accessory(4321, "Towing Package"))

        // call the engine start function. In the body we just print out the message
        truck.engine.start( (status: boolean, engineType: string) => {
            console.log(engineType + " was started");
        });

        // [ADDED]
        var auto = new Auto(40000, new Engine(250, "Type"), "Make", "Model", "AZ", 2010);
        // IEngine only have start() and stop(). We need to cast from interface (IEngine) to Engine type to get the horsePower
        var myEngine = <Engine>auto.engine;
        console.log(myEngine.horsePower.toString());
    }
```

#### `Extending an Interface`

```typescript
    interface IAutoOptions {
        engine: IEngine;
        basePrice: number;
        state: string;
        make?: string;
        model?: string;
        year?: string;
    }

    // extending an interface: Defines IAutoOptions members plus custom members
    interface ITruckOptions extends IAutoOptions {
        bedLength?: string;
        fourByFour: boolean;
    }
```

#### `Using an Extended Interface`

```typescript
    class Truck extends Auto {
        bedLength: string;
        fourByFour: boolean;

        // extended interface
        constructor(data: ITruckOptions) {
            super(data);
            this.bedLength = data.bedLength;
            this.fourByFour = data.fourByFour;
        }
    }
```

#### `Demo: Extending an Interface`

```typescript
    // interface: a contract defines things but not implementation level. The implementation level will be up to the class
    interface IEngine {
        start(callback: (startStatus: boolean, engineType: string) => void) : void;
        stop(callback: (stopStatus: boolean, engineType: string) => void) : void;
    }

    // [ADDED]
    interface IAutoOptions {
        basePrice: number;
        engine: IEngine;
        state: string;
        make: string;
        model: string;
        year: number;
    }

    // [ADDED]
    interface ITruckOptions extends IAutoOptions {
        bedLength: string;
        fourByFour: boolean;
    }

    // complex type
    class Engine : IEngine {
        // this will create two fields because of the public keyword
        constructor(public horsePower: number, public engineType: string) { }

        // start function with 'callback' function inside
        start(callback: (startStatus: boolean, engineType: string) => void) {
            // code here for start()
            window.setTimeOut( () => {
                callback(true, this.engineType);
            }, 1000);
        }

        // stop function with 'callback'
        stop(callback: (stopStatus: boolean, engineType: string) => void) {
            window.setTimeOut( () => {
                callback(true, this.engineType);
            }, 1000);
        }
    }

    // [ADDED]
    class CustomEngine implements IEngine {
        // start function with 'callback' function inside
        start(callback: (startStatus: boolean, engineType: string) => void) {
            // code here for start()
            window.setTimeOut( () => {
                callback(true, "Custom Engine");
            }, 1000);
        }

        // stop function with 'callback'
        stop(callback: (stopStatus: boolean, engineType: string) => void) {
            window.setTimeOut( () => {
                callback(true, "Custom Engine");
            }, 1000);
        }
    }

    // 
    class Accessory {
        constructor(public accessoryNumber: number, public title: string) { }
    }

    //
    class Auto {
        private _basePrice: number;
        private _engine: IEngine;
        make: string;
        model: string;
        accessoryList: string;

        // [ADDED] IAutoOptions
        // allow user to pass in these values when we "new' up the instance
        constructor(options: IAutoOptions) {
            this._basePrice = options.basePrice;
            this._engine = options.engine;
            this.make = options.make;
            this.model = options.model;
        }

        // a method return a number type
        calculateTotal(): number {
            var taxRate = .08;
            return this._basePrice + (taxRate * this._basePrice);
        }

        // '...' is rest parameter that acts as array. e.g: addAccessories(new Accessory(), new Accessory(...)) { ... }
        addAccessories(...accessories: Accessory[]) {
            this.accessoryList = "";
            for (var i = 0; i < accessories.length; i++) {
                var ac = accessories[i];
                this.accessoryList += ac.accessoryNumber + " " + ac.title + "<br />";
            }
        }

        // get the accessory list 
        getAccessoryList(): string {
            return this.accessoryList;
        }

        // get the base price
        get basePrice(): number {
            return this._basePrice;
        }

        // set the base price and we do the check before assign the value to _basePrice field
        set basePrice(value: number) {
            if (value <= 0) throw "Price must be >= 0";
            this._basePrice = value;
        }

        // get engine
        get engine(): IEngine {
            return this_.engine;
        }

        // set engine
        set engine(value: IEngine) {
            if (value == undefined) throw "Please supply an engine";
            this._engine = value;
        }
    }

    // extends from auto
    class Truck extends Auto {
        bedLength: string;
        fourbyFour: boolean;

        constructor(options: ITruckOptions){
            // need to call super constructor here
            super(options);

            this.bedLength = options.bedLength;
            this.fourByFour = options.fourByFour;
        }
    }

    // on page load
    window.onload = function () {
        // [ADDED]
        var truck = new Truck({
            engine: new Engine(250, "v6),
            basePrice: 45000,
            state: "Washington",
            make: "Ford",
            model: "F-150",
            year: 2013,
            bedLength: "Short bed",
            fourByFour: true
        });

        console.log(truck.bedLength); // output: Short bed
    }
```

#### `Summary`

- TypeScript provides code encapsulation through classes.
- Classes can inherit from other classes.
- Interfaces provide a "code contract" to ensure consistency across objects.
- Interface can extend other interfaces
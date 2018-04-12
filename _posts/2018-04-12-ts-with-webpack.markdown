---
layout: post
title: "TS: Typescript with Webpack"
date: 2018-04-07
lang: en-us
---

### {{ page.title }}

This post is mainly how to set up a web application project with typescript and webpack.

### `Files creation`
1. Create package.json
2. Create tsconfig.json
3. Create webpack.config.js
4. Install dependencies
5. Create index.html
6. Create index.ts
7. Create .gitignore

#### `Create package.json`

      npm init --yes

#### `Create tsconfig.json`

      npm --init

#### `Create webpack.config.js`

      type nul > webpack.config.js

#### `Install dependencies`

      npm install typescript ts-loader webpack webpack-cli http-server --save-dev

#### `Create index.html`

      type nul > index.html

#### `Create typescript files`

      type nul > index.ts
      type nul > helper.ts

#### `Create .gitignore`

      type nul > .gitignore

#### `Config package.json`

Under the `scripts` object, add the following.

      "dev": "webpack --mode development"
      "build": "webpack --mode production"
      "serve": "http-server -c-1 -a localhost -p 9000"

#### `Config tsconfig.json`

We'll leave as it is (default) now.

#### `Config webpack.config.js`

This will tell how webpack compile our typescript files into a bundle file (.js)

```javascript
const path = require('path');

module.exports = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

#### `Edit index.ts & helper.ts`

```javascript
// index.ts
import { Person } from "./helper";

let person = new Person("Amelia", 3);
console.log(person.print());

let person2 = new Person("Jaythan", 6);
console.log(person2.print());

// helper.ts
export class Person {
    constructor(public name: string, public age: number) {}

    print() {
        return `${this.name} is ${this.age} years old`;
    }
}
```

#### `Compilation`

      // uncrunched version
      npm run dev

      // minified version
      npm run build

#### `Run web server`

      npm run serve
---
layout: post
title: "TS: Typescript with Webpack"
date: 2018-04-12
lang: en-us
---

### {{ page.title }}

This post is mainly focusing on how to set up a web application project with typescript and webpack.

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

      npm install typescript concurrently ts-loader webpack webpack-cli lite-server --save-dev

#### `Create index.html`

      type nul > index.html

#### `Create typescript files under 'src' folder`

      type nul > index.ts
      type nul > helper.ts

#### `Create .gitignore`

      type nul > .gitignore

#### `Config package.json`

Under the `scripts` object, add the following.

      "build": "webpack --mode production",
      "lite": "lite-server",
      "webpack:W": "webpack --watch --mode development",
      "start": "concurrently \"npm run webpack:w\" \"npm run lite\""

#### `Config tsconfig.json`

We'll leave as it is (default) now.

#### `Config webpack.config.js`

This will tell how webpack compile our typescript files into a bundle file (.js)

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
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
    filename: 'bundle-min.js',
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

#### `Start up project`

      // Start up a lite server and watching the file changes.
      npm start

#### `Minify scripts`

      // Minified the scripts
      npm run build

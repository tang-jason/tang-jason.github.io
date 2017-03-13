---
layout: post
title: "TypeScript VSCode Setup"
date: 2017-03-13
lang: en-us
---

### {{ page.title }}

#### `Set Up TypeScript in VS Code`

There are two `json` files that need to get created first. More info can be found [TypeScript SetUP in VS Code](https://code.visualstudio.com/docs/languages/typescript){:target="_blank"}

#### Create `tsconfig.json`

The first step in any new TypeScript project is to add in a `tsconfig.json` file. This defines the TypeScript project setting such as the compiler options and the files that should be included.

```typescript
    // example
    {
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "sourceMap": true
        }
    }
```

#### Create `tasks.json`

Set up the task configuration. Open `Command Palette` with `Ctrl + Shift + P` and type in `Configure Task Runner` then select `TypeScript - tsconfig.json`. This will create a `tasks.json` file in the workspace `.vscode` folders.

```typescript
    // example
    {
        // See http://go.microsoft.com/fwlink/?LinkId=733558
        // for the documentation about the tasks.json format
        "version": "0.1.0",
        "command": "tsc",
        "isShellCommand": true,
        "args": ["-p", "."],
        "showOutput": "silent",
        "problemMatcher": "$tsc"
    }
```

#### Run the `Build Task`

As this is the only task in the file, you can execute it by simply pressing `Ctrl + Shift + B (Run Build Task)`. Once ran, you'll see your `.js` and `.js.map` files were created in your workspace. 



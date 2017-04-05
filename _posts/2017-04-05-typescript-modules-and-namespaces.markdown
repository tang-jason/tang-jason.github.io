---
layout: post
title: "TS: Modules & Namespaces"
date: 2017-04-05
lang: en-us
---

### {{ page.title }}

#### `Changes in TypeScript 1.5`

Prior to version 1.5, TypeScript had both `internal` and `external` modules. They were used for different things, but because they were both called modules, it was easy to get confused about the differences and when t ouse each kind.

Beginning with TypeScript 1.5, internal modules became known as `namespaces` and external modules became known as `moudles`

#### `Modules Vs. Namespaces`

Modules:
- Tool for organizing code.
- Native support in Node.js
- Browsers supported with module loader.
- Supports ES2015 module syntax.
- Facilitates code reuse.
- Modules are the future!

Namespaces:
- Tool for organizing code.
- No special loader required.
- Prevents global namespace pollution.
- Best for smaller applications.

#### `Defining Namespaces`

```typescript
namespace Membership {
    export function AddMember(name: string) {
        // add a new member...
    }

    // nested namespace
    export namespace Cards {
        export function IssueCard(memberNumber: number) {
            // issue new card
        }
    }
}

Membership.AddMember("John");

Membership.Cards.IssueCard(1234);
```

#### `Triple-Slash References`

When organizing your application with namespaces, you specify that one file is dependent on items defined in another file by using what are know as `Triple-Slash References`. 

- Enhances editor support for referenced files.
- TypeScript compiler will compile all required references.
- Use -outFile compiler option to generate a single JS output file.

```typescript
// <reference path="membership.ts" />

let memberName: string = "Elaine";
let memberNumber: number = 3824;

membership.AddMember(memberName);
membership.Cards.IssueCard(memberNumber);
```

#### `Creating App with Namespaces`

'utilityFunctions.ts' file
```typescript
// namespace to avoid global polution
namespace Utility {
    // nested namespace
    export namespace Fees {
        // public function
        export function CalculateLateFee(daysLate: number): number {
            return daysLate * .25;
        }
    }

    // public function 
    export function MaxBooksAllowed(age: number): number {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }

    // private function
    function privateFunc(): void {
        console.log("This is private...");
    }
}
```

'app.ts' file
```typescript
/// <reference path="utilityFunctions.ts" />

import util = Utility.Fees;

let fee = util.CalculateLateFee(10);
console.log(fee);
```

In your `cmd`, type `tsc --target es5 app.ts --outFile js/out.js`. This will create a JS file that contains both TypeScript file in proper order.

#### `Reasons to Use Modules`

- They're modular!!!
- Maintainable
- Reusable
- Native to Node and ES2015
- Organized simply in files and folders

#### `TypeScript Supported Module Formats`

- CommonJS
- AMD (Asynchronous Module Definition)
- UMD (Universal Module Definition)
- System
- ES2015

#### `Module Loaders`

- Require.js (supports AMD format)
- Systems (supports AMD, CommonJS, Es2015, and its own system format)

#### `Exporting from a Module Using Export Declaration`

In order to make this file a module is export something from it.

```typescript
// periodicals.ts
export interface Periodical {
    issueNumber: number;
}

export class Magazine implements Periodical {
    issueNumber: number;
}

export function GetMagazineByIssueNumber(issue: number): Magazine {
    // retrieve and return a magazine
}
```

#### `Exporting from a Module Using Export Statement`

```typescript
// periodicals.ts
interface Periodical {
    issueNumber: number;
}

class Magazine implements Periodical {
    issueNumber: number;
}

function GetMagazineByIssueNumber(issue: number): Magazine {
    // retrieve and return a magazine
}

// export statement
export { Periodical, Magazine, GetMagazineByIssueNumber as GetMag }
```

#### `Import from a Module`

```typescript
//news.ts
import { Magazine, GetMag as GetMagazine } from "./periodicals";
let newsMag: Magazine = GetMagazine("Weekly news");

// you can import the whole module by using the *
import * as mag from "./periodicals";
let kidMag: mag.Magazine = mag.GetMag("Games");
```

#### `Default Exports`

Default exports are most useful when you only want to export one item from a module. Once you've specified that item as the default export, other modules can import it without even knowing its name.

```typescript
// movie.ts
export default class {
    title: string;
    director: string;
}

// kids.ts
import AnimatedMovie from "./movie";
let cartoon = new AnimatedMovie();
```
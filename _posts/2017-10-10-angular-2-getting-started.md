---
layout: post
title: "Angular 2 - Getting Started"
date: 2017-10-10
lang: en-us
---

### {{ page.title }}

#### `Install Angular CLI`

```javascript
npm install -g @angular/cli
```

#### `Create New Project`

```javascript
ng new my-new-app
```

#### `Start Dev Server`

```javascript
ng serve
```

#### `Two Ways Binding`

Use `[(ngModel)]` for two ways binding
```javascript
<input type="text" [(ngModel)]="name">
<p>{ { name } }</p>
```

#### `Unlock Angular Forms Module Feature`

```javascript
// under /src/app/app.modules.ts
import { FormsModule } from '@angular/Forms';

@NgModule({
    imports: [
        FormsModule
    ]
})
```

#### `Add Bootstrap for Styling`

```javascript
// in your cmd, type...
npm install --save bootstrap

// to use it, in .angular-cli.json
"style": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```
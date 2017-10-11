---
layout: post
title: "Angular 2 - Component"
date: 2017-10-10
lang: en-us
---

### {{ page.title }}

Component is the key feature of Angular.

#### `Create Component`

Use the Angular CLI to generate a component for you. To do this, `ng generate component server` or a shorthand `ng g c server`, this will create a `server` folder inside `app` folder with needed files. The command also automatically added the custom component to the `app.module.ts`.

#### `Use the Custom Component`

In `app.component.html`, add the custom server component html tag
```typescript
<app-server></app-server>
```

#### `Working with Template Styles`

If you have `bootstrap` installed to your project, you can use it to style your page. You can also write your own CSS by doing it inside the `app.component.css`.

```typescript
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <h3>I'm in the AppComponent!</h3>
            <hr>
            <app-servers></app-servers>
        </div>
    </div>
</div>
```

#### `Understanding Component Selector`

Selector can be defined as `attribute` and `class` beside `element`. Below is 3 ways to define selector. Note that `id` and `pseudo` won't work with angular selector.

```typescript
@Component({
  selector: 'app-servers' // html element selector
  selector: '[app-servers]' // attribute selector
  selector: '.app-servers' // class selctor
})
```

```typescript
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <app-servers></app-servers> // html element selector
            <div app-servers></div> // attribute selector
            <div class="app-servers"></div> // class selector
        </div>
    </div>
</div>
```
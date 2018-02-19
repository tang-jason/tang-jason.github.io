---
layout: post
title: "Vue - Getting Started"
date: 2018-02-18
lang: en-us
---

### {{ page.title }}

Vue is a progressive framework for building user interface.

#### `CDN`

You can get the CDN from [Vue installation](https://vuejs.org/v2/guide/installation.html){:target="_blank"} and reference it in your application.

    <script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>

Remove the version `@2.5.13`, you'll always received the latest version.

#### `Create Vue Instance`

```html
<input type="text" v-on:input="changeTitle">
<h1>{ { title } }</h1>
```

```javascript
let vue = new Vue({
    el: '#app',
    data: {
        title: 'Hello world!'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
});
```

#### `Directive`

Directive starts with `v-`. For example.

    v-on:input="changeTitle"

#### `Vue Rendering Concept`

Vue takes the html and store it as a template in memory, then update the template and render the final form in browser.

#### `Attribute Binding`

Using the `v-bind` directive to bind any html element attribute.

```html
<a v-bind:href="link" />
```

```javascript
data: {
    link: 'https://google.com'
}
```

#### `v-once`

Only render once. Property can be changed/updated down the execution road. Using `v-once` to only render the initial execution.

    <h1 v-once>{ { title } }</h1>

#### `v-html`

Render the raw html by using the `v-html`. Keep in mind that this could introduce cross-site attack. 

```javascript
data: {
    finishedLink: "<a href='https://google.com' />"
}
```

```html
<p>{ { finishedLInk } }</p>
```
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

#### `Modifying the event - with event modifier`

You can attach the event modifier or attach mutiple event modifiers.

    v-on:mousemove.stop
    v-on:mousemove.stop.prevent

#### `Listening to keyboard event`

Event fired when keyboard 'enter' and/or 'space'

    v-on:keyup.enter.space

    methods: {
        alertMe: function() {
            alert('Alert!);
        }
    }

#### `Update the value`

    v-on:keydown="value = $event.target.value"
    v-on:keydown.enter="value = $event.target.value"

Example:

    //HTML
    <input type="text" v-on:keydown="value = $event.target.value"/>
    <p>{ { value } }</p>

    <input type="text" v-on:keydown.enter="value = $event.target.value"/>
    <p>{ { value } }</p>

    //JS
    new Vue({
        el: '#app',
        data: {
            value: ''
        }
    });

#### `Two way binding`

Use `v-model` for two binding.

    //HTML
    <input type="text" v-model="anme" />
    <p>{ { name } }</p>

    // JS
    data: {
        name: "John"
    }

#### `Reacting to changes with computed properties`

The computed just used like a property inside data object. `Computed` and `methods` are indeed exactly the same. However, the difference is that computed properties are cached based on their dependencies.

    // JS
    computed: {
        output: function() {
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    }

#### `Saving time with shorthand`

    // Event
    @click=""
    <button @click="ChangeLink"></button>

    // Bind
    :href=""
    <a :href="link">Link</a>

#### `Exercise with computed and watch`

Show a 'result' of 'not there yet' as long as 'value' is not equal to 37. Watch for changes in the 'result' and reset the 'value' after 5 second.

    // HTML
    <p>Current value: { { value } }</p>
    <button @click="value += 5">Add 5</button>
    <button @click="value += 2">Add 5</button>
    <p>{ { result } }</p>

    // JS
    new Vue({
        el: '#app',
        data: {
            value: 0
        },
        computed: {
            result: function() {
                return this.value < 37 ? 'Not there yet' : 'Done';
            }
        },
        watch: {
            // watching result property from computed object. This can be non computed property.
            result: function() {
                let vm = this;
                setTimeout(() => {
                    vm.value = 0;
                }, 5000);
            }
        }
    });

#### `Dynamic styling with CSS classes - basic`

Note: `class` binding here expects a JavaScript object with the CSS classes

    // CSS
    .demo {
        width: 100px;
        height: 100px;
        background-color: grey;
        display: inline-block;
        margin: 10px;
    }
    .red { background-color: red; }
    .green { background-color: green }
    .blue { background-color: blue }
    
    // HTML
    <div id="app">
        <div class="demo" :click="attachRed = !attachRed" :class="{red: attachRed}"></div>
        <div class="demo" :click="attachGreen = !attachGreen" :class="{green: attachGreen}"></div>
        <div class="demo" :click="attachBlue = !attachBlue" :class="{blue: attachBlue}"></div>
    </div>

    // JS
    new Vue({
        el: '#app',
        data: {
            attachRed: false,
            attachGreen: false,
            attachBlue: false
        }
    });

#### `Example`

<script async src="//jsfiddle.net/jtang227/kxrqpn71/65/embed/js,html,css,result/dark/"></script>
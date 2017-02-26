# Vue element two way bind
Vue two way binding directive for non input elements (let's hydrate all the things).

## Demo

https://imagentleman.github.io/vue-element-two-way-bind/example.html

## Example

```
<!doctype html>

<meta charset="utf-8">

<div id="example">
  <p v-two-way-bind="message">hello world!</p>

  <input v-model="message"
         placeholder="edit me">

  <div>
    {{ message }}
  </div>
</div>

<script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
<script src="vue-element-two-way-bind.js"></script>

<script>
  var state = {
    message: ''
  };

  var app = new Vue({
    el: '#example',
    data: state
  });
</script>

```

## Usage

```
<p v-two-way-bind="message">hello world!</p>
```

The value (in this case "hello world!") of the element (p) using the directive will be stored on the property ```message``` of the component's/instance data (```this.message```) when the vue component/instance is first mounted.

The template of the element using the directive will also change from the value ("hello world!") to the interpolation of the property ```{{ message }}```.

## Why would i use this?

The directive basically allows you to do two-way binding on elements that are not inputs in a similar way to ```v-model```.

An use case would be a have project, where the state/data doesn't come from an api or a window object, but has to come from the DOM. 
A project where the back end is the only one with access to the content and renders it only and directly into HTML.

With this directive, the back end could render all the HTML and the front end client could read the content from it and hydrate the state in a seemless way.

## Disclaimer

You should be aware that the behavior that this very experimental directive allows (dynamic templates) probably goes against the design and practices of Vue (see https://github.com/vuejs/Discussion/issues/193#issuecomment-112093644),
and that since Vue 1.x, changes are supposed to go always one-way down (https://vuejs.org/v2/guide/migration.html#twoWay-Prop-Option-removed) and communication from children to its parent/container is supposed to happen via custom events (https://vuejs.org/v2/guide/components.html#Custom-Events).

You should use it at your own discretion.

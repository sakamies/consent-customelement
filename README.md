# Consent custom element

A custom element to include content in the document only after consent is given.

No build, no dependencies, no styles, no shadow dom. Just a bog standard button and your content.

![&lt;consent-&gt; gets "given" attribute, button gets "hidden" attribute and "Here be spoilers" text shows up after &lt;template&gt;](upgrade.gif)

Inspired by [Social Media Widgets and Privacy](https://alvaromontoro.com/blog/68076/social-media-widgets-and-privacy) by Alvaro Montoro.

## Usage

Import the element and define it. Name it whatever you like.

```js
import { ConsentElement } from '/consent-element.js'
customElements.define('consent', ConsentElement)
```

Add a button and a template. Clicking the button will signal consent. The contents of the template will be put right [after](https://developer.mozilla.org/en-US/docs/Web/API/Element/after) the template element and the button will be hidden.

```html
<consent->
  <button>I give consent</button>
  <template>
    Put the content that requires consent to load inside a template element.
  </template>
</consent->
```

The template contents could be any assets to load, like social media widgets, scripts, or maybe spoilers for a story and so on. Any scripts or `<link>` elements inside the template will load.

The button can of course have anything you'd add on any button. Attributes, styles, event listeners and so on. You template contents can be anything. You can treat the consent element as you like too, styles, attributes, whatever.

## Attributes

### `given`

The `given` attribute is added once the user has clicked the button inside consent.

You can use this attribute as a styling hook.

If consent has already been given before and you can't set the `given` attribute already serverside, you can set the `given` attribute with javascript and the element will respond the same way as to a user button press.

## Content guidelines (accessibility & privacy)

Remember to give enough information around the button so the user know for sure what they are consenting to.

The button text should be understandable on its own, like `show spoiler`, or even better, `show spoiler for season 2 episode 3`.

## Caveats

It should be safe to put any content inside the consent element if need be. The element considers only the first button and template that it finds and doesn't touch anything else inside it.

This element is probably a bad fit for cookie banners and that kind of tracking consent. Once consent is given and content has been loaded or shown, yeah your user should be able to revoke their consent, but spoilers will have been shown and potentiall privacy compromising scripts loaded. (Like most social media share widgets etc.)

If you just want to toggle content to be shown/hidden, then maybe a `<details><summary></summary></details>` would be a better fit.

## Licence, NPM module?

My repos lately are more of a journey of learning and writing, not necessarily meant as participation in the packages & components ecosystem.

This repo does not have a licence and is [not on NPM](https://htmx.org/essays/vendoring/). You do not have my permission for anything, but I hope your rebel spirit will let you learn from this, to code your own and make a package. Give credit and [behave](https://www.contributor-covenant.org).

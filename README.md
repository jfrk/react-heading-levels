# React Heading Levels

Provides components that calculate the correct HTML heading levels for you.

## Getting started

Install with NPM:

```bash
npm install --save @jfrk/react-heading-levels
```

or Yarn:

```bash
yarn add @jfrk/react-heading-levels
```

## How to use

Wrap your app in `<HeadingLevelProvider>` and then use the `<H>` component instead of `<h1>`, `<h2>`, `<h3>` etc. Wrap components in the `<Section>` component to increase the heading level for all contained `<H>` components.

Example:

```js
import React from 'react';
import { HeadingLevelProvider, H, Section } from '@jfrk/react-heading-levels';

export default function App() {
  return (
    <HeadingLevelProvider>
      <main className="App">
        <H>Heading 1</H>
        <Section>
          <H>Heading 2</H>
          <H>Heading 2</H>
          <Section>
            <H>Heading 3</H>
            <H>Heading 3</H>
          </Section>
          <H>Heading 2</H>
        </Section>
      </main>
    </HeadingLevelProvider>
  );
}
```

Resulting DOM structure:

```html
<main>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h3>Heading 3</h3>
  <h2>Heading 2</h2>
</main>
```

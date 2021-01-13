import React from 'react';
import { HeadingLevelProvider, H, Section } from '@jfrk/react-heading-levels';

import './App.css';

export default function App() {
  return (
    <HeadingLevelProvider>
      <div className="App">
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
      </div>
    </HeadingLevelProvider>
  );
}

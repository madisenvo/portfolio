import React from 'react';
import Card from './components/Card/Card.js';

const textEditor = {
  img: './text-editor.png',
  name: 'Text Editor',
  github: 'https://github.com/madisenvo/Text-Editor',
  deployed: 'https://salty-scrubland-79160.herokuapp.com/',
};

const nationalPark = {
  img: './nat-park.png',
  name: 'Text Editor',
  github: 'https://github.com/madisenvo/National-Park-Finder',
  deployed: 'https://madisenvo.github.io/National-Park-Finder/',
};

export default function Portfolio() {
  return (
    <div>
        <Cards name={textEditor.name} />
    </div>
  );
}
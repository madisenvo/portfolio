import React from 'react';
import Cards from '../Cards';

const canine = {
  img: 'Spot',
  name: 'Spot',
  github: 'The best boy',
  deployed: 1,
};

export default function Portfolio() {
  return (
    <div>
        <Cards name={canine.name} description={canine.description} id={canine.id} />
    </div>
  );
}
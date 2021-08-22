import React from 'react';
import {Typography} from '@material-ui/core';
import Questions from './Questions';
import Results from './Results';

function Home() {
  return (
    <div>
      <Questions/>
      <Results/>
    </div>
  );
}

export default Home
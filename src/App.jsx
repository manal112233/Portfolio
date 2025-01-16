import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Portfolio />
      </div>
    </BrowserRouter>
  );
};

export default App;

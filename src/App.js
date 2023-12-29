// src/App.js
import React from 'react';
import CustomButton from './components/CustomButton';

const App = () => {
  return (
    <div>
      <h2>Custom Buttons</h2>
      <CustomButton text="Normal Button" />
      <CustomButton text="Warning Button" warnMessage="This is a warning message!" />
      <CustomButton text="Button with Hint" hint="Hover for more information." />
    </div>
  );
};

export default App;

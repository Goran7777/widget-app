import React from 'react';

import RouterComponent from './components/router/Router';

export interface IOption {
  label: string;
  value: string;
}
export interface IItem {
  title: string;
  content: string;
}

const App = () => {
  return <RouterComponent />;
};

export default App;

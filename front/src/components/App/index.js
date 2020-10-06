// == Import npm
import React from 'react';

// == Import Components
import Header from 'src/containers/Header/Header';
import Main from 'src/components/Main/Main';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);

// == Export
export default App;

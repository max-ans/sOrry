// == Import npm
import React from 'react';

// == Import Components
import Header from 'src/containers/Header/Header';
import Main from 'src/components/Main/Main';
import Footer from 'src/components/Footer/Footer';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// == Export
export default App;

// == Import npm
import React, { useEffect } from 'react';

// == Import Components
import Header from 'src/containers/Header/Header';
import Main from 'src/components/Main/Main';
import Footer from 'src/components/Footer/Footer';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  useEffect(() => {
    document.title = "s'Orry";
  });
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
// == Export
export default App;

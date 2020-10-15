// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import Components
import Header from 'src/containers/Header/Header';
import Main from 'src/components/Main/Main';
import Footer from 'src/components/Footer/Footer';
import Connection from 'src/containers/Connection/Connection';

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
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/connexion">
          <Connection />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;

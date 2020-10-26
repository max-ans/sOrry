// == Import npm
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import Components
import Header from 'src/containers/Header/Header';
import Main from 'src/components/Main/Main';
import Footer from 'src/components/Footer/Footer';
import Connection from 'src/containers/Connection/Connection';
import Registration from 'src/containers/Registration/Registration';
import ProfilPage from 'src/containers/ProfilPage/ProfilPage';

// == Import
import './styles.scss';

// == Composant
const App = ({ isLogged }) => {
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
          {isLogged ? <Redirect to="/mon-profil" /> : <Connection />}
        </Route>
        <Route exact path="/mon-profil">
          {isLogged ? <ProfilPage /> : <Redirect to="/connexion" />}
        </Route>
        <Route exact path="/inscription">
          {isLogged ? <Redirect to="/" /> : <Registration /> }
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;

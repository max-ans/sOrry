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
import Contact from 'src/containers/Contact/Contact';
import About from 'src/containers/About/About';
import ApologyCreate from 'src/containers/ApologyCreate/ApologyCreate';
import Categories from 'src/containers/Categories/Categories';
import ApologyByCategories from 'src/containers/ApologyByCategories/ApologyByCategories';
import Apology from 'src/containers/Apology/Apology';
import ApologyEdit from 'src/containers/ApologyEdit/ApologyEdit';
import TopApologies from 'src/containers/TopApologies/TopApologies';

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
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/a-propos">
          <About />
        </Route>
        <Route exact path="/top-excuses">
          <TopApologies />
        </Route>
        <Route exact path="/poster-une-excuse">
          {isLogged ? <ApologyCreate /> : <Redirect to="/connexion" />}
        </Route>
        <Route exact path="/excuses-par-categories">
          {isLogged ? <Categories /> : <Redirect to="/connexion" />}
        </Route>
        <Route exact path="/categories/:slug">
          {isLogged ? <ApologyByCategories /> : <Redirect to="/connexion" />}
        </Route>
        <Route exact path="/excuse/:slug">
          {isLogged ? <Apology /> : <Redirect to="/connexion" />}
        </Route>
        <Route exact path="/excuse/edition/:slug">
          {isLogged ? <ApologyEdit /> : <Redirect to="/connexion" />}
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

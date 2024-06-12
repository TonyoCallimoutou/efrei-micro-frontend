import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PokemonList from './PokeDisplay';

const NavBar = React.lazy(() => import('sharedComponents/Header'));

const Footer = React.lazy(() => import('sharedComponents/Footer'))

const App = () => (
  <div>
    <h1>Basic Host</h1>
    <React.Suspense fallback="Loading header">
      <NavBar />
    </React.Suspense>
    <PokemonList />
    <React.Suspense fallback="Loading footer">
      <Footer />
    </React.Suspense>
  </div>

);

export default App;

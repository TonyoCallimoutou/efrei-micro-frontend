import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LocalButton from './Button';

const NavBar = React.lazy(() => import('sharedComponents/Header'));

const Footer = React.lazy(() => import('sharedComponents/Footer'))

const App = () => (
  <div>
    <h1>Basic header</h1>
    <LocalButton />      
    <React.Suspense fallback="Loading header">
      <NavBar />
    </React.Suspense>
    <React.Suspense fallback="Loading footer">
      <Footer />
    </React.Suspense>
  </div>
);

export default App;

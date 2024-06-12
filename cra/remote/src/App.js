import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Bucket from './Bucket';

const NavBar = React.lazy(() => import('sharedComponents/Header'));

const Footer = React.lazy(() => import('sharedComponents/Footer'))

const App = () => (
  <div>
    <h1>Basic Remote</h1>     
    <React.Suspense fallback="Loading header">
      <NavBar />
    </React.Suspense>
    <Bucket /> 
    <React.Suspense fallback="Loading footer">
      <Footer />
    </React.Suspense>
  </div>
);

export default App;

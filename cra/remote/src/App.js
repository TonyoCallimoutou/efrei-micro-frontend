import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Bucket from './Bucket/Bucket';
import Poké_Ball from '../img/Poké_Ball-RS.png'; // Chemin vers votre image

const NavBar = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));

const App = () => (
  <div style={{ textAlign: 'center'}}>
    <h1>Basic Remote</h1>
    <React.Suspense fallback="Loading header">
      <NavBar />
    </React.Suspense>
    <img src={Poké_Ball} alt="Pokeball" className="pokeball-img" style={{ width: '150px', marginBottom: '20px' }} />
    <Bucket /> 
    <React.Suspense fallback="Loading footer">
      <Footer />
    </React.Suspense>
  </div>
);

export default App;

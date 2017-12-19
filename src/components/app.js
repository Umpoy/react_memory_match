import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.css';
import Header from './header';
import Stats from './stats'
import Game from './game';
import Footer from './footer'



const App = () => (
    <div className="container">
        <Header />
        <Stats />
        <Game />
        <Footer />

    </div>
);

export default App;

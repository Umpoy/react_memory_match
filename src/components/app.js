import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.css';
import Header from './header';
import Stats from './stats'
import Game from './game';



const App = () => (
    <div className="container">
        <Header />
        <Stats />
        <Game />

    </div>
);

export default App;

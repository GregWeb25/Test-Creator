import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import PreviewPage from "./pages/PreviewPage";
import FavouritesPage from "./pages/FavouritesPage";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path='/' element={<PreviewPage/>}/>
                <Route path='/constructor' element={<FavouritesPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

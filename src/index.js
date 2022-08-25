import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { MoviesContextProvider } from './contexts/MoviesContext';
import { MovieOrderingContextProvider } from './contexts/MovieOrderingContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
 <BrowserRouter>
     <MoviesContextProvider>
        <MovieOrderingContextProvider>
            <App />
         </MovieOrderingContextProvider>
      </MoviesContextProvider>
 </BrowserRouter>    
);




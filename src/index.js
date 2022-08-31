import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter} from 'react-router-dom';
import { MoviesContextProvider } from './contexts/MoviesContext';
import { MovieOrderingContextProvider } from './contexts/MovieOrderingContext';
import { WhetherUserLoggedOrNotProvider } from './contexts/whetherUserLoggedOrNot';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
 <BrowserRouter>
     <WhetherUserLoggedOrNotProvider>
        <MoviesContextProvider>
            <MovieOrderingContextProvider>
               <App/>
            </MovieOrderingContextProvider>
         </MoviesContextProvider>
     </WhetherUserLoggedOrNotProvider>
 </BrowserRouter>    
);




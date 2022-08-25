import React, { useContext, useEffect } from "react";
import css from "./movieDetail.module.css";
import { MovieImageCart } from "../movieImageCart/movieImageCart";
import { MoviesContext } from "../../contexts/MoviesContext";
import {OrderMovie} from "../orderMovie/orderMovie"
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
///////////////////////////////////////////////firebase/////////////////////////////////////////////////
// import { initializeApp } from "firebase/app";
// import {getDocs,getDoc,setDoc,doc,collection,getFirestore,addDoc} from "firebase/firestore";
// import { async } from "@firebase/util";
// const firebaseConfig = {
//     apiKey: "AIzaSyB3d_wMRiKnFQJeuqQP-3wvPeEegp84MwE",
//     authDomain: "zbilguun-moviesite.firebaseapp.com",
//     projectId: "zbilguun-moviesite",
//     storageBucket: "zbilguun-moviesite.appspot.com",
//     messagingSenderId: "805291568664",
//     appId: "1:805291568664:web:4e3ae223c699f49783dd6d",
//     measurementId: "G-47DY21SGX5"
// };
// const app =initializeApp(firebaseConfig)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const MovieDetail = () => {
    // const db = getFirestore(app);
    const {userWantedMovie} = useContext(MoviesContext);

//    useEffect(()=>{
//     const getDatas=getDocs(collection(db,`movies`));
//     getDatas.then((el)=>el.forEach((el1)=>console.log(el1.data())))
//    },[])
    const {userWantedToOrder,setUserWantedToOrder} = useContext(MovieOrderingContext);
     
    return(

            <div style={{
                display:!userWantedMovie?"none":"flex"
            }} className={css.MoreMovieAbout}>
                <div className={css.MovieImage}>
                    <MovieImageCart imageSrc={userWantedMovie.image}/>
                </div>
                <div className={css.movieMoreAbout}>
                    <h1>{userWantedMovie.MovieName}</h1>
                    <p className={css.genre}>{userWantedMovie.genre}</p>
                    <p>{userWantedMovie.about}</p>
                    
                    <button className={css.continue} onClick={()=>{
                        setUserWantedToOrder(true);
                        }} >
                    Захиалах
                    </button>
                    

                </div>
                 <OrderMovie userWantedMovie={userWantedMovie}/>
            </div>

    )
}

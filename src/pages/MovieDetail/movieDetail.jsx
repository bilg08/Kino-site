import React, { useContext } from "react";
import css from "./movieDetail.module.css";
import { MoviesContext } from "../../contexts/MoviesContext";
import { MovieOrderingContext } from "../../contexts/MovieOrderingContext";
import { Header } from "../../components/site-header/siteHeader";
import { OrderMovie } from "../../components/orderMovie/orderMovie";
import { Link } from "react-router-dom";
import { WhetherUserLoggedOrNotContext } from "../../contexts/whetherUserLoggedOrNot";
export const MovieDetail = (props) => {
    
    const {userWantedMovie} = useContext(MoviesContext);
    const {setUserWantedToOrder} = useContext(MovieOrderingContext);
    const {isUserLogged}=useContext(WhetherUserLoggedOrNotContext);
    return(
        <div className={css.MovieDetailPage}>
            <Header/>
        <div className={css.MovieDetailPageMain}>
           <div style={{background:`url(${userWantedMovie.backgroundImage})`,backgroundPosition: "center",
                        backgroundSize: "contain",backgroundRepeat:"no-repeat",width:100+'%',height:100+"%"}}>
                <div className={css.movieMoreAbout}>
                    <div className={css.movieLogo}>
                            <img alt="" src={userWantedMovie.MovieLogo}/>
                    </div>
                    <h1>{userWantedMovie.MovieName}</h1>
                    <p className={css.genre}>{userWantedMovie.genre}</p>
                    <p>{userWantedMovie.about}</p>
                    
                   <div>
                     <button className={css.continue} onClick={()=>{
                        if(isUserLogged===true){
                            setUserWantedToOrder(true)
                        }else{
                            alert('Ta nevtreegui Baina')
                        }
                    }}>
                    Захиалах
                    </button>
                    <Link to='/'>
                    <button className={css.backToMovies}>Буцах</button>
                    </Link>
                   </div>
                </div>
            </div>
        </div>
        <OrderMovie/>
    </div>

    )
}

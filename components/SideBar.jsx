import React from 'react'
import tv from "../static/images/tv.png"
import Home from "../static/images/Home.png"
import MovieProjector from "../static/images/MovieProjector.png"
import Calendar from "../static/images/Calendar.png"
import TVShow from "../static/images/TVShow.png"
import Logout from "../static/images/Logout.png"

const SideBar = ({ path }) => {

    return (
        <div className='movie-sidebar display-sm-none pt-3'>
            <div className="movie-logo d-flex flex-row align-items-center gap-2">
                <img src={tv.src} alt="" width="50px" height="50px" />
                <p className='mt-2'>MovieBox</p>

            </div>
            <div className="movie-nav mb-2">
                <div className="movie-nav-item gap-2">
                    <img src={Home.src} alt="" />
                    <p className='mt-3'> Home</p>
                </div>
                <div className={path == "movie" ? "movie-nav-item gap-2 movie-nav-item-highlighted" :
                    "movie-nav-item gap-2"}>
                    <img src={MovieProjector.src} alt="" />
                    <p className='mt-3'>  Movies</p>
                </div>
                <div className='movie-nav-item'>
                    <img src={TVShow.src} alt="" />
                    <p className='mt-3'> TV Series</p>
                </div>
                <div className='movie-nav-item'>
                    <img src={Calendar.src} alt="" />
                    <p className='mt-3'> Upcoming</p>
                </div>
            </div>
            <div className="movie-nav-card">
                <p>Play movie quizes and earn free tickets</p>
                <p>50k people are playing now</p>
                <p><button>Start Playing</button></p>
            </div>
            <div className="movie-logout">
                <div className='movie-nav-item'>
                    <img src={Logout.src} alt="" />
                    <p className='mt-3'> Logout</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar
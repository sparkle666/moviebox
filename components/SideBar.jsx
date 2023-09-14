import React from 'react'
import tv from "../static/images/tv.png"
import Home from "../static/images/Home.png"
import MovieProjector from "../static/images/MovieProjector.png"
import TwoTickets from "../static/images/TwoTickets.png"
import Calendar from "../static/images/Calendar.png"
import TVShow from "../static/images/TVShow.png"
import Logout from "../static/images/Logout.png"

const SideBar = () => {

    return (
        <div className='movie-sidebar'>
            <div className="movie-logo">
                <div className='movie-nav-item'>
                    <img src={tv.src} alt="" />
                    <p className='movie-logo-text'>MovieBox</p>
                </div>
            </div>
            <div className="movie-nav mb-2">
                <div className='movie-nav-item'>
                    <img src={Home.src} alt="" />
                    <p> Home</p>
                </div>
                <div className='movie-nav-item'>
                    <img src={MovieProjector.src} alt="" />
                    <p className="ml-1">  Movies</p>
                </div>
                <div className='movie-nav-item'>
                    <img src={TVShow.src} alt="" />
                    <p> TV Series</p>
                </div>
                <div className='movie-nav-item'>
                    <img src={Calendar.src} alt="" />
                    <p> Upcoming</p>
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
                    <p> Logout</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar
import React, { useEffect, useState } from 'react'
import useApi from '../hooks/useAPI';

const SideBarContent = ({ id }) => {

  const [URL, setURL] = useState("")
  const videoURL = "https://youtu.be/8pEg8NrdL_Y?si=v_HcrIY-w6oLxD_b"

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    console.log(url);
    setURL(url)
  }, [id])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjM2N2UzYWUzZjJkYmE2YmFhYTA5Mzg4MjU4NzIyNyIsInN1YiI6IjY1MDE1YWM2ZTBjYTdmMDEwZGVhNmNlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vVXXQ1BZtpHUxzNTGVH1OGrKSRxqSHN2HYOkKEjF5JU'
    }
  };

  const { data: movieData, isLoading, error } = useApi(URL, options)

  console.log(movieData)

  return (
    <div className='movie-sidebar-content' style={{ padding: "2em" }}>
      {movieData && (
        <div>

          <div>
            {movieData.video ? (
              <video width="100%" height="449px" controls>
                <source src={videoURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            ) : (
              <iframe width="100%" height="449px"
                className='rounded-md'
                src="https://www.youtube.com/embed/8pEg8NrdL_Y?si=v_HcrIY-w6oLxD_b"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            )}
          </div>
          <div>
            <div className='movie-content-title flex-container-row'>
              <div className="movie-title-right flex-container-row" style={{ paddding: "1em" }}>
                <div>
                  {movieData.title} • {movieData.release_date} • PG-13 • {movieData.runtime}
                </div>
                <div>
                  {movieData.genres.map((genre) => (
                    <span key={genre.id} style={{
                      marginRight: "8px",
                      border: "1px solid #F8E7EB",
                      borderRadius: "10px",
                      padding: "6px",
                      fontSize: "12px",
                      color: "#B91C1C"
                    }}>{genre.name}</span>
                  ))}
                </div>
              </div>
              <div className="movie-title-left">
                <i className="fas fa-star" style={{ color: "gold" }}> </i> 8.5 | {movieData.revenue}
              </div>
            </div>
            <div className="movie-detail flex-container-row">
              <div className="movie-detail-right">
                <p>{movieData.overview}</p>
                <p>Director: <span className='text-red'>Joseph Kosinski</span></p>
                <p>Writers:  <span className='text-red'>Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                <p>Stars:  <span className='text-red'>Tom Cruise, Jennifer Connelly, Miles Teller </span></p>
                <p className='flex-container-row'>
                  <button className='btn-red'>Top rated movie #65</button>
                  <button className='btn-red'>Awards nominations</button>
                </p>
              </div>
              <div className="movie-detail-left" style={{ width: "400px" }}>
                <button className='btn-red'>See Showtimes</button>
                <button className='btn-light-red'>More Watch Options</button>
              </div>
            </div>
          </div>
          {/* <div>
            <h1>{movieData.title}</h1>
            <p>{movieData.overview}</p>
            <p>Release Date: {movieData.release_date}</p>
            <p>Genres:</p>
            <ul>
              {movieData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p>Production Companies:</p>
            <ul>
              {movieData.production_companies.map((company) => (
                <li key={company.id}>{company.name}</li>
              ))}
            </ul>
            <p>Production Countries:</p>
            <ul>
              {movieData.production_countries.map((country) => (
                <li key={country.iso_3166_1}>{country.name}</li>
              ))}
            </ul>
            <p>Vote Average: {movieData.vote_average}</p>
          </div> */}
        </div>
      )}

      {isLoading && <div> Loading... </div>}
    </div>
  )
}

export default SideBarContent
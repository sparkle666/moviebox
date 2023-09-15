import useAPI from '../hooks/useAPI';
import imdb from "../static/images/imdb.png"
import rotten from "../static/images/rottentomato.png"
import Link from 'next/link';
import { getRandomItemFromArray } from "../utils/numbers"

const FeaturedList = () => {
  const imgBaseURL = 'https://image.tmdb.org/t/p/w500';
  const url =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjM2N2UzYWUzZjJkYmE2YmFhYTA5Mzg4MjU4NzIyNyIsInN1YiI6IjY1MDE1YWM2ZTBjYTdmMDEwZGVhNmNlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vVXXQ1BZtpHUxzNTGVH1OGrKSRxqSHN2HYOkKEjF5JU',
    },
  };

  const { data, isLoading, error } = useAPI(url, options);

  // console.log(data?.results[0]?.backdrop_path);

  // const all_path = data?.results.map(item => item.backdrop_path)

  const results = data?.results.slice(0, 10) || [];

  const extractedData = results.map((movie) => ({
    backdropPath: movie.backdrop_path,
    id: movie.id,
    originalTitle: movie.original_title,
    posterPath: imgBaseURL + movie.poster_path,
    voteAverage: movie.vote_average,
  }));
  let imageURL = imgBaseURL + extractedData[0]?.posterPath;

  const movieCard = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '250px',
    height: '370px',
  }
  return (
    <div>
      {isLoading && (
        <div className='w-full d-flex ' style={{ width: "100%", height: "600px" }}>
          <div class="spinner-grow color-primary" role="status" style={{ margin: "auto" }}>
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="movie-list container">
        <h3 className=""> Feautured Movies</h3>
        <div className="movie-grid">
          <div class="row">
            {extractedData ? extractedData.map(movieItem => (
              <div class="col-lg-3 col-md-4 col-sm-6 col-12" key={movieItem.id}>
                <div className="movie-card">
                  <Link href={`/movie/${movieItem.id}`}>
                    <div className="movie-image position-relative"
                      style={{
                        backgroundImage: `url(${movieItem.posterPath})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '250px',
                        height: '370px'
                      }}>
                      <div className='position-absolute movie-tags d-flex flex-row justify-content-between'>
                        <span className='badge rounded-md text-uppercase' style={{
                          background: "#D1D5DB",
                          color: "black"
                        }}>Tv Shows</span>
                        <div className='badge bg-gray rounded-circle align-center'
                          style={{ width: "25px", height: "25px", background: "#D1D5DB" }}>
                          <i className="fas fa-heart" style={{
                            marginTop: "3px",
                            marginLeft: "-1px"
                          }}></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <p className="text-50 mt-3">USA, 2016 - Current</p>
                  <p className="text-100">{movieItem.originalTitle}</p>
                  <div className="d-flex flex-row justify-content-between">
                    <div><img src={imdb.src} alt="" /> {getRandomItemFromArray()}/10</div>
                    <div><img src={rotten.src} alt="" /> 97%</div>
                  </div>
                  <p className="text-50 mt-1">Action, Adventure, Horror</p>
                </div>
              </div>
            )) : (
              <p>No results...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedList;

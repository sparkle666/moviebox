import useAPI from '../hooks/useAPI';
import imdb from "../static/images/imdb.png"
import rotten from "../static/images/rottentomato.png"
import Link from 'next/link';


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

  const results = data?.results || [];

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
      {/* {extractedData ? (
        extractedData.map((item) => (
          <div key={item.id}>
            <p>{item.originalTitle}</p>
            <p>{item.posterPath}</p>
            <p>{item.voteAverage}</p>
            <p>{item.id}</p>
          </div>
        ))
      ) : (
        <p> Empty</p>
      )} */}

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
                        <span className='badge bg-primary'>Tv Shows</span>
                        <i className="fas fa-heart"></i>
                      </div>
                    </div>
                  </Link>
                  <p className="text-50 mt-3">USA, 2016 - Current</p>
                  <p className="text-100">{movieItem.originalTitle}</p>
                  <div className="d-flex flex-row justify-content-between">
                    <div><img src={imdb.src} alt="" /> 9.9/10</div>
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

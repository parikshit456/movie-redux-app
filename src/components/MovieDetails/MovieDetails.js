import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getLoader,
  getMovieOrShowDetail,
  removeSelectedMovieOrShow
} from "../../features/movies/movieSlice";
import "./MovieDetails.css";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const data = useSelector(getMovieOrShowDetail);
  console.log(data)
  const isLoading = useSelector(getLoader)

  console.log(isLoading);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return ()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID]);
  return  (
    <div className="movie-section">
      {
        isLoading ? (<div>Loading...</div>) : (
          <>
                 <div className="movie-right-section">
          <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
        </div>
          <div className="movie-left-section">
          <div className="movie-title">{data.title}</div>
          <div className="movie-rating">
            <span>IMDB Rating⭐: {data.vote_average}</span>
            <span>IMDB Votes👍: {data.vote_count}</span>
            <span>Runtime🕒: {data.runtime}</span>
            <span>Release Date: {data.release_date}</span>
          </div>
          <div className="movie-plot">{data.overview}</div>
          {/* <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div> */}
        </div>
 
          </>
        )
      }
     
    </div>
  ) 
};

export default MovieDetails;

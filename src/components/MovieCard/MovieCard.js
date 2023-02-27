import React from 'react'
import { Link } from 'react-router-dom';
import "./MovieCard.css"

const MovieCard = ({data}) => {
  console.log(data)
  const {poster_path,release_date,title,id} = data;

  return (
    <div className='card-item'>
 <Link to={`/movie/${id}`} >
 <div className="card-inner">
        <div className="card-top">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className='movie-poster'/>
        </div>
      <div className="card-bottom">
      <div className="card-info">
      <h4>{title}</h4>
      <p>{release_date}</p>

        </div>
      </div>
      </div>
     </Link>
    </div>
  )
}

export default MovieCard
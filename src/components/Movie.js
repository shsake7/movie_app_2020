import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
function Movie({title,year,summary,poster,genres}){
return (
    <div className="movie">
    <Link to={{pathname:'/movie-detail',state:{year,title,summary,poster,genres},}}>
    <img src={poster} alt={title} title={title}/>
<div className="movie__data">
    
    
    <h3 className="movie__title" >{title}</h3>
    <h5 className="movie__year">{year}</h5>
    <ul className="movie__genres">
        {
            genres.map((genre,index)=>{ /*key값으로 넘겨 받는 것이 없을 경우 index를 사용하면 자동으로 키값이 생성*/
            return <li key={index} className="movie__genre">{genre}</li>;
            })
        }
    </ul>
    <p className="movie__summary">{summary.slice(0,180)}...180자로 제한</p> 
    </div>
    </Link>
    </div>
    );
}

Movie.propTypes = {
    
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Movie;
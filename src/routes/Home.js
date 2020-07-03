import React from 'react';
import Axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
state = {
    isLoading: true,
    movies:[],
};
getMovies = async ()=>{
    /*const movies = await Axios.get('https://yts.mx/api/v2/list_movies.json')*/
    const {
        data:{
            data:{movies},
        },
    } = await Axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    /*console.log(movies);*/
    /*this.setState({movies:movies});*/
    this.setState({movies, isLoading: false}); /*이름이 같다면 movies하나만 작성해도됨. */
} 
componentDidMount(){
    //데이터 로딩,화면구성이 끝나면 실행됨.
   /*
    setTimeout(()=>{
        this.setState({isLoading: false,movies:'배열데이터로딩'});
    },6000)
    */
   this.getMovies();
}
    render(){
        const {isLoading,movies} = this.state;
    return (
    <section className="container">
        {isLoading ? (
        <div className="loader">
            <span className="loader__text">Loading...</span>
            </div>)
        :(
            <div className="movies">
         
        
        {movies.map(movie => (
            
            
        <Movie 
        key = {movie.id}
        id = {movie.id}
        year = {movie.year}
        title = {movie.title}
        summary = {movie.summary}
        poster = {movie.medium_cover_image}
        genres = {movie.genres}
        />
        ))}
        </div>
        )}
     </section>
    );
    }
}

export default Home;
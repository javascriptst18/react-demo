import React from 'react';

class FetchData extends React.Component {

  state = {
    trendingMovies: []
  }

  //Lifecycle method
  componentDidMount(){
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI = () => {
    fetch('https://javascriptst18.herokuapp.com/trending?_limit=10')
      .then(response => response.json())
      .then((trendingMovies) => {
          this.setState({ trendingMovies: trendingMovies });
      }); 
  }

  // Render MÅSTE finnas
  render(){
    const movies = this.state.trendingMovies.map((movie) => {
      return <div>
        <p> {movie.title} </p>
        <em> {movie.rating} </em>
      </div>
    });

    const movieList = [];
    for(let movie of this.state.trendingMovies){
      movieList.push(<p> {movie.title} </p>);
    }
    
    if(this.state.trendingMovies.length){
      return (
        <div>
          { movies }
        </div>
      )
    } else {
      return <p> LOADING!!!! </p>
    }
  }
}

export default FetchData;
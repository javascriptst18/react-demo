import React from 'react';

class FetchData extends React.Component {

  state = {
    trendingMovies: []
  }

  //Lifecycle method
  componentDidMount() {
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI = () => {
    fetch('https://javascriptst18.herokuapp.com/trending?_limit=10')
      .then(response => response.json())
      .then((trendingMovies) => {
        this.setState({ trendingMovies: trendingMovies });
      });
  }

  logId = (id) => {
    console.log(id);
  }

  render() {
    const movies = this.state.trendingMovies.map((movie) => {
      return (
        <div key={movie.id} onClick={() => this.logId(movie.id)}>
          <p> {movie.title} </p>
          <em> {movie.rating} </em>
        </div>
        );
    });

    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default FetchData;
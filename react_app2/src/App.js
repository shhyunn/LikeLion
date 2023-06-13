
import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
//import Potato from './potato';

function Potato() {
  return <h1>I like Potato</h1>
}

function Food({ name }) {
  return <h1>I like {name}</h1>
}

Food.propTypes = {
  name: PropTypes.string.isRequired
}

const foodILike = [{ name: "Kimbap" }, { name: "meat" }];

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Potato />
//       {foodILike.map(dish => (
//         <Food name={dish.name} />
//       ))}

//     </div>
//   );
// }

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }

    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading: false });

  }

  componentDidMount() {
    this.getMovies();

  }

  render() {
    const { isLoading, movies } = this.state;
    return <div class="container">{isLoading ? "Loading..." : movies.map(movie => {
      console.log(movie);

      return <Movie
        key={movie.id}
        id={movie.id}
        year={movie.id}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
      />

    })}</div>

  };
}

export default App;

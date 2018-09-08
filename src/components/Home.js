import React from "react";
import MyNavbar from "./MyNavbar";
import MoviesList from "./MoviesList";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import AddMovie from "./AddMovie";
import Movies from "./Movies";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: Movies
    };
  }

  onAddMoviePressed = value => {
    this.setState(
      {
        movies: this.state.movies.concat(value)
      },
      () => {
        return <Redirect to="/" />;
      }
    );
  };
  render() {
    return (
      <Router>
        <div>
          <MyNavbar searchMovieFunction={value => this.onSearchChange(value)} />
          <Route
            exact
            path="/"
            render={() => <MoviesList movies={this.state.movies} />}
          />
          <Route
            exact
            path="/new"
            render={() => (
              <AddMovie
                addMovieFunction={value => this.onAddMoviePressed(value)}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Home;

import React from 'react';
import axios from 'axios';
import Movie from "./Movie";
import "./css/style.css"

class AppClass extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }; // state

  // async : 요청을 처리할때 까지 잠시 기다려달라
  getMovies = async () => {
    const { data: { data: { movies } }
      // await : 그래서 뭘 어떤데이터를 처리할때 기다려달라는 거야?
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
  }; // getMovies()

  componentDidMount() {
    this.getMovies();
  }; // componentDidMount()

  // 랜더도 하나의 기능입니다 리액트 컴포넌트의
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            {/* <img src="https://reactjs.org/logo-og.png" alt="logo"></img> */}
            {/* <img className="logo" src="https://blog.kakaocdn.net/dn/ecIzae/btqwHdAZUnH/W6W7hNgJHGZYNSGkdL3CFk/img.jpg" alt="logo"></img> */}
            <span className="loader__text">"Loading.."</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
      </section>
    ); // return

  } // render()

} // class

export default AppClass;
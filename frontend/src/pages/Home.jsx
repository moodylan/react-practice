import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {id: 1, title: "The Godfather", release_date: "1972"},
    {id: 2, title: "The Dark Knight", release_date: "2008"},
    {id: 3, title: "Interstellar", release_date: "2014"},
    {id: 4, title: "Dune: Part Two", release_date:"2024"},
  ];

  const handleSearch = () =>{
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return <div className="home">
    <form onSubmit={handleSearch} className="search-form">
      <input 
        type="text" 
        placeholder="Search for movies..." 
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>

    <div className="movies-grid">
      {movies.map(
        (movie) => 
         ( 
            <MovieCard movie={movie} key={movie.id}/>
        )
      )}
    </div>
  </div>
}

export default Home;
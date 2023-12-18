import { useState } from "react";
import movieWrapper from "../../../utils/transition";
import MovieComp from "./MovieComp";
import { getMovie } from "../../../api/API";
import MagixInput from "../../../components/reUsables/MagixInput";

const Movie = () => {
  const [movie, setMovie] = useState<string>("");

  const SearchedMovie = movieWrapper(
    MovieComp,
    movie,
    getMovie("movie/top_rated")
  );
  return (
    <div>
      <div>
        <MagixInput
          placeholder="search movies"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
      </div>
      <SearchedMovie searchMovie />
    </div>
  );
};

export default Movie;

import { useState } from "react";
import MagixInput from "../../../components/reUsables/MagixInput";
import { getMovie } from "../../../api/API";
import movieWrapper from "../../../utils/transition";
import MovieComp from "./MovieComp";

const Movie = () => {
  const [movie, setMovie] = useState<string>("");

  const SearchedMovie = movieWrapper(
    MovieComp,
    movie,
    getMovie("movie/popular")
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

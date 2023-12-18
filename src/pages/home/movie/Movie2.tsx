import React, { useEffect, useState } from "react";
import MagixInput from "../../../components/reUsables/MagixInput";
import { getMovie } from "../../../api/API";

const Movie2 = () => {
  const [state, setState] = useState<Array<{}>>([]);
  const [movie, setMovie] = useState<string>("");

  useEffect(() => {
    getMovie("tv/top_rated").then((res) => {
      setState(res);
    });
  }, []);

  const searchMovie = state.filter((el: any) => {
    return el.name.toLowerCase().includes(movie.toLowerCase());
  });

  return (
    <div>
      <div>
        <MagixInput
          placeholder="search movies"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
      </div>

      <div className="grid  lg:grid-cols-3 grid-cols-2 gap-2">
        {searchMovie.map((props: any) => (
          <div className="">
            <img
              className=" object-cover h-[300px] border rounded-t-md w-full"
              src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
            />
            <div className="my-2">{props.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie2;

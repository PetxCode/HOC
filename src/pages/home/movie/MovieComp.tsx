import React, { FC } from "react";
import { iPropsMovie } from "../../../utils/interface";

const MovieComp: FC<iPropsMovie> = ({ searchMovie }) => {
  return (
    <div className="grid  lg:grid-cols-3 grid-cols-2 gap-2">
      {searchMovie.map((props: any) => (
        <div className="">
          <img
            className=" object-cover h-[300px] border rounded-t-md w-full"
            src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
          />
          <div className="my-2">{props.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieComp;

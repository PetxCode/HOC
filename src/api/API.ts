import axios from "axios";

export const getMovie = async (url: string) => {
  const URL: string = `https://api.themoviedb.org/3/${url}?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US`;

  return await axios.get(URL).then((res) => {
    return res.data.results;
  });
};

// import

import { useEffect, useState } from "react";

const movieWrapper = (
  Components: any,
  text: string,
  searchFunction: Promise<() => {}>
) => {
  return (props: any) => {
    const [state, setState] = useState<Array<{}>>([]);

    useEffect(() => {
      searchFunction.then((res: any) => {
        setState(res);
      });
    }, []);

    const searchMovie = state.filter((el: any) => {
      return el.title.toLowerCase().includes(text.toLowerCase());
    });

    return (
      <div>
        <Components {...props} searchMovie={searchMovie} />
      </div>
    );
  };
};

export default movieWrapper;

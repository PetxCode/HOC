import React, { useState } from "react";
import GlobalButton from "../../components/reUsables/GlobalButton";
import Movie from "./movie/Movie";
import Movie2 from "./movie/Movie2";
import Movie1 from "./movie/Movie1";

const HomeScreen = () => {
  const [state, setState] = useState<boolean>(true);
  const [state1, setState1] = useState<boolean>(false);
  const [state2, setState2] = useState<boolean>(false);
  return (
    <div className="w-full m-1.5">
      <div className="grid w-full lg:grid-cols-3 gap-2 grid-cols-2 ">
        <div className="bg-blue-500 border text-white rounded-md p-4">
          start
        </div>
        <div className="h-[250px] bg-blue-500 border text-white rounded-md p-4">
          start
        </div>
        <div
          className="border text-white rounded-md 
      col-span-3 lg:col-span-1 grid gap-2  
      "
        >
          <div className="bg-pink-500 p-4 rounded-md">start1</div>
          <div className="bg-pink-500 p-4 rounded-md">start1</div>
        </div>
      </div>

      <div className="mt-8 w-full grid grid-flow-row  grid-cols-1 md:grid-cols-5  gap-2 text-white">
        <div className="min-h-[190vh] bg-slate-100 p-4 border rounded-md col-span-3">
          <div className="flex w-full justify-center">
            <center>
              <GlobalButton
                buttonName="Top Rated"
                choice={"sec"}
                className=""
                onClick={() => {
                  if (!document.startViewTransition) {
                    setState(true);
                    setState1(false);
                    setState2(false);
                  } else {
                    document.startViewTransition(() => {
                      setState(true);
                      setState1(false);
                      setState2(false);
                    });
                  }
                }}
              />
              <GlobalButton
                buttonName="Popular"
                choice={"sec"}
                className=""
                onClick={() => {
                  if (!document.startViewTransition) {
                    setState(false);
                    setState1(true);
                    setState2(false);
                  } else {
                    document.startViewTransition(() => {
                      setState(false);
                      setState1(true);
                      setState2(false);
                    });
                  }
                }}
              />
              <GlobalButton
                buttonName="Trending"
                choice={"sec"}
                className=" "
                onClick={() => {
                  if (!document.startViewTransition) {
                    setState(false);
                    setState1(false);
                    setState2(true);
                  } else {
                    document.startViewTransition(() => {
                      setState(false);
                      setState1(false);
                      setState2(true);
                    });
                  }
                }}
              />
            </center>
          </div>
          <div className="mt-6" />
          <div className="text-black">
            {state ? (
              <div>
                <Movie />
              </div>
            ) : state1 ? (
              <div>
                <Movie1 />
              </div>
            ) : state2 ? (
              <div>
                <Movie2 />
              </div>
            ) : null}
          </div>
        </div>
        <div className="h-[400px] bg-purple-500 col-span-2 p-4 border rounded-md sticky top-1 ">
          starting side
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

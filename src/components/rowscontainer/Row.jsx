import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const posterContainer = useRef();
  const baseUrl = "https://image.tmdb.org/t/p/w300/";

  // useffect hooks to fetch movies
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(fetchUrl);

        if (data) {
          setMovies(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // when user want to scroll right

  const onClickNextArrow = () => {
    const box = posterContainer.current;
    const width = box.clientWidth;
    box.scrollTo({
      left: box.scrollLeft + width,
      behavior: "smooth",
    });
  };

  // when user want to scroll left
  const onClickPrevArrow = () => {
    const box = posterContainer.current;
    const width = box.clientWidth;
    box.scrollTo({
      left: box.scrollLeft - width,
      behavior: "smooth",
    });
  };

  return (
    <div className=" text-white ml-5 mt-10 relative">
      <h2>{title}</h2>
      <div
        className="flex items-start p-5 overflow-y-hidden overflow-x-scroll w-full "
        id="row-posters"
        ref={posterContainer}
      >
        <button className="absolute right-2 top-[50%] bg-white text-black p-2">
          <IoIosArrowForward
            className="text-[2rem]"
            onClick={onClickNextArrow}
          />
        </button>
        <button className="absolute left-2 top-[50%] bg-white text-black p-2">
          <IoIosArrowBack className="text-[2rem] " onClick={onClickPrevArrow} />
        </button>

        {movies.map((val) => (
          <img
            className="w-fit h-[20rem] object-contain mr-4 rounded-md row-poster"
            src={`${baseUrl}${
              isLargeRow ? val.poster_path : val.backdrop_path
            }`}
            alt={val.tiitle}
            key={val.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;

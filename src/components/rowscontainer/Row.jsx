import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
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

  // when user want to navigate the movie details page
  const navigateToDetailsPage = (id) => {
    navigate(`/home/movie/${id}`);
  };

  return (
    <div className=" text-white ml-5 mt-10 relative">
      <h2 className=" text-2xl font-custom ">{title}</h2>
      <div
        className="flex items-start p-5 overflow-y-hidden overflow-x-scroll w-full "
        id="row-posters"
        ref={posterContainer}
      >
        <button
          className="absolute right-2 top-[50%] bg-white text-black p-2"
          onClick={onClickNextArrow}
        >
          <IoIosArrowForward className="text-[2rem]" />
        </button>
        <button
          className="absolute left-2 top-[50%] bg-white text-black p-2"
          onClick={onClickPrevArrow}
        >
          <IoIosArrowBack className="text-[2rem] " />
        </button>

        {movies.map((val) => (
          <img
            className="w-fit h-[20rem] object-contain mr-4 rounded-md row-poster cursor-pointer"
            src={`${baseUrl}${val.poster_path}`}
            alt={val.tiitle}
            key={val.id}
            onClick={() => {
              navigateToDetailsPage(val.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;

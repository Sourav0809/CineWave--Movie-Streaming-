// importing react hooks
import { useRef, useState, useEffect } from "react";

// importing axios
import axios from "axios";

// import required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// importing our app component
import Banner from "./Banner";
import requestUrls from "../../constant/request";

const BannerContainer = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(requestUrls.fetchNetflixOriginals);

        setMovieList(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <Banner
            img={movieList[5]?.backdrop_path}
            movieTitle={movieList[5]?.name}
            description={movieList[5]?.overview}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            img={movieList[6]?.backdrop_path}
            movieTitle={movieList[6]?.name}
            description={movieList[6]?.overview}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            img={movieList[11]?.backdrop_path}
            movieTitle={movieList[11]?.name}
            description={movieList[11]?.overview}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            img={movieList[14]?.backdrop_path}
            movieTitle={movieList[14]?.name}
            description={movieList[14]?.overview}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            img={movieList[2]?.backdrop_path}
            movieTitle={movieList[2]?.name}
            description={movieList[2]?.overview}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerContainer;

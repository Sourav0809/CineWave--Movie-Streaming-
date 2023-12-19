const Banner = ({ img, movieTitle, description }) => {
  // function to make the movie discription under 150 words
  const truncate = (string, n) => {
    return string.length > n ? string.substring(0, n - 1) + " . . ." : string;
  };

  return (
    <>
      <div
        className={` bg-center bg-cover relative w-full h-[30rem] object-contain text-white`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${img}')`,
        }}
      >
        <div className=" ml-20 pt-[15rem] relative z-20">
          <h1 className=" text-[3rem] font-extrabold pb-.3rem">{movieTitle}</h1>
          <div className=" flex gap-4 mt-2">
            <button className=" outline-none px-14 py-2 rounded-md border-none font-semibold text-[#fff] bg-[#000000e1] hover:bg-white hover:text-black transition-all">
              Play
            </button>
            <button className=" outline-none px-14 py-2 rounded-md border-none font-semibold text-[#fff] bg-[#000000e1] hover:bg-white hover:text-black transition-all">
              My List
            </button>
          </div>

          <h1 className="md:w-[50%] w-[70%] h-fit pt-8 text-0.8rem leading-7">
            {description && truncate(description, 200)}
          </h1>
        </div>
        <div className="h-[20rem] absolute inset-x-0 bottom-0 banner-fade-bottom" />
      </div>
    </>
  );
};

export default Banner;

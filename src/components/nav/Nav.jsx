// importing icons
import { useEffect, useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaHouseUser } from "react-icons/fa";

const Nav = () => {
  // hooks assignment
  const [headerBg, setHeaderBg] = useState(false);

  // function to check the scroll postion and update the state
  const transitionNavBar = () => {
    if (window.scrollY >= 100) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  // useffect hook to call the previous function
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <>
      <nav
        className={` flex justify-between sticky top-0 transition-all ${
          headerBg ? "bg-black" : "bg-customBlack"
        } items-center text-white font-custom py-2 px-20`}
      >
        <div className=" flex justify-center items-center gap-2">
          <h1 className=" text-2xl font-semibold">Cinewave</h1>
          <BiSolidMoviePlay className="text-5xl" />
        </div>

        <div>
          <FaHouseUser className=" text-4xl" />
        </div>
      </nav>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </>
  );
};

export default Nav;

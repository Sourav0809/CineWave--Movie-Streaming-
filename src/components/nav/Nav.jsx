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
        className={` flex justify-between fixed w-full z-30 top-0 transition-all ${
          headerBg && "bg-black"
        } items-center text-red-500 font-custom py-2 px-20`}
      >
        <div className=" flex justify-center items-center gap-2">
          <h1 className=" text-2xl font-semibold">Cinewave</h1>
          <BiSolidMoviePlay className="text-5xl" />
        </div>

        <div>
          <FaHouseUser className=" text-4xl" />
        </div>
      </nav>
    </>
  );
};

export default Nav;

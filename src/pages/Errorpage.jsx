import React from "react";
import { useNavigate } from "react-router";

const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white h-[45vh] md:h-[60vh] flex flex-col items-center justify-center  py-16">
      <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl text-red-600">
        Oops!!!!
      </h2>
      <h1 className="my-10 text-xl md:text-2xl lg:text-3xl">404 Not Found</h1>
      <p className="text-base md:text-lg">
        The page you are looking for does not exist.
      </p>
      <button
        className="mt-10 bg-bg-btn-primary text-sm md:text-base cursor-pointer text-white py-2 px-4 rounded hover:bg-bg-deepmain"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default Errorpage;

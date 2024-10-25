/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import error from "../../../public/animations/error.json";
import { useEffect, useRef } from "react";


const FallbackComponent = ({ errorMessage }) => {
  const navigate = useNavigate();

    const animationContainer = useRef(null);

    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: error,
      });

      return () => anim.destroy(); // Cleanup animation on component unmount
    }, []);

  const handleGoHome = () => {
    navigate("/")
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div
        onClick={handleGoHome}
        ref={animationContainer}
        className="cursor-pointer w-3/4 h-3/4 md:w-2/3 md:h-2/3 lg:w-1/2 lg:h-1/2 xl:w-1/3 xl:h-1/3"
      />
      <h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
      {errorMessage && (
        <p className="mt-2 text-lg text-red-600">{errorMessage}</p>
      )}
      <p className="mt-2 text-lg text-gray-600">
        We couldn't find the page you were looking for.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Home
      </button>
    </div>
  );
};

export default FallbackComponent;

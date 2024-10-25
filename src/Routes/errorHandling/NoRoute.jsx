import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import pageNotFound from "../../../public/animations/notFound404.json";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: pageNotFound,
    });

    return () => anim.destroy(); // Cleanup animation on component unmount
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white overflow-hidden">
      <div
        onClick={handleGoHome}
        ref={animationContainer}
        className="cursor-pointer w-3/4 h-3/4 md:w-2/3 md:h-2/3 lg:w-1/2 lg:h-1/2 xl:w-1/3 xl:h-1/3"
      />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center px-4">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-4 px-6 py-2 rounded-md  bg-blue-500 text-white text-lg rounded hover:bg-blue-600 transition duration-200"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;

import { useEffect, useState } from "react";
import { API } from "../../backend";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import toast from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { NO_ROOMS_AVAILABLE_MESSAGE, OUR_ROOMS_HEADING } from "../../hotelManagement/modules/headings";

const HomePageRoomsList = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getAllRoomTypes = async () => {
    setLoading(true); // Start loading state
    try {
      const res = await axios.get(`${API}room/public`);
      console.log("ALL ROOMS", { res });
      setRoomTypes(res.data);
    } catch (error) {
      console.error("Error fetching room types:", { error });
      toast.error("Failed to fetch room types. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllRoomTypes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80dvh]">
        <FadeLoader color="#000" />
      </div>
    );
  }

  const handleNavigation = (id) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <main className="max-w-screen-2xl mb-8 xl:px-10 px-6 sm:px-16 mx-auto">
      <h1 className="text-center font-bold text-xl text-[#002d72] py-4">
        {OUR_ROOMS_HEADING}
      </h1>
      <section className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto gap-x-7 gap-y-10">
        {roomTypes?.length ? (
          roomTypes.map((roomType) => (
            <div
              key={roomType._id}
              onClick={() => handleNavigation(roomType._id)}
              className={`flex flex-col gap-3 rounded-xl w-full sm:max-w-[300px] md:w-full mx-auto ${
                !roomType?.availableStatus ? "cursor-not-allowed" : ""
              }`}
            >
              <div className="h-[310px] md:h-[277px] overflow-hidden rounded-xl">
                <img
                  src={roomType?.photos[0]}
                  alt="Listing images"
                  className={`w-full h-[310px] md:h-[277px] object-cover object-center rounded-xl hover:scale-110 transition duration-500 ease-in-out cursor-pointer`}
                />
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                {/* Listing details */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-[#222222] font-medium">
                    {roomType?.name}
                  </p>
                  <p className="text-sm text-[#222222] font-semibold">
                    ${roomType?.pricePerNight}{" "}
                    <span className="font-normal">night</span>
                  </p>
                </div>
                {/* Ratings / New Status */}
                <div className="flex flex-row gap-1 items-center">
                  {roomType?.ratings ? (
                    <>
                      <AiFillStar size={16} />
                      <p className="text-sm">{roomType?.hotel?.rating}</p>
                    </>
                  ) : (
                    <>
                      <AiFillStar size={16} />
                      <p className="text-sm">New</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5 flex justify-center items-center">
            <p className="text-lg font-semibold text-gray-500 text-center">
              {NO_ROOMS_AVAILABLE_MESSAGE}
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePageRoomsList;

/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { DateRange } from "react-date-range";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../backend";
import toast from "react-hot-toast";
import {
  ADULTS,
  ADULTS_AGE,
  CHECK_IN_WITH_HYPHEN,
  CHECK_Out,
  CHILDREN,
  CHILDREN_AGE,
  FIND_ROOMS_BUTTON,
  ROOMS,
} from "../../hotelManagement/modules/headings";
/* eslint-disable react/prop-types */
const AvailablityCheckCard = () => {
  const calendarRef = useRef();
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const { state: calendarState, setState: setCalendarState } =
    useOutsideClick(calendarRef);
  const { state: showDropdown, setState: setShowDropdown } =
    useOutsideClick(dropdownRef);

  const [guestsNumber, setGuestsNumber] = useState(1);
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [totalGuest, setTotalGuest] = useState(guestsNumber + childrenNumber);

  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      key: "selection",
    },
  ]);
  const formattedStartDate = selectedDates[0]?.startDate?.toISOString();
  const formattedEndDate = selectedDates[0]?.endDate?.toISOString();

  const localStartDate = new Date(formattedStartDate).toLocaleDateString();
  const localEndDate = new Date(formattedEndDate).toLocaleDateString();

  // Function to handle date selection
  const handleSelect = (ranges) => {
    if (ranges?.key === "selection") {
      setSelectedDates([ranges.selection]);
    } else {
      const startDate = new Date(ranges.selection.startDate);
      const endDate = new Date(ranges.selection.endDate);
      // Reset time to compare only the date
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
      // Check if the dates are the same
      if (startDate.getTime() === endDate.getTime()) {
        // Set end date to the next day
        endDate.setDate(endDate.getDate() + 1);
      }
      if (startDate.getTime() === endDate.getTime()) {
        endDate.setDate(endDate.getDate() + 1);
      }

      setSelectedDates([{ startDate, endDate, key: "selection" }]);
    }
  };

  const checkAvailability = async () => {
    const checkkingData = {
      checkIn: selectedDates[0]?.startDate,
      checkOut: selectedDates[0]?.endDate,
      rooms: numberOfRooms,
      adults: guestsNumber,
      children: childrenNumber,
    };
    try {
      const res = await axios.post(
        `${API}bookings/check-availability`,
        checkkingData
      );
      navigate("/rooms", {
        state: {
          data: checkkingData,
          availabilityTypes: res.data.availabilityTypes,
        },
      });
    } catch (error) {
      toast.error(error.response.data.message || "Error while Checking Availability !");
    }
  };

  useEffect(() => {
    setTotalGuest(guestsNumber + childrenNumber);
  }, [guestsNumber, childrenNumber]);

  return (
    <>
      <div className="grid place-items-center min-h-[100px] sm:pt-10 pb-6">
        <div className="min-h-[100px] rounded-xl border border-[#dddddd] shadow-customShadow p-4 md:p-6 bg-white w-full max-w-md sm:max-w-2xl md:max-w-2xl lg:max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Calendar Section */}
            <div className="rounded-lg border border-[#b9b9b9] w-full min-h-[60px] flex">
              <div
                onClick={() => setCalendarState(true)}
                className="grid grid-cols-2 cursor-pointer w-full"
              >
                <div className="px-3 py-3">
                  <p className="text-[10px] md:text-xs text-black font-semibold uppercase">
                    {CHECK_IN_WITH_HYPHEN}
                  </p>
                  <p className="text-sm text-[#222222]">{localStartDate}</p>
                </div>
                <div className="px-3 py-3 border-l border-[#b9b9b9]">
                  <p className="text-[10px] md:text-xs text-black font-semibold uppercase">
                    {CHECK_Out}
                  </p>
                  <p className="text-sm text-[#222222]">{localEndDate}</p>
                </div>
              </div>
            </div>

            {/* Guest Selection */}
            <div
              onClick={() => setShowDropdown((prev) => !prev)}
              ref={dropdownRef}
              className="rounded-lg border border-[#b9b9b9] w-full min-h-[50px] cursor-pointer flex items-center justify-between px-3 py-3"
            >
              <div className="flex flex-col">
                <p className="text-[10px] md:text-xs text-black font-semibold uppercase">
                  GUESTS
                </p>
                <p className="text-sm text-[#222222]">
                  {totalGuest} {totalGuest === 1 ? "guest" : "guests"}
                </p>
              </div>
              <div>
                {showDropdown ? (
                  <MdKeyboardArrowUp size={26} />
                ) : (
                  <MdKeyboardArrowDown size={26} />
                )}
              </div>
            </div>

            {/* Find Rooms Button */}
            <div className="flex justify-center sm:justify-end">
              <button
                onClick={checkAvailability}
                className="p-3 bg-[#1b4281] hover:bg-[#002662] text-white text-sm font-medium rounded-md w-full sm:w-auto"
              >
                {FIND_ROOMS_BUTTON}
              </button>
            </div>
          </div>

          {/* Dropdown for Guests */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="min-h-[240px] w-60 shadow-lg border absolute right-0 sm:right-1/3 z-[90] bg-white px-4 py-5 rounded-md"
            >
              {/* Rooms Section */}
              <div className="flex items-center justify-between mb-3">
                <span>
                  <p className="text-base text-[#222222] font-medium">
                    {ROOMS}
                  </p>
                </span>
                <span className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setNumberOfRooms((prev) => (prev > 0 ? prev - 1 : 0))
                    }
                    disabled={numberOfRooms === 1}
                    className="p-2 rounded-full border border-[#c0c0c0] disabled:opacity-20"
                  >
                    <AiOutlineMinus size={16} />
                  </button>
                  <p className="w-[30px] text-center">{numberOfRooms}</p>
                  <button
                    onClick={() => setNumberOfRooms((prev) => prev + 1)}
                    disabled={numberOfRooms === 4}
                    className="p-2 rounded-full border border-[#c0c0c0] disabled:opacity-20"
                  >
                    <AiOutlinePlus size={16} />
                  </button>
                </span>
              </div>

              {/* Adults Section */}
              <div className="flex items-center justify-between mb-3">
                <span>
                  <p className="text-base text-[#222222] font-medium">
                    {ADULTS}
                  </p>
                  <p className="text-sm text-[#313131]">{ADULTS_AGE}</p>
                </span>
                <span className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setGuestsNumber((prev) => (prev > 0 ? prev - 1 : 0))
                    }
                    disabled={guestsNumber === 1}
                    className="p-2 rounded-full border border-[#c0c0c0] disabled:opacity-20"
                  >
                    <AiOutlineMinus size={16} />
                  </button>
                  <p className="w-[30px] text-center">{guestsNumber}</p>
                  <button
                    onClick={() => setGuestsNumber((prev) => prev + 1)}
                    disabled={totalGuest === 8}
                    className="p-2 rounded-full border border-[#c0c0c0] disabled:opacity-20"
                  >
                    <AiOutlinePlus size={16} />
                  </button>
                </span>
              </div>

              {/* Children Section */}
              <div className="flex items-center justify-between">
                <span>
                  <p className="text-base text-[#222222] font-medium">
                    {CHILDREN}
                  </p>
                  <p className="text-sm text-[#313131]">{CHILDREN_AGE}</p>
                </span>
                <span className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setChildrenNumber((prev) => (prev > 0 ? prev - 1 : 0))
                    }
                    disabled={childrenNumber === 0}
                    className="p-2 rounded-full border border-[#c0c0c0] disabled:opacity-20"
                  >
                    <AiOutlineMinus size={16} />
                  </button>
                  <p className="w-[30px] text-center">{childrenNumber}</p>
                  <button
                    onClick={() => setChildrenNumber((prev) => prev + 1)}
                    disabled={totalGuest === 8}
                    className="p-2 rounded-full border border-[#c0c0c0] disabled:opacity-20"
                  >
                    <AiOutlinePlus size={16} />
                  </button>
                </span>
              </div>
            </div>
          )}

          {/* Calendar Dropdown */}
          {calendarState && (
            <div
              ref={calendarRef}
              className="absolute z-50 mt-3 sm:mt-5 shadow-md rounded-lg border bg-white overflow-hidden"
            >
              <DateRange
                ranges={selectedDates}
                onChange={handleSelect}
                minDate={new Date()}
                rangeColors={["#1b4281"]}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AvailablityCheckCard;

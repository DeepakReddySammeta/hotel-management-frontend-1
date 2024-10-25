// import React from "react"; // Import React (optional for modern React versions)
import room3 from "../../assets/aspengrandhotellaportepictures/king-suite.jpg";
import { ABOUT_US_DESCRIPTION_LINE1, ABOUT_US_DESCRIPTION_LINE2, ABOUT_US_HEADING, HOTEL_NAME_HEADING } from "../../hotelManagement/modules/headings";

function About() {
  return (
    <section className="px-6 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-xl text-[#002d72]">
            {ABOUT_US_HEADING}
          </h1>
          <p className="mt-4 text-gray-700">
            Welcome to{" "}
            <strong className="text-[#637fac]">{HOTEL_NAME_HEADING}</strong>,{" "}
            {ABOUT_US_DESCRIPTION_LINE1}{" "}
            <strong className="text-[#637fac]">{HOTEL_NAME_HEADING}</strong>,{" "}
            {ABOUT_US_DESCRIPTION_LINE2}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={room3}
            alt="About Us Image"
            className="w-full h-3/4 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

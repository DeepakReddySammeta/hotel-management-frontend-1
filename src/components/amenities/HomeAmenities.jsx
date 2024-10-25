// / import React from 'react'
import {
  faBell,
  faFirstAid,
  faFireExtinguisher,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
// import AmenitiesCarousel from './AmenitiesCarousel'
import AtThisHotel from './AtThisHotel';
import IncludedAmenitiesList from './IncludedAmenitiesList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AmenitiesDescription from "./AmenitiesDescription";
import { HOME_AMENITIES_HEADING } from "../../hotelManagement/modules/headings";

function HomeAmenities() {
  
  const safetyAmenities = [
    { icon: <FontAwesomeIcon icon={faBell} />, label: "Safety alarm" }, // FontAwesome Bell icon
    { icon: <FontAwesomeIcon icon={faFirstAid} />, label: "First aid kit" }, // FontAwesome First Aid icon
    {
      icon: <FontAwesomeIcon icon={faFireExtinguisher} />,
      label: "Fire extinguisher",
    }, // FontAwesome Fire Extinguisher icon
    {
      icon: <FontAwesomeIcon icon={faMicrochip} />,
      label: "Carbon monoxide alarm",
    }, // FontAwesome Carbon icon
  ];
  return (
    <div>
      {/* <AmenitiesCarousel /> */}
      <IncludedAmenitiesList />
      <AmenitiesDescription />
      <div className="bg-gray-100 py-10 px-6">
        <h2 className="text-xl text-[#002d72] font-bold text-left px-9 mb-8">
          {HOME_AMENITIES_HEADING}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {safetyAmenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-2xl mb-2">{amenity.icon}</div>
              <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <AtThisHotel />
    </div>
  );
}

export default HomeAmenities

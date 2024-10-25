import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AMENITIES_LIST_INCLUDED_WITH_STAY } from "../../hotelManagement/modules/constants";
import { INCLUDED_WITH_EVERY_STAY_HEADING } from "../../hotelManagement/modules/headings";

const IncludedWithStay = () => {

  return (
    <div className="bg-gray-100 py-8 px-6">
      <h2 className="text-xl text-[#002d72] font-bold text-left px-9 mb-8">
        {INCLUDED_WITH_EVERY_STAY_HEADING}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {AMENITIES_LIST_INCLUDED_WITH_STAY.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center">
            <FontAwesomeIcon icon={amenity.icon} className="text-2xl mb-2" />
            <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold">
              {amenity.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncludedWithStay;

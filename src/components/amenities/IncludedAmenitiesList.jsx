import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INCLUDED_WITH_EVERY_STAY_HEADING } from "../../hotelManagement/modules/headings";
import { AMENITIES_LIST_INCLUDED_WITH_STAY_SEPERATE_PAGE_LIST } from "../../hotelManagement/modules/constants";

const IncludedAmenitiesList = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 px-6">
        <h2 className="text-xl text-[#002d72] font-bold text-center px-9 mb-8">
          {INCLUDED_WITH_EVERY_STAY_HEADING}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {AMENITIES_LIST_INCLUDED_WITH_STAY_SEPERATE_PAGE_LIST.map(
            (amenity, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl mb-2">
                  <FontAwesomeIcon icon={amenity.icon} />{" "}
                </div>
                <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold">
                  {amenity.label}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default IncludedAmenitiesList;

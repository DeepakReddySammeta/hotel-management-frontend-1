import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OFFERS_LIST } from "../../hotelManagement/modules/constants";
import { OUR_SPECIAL_OFFERS_HEADING } from "../../hotelManagement/modules/headings";
const Offers = () => {

  return (
    <div className="bg-white text-white py-10">
      <div className="px-4">
        <h2 className="text-xl text-[#002d72] text-center font-bold text-left mb-4">
          {OUR_SPECIAL_OFFERS_HEADING}
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-4">
          {OFFERS_LIST.map((offer, index) => (
            <li
              key={index}
              className="flex items-center bg-white-100 text-blue-600 p-4 rounded-lg shadow-xl"
            >
              <FontAwesomeIcon
                icon={offer.icon}
                className="text-blue-600 w-8 h-8 mr-4"
              />
              <span className="lg:text-sm md:text-sm sm:text-base text-xs font-semibold text-black">
                {offer.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Offers;

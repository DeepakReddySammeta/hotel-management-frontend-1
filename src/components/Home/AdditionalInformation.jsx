import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ADDITIONAL_INFORMATION } from "../../hotelManagement/modules/headings";
import { ADDITIONAL_INFORMATION_ACCORDION_DATA } from "../../hotelManagement/modules/constants";

const AdditionalInformation = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="font-bold text-2xl text-[#002d72] py-2 text-center">
        {ADDITIONAL_INFORMATION}
      </h1>
      {ADDITIONAL_INFORMATION_ACCORDION_DATA.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 flex justify-between items-center"
          >
            <span className="font-semibold text-lg mr-4">{item.title}</span>{" "}
            {/* Added margin-right */}
            <FontAwesomeIcon
              icon={openAccordion === index ? faChevronUp : faChevronDown}
            />
          </button>
          {openAccordion === index && (
            <div className="p-4">
              <ul className="list-disc list-inside">
                {item.content.map((contentItem, idx) => (
                  <li key={idx} className="text-gray-700">
                    {contentItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdditionalInformation;

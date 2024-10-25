/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { AT_THIS_HOTEL } from "../../hotelManagement/modules/headings";
import { AT_THIS_HOTE_ACCORDION_ITEMS } from "../../hotelManagement/modules/constants";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

const AtThisHotel = () => {
  return (
    <div className="mx-28 py-10">
      <h2 className="text-xl text-[#002d72] font-bold text-center px-4 ">
        {AT_THIS_HOTEL}
      </h2>
      {AT_THIS_HOTE_ACCORDION_ITEMS.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default AtThisHotel;

import room3 from "../../assets/aspengrandhotellaportepictures/pool2.jpg";
import { AMENITIES_DESCRIPTION_EXPLORE_NOW_BUTTON, AMENITIES_DESCRIPTION_HEADING, AMENITIES_DESCRIPTION_PARAGRAPH } from "../../hotelManagement/modules/headings";

function AmenitiesDescription() {
  return (
    <section className="bg-white px-24 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col justify-center">
          {/* <h1 className="font-bold text-lg text-[#002d72]">
            ASPEN GRAND HOTELS
          </h1> */}
          <p className="mt-4 text-gray-700 text-2xl font-extrabold">
            {AMENITIES_DESCRIPTION_HEADING}
          </p>
          <p className="mt-4 text-gray-700">
            {AMENITIES_DESCRIPTION_PARAGRAPH}
          </p>
          <div className="mt-6">
            <button className="inline bg-[#002d72] text-white py-2 px-6 rounded-lg hover:bg-[#0056b3]">
              {AMENITIES_DESCRIPTION_EXPLORE_NOW_BUTTON}
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src={room3}
            alt="About Us Image"
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default AmenitiesDescription;

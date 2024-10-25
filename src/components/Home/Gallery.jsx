import { useEffect, useState } from "react";
import image from "../../assets/aspengrandhotellaportepictures/king-suite.jpg";
import image1 from "../../assets/aspengrandhotellaportepictures/2QB.jpg";
import image9 from "../../assets/aspengrandhotellaportepictures/kingsuite2.jpg";
import image3 from "../../assets/aspengrandhotellaportepictures/king-suite3.jpg";
import image4 from "../../assets/aspengrandhotellaportepictures/Bf2.jpg";
import image6 from "../../assets/aspengrandhotellaportepictures/Kitchen.jpg";
import image11 from "../../assets/aspengrandhotellaportepictures/bf6.jpg";
import image7 from "../../assets/aspengrandhotellaportepictures/bf4.jpg";
import image5 from "../../assets/aspengrandhotellaportepictures/Dinning.jpg";
import image2 from "../../assets/aspengrandhotellaportepictures/ex1.jpg";
import image8 from "../../assets/aspengrandhotellaportepictures/fd.jpg";
import image10 from "../../assets/aspengrandhotellaportepictures/pool2.jpg";
import { GALLERY_HEADING } from "../../hotelManagement/modules/headings";




const mockRooms = [
  {
    id: 1,
    thumbnail: image,
  },
  {
    id: 2,
    thumbnail: image1,
  },
  {
    id: 3,
    thumbnail: image2,
  },
  {
    id: 4,
    thumbnail: image3,
  },
  {
    id: 5,
    thumbnail: image4,
  },
  {
    id: 6,
    thumbnail: image5,
  },
  {
    id: 7,
    thumbnail: image6,
  },
  {
    id: 8,
    thumbnail: image7,
  },
  {
    id: 9,
    thumbnail: image8,
  },
  {
    id: 10,
    thumbnail: image9,
  },
  {
    id: 11,
    thumbnail: image10,
  },
  {
    id: 12,
    thumbnail: image11,
  },
];


function Gallery() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(mockRooms);
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="font-bold text-xl text-center text-[#002d72]">
          {GALLERY_HEADING}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rooms.map((item) => (
            <div key={item.id} className="relative w-full">
              <img
                src={item.thumbnail}
                alt={`Room ${item.id}`}
                className="object-cover h-60 w-96 object-center rounded-xl hover:scale-110 transition duration-500 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

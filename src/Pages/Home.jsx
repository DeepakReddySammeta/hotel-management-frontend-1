import { useEffect, useState } from "react";
// import Category from "../components/Home/Category";
// import PriceWithTaxCard from "../components/Home/PriceWithTaxCard";
import { useQuery } from "@tanstack/react-query";
import { API } from "../backend";
import axios from "axios";
import HomePageSkeleton from "../components/skeletonLoading/HomePageSkeleton";
import ListingPreviewCard from "../components/Home/ListingPreviewCard";
import { Link, useLocation } from "react-router-dom";
import { useGetSubCatListing } from "../hooks/useGetSubCatListing";
import SkeletonLoadingCards from "../components/skeletonLoading/SkeletonLoadingCards";
import { FadeLoader } from "react-spinners";

const Home = () => {
  const [hasScroll, setHasScroll] = useState(false);
  //  before tax price state
  const [showBeforeTaxPrice, setShowBeforeTaxPrice] = useState(false);
  const category = localStorage.getItem("category");
  // get listing data based on cat
  const { isLoading, data } = useGetSubCatListing(category);
  console.log({ data });
  const location = useLocation();
  const roomPictures = [
    [
      "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/19966760/pexels-photo-19966760/free-photo-of-gray-bedroom-with-a-double-bed-and-a-mirror-in-the-wardrobe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/4030072/pexels-photo-4030072.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/5649731/pexels-photo-5649731.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/19966760/pexels-photo-19966760/free-photo-of-gray-bedroom-with-a-double-bed-and-a-mirror-in-the-wardrobe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/5649731/pexels-photo-5649731.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/4030072/pexels-photo-4030072.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/19966760/pexels-photo-19966760/free-photo-of-gray-bedroom-with-a-double-bed-and-a-mirror-in-the-wardrobe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
    [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4030072/pexels-photo-4030072.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/5649731/pexels-photo-5649731.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
    [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  ];
  // fetching all listing data
  const allListingData = useQuery({
    queryKey: ["allListing"],
    queryFn: async () => {
      const res = await axios.get(`${API}house/get_all_listing`);
      const formattedResponse = res.data.allListingData
        .slice(0, 10)
        .map((item, index) => {
          return {
            ...item,
            photo: roomPictures[index],
          };
        });
      console.log({ formattedResponse });
      return formattedResponse;
    },
  });

  const handleScrollTracking = () => {
    const scrollPosition = window.scrollY;
    // checking if we scroll from top
    if (scrollPosition >= 20) {
      setHasScroll(true);
    } else if (scrollPosition <= 10) {
      setHasScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTracking);
    return () => {
      window.removeEventListener("scroll", handleScrollTracking);
    };
  }, []);

  useEffect(() => {
    // saving category to local storage if the url has the category then save that otherwise default  will be house
    if (location.search.includes("category")) {
      const catValue = location.search.split("=");
      if (catValue[1].includes("%20")) {
        const removeSpaceValue = location.search
          .split("=")[1]
          .replace(/%20/g, " ");
        JSON.stringify(localStorage.setItem("category", removeSpaceValue));
      } else {
        JSON.stringify(localStorage.setItem("category", catValue[1]));
      }
    } else {
      JSON.stringify(localStorage.setItem("category", "House"));
    }
  }, [location.search]);

  if (allListingData.isLoading) {
    if (window.innerWidth <= 1080) {
      return (
        <div className="flex justify-center items-center h-[80dvh]">
          <FadeLoader color="#000" />
        </div>
      );
    } else {
      return <HomePageSkeleton />;
    }
  }

  const formattedData = data.map((item, index) => {
    return {
      ...item,
      photo: roomPictures[index],
    };
  });
  console.log({ allListingData, formattedData });

  return (
    <main className="max-w-screen-2xl xl:px-10 px-6  sm:px-16 mx-auto">
      <h1 className="text-center font-bold text-xl text-[#002d72] py-4">
        OUR ROOMS
      </h1>
      {/* <section
        className={` pt-8 grid md:grid-cols-12 gap-5 bg-white sticky top-16 z-30 ${
          hasScroll ? " shadow" : " shadow-none"
        }`}
      > */}
      {/* categories */}
      {/* <Category styleGrid={"md:col-span-8 lg:col-span-9"} /> */}
      {/* taxes toggle card */}
      {/* <PriceWithTaxCard
          style={
            " md:col-span-4 lg:col-span-3 border-[#e2e2e2] border rounded-xl h-14 md:flex justify-around items-center hidden"
          }
          setShowBeforeTaxPrice={setShowBeforeTaxPrice}
        /> */}
      {/* </section> */}
      {/* house listing data section */}
      {/* if sub cat listing data is loading else */}
      {isLoading ? (
        <>
          {window.innerWidth <= 1080 ? (
            <div className="flex justify-center items-center h-[80dvh]">
              <FadeLoader color="#000" />
            </div>
          ) : (
            <SkeletonLoadingCards />
          )}
        </>
      ) : (
        <>
          {/* all listing data fetching */}
          <section className=" py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto gap-x-7 gap-y-10">
            {location?.search?.split("=")[1]?.includes("House") ||
            (location?.pathname === "/" &&
              !location?.search?.split("?")[1]?.includes("category")) ? (
              <>
                {allListingData.data &&
                  allListingData.data.length !== 0 &&
                  allListingData.data.map((listing, index) => {
                    return (
                      // this will be link to see full details of the listing
                      <Link
                        to={`/rooms/${listing?._id}`}
                        key={listing._id}
                        className=" flex flex-col gap-3 rounded-xl w-full sm:max-w-[300px] md:w-full mx-auto"
                      >
                        <ListingPreviewCard
                          listingData={listing}
                          showBeforeTaxPrice={showBeforeTaxPrice}
                        />
                      </Link>
                    );
                  })}
              </>
            ) : (
              <>
                {/* only cat based listing data fetching */}
                {formattedData.length !== 0 &&
                  formattedData?.map((listing, index) => {
                    return (
                      // this will be link to see full details of the listing
                      <Link
                        to={`/rooms/${listing?._id}`}
                        key={listing._id}
                        className=" flex flex-col gap-3 rounded-xl w-[320px] md:w-[264px] mx-auto"
                      >
                        <ListingPreviewCard
                          listingData={listing}
                          showBeforeTaxPrice={showBeforeTaxPrice}
                        />
                      </Link>
                    );
                  })}
              </>
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default Home;

import { Suspense, lazy } from "react";
// import { API } from "../../backend";
import EditProfile from "../../Pages/UserProfile/EditProfile";
import MainLayout from "../../layout/MainLayout";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Overview from "../../Pages/Dashboard/Overview";
import MotelYourHome from "../../Pages/MotelYourHome";
import Reservations from "../../Pages/Dashboard/Reservations";
import Listing from "../../Pages/Dashboard/Listing";
import CreateNewListLayout from "../../layout/CreateNewListLayout";
import ListHouseOverview from "../../Pages/ListHouseOverview";
import SignIn from "../../components/auth/SignIn";
import ListHouseStepOne from "../../Pages/ListingHouseStepOne/ListHouseStepOne";
import ListHouseStepOneStructure from "../../Pages/ListingHouseStepOne/ListHouseStepOneStructure";
import ListHouseStepOnePlacetype from "../../Pages/ListingHouseStepOne/ListHouseStepOnePlacetype";
import { FadeLoader } from "react-spinners";
// import ListingHouseStepOneAddress from "../../Pages/ListingHouseStepOne/ListingHouseStepOneAddress";
// import ListingHouseStepOneFloorPlan from "../../Pages/ListingHouseStepOne/ListingHouseStepOneFloorPlan";
// import StepTwoOverview from "../../Pages/ListingHouseStepTwo/StepTwoOverview";
// import Amenities from "../../Pages/ListingHouseStepTwo/Amenities";
// import ListingHousePhotos from "../../Pages/ListingHouseStepTwo/ListingHousePhotos";
// import HouseTitle from "../../Pages/ListingHouseStepTwo/HouseTitle";
// import Highlight from "../../Pages/ListingHouseStepTwo/Highlight";
// import Description from "../../Pages/ListingHouseStepTwo/Description";
// import FinalStepOverview from "../../Pages/ListingHouseFinalStep/FinalStepOverview";
// import Visibility from "../../Pages/ListingHouseFinalStep/Visibility";
// import Pricing from "../../Pages/ListingHouseFinalStep/Pricing";
// import Legal from "../../Pages/ListingHouseFinalStep/Legal";
// import Receipt from "../../Pages/ListingHouseFinalStep/Receipt";
// import Thankyou from "../../Pages/ListingHouseFinalStep/Thankyou";
// import Home from "../../Pages/Home"; = lazy (() => import)
import RoomsList from "../../Pages/Home";
import SignUp from "../../components/auth/SignUp";
import Gallery from "../../components/Home/Gallery";
import ErrorBoundary from "../errorHandling/ErrorBoundary";
import HomeAmenities from "../../components/amenities/HomeAmenities";
import PaymentSuccess from "../../hotelManagement/payments/PaymentSuccess";
import PaymentFailed from "../../hotelManagement/payments/PaymentFailed";
import HomePageRoomsList from "../../components/Home/HomePageRoomsList";
import NotFound from "../errorHandling/NoRoute";

const ListingHouseStepOneAddress = lazy(() =>
  import("../../Pages/ListingHouseStepOne/ListingHouseStepOneAddress")
);
const ListingHouseStepOneFloorPlan = lazy(() =>
  import("../../Pages/ListingHouseStepOne/ListingHouseStepOneFloorPlan")
);
const StepTwoOverview = lazy(() =>
  import("../../Pages/ListingHouseStepTwo/StepTwoOverview")
);
const Amenities = lazy(() =>
  import("../../Pages/ListingHouseStepTwo/Amenities")
);
const ListingHousePhotos = lazy(() =>
  import("../../Pages/ListingHouseStepTwo/ListingHousePhotos")
);
const HouseTitle = lazy(() =>
  import("../../Pages/ListingHouseStepTwo/HouseTitle")
);
const Home = lazy(() => import("../../components/Home/HomeContainer"));
const ListingDetails = lazy(() => import("../../Pages/ListingDetails"));
// import Book from "../../Pages/Book";
const Book = lazy(() => import("../../Pages/Book"));
const PaymentConfirmed = lazy(() => import("../../Pages/PaymentConfirmed"));
const Thankyou = lazy(() =>
  import("../../Pages/ListingHouseFinalStep/Thankyou")
);
const Receipt = lazy(() => import("../../Pages/ListingHouseFinalStep/Receipt"));
const Legal = lazy(() => import("../../Pages/ListingHouseFinalStep/Legal"));
const Pricing = lazy(() => import("../../Pages/ListingHouseFinalStep/Pricing"));
const Visibility = lazy(() =>
  import("../../Pages/ListingHouseFinalStep/Visibility")
);
const FinalStepOverview = lazy(() =>
  import("../../Pages/ListingHouseFinalStep/FinalStepOverview")
);
const Description = lazy(() =>
  import("../../Pages/ListingHouseStepTwo/Description")
);
const Highlight = lazy(() =>
  import("../../Pages/ListingHouseStepTwo/Highlight")
);
// import PaymentConfirmed from "../../Pages/PaymentConfirmed";

const router = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Home />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/gallery",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Gallery />
            </Suspense>
          </ErrorBoundary>
        ),
        // loader: ({ params }) => fetch(`${API}house/listing/${params.id}`),
      },
      {
        path: "/amenities",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <HomeAmenities />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/rooms",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <RoomsList />
            </Suspense>
          </ErrorBoundary>
        ),
        // loader: ({ params }) => fetch(`${API}house/listing/${params.id}`),
      },
      {
        path: "/roomsList",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <HomePageRoomsList />
            </Suspense>
          </ErrorBoundary>
        ),
        // loader: ({ params }) => fetch(`${API}house/listing/${params.id}`),
      },
      {
        path: "/rooms/:id",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <ListingDetails />
            </Suspense>
          </ErrorBoundary>
        ),
        // loader: ({ params }) => fetch(`${API}house/listing/${params.id}`),
      },
      {
        path: "/book/stays/:id",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Book />,
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/users/show/:id",
        element: (
          <ErrorBoundary>
            {" "}
            <UserProfile />
          </ErrorBoundary>
        ),
      },
      {
        path: "/users/show/:id/editMode=true",
        element: (
          <ErrorBoundary>
            {" "}
            <EditProfile />
          </ErrorBoundary>
        ),
      },
      {
        path: "/users/dashboard/:id/overview=true",
        element: (
          <ErrorBoundary>
            {" "}
            <Overview />
          </ErrorBoundary>
        ),
      },
      {
        path: "/users/dashboard/:id/reservations",
        element: (
          <ErrorBoundary>
            {" "}
            <Reservations />
          </ErrorBoundary>
        ),
      },
      {
        path: "/users/dashboard/:id/listing=true",
        element: (
          <ErrorBoundary>
            {" "}
            <Listing />
          </ErrorBoundary>
        ),
      },
      {
        path: "/host/homes",
        element: (
          <ErrorBoundary>
            {" "}
            <MotelYourHome />
          </ErrorBoundary>
        ),
      },
      {
        path: "/payment-confirmed",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <PaymentConfirmed />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "/signIn",
    element: (
      <ErrorBoundary>
        <SignIn />
      </ErrorBoundary>
    ),
  },
  {
    path: "/signUp",
    element: (
      <ErrorBoundary>
        <SignUp />
      </ErrorBoundary>
    ),
  },
  {
    path: "/payment/suc",
    element: (
      <ErrorBoundary>
        <PaymentSuccess />
      </ErrorBoundary>
    ),
  },
  {
    path: "/payment/fail",
    element: (
      <ErrorBoundary>
        <PaymentFailed />
      </ErrorBoundary>
    ),
  },
  {
    path: "/become-a-host",
    element: (
      <ErrorBoundary>
        <CreateNewListLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/become-a-host",
        element: (
          <ErrorBoundary>
            <ListHouseOverview />
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/about-your-place",
        element: (
          <ErrorBoundary>
            <ListHouseStepOne />
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/structure",
        element: (
          <ErrorBoundary>
            <ListHouseStepOneStructure />
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/privacy-type",
        element: (
          <ErrorBoundary>
            <ListHouseStepOnePlacetype />
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/location",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <ListingHouseStepOneAddress />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/floor-plan",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <ListingHouseStepOneFloorPlan />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/stand-out",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <StepTwoOverview />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/amenities",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Amenities />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/photos",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <ListingHousePhotos />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/title",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <HouseTitle />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/highlight",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Highlight />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/description",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Description />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/finish-step",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <FinalStepOverview />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/visiblity",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Visibility />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/price",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Pricing />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/legal",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Legal />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/receipt",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Receipt />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/become-a-host/:id/published",
        element: (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className=" flex justify-center items-center w-full h-[60dvh]">
                  <FadeLoader color="#000" />
                </div>
              }
            >
              <Thankyou />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    ),
  }
];

export default router;

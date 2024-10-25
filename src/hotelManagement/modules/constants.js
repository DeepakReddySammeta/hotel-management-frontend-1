import {
  faCheckCircle,
  faCookieBite,
  faClock,
  faCashRegister,
  faBed,
  faPercent,
  faCoffee,
  faDoorOpen,
  faBriefcase,
  faTv,
  faLaptop,
  faWind,
  faBroom,
  faWifi,
  faJugDetergent,
  faDumbbell,
  faSwimmingPool,
  faKitchenSet,
  faCar,
  faCampground,
  faUtensils,
  faShirt,
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";

export const amenitiesList = [
  "TV",
  "Kitchen",
  "Paid parking",
  "Air conditioning",
  "Washer",
  "Pool",
  "Buthub",
  "Grill",
  "Outdoor dining area",
  "First aid kit"
]

export const ROLES = {
  admin: 'admin',
  guest: 'guest',
}

export const GUEST_PAYMENT_TYPES = {
  online: 'online',
  offline: 'offline',
}

export const GUEST_NAVBAR_ITEMS = [
  { title: "Home", path: "/" },
  { title: "Rooms", path: "/roomsList" },
  { title: "Amenities", path: "/amenities" },
  { title: "Gallery", path: "/gallery" },
];

export const OFFERS_LIST = [
  { icon: faCheckCircle, text: "Free cancellation anytime" },
  { icon: faDoorOpen, text: "Free early check-in" },
  { icon: faClock, text: "Free late checkout" },
  { icon: faCashRegister, text: "No deposit required" },
  { icon: faBed, text: "After every five nights, one night is free" },
  { icon: faCoffee, text: "Free hot breakfast buffet" },
  { icon: faPercent, text: "10% discount on advance booking" },
  { icon: faCookieBite, text: "Fresh cookies in the evening" },
  { icon: faBriefcase, text: "24/7 Business Center Access" },
];

// IncludedWithStay
export const AMENITIES_LIST_INCLUDED_WITH_STAY = [
  { icon: faJugDetergent, label: "Guest Laundry" },
  { icon: faSwimmingPool, label: "Swimming Pool" },
  { icon: faLaptop, label: "Work space" },
  { icon: faBriefcase, label: "Business Center" },
  { icon: faBroom, label: "Daily housekeeping" },
  { icon: faTv, label: "Television" },
  { icon: faWind, label: "Air conditioning" },
  { icon: faWifi, label: "Free Wi-Fi" },
  { icon: faDumbbell, label: "Fitness Center" },
];

// AdditionalInformation
export const ADDITIONAL_INFORMATION_ACCORDION_DATA = [
  {
    title: "Additional Amenities",
    content: [
      "Complimentary coffee and tea supplies",
      "Mini refrigerator",
      "In-room safe",
      "Work desk with lamp",
      "Iron and ironing board",
      "Smoke detectors",
      "Sound system",
      "Stereo or radio available",
    ],
  },
  {
    title: "Accessible Guest Room Features",
    content: [
      "Wide doorways",
      "Accessible bathroom facilities",
      "Visual and audible alarms",
      "Accessible work desk",
      "Roll-in shower",
    ],
  },
  {
    title: "Available by Request",
    content: [
      "Extra pillows and blankets",
      "Baby crib",
      "Microwave",
      "Pet-friendly options",
      "Laundry service",
    ],
  },
];

// 
export const AMENITIES_LIST_INCLUDED_WITH_STAY_SEPERATE_PAGE_LIST = [
  { icon: faCoffee, label: "Coffee maker" },
  { icon: faJugDetergent, label: "Guest Laundry" },
  { icon: faLaptop, label: "Work space" },
  { icon: faConciergeBell, label: "24-hour Room Service" },
  { icon: faDumbbell, label: "Fitness Center" },
  { icon: faBroom, label: "Daily housekeeping" },
  { icon: faWind, label: "Air conditioning" },
  { icon: faWifi, label: "Free Wi-Fi" },
  { icon: faBriefcase, label: "Business Center" },
  { icon: faKitchenSet, label: "Kitchen" },
  { icon: faShirt, label: "Washer" },
  { icon: faCar, label: "Free parking" },
  { icon: faTv, label: "Television" },
  { icon: faSwimmingPool, label: "Swimming Pool" },
  { icon: faCampground, label: "Camp fire" },
  { icon: faUtensils, label: "Outdoor dining area" },
];

// AT THIS HOTEL
export const AT_THIS_HOTE_ACCORDION_ITEMS = [
  {
    title: "Hotel Details",
    content: "Our hotel offers a luxurious experience with elegantly furnished rooms, modern amenities, and a breathtaking view of the city skyline. Guests can enjoy complimentary breakfast, 24-hour room service, and access to our rooftop terrace, which is perfect for relaxing in the evening. We prioritize customer service, ensuring that every stay is memorable.",
  },
  {
    title: "Fitness Center",
    content: "The fitness center is equipped with state-of-the-art exercise machines, free weights, and a variety of cardio equipment. Our facilities include personal training sessions and group classes, allowing guests to maintain their fitness routines during their stay. The gym is open 24/7, and fresh towels and water are provided for all guests.",
  },
  {
    title: "24/7 Guest Support",
    content: "Our dedicated support team is available around the clock to assist you with any needs or inquiries. Whether it's arranging transportation, booking reservations, or providing local recommendations, we're here to ensure your stay is smooth and enjoyable at any time, day or night.",
  },
  {
    title: "Parking and Transportation",
    content: "We provide complimentary on-site parking for all guests. For those who prefer public transportation, the hotel is conveniently located near major bus and train stations. Additionally, our concierge service can arrange shuttle services or car rentals to explore the city and surrounding areas.",
  },
  {
    title: "Pool",
    content: "Our outdoor pool is a perfect place to unwind. Surrounded by sun loungers and cabanas, guests can relax by the pool or take a refreshing dip. The pool area features a bar serving light snacks and drinks, creating an enjoyable atmosphere for guests to soak up the sun.",
  },
  {
    title: "Services",
    content: "We offer a range of services designed to make your stay comfortable and enjoyable, including laundry services, a 24-hour front desk, and concierge assistance to help with reservations and recommendations. Guests can also enjoy complimentary Wi-Fi throughout the hotel and business services, such as printing and copying.",
  },
];


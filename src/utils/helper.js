export const generateDates = (month, year) => {
  let days = [];
  console.log(month, year)
  const daysInMonth = new Date(year, month, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return days;
};

export const generateMonthNames = () => {
  const monthAbbreviations = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return monthAbbreviations;
};

export const getDayFromDateString = (dateString) => {
  const date = new Date(dateString);
  return date.getDate();
};

export const getDecadeRange = (year) => {
  const startYear = Math.floor(year / 10) * 10;
  const endYear = startYear + 9;
  
  let years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  
  return years;
}

export const bookingData = [
  {
    roomNumber: 101,
    bookings: [
      { name: "John Doe", checkin: "2024-10-02", checkout: "2024-10-05" },
      { name: "Jane Smith", checkin: "2024-10-07", checkout: "2024-10-11" },
      { name: "Chris Evans", checkin: "2024-10-13", checkout: "2024-10-16" },
      { name: "Emma Watson", checkin: "2024-10-19", checkout: "2024-10-23" },
      { name: "Mark Ruffalo", checkin: "2024-10-25", checkout: "2024-10-29" }
    ]
  },
  {
    roomNumber: 102,
    bookings: [
      { name: "Robert Downey", checkin: "2024-10-01", checkout: "2024-10-04" },
      { name: "Scarlett Johansson", checkin: "2024-10-06", checkout: "2024-10-09" },
      { name: "Chris Hemsworth", checkin: "2024-10-11", checkout: "2024-10-14" },
      { name: "Tom Hiddleston", checkin: "2024-10-16", checkout: "2024-10-20" },
      { name: "Benedict Cumberbatch", checkin: "2024-10-22", checkout: "2024-10-26" }
    ]
  },
  {
    roomNumber: 103,
    bookings: [
      { name: "Gal Gadot", checkin: "2024-10-03", checkout: "2024-10-07" },
      { name: "Jason Momoa", checkin: "2024-10-09", checkout: "2024-10-12" },
      { name: "Henry Cavill", checkin: "2024-10-14", checkout: "2024-10-18" },
      { name: "Ezra Miller", checkin: "2024-10-21", checkout: "2024-10-24" },
      { name: "Ray Fisher", checkin: "2024-10-26", checkout: "2024-10-30" }
    ]
  },
  {
    roomNumber: 104,
    bookings: [
      { name: "Tom Cruise", checkin: "2024-10-05", checkout: "2024-10-08" },
      { name: "Matt Damon", checkin: "2024-10-10", checkout: "2024-10-14" },
      { name: "Brad Pitt", checkin: "2024-10-16", checkout: "2024-10-20" },
      { name: "Leonardo DiCaprio", checkin: "2024-10-22", checkout: "2024-10-25" },
      { name: "Johnny Depp", checkin: "2024-10-27", checkout: "2024-10-30" }
    ]
  },
  {
    roomNumber: 105,
    bookings: [
      { name: "Dwayne Johnson", checkin: "2024-10-02", checkout: "2024-10-05" },
      { name: "Vin Diesel", checkin: "2024-10-07", checkout: "2024-10-11" },
      { name: "Michelle Rodriguez", checkin: "2024-10-13", checkout: "2024-10-16" },
      { name: "Jordana Brewster", checkin: "2024-10-18", checkout: "2024-10-22" },
      { name: "Tyrese Gibson", checkin: "2024-10-24", checkout: "2024-10-27" }
    ]
  }
];

export const generateDummyData = (year, month) => {
  const bookings = [];
  const guests = [
    "John Doe", "Jane Smith", "Chris Evans", "Emma Watson", "Mark Ruffalo",
    "Robert Downey", "Scarlett Johansson", "Chris Hemsworth", "Tom Hiddleston", "Benedict Cumberbatch",
    "Gal Gadot", "Jason Momoa", "Henry Cavill", "Ezra Miller", "Ray Fisher",
    "Tom Cruise", "Matt Damon", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp",
    "Dwayne Johnson", "Vin Diesel", "Michelle Rodriguez", "Jordana Brewster", "Tyrese Gibson"
  ];

  for (let roomNumber = 101; roomNumber <= 160; roomNumber++) {
    const bookingList = [];
    
    const checkinDay1 = Math.floor(Math.random() * 25) + 1;
    const checkoutDay1 = checkinDay1 + 3;
    bookingList.push({
      name: guests[Math.floor(Math.random() * guests.length)],
      checkin: checkinDay1,
      checkout: checkoutDay1,
    });

    const checkinDay2 = checkinDay1 + 5;
    const checkoutDay2 = checkinDay2 + 4;
    bookingList.push({
      name: guests[Math.floor(Math.random() * guests.length)],
      checkin: checkinDay2,
      checkout: checkoutDay2,
    });

    bookingList.sort((a, b) => a.checkin - b.checkin);

    bookings.push({
      roomNumber,
      year,
      month,
      bookings: bookingList
    });
  }

  return bookings;
}

export const OCCUPANCY_STATUS = {
  ALL_STATUS: 'All Status',
  BOOKINGS: 'Bookings',
  CHECK_IN: 'Checked In / Out',
  CHECK_OUT: 'Checked Out',
  No_SHOW: 'No Show'
}

export const statusDetails = [
  {
    name: OCCUPANCY_STATUS.BOOKINGS,
    className: 'rounded-lg bg-blue-100 text-blue-400 p-2 me-2 text-sm',
    activeColor: 'border-2 border-blue-600 text-blue-800',
  },
  {
    name: OCCUPANCY_STATUS.CHECK_IN,
    className: 'rounded-lg bg-yellow-100 text-yellow-400 p-2 me-2 text-sm',
    activeColor: 'border-2 border-yellow-600 text-yellow-600',
  },
  {
    name: OCCUPANCY_STATUS.No_SHOW,
    className: 'rounded-lg bg-red-100 text-red-400 p-2 me-2 text-sm',
    activeColor: 'border-2 border-red-600 text-red-600',
  }
];

export const getRandomNumber = () => Math.floor(Math.random() * 5);

